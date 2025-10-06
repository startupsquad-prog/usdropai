"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlay, IconChevronRight, IconChevronLeft, IconFlame } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

interface ProductGalleryProps {
  images: string[];
  videoUrl?: string | null;
  productTitle: string;
  badges?: {
    trending?: boolean;
    verified?: boolean;
    highProfit?: boolean;
  };
  adStats?: {
    region: string;
    ctr: number;
    cpm: number;
  };
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  videoUrl,
  productTitle,
  badges = { trending: false, verified: false, highProfit: false },
  adStats,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${productTitle} - Image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <IconChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <IconChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}

        {/* Video Overlay */}
        {videoUrl && (
          <button
            onClick={() => setShowVideoModal(true)}
            className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium flex items-center gap-1"
          >
            <IconPlay className="w-3 h-3" />
            Ad
          </button>
        )}

        {/* Simple Badge - Only show if trending */}
        {badges.trending && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-[#1E40AF] text-white text-[10px] px-2 py-0.5 rounded-md">
              Trending
            </Badge>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-14 h-14 rounded overflow-hidden flex-shrink-0 border-2 ${
                currentIndex === index
                  ? "border-[#1E40AF]"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

