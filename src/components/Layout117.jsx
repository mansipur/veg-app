"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout117() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              The Power of Organic Farming
            </h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Organic farming enhances soil health and biodiversity. Our produce
              is fresher and packed with nutrients.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  80%
                </h3>
                <p>of consumers prefer organic over conventional produce.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  90%
                </h3>
                <p>of our vegetables are sourced from local farms.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="primary">Learn More</Button>
              <Button variant="secondary">Shop Now</Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
