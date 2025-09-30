import React from "react";
import { GrTechnology } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import CloudImage from "@/../public/cloud-hosting.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="justify-around md:flex lg:flex ">
        <div
          style={{ width: "500px" }}
          className="bg-gray-200 m-auto p-8 rounded-3xl "
        >
          <h1 className="text-5xl flex">
            Cloud <GrTechnology /> Hosting
          </h1>
          <div className="my-12">
            <p>The best web hosting solution for your online success</p>
            <div>
              <div className="flex">
                <TiTick /> Easy To Use Control Panel
              </div>
              <div className="flex">
                <TiTick /> Secure Hosting
              </div>
              <div className="flex">
                <TiTick /> Website Maintenance
              </div>
            </div>
          </div>
        </div>
        <div className="ccenter">
          <Image src={CloudImage} alt="cloud" width={500} height={500} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
