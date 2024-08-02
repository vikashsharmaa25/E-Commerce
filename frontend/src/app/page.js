import BrowseByCategory from "@/components/BrowseByCategory/BrowseByCategory";
import ExploreProducts from "@/components/ExploreProducts/ExploreProducts";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceFeatures from "@/components/ServiceFeatures/ServiceFeatures";
import React from "react";

function Page() {
  return (
    <div className="max-w-[1450px] px-6 mx-auto">
      <HeroSection />
      <FeaturedProduct />
      <BrowseByCategory />
      <ExploreProducts />
      <ServiceFeatures />
    </div>
  );
}

export default Page;
