import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/mongodb";
import Post from "../../../../../models/Post";
import { cloudinary } from "../../../../../lib/cloudinary";


export async function GET(req: Request, context: {params: Promise<{slug:string}>}){
    try {
        const { slug } = await context.params;
        await connectDB();
        const post = await Post.findOne({ slug }).lean();
        if(!post) return NextResponse.json({ ok:false, error:'not found'},{status:404});
        return NextResponse.json( {ok:true, data:post})
    } catch (err) {
        console.error(err);
        return NextResponse.json({ ok:false, error:'failed get data'}, {status:500})
    }
}

export async function PATCH(req:Request, context : {params : Promise<{slug:string}>}){
 try {
    const {slug}= await context.params;
    const contentType = req.headers.get("content-type");
    await connectDB();

    let updates: Record<string, unknown> = {};

    if( contentType?.includes('multipart/form-data')){
        const formData = await req.formData();
        updates.title = formData.get('title');
        updates.slug = formData.get('slug');
        updates.body = formData.get('body');
        updates.author = formData.get('author');
        updates.published = formData.get('published') == 'true';

        const file = formData.get('gambar') as File;
        if(file && file.name) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const result = await new Promise((resolve, reject)=>{
                cloudinary.uploader
                .upload_stream({ folder:"posts" }, (error, result)=>{
                    if(error) reject(error);
                    else resolve(result);
                })
                .end(buffer);
            });

            updates.gambar = (
                result as { secure_url: string }
            ).secure_url;
        }
    } else if(contentType?.includes("application/json")){
        updates = await req.json();
    } else {
        return NextResponse.json({ ok:false, error:"unsupported content type"}, { status:400 });
    }

    if(updates.published && !updates.publishedAt){
        updates.publishedAt = new Date();
    }

    const post = await Post.findOneAndUpdate({ slug }, updates, { new:true});

    if(!post){
        return NextResponse.json({ ok:false, error:"post not found"}, { status:404 })
    }

    return NextResponse.json({ ok:true, data:post });

 } catch (err) {
    console.error(err);
    return NextResponse.json({ ok:false, error:'failed to update'}, {status:500});    
 }
}

export async function DELETE(req:Request, context: {params: Promise<{slug:string}>}){
    try {
        const {slug} = await context.params;
        await connectDB();
        const deleted = await Post.findOneAndDelete({slug});
        if(!deleted) return NextResponse.json({ ok:false, error:'not found'}, {status:404});
        return NextResponse.json({ok:true, data:deleted});
    } catch (err) {
        console.error(err);
        return NextResponse.json({ok:false, error:'failed to delete'}, {status:500});
    }
}