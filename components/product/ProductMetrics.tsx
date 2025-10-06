"use client";

import React from "react";
import { IconMoney, IconTrendingUp, IconActivity, IconTarget } from "@/components/ui/icons";

interface ProductMetricsProps {
  buyPrice: number;
  sellPrice: number;
  profitPerSale: number;
  dropScore: number;
}

export const ProductMetrics: React.FC<ProductMetricsProps> = ({
  buyPrice,
  sellPrice,
  profitPerSale,
  dropScore,
}) => {
  const metrics = [
    {
      label: "Buy Price",
      value: `$${buyPrice.toFixed(2)}`,
      icon: IconMoney,
      color: "from-gray-500 to-gray-600",
      tooltip: "Cost from supplier",
    },
    {
      label: "Sell Price",
      value: `$${sellPrice.toFixed(2)}`,
      icon: IconTrendingUp,
      color: "from-blue-500 to-indigo-500",
      tooltip: "Recommended selling price",
    },
    {
      label: "Profit per Sale",
      value: `$${profitPerSale.toFixed(2)}`,
      icon: IconActivity,
      color: "from-green-500 to-emerald-500",
      tooltip: "Estimated profit after fees",
      highlight: true,
    },
    {
      label: "DropAI Score",
      value: dropScore.toFixed(1),
      icon: IconTarget,
      color: "from-purple-500 to-pink-500",
      tooltip: "AI-powered product rating (0-10)",
      isScore: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={index}
            className={`relative bg-white rounded-lg p-3 border border-gray-200 ${
              metric.highlight ? "border-green-500" : ""
            }`}
          >
            {/* Label */}
            <div className="text-[10px] font-medium text-gray-500 mb-1">{metric.label}</div>

            {/* Value */}
            <div
              className={`text-xl font-bold ${
                metric.highlight ? "text-green-600" : "text-gray-900"
              }`}
            >
              {metric.value}
            </div>

            {/* DropAI Score Circle (Simplified) */}
            {metric.isScore && (
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#1E40AF] flex items-center justify-center">
                <span className="text-xs font-bold text-white">{dropScore.toFixed(1)}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

