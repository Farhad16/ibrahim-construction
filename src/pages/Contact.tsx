import React from "react";
import { visitingCards } from "../constance/people";
import Card from "../components/contact/Card";
import Communication from "../components/contact/Communication";
import EmailSection from "../components/contact/EmailSection";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(44, 5, 184, 0.6)), url('/assets/slide-img1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
        className="flex min-h-[300px] sm:min-h-[400px] justify-center items-center text-white font-bold"
      >
        <h1 className="text-4xl sm:text-5xl">Contact With Us</h1>
      </div>

      <Communication />

      <div className="flex flex-col py-[60px] sm:py-[100px] bg-slate-50">
        <div className="px-8 sm:px-16">
          <h2 className="font-bold text-2xl sm:text-4xl capitalize text-global leading-[80%]">
            Management Contacts
          </h2>
          <div className="divider my-[30px]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-8 sm:px-16">
          {visitingCards.map((card, index) => (
            <Card key={card.name} {...card} idx={index} />
          ))}
        </div>
      </div>

      <div className="py-[60px] sm:py-[100px] px-8 sm:px-16">
        <EmailSection />
      </div>
    </div>
  );
};

export default Contact;
