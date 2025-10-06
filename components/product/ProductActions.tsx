"use client";

import React from "react";
import Image from "next/image";

interface ProductActionsProps {
  supplierUrl?: string | null;
  amazonUrl?: string | null;
  facebookAdsUrl?: string | null;
  supplierSource?: string;
}

export const ProductActions: React.FC<ProductActionsProps> = ({
  supplierUrl,
  amazonUrl,
  facebookAdsUrl,
  supplierSource = "aliexpress",
}) => {
  return (
    <div className="space-y-3">
      {/* Shopify Import Button */}
      <a
        href="#"
        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border-2 border-green-600 rounded-lg text-black font-semibold text-sm hover:bg-green-50 transition-colors"
      >
        <Image
          src="/logos/shopify.svg"
          alt="Shopify"
          width={20}
          height={20}
        />
        Import to Shopify
      </a>
      {/* Platform Links */}
      <div className="grid grid-cols-2 gap-2">
        {/* AliExpress */}
        {supplierUrl && supplierSource === "aliexpress" && (
          <a
            href={supplierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:border-[#1E40AF] transition-colors"
          >
            <Image
              src="/logos/aliexpress.svg"
              alt="AliExpress"
              width={16}
              height={16}
            />
            AliExpress
          </a>
        )}

        {/* Amazon */}
        {amazonUrl && (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:border-[#1E40AF] transition-colors"
          >
            <Image
              src="/logos/amazon.svg"
              alt="Amazon"
              width={16}
              height={16}
            />
            Amazon
          </a>
        )}

        {/* Facebook Ads */}
        {facebookAdsUrl && (
          <a
            href={facebookAdsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:border-[#1E40AF] transition-colors"
          >
            <Image
              src="/logos/facebook.svg"
              alt="Facebook"
              width={16}
              height={16}
            />
            Ads
          </a>
        )}
      </div>
    </div>
  );
};

