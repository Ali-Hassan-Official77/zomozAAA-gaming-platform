import {NextResponse} from "next/server";
export const runtime = 'edge';
import {rawgFetch} from "@/lib/rawg";export async function GET(){try{return NextResponse.json(await rawgFetch("/genres",{page_size:40}));}catch(err){return NextResponse.json({error:err.message},{status:500})}}