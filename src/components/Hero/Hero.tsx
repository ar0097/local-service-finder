import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import {
  LuCamera,
  LuHammer,
  LuHouse,
  LuPaintbrush,
  LuScissors,
  LuZap,
} from "react-icons/lu";
import { SlWrench } from "react-icons/sl";

function Hero() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0f172a0d] to-[#f1f5f90d]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Local Service Professionals
          </h1>
          <p className="text-xl text-[#64748b] mb-8 max-w-2xl mx-auto">
            Connect with trusted, verified professionals in your area. From
            plumbing to painting, find the perfect expert for any job.
          </p>
        </div>
      </section>
      <section className="py-12 bg-[#f1f5f980]">
        <div className="container mx-auto px-4">
          {/*  */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Popular Services</h2>
            <p className="text-[#64748b]">
              Find the perfect professional for your needs
            </p>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {/*  */}
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <SlWrench size={32} className="mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium">Plumber</p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LuZap size={32} className="mx-auto mb-2 text-yellow-600" />
                <p className="text-sm font-medium">Electrician</p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LuHammer size={32} className="mx-auto mb-2 text-orange-600" />
                <p className="text-sm font-medium">Handyman</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LuPaintbrush
                  size={32}
                  className="mx-auto mb-2 text-green-600"
                />
                <p className="text-sm font-medium">Painter</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LiaCarSideSolid
                  size={32}
                  className="mx-auto mb-2 text-red-600"
                />
                <p className="text-sm font-medium">Mechanic</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LuHouse size={32} className="mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-medium">Cleaner</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LuScissors size={32} className="mx-auto mb-2 text-pink-600" />
                <p className="text-sm font-medium">Hairdresser</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e2e8f0] text-[#020817] shadow-sm cursor-pointer hover:shadow-md transition-shadow bg-white">
              <div className="p-4 text-center">
                <LuCamera size={32} className="mx-auto mb-2 text-indigo-600" />
                <p className="text-sm font-medium">Photographer</p>
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
}

export default Hero;
