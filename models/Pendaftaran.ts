import mongoose, {Schema, Document, Model } from "mongoose";

export interface IPendaftaran extends Document {
    nama: String,
    alamat: String,
    tanggalLahir: Date,
    jenisKelamin: String,
    noWhatsapp: String,
    kelas: String,
}

const pendaftaranSchema = new Schema<IPendaftaran>({
    nama: {type:String, required:true},
    alamat: {type:String, required:true},
    tanggalLahir: {type:Date, required:true},
    jenisKelamin: {type:String, required:true},
    noWhatsapp: {type:String, required:true},
    kelas: {type:String, required:true}
},
 {timestamps:true}
);

const Pendaftaran : Model<IPendaftaran> = (mongoose.models.pendaftaran as Model<IPendaftaran> || mongoose.model<IPendaftaran>("pendaftaran", pendaftaranSchema));

export default Pendaftaran;