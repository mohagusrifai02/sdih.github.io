import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Pendaftaran from "../../../../models/Pendaftaran";

export async function GET() {
    await connectDB();
    try {
        const data = await Pendaftaran.find().sort({ createdAt: -1 }).lean();

        return NextResponse.json({
            ok:true,
            data 
        });
    } catch {
        return NextResponse.json({
            ok:false,
            error: "Failed to fetch data"
        });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const pendaftaran = await Pendaftaran.create({
            nama: body.nama,
            alamat: body.alamat,
            tanggalLahir: body.tanggalLahir,
            jenisKelamin: body.jenisKelamin,
            noWhatsapp: body.noWhatsapp,
            kelas: body.kelas
        });

        return NextResponse.json({
            ok:true,
            data: pendaftaran
        });
    } catch {
        return NextResponse.json({
            ok:false,
            error:"Failed to create pendaftaran"
        })
    }
}