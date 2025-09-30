import React from "react";
import WebHostingPlan from "@/components/Home/WebHostingPlan";
import { Plan } from "@/utils/types";

const arr: Plan[] = [
  { status: "Free", price: 0 },
  {
    status: "Plus",
    price: 4.99,
  },
  { status: "Pro", price: 9.99 },
];

const Plans = () => {
  return (
    <div className="justify-around md:flex-none lg:flex-nowrap m-2">
      {" "}
      <div className="flex gap-2.5">
        {arr.map((e, index) => (
          <WebHostingPlan key={index} status={e.status} price={e.price} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
