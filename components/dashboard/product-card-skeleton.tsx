import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card className="w-full rounded-2xl shadow-sm border-2 border-gray-200 bg-white overflow-hidden">
      {/* Image Skeleton - Smaller */}
      <Skeleton className="w-full h-36 rounded-none" />

      <CardContent className="p-2.5 space-y-1.5">
        {/* Title Skeleton */}
        <div className="space-y-1.5 mb-1.5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Glass Orders Pill Skeleton - Smaller */}
        <Skeleton className="h-8 w-full rounded-full opacity-60" />

        {/* Chart Skeleton - No margin */}
        <Skeleton className="h-16 w-full rounded" />

        {/* Buy & Sell Price Skeleton - Tighter */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-gray-50 rounded px-2 py-1.5 border border-gray-200 space-y-0.5">
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="bg-gray-50 rounded px-2 py-1.5 border border-gray-200 space-y-0.5">
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>

        {/* Profit Skeleton - Compact */}
        <div className="bg-green-50 border border-green-200 rounded px-2.5 py-1.5">
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>

      <CardFooter className="px-2.5 pb-2.5 pt-0">
        <Skeleton className="w-full h-9 rounded-lg" />
      </CardFooter>
    </Card>
  );
}

