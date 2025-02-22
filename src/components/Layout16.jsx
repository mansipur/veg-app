"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import image1 from "../assets/health-benefits.jpeg";

export function Layout16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1575467678950-0c09aad418af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-cover"
              alt="Relume placeholder"
            />
          </div>
          <div>
            <p className="mb-3 font-semibold md:mb-4">Nourish</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unleash the Benefits of Organic Vegetables
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Organic vegetables are packed with essential nutrients and
              antioxidants that promote overall health. By choosing organic, you
              support sustainable farming practices and enjoy fresher produce
              free from harmful chemicals.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Boost your immune system with organic nutrition.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>
                  Enjoy better taste and quality with organic choices.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Support local farmers and sustainable agriculture.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Shop"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Shop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
