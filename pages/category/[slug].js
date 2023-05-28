import React from "react";

//loacl imports
import Wrapper from "./../../components/Wrapper";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        {/* heading and paragaph start */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            Running Shoes
          </div>
          {/*<div className='text-md md:text-xl'>
              A lightweight Nike ZoomX midsole is combined with increased stack
              heights to help provide cushioning during extended stretches of
              running.
            </div>*/}
        </div>
        {/* heading and paragaph end */}

        {/* products grid starts */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* products grid ends */}
      </Wrapper>
    </div>
  );
};

export default Category;
