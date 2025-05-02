import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col space-y-3 p-4 md:p-8">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
       <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
         <Skeleton className="h-32 w-full" />
         <Skeleton className="h-32 w-full" />
         <Skeleton className="h-32 w-full" />
       </div>
    </div>
  )
}