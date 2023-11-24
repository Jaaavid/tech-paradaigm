import React from "react";
import "./Brand.scss";
import Button from "./Button/Button";
import Image from "next/image";
import Rating from "@mui/material/Rating";

const HotelCard = ({ item }: any) => {
  const { title, image, text, link } = item;
  return (
    <div className="flex flex-col justify-around lg:flex-row items-center mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 py-4">
      <div className="w-[200px] h-[100px]">
        <Image
          src={image}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt=""
        />
      </div>

      <div className="lg:max-w-screen-sm lg:w-1/2 p-4">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className=" lg:truncate ...">{text}</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <Button url={link} />
        <Rating name="size-large" defaultValue={5} size="large" />
      </div>
    </div>
  );
};

export default HotelCard;
