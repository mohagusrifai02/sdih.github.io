import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Post from "../../../../models/Post";
import { cloudinary } from "../../../../lib/cloudinary";

interface PostFilter {
  tags?: string;
  published?: boolean;
}

interface MongoError {
  code?: number;
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const tag = searchParams.get("tag");
    const publishedOnly = searchParams.get("publish") === "true";

    const filter: PostFilter = {};
    if (tag) filter.tags = tag;
    if (publishedOnly) filter.published = true;

    const posts = await Post.find(filter)
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(50)
      .lean();

    return NextResponse.json({ ok: true, data: posts });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try{
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const body = formData.get("body") as string;
    const author = formData.get("author") as string;
    const published = formData.get("published") === "true";
    const file = formData.get("gambar") as File;

    if(!title || !slug || !body){
      return NextResponse.json(
        {
          ok:false,
          error:"Title, Slug, and Body are required"
        },
        {status:400}
      )
    }

    await connectDB();

    let imagePath: string | null = null;
    if(file && file.name){
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

      imagePath = (result as { secure_url: string }).secure_url;
    }

    const postData = {
      title,
      slug,
      body,
      author,
      published,
      gambar: imagePath,
      publishedAt: published ? new Date() : null
    };

    const newPost = new Post(postData);
    await newPost.save();

    return NextResponse.json({ok:true, data:newPost}, {status:201});
  } catch (err: unknown) {
    console.error(err);
    const mongoErr = err as MongoError;
    const message =
      mongoErr.code === 11000
        ? "Slug already exists"
        : "failed to create post";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}