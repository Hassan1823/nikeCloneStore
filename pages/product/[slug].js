import React from "react";
//import ReactMarkdown from "react-markdown";
import { IoMdHeartEmpty } from "react-icons/io";

//local imports
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousal from "@/components/ProductDetailsCarousal";
import RelatedProducts from "@/components/RelatedProducts";
const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          {/* left column start */}

          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousal />
          </div>

          {/* left column end */}

          {/* Right column start */}

          <div className='flex-[1] py-3'>
            {/* PRODUCT TITLE */}
            <div className='text-[34px] font-semibold mb-2 leading-tight'>
              Jorden Retro 6 G
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className='flex items-center'>USD : $19 695.00</div>

            <div className='text-md font-medium text-black/[0.5]'>
              incl. of taxes
            </div>

            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {`(Also includes all applicable duties)`}
            </div>

            {/* product size range start */}
            <div className='mb-10'>
              {/* HEADING START */}
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>Select Size</div>
                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* size selection start */}
              <div id='sizesGrid' className='grid grid-cols-3 gap-2'>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 6
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 6.5
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 7
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 7.5
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 8
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 8.5
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 9
                </div>
                <div
                  className='border rounded-md text-center py-3 font-medium
                hover:border-black/[0.7] cursor-pointer'>
                  UK 9.5
                </div>
                <div
                  className='border rounded-md text-center
                  cursor-not-allowed py-3 font-medium
                bg-black/[0.1] opacity-50'>
                  UK 10
                </div>
                <div
                  className='border rounded-md text-center
                  cursor-not-allowed py-3 font-medium
                bg-black/[0.1] opacity-50'>
                  UK 10.5
                </div>
                <div
                  className='border rounded-md text-center
                  cursor-not-allowed py-3 font-medium
                bg-black/[0.1] opacity-50'>
                  UK 11
                </div>
              </div>

              {/* size selection end */}

              {/* show error start */}

              <div className='text-red-600 mt-1'>
                Size selection is required
              </div>
              {/* show error end*/}
            </div>

            {/* product size range end */}

            {/* add to cart button start */}
            <button
              className='w-full py-4 rounded-full bg-black
             text-white text-lg font-medium transition-transform
              active:scale-95 mb-3 hover:opacity-75'>
              Add to Cart
            </button>
            {/* add to cart button end */}

            {/* WHISHLIST BUTTON START */}
            <button
              className='w-full py-4 rounded-full border
              border-black text-lg font-medium transition-transform
              active:scale-95 flex items-center justify-center
              gap-2 hover:opacity-75 mb-10'>
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON end */}

            {/* product details start */}
            <div>
              <div className='text-lg font-bold mb-5'>Product Details</div>
              <div className='markdown text-md mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                quasi fuga provident cum rem perspiciatis. Corporis nesciunt
                quisquam porro ab debitis dignissimos architecto, quidem nulla
                corrupti tempora nemo quas repellendus in id aperiam laudantium
                quod distinctio, et natus, explicabo consectetur neque deserunt
                fuga. Eveniet animi dolore praesentium repellat similique alias?
              </div>
              <div className='markdown text-md mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                quasi fuga provident cum rem perspiciatis. Corporis nesciunt
                quisquam porro ab debitis dignissimos architecto, quidem nulla
                corrupti tempora nemo quas repellendus in id aperiam laudantium
                quod distinctio, et natus, explicabo consectetur neque deserunt
                fuga. Eveniet animi dolore praesentium repellat similique alias?
              </div>
            </div>
            {/* product details ends */}
          </div>
          {/* Right column end */}
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
