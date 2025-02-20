"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h2>
          <p className="md:text-md">
            Join us today and enjoy the freshest organic vegetables delivered to
            your door.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Quality Organic Produce
                </h3>
                <p>
                  Our vegetables are sourced from trusted farms, ensuring
                  freshness and quality in every bite.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Flexible Delivery Options
                </h3>
                <p>
                  Choose a delivery schedule that fits your lifestyle and enjoy
                  convenience at its best.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Satisfaction Guaranteed
                </h3>
                <p>
                  We stand by our products, offering a money-back guarantee if
                  you're not completely satisfied.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-bold md:text-2xl">
                    Basic Plan
                  </h4>
                  <p>Eat fresh, live healthy!</p>
                </div>
                <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
                  $19/mo
                </h5>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes:</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Access to all vegetables</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Weekly fresh deliveries</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Customer support service</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>All Basic Plan features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority customer support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Exclusive member discounts</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Monthly recipe guides</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Seasonal produce highlights</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>All Basic Plan features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Weekly fresh deliveries</p>
                </div>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
