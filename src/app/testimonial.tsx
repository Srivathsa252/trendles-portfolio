"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section id = "asd" className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            suppressHydrationWarning={false}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Why VOTE for me?
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Your vote for me is a vote for a dedicated advocate who will tirelessly work to enhance our student experience and make our campus culture truly unforgettable. With your support, I aim to instigate a dynamic and inclusive community that we can all be proud to belong to.
          </Typography>
        </div>
        <Card
          color="transparent"
          shadow={false}
          className="py-8 lg:flex-row"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CardBody
            className="w-full lg:gap-10 h-full lg:!flex justify-between "
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <div className="w-full mb-10 lg:mb-0">
              
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
