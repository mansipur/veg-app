"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="max-h-14"
            />
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            "The quality of the organic vegetables from Organic Bloom is
            unmatched! I feel great knowing I'm feeding my family the best
            produce available."
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Testimonial avatar"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold">Emilet Johnson</p>
            <p>Home Chef, Blogger</p>
          </div>
        </div>
      </div>
    </section>
  );
}
