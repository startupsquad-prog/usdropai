"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconTrendingUp, IconMoney, IconFlame, IconActivity, IconPercent } from "@/components/ui/icons";

interface ProductInsightsStripProps {
  trendStatus: string;
  profitPotential: number;
  adCampaignsActive: number;
  suggestedMargin: number;
}

export const ProductInsightsStrip: React.FC<ProductInsightsStripProps> = ({
  trendStatus,
  profitPotential,
  adCampaignsActive,
  suggestedMargin,
}) => {
  const insights = [
    {
      icon: IconTrendingUp,
      label: getTrendLabel(trendStatus),
      color: getTrendColor(trendStatus),
    },
    {
      icon: IconMoney,
      label: `Profit Potential $${profitPotential.toFixed(2)}`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: IconFlame,
      label: `${adCampaignsActive} Ad Campaigns Active`,
      color: "from-orange-500 to-red-500",
    },
    {
      icon: IconPercent,
      label: `Suggested Margin +${suggestedMargin}%`,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <IconActivity className="w-5 h-5 text-[#1E40AF]" />
        <h3 className="text-sm font-semibold text-gray-900">DropAI Predictive Summary</h3>
      </div>

      {/* Horizontal Scrollable Pills */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
      >
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r ${insight.color} text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow cursor-default`}
            >
              <Icon className="w-4 h-4" />
              <span className="whitespace-nowrap">{insight.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

// Helper functions
function getTrendLabel(status: string): string {
  const labels: { [key: string]: string } = {
    stable: "Trending Stable",
    rising: "Trending Up",
    hot: "Trending Hot",
    declining: "Declining",
  };
  return labels[status] || "Trending Stable";
}

function getTrendColor(status: string): string {
  const colors: { [key: string]: string } = {
    stable: "from-blue-500 to-indigo-500",
    rising: "from-green-500 to-emerald-500",
    hot: "from-orange-500 to-red-500",
    declining: "from-gray-500 to-gray-600",
  };
  return colors[status] || "from-blue-500 to-indigo-500";
}

