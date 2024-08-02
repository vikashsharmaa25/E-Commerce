"use client";

import React, { useState } from "react";
import BrowseByCategory from "@/components/BrowseByCategory/BrowseByCategory";
import ExploreProducts from "@/components/ExploreProducts/ExploreProducts";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceFeatures from "@/components/ServiceFeatures/ServiceFeatures";

function Page() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="max-w-[1450px] px-6 mx-auto">
      <HeroSection />
      <FeaturedProduct />
      <BrowseByCategory
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ExploreProducts selectedCategory={selectedCategory} />
      <ServiceFeatures />
    </div>
  );
}

export default Page;
