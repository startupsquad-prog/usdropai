import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconTrendingUp, IconCart, IconArrowRight } from "@/components/ui/icons";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Counter animation hook - triggers once on mount
const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, []); // Empty dependency array - only runs once on mount

  return count;
};

interface ProductAnalyticsCardProps {
  id: string;
  imageUrl: string;
  productTitle: string;
  ordersThisMonth: number;
  totalOrders: number;
  buyPrice: number;
  sellPrice: number;
  profitMargin: number;
  marginPercentage: number;
  aliScore: number;
  competitionScore: number;
  chartData?: Array<{
    day: string;
    orders: number;
  }>;
  topCountry?: {
    flag: string;
    name: string;
  };
}

const ProductAnalyticsCard: React.FC<ProductAnalyticsCardProps> = ({
  id,
  imageUrl,
  productTitle,
  ordersThisMonth,
  totalOrders,
  buyPrice,
  sellPrice,
  profitMargin,
  marginPercentage,
  aliScore,
  competitionScore,
  chartData = [],
  topCountry = { flag: "🌎", name: "WW" },
}) => {
  // Only animate Orders This Month - once on page load
  const ordersMonthCount = useCountUp(ordersThisMonth, 1200);

  return (
    <Card className="group w-full rounded-2xl shadow-sm border-2 border-gray-200 bg-white hover:border-[#1E40AF] transition-colors duration-200 overflow-hidden">
      {/* Compact Product Image */}
      <div className="relative w-full h-36 overflow-hidden bg-gray-50">
        <img
          src={imageUrl}
          alt={productTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
          <Badge className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-xs font-bold px-2 py-1 border-0 shadow-md">
            +{ordersThisMonth.toLocaleString()}
          </Badge>
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
            <span className="text-sm">{topCountry.flag}</span>
            <span className="text-xs font-semibold text-gray-900">{topCountry.name}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-2.5 space-y-1.5">
        {/* Product Title */}
        <h3 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2 h-9 mb-1.5">
          {productTitle}
        </h3>

        {/* Line 1: Orders This Month - Glass Pill */}
        <div 
          className="relative overflow-hidden rounded-full px-2.5 py-1.5 w-full backdrop-blur-sm bg-white/40 border border-white/60 shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/10 to-[#3B82F6]/10"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <IconCart className="w-3.5 h-3.5 text-[#1E40AF]" />
              <span className="text-xs font-semibold text-gray-700">Orders This Month</span>
            </div>
            <span className="text-sm font-bold text-[#1E40AF]">
              {ordersMonthCount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Chart - No margin below */}
        <div className="h-16 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={false} />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="orders"
                stroke="#1E40AF"
                strokeWidth={2}
                fill="#3B82F6"
                fillOpacity={0.15}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Line 2: Buy & Sell Price - No top margin */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-gray-50 rounded px-2 py-1.5 border border-gray-200">
            <div className="text-[9px] text-gray-500 font-medium mb-0.5">Buy Price</div>
            <div className="text-sm font-bold text-gray-900">${buyPrice.toFixed(2)}</div>
          </div>
          <div className="bg-gray-50 rounded px-2 py-1.5 border border-gray-200">
            <div className="text-[9px] text-gray-500 font-medium mb-0.5">Sell Price</div>
            <div className="text-sm font-bold text-gray-900">${sellPrice.toFixed(2)}</div>
          </div>
        </div>

        {/* Line 3: Profit Per Order - Compact */}
        <div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded px-2.5 py-1.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-green-700">Profit Per Order</span>
            <div className="text-right">
              <div className="text-base font-bold text-green-900">
                ${profitMargin.toFixed(2)}
              </div>
              <div className="text-[9px] text-green-600 font-medium">
                +{Math.floor(marginPercentage)}% Margin
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-2.5 pb-2.5 pt-0">
        <Link href={`/dashboard/ai-discovery/${id}`} className="w-full">
          <button className="group/btn w-full py-2 rounded-lg bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-sm font-semibold border-2 border-transparent hover:from-white hover:to-white hover:text-[#1E40AF] hover:border-[#1E40AF] transition-all duration-300 flex items-center justify-center gap-2">
            <span>View Product</span>
            <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductAnalyticsCard;

