"use client"

import { useEffect, useState } from "react";


const formater = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "IDR",
});

interface CurrencyProps{
    value? : string | number 
}

const Currency:React.FC <CurrencyProps> = ({value}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted) return null
  return <div className="font-semibold ">
    {formater.format(Number(value))}
  </div>;
};

export default Currency;
