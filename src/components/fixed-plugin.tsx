"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a
      href="https://www.instagram.com/srivathsa.ik/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          src="https://ik.imagekit.io/vqkxliqdl/lax.png?updatedAt=1723750650634"
          alt="Suggestions/Queries Icon"
          width={24}
          height={24}
        />
        For suggestions/queries!!      
      </Button>
    </a>
  );
}
