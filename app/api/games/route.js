import {NextResponse} from "next/server";
export const runtime = 'edge';
import {rawgFetch} from "@/lib/rawg";
export async function GET(request){const p=new URL(request.url).searchParams;try{return NextResponse.json(await rawgFetch("/games",{search:p.get("search")||undefined,genres:p.get("genres")||undefined,platforms:p.get("platforms")||undefined,ordering:p.get("ordering")||"-added",page:p.get("page")||1,page_size:p.get("page_size")||20}));}catch(err){return NextResponse.json({error:err.message},{status:500})}}
