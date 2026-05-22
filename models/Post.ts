import mongoose, { Schema, Document, Model} from "mongoose";

export interface IPost extends Document {
    title: String,
    slug: String,
    body: String,
    author: String,
    published: boolean,
    publishedAt: Date | null,
    createdAt: Date,
    gambar?: String
}

const postSchema = new Schema<IPost>({
    title: {type:String, required:true},
    slug:{type:String, required:true, unique:true, index:true},
    body:{type:String, required:true},
    author:{type:String},
    published:{type:Boolean, default:false},
    publishedAt:{type:Date, default:null},
    gambar:{type:String}
},
    {timestamps:true}
)

const Post : Model<IPost> = (mongoose.models.Post as Model<IPost> || mongoose.model<IPost>("Post", postSchema));

export default Post;