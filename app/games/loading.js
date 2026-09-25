import LoadingSkeleton from "@/components/LoadingSkeleton";
export const runtime = 'edge';
export default function Loading(){return <div className="content-shell loading-page"><div className="loading-heading"><span/><b/><i/></div><LoadingSkeleton count={12}/></div>}