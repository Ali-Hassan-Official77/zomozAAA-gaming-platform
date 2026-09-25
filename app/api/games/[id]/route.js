import {NextResponse} from "next/server";
export const runtime = 'edge';
import {rawgFetch} from "@/lib/rawg";
export async function GET(_request,{params}){try{return NextResponse.json(await rawgFetch(`/games/${params.id}`));}catch(err){return NextResponse.json({error:err.message},{status:500})}}
