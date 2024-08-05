"use client";

import { Product } from "@/type";
import Currency from "./currency";
import { Button } from "./button";
import { MessageCircleIcon } from "lucide-react";
import Link from "next/link";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const URL = `${window.location.origin}/product/${data.id}`;
  const telpon = process.env.NEXT_PUBLIC_TELP;
  const pesan = `Hallo saya ingin membeli ${data.name} - dengan harga ${data.price} dengan link ${URL}`;
  const link = `https://wa.me/${telpon}?text=${pesan}`;
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900 ">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="mt-10 flex items-center gap-x-3">
        <Link href={link} target="_blank">
          <Button className="flex items-center gap-x-2">
            Chat Penjual
            <MessageCircleIcon size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
