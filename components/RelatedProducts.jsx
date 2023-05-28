import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//local imports
import ProductCard from "@/components/ProductCard";

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
      <div className='text-2xl font-bold mb-5'>You Might Also Like</div>
      <Carousel
        responsive={responsive}
        //autoPlay={true}
        //autoPlaySpeed={3500}
        //infinite={true}
        containerClass='-mx-[10px]'
        itemClass='px-[10px]'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
      ;
    </div>
  );
};

export default RelatedProducts;
