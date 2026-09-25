import {NextResponse} from "next/server";import {rawgFetch} from "@/lib/rawg";
export async function GET(_request,{params}){try{const data=await rawgFetch(`/games/${params.id}/screenshots`,{page_size:20});return NextResponse.json(data);}catch(err){return NextResponse.json({error:err.message},{status:500})}}
