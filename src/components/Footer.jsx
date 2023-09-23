import { Accordion, Input } from "@chakra-ui/react";
import React from "react";

import {
  AiOutlineCreditCard,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import AccordionChakra from "./Accordion";

const deskripsi = [
  {
    title: "ABOUT",

    children: [
      {
        title: "Our Purpose",
        link: "/our-purpose",
      },
      {
        title: "Careers",
        link: "/careers",
      },
      {
        title: "Affiliates",
        link: "/affiliates",
      },
      {
        title: "Press",
        link: "/press",
      },
      {
        title: "Stores",
        link: "/stores",
      },
    ],
  },
  {
    title: "CUSTOMER SERVICE",

    children: [
      {
        title: "Help",
        link: "/help",
      },
      {
        title: "Shipping",
        link: "/shipping",
      },
      {
        title: "Returns",
        link: "/returns",
      },
      {
        title: "Payments",
        link: "/payments",
      },
      {
        title: "Your Order",
        link: "/your-order",
      },
    ],
  },
  {
    title: "CONTACT US",

    children: [
      {
        title: "+1 (202) 769-2427",
      },
      {
        title: "Email us",
      },
    ],
  },
];

function Footer() {
  return (
    <>
      <div className="bg-[#fafafa] border mt-24 md:px-0 px-4">
        <div className="flex md:flex-nowrap flex-wrap flex-row w-full  max-w-[1200px] mx-auto pl-6 pb-6 pt-8">
          <div className="flex flex-row  items-center w-full">
            <div className="flex flex-col md:gap-0 gap-3 md:text-start text-center mb-4">
              <h1 className="text-2xl font-semibold">
                SIGN UP TO THE END. MENSWEAR MAILING LIST
              </h1>
              <span className="w-80 md:mx-0 mx-auto py-2 leading-5">
                Sign up for exclusive early sale access and tailored new
                arrivals
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center md:w-1/2 w-full">
            <div className="flex flex-col w-full md:gap-0 gap-3">
              <span className="font-semibold">EMAIL ADDRESS</span>
              <div className="flex flex-col md:flex-row w-full gap-6">
                <Input
                  variant="flushed"
                  _focus={{ borderBottomColor: "blackAlpha.400" }}
                  type="email"
                  w={["100%", "60%"]}
                />
                <button className="bg-black text-white px-6 py-2 rounded-sm">
                  SIGN UP
                </button>
              </div>
              <div className="flex flex-row items-center justify-center md:justify-start gap-2 mt-5">
                <AiOutlineInstagram size={20} />
                <AiOutlineTwitter size={20} />
                <AiOutlineYoutube size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about cs contact */}
      <div className="bg-[#fafafa]  border border-t-0 md:px-0 px-4">
        <div className="hidden md:grid grid-cols-4 gap-28 max-w-[1200px] mx-auto pl-6 py-6">
          <div className="flex flex-col leading-3 gap-2">
            <h1 className="text-lg font-semibold mb-3">ABOUT</h1>
            <span className="py-1 text-gray-500">Our Purpose</span>
            <span className="py-1 text-gray-500">Careers</span>
            <span className="py-1 text-gray-500">Affiliates</span>
            <span className="py-1 text-gray-500">Press</span>
            <span className="py-1 text-gray-500">Stores</span>
          </div>
          <div className="flex flex-col leading-3 gap-2">
            <h1 className="text-lg font-semibold mb-3">CUSTOMER SERVICE</h1>
            <span className="py-1 text-gray-500">Help</span>
            <span className="py-1 text-gray-500">Shipping</span>
            <span className="py-1 text-gray-500">Returns</span>
            <span className="py-1 text-gray-500">Payments</span>
            <span className="py-1 text-gray-500">Your Order</span>
          </div>
          <div className="flex flex-col leading-3 gap-2">
            <h1 className="text-lg font-semibold mb-3">CONTACT US</h1>
            <span className="py-1 text-gray-500">+1 (202) 769-2427</span>
            <span className="py-1 text-gray-500">Email us</span>
          </div>
          <div className="flex flex-col leading-3 gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-black p-1 rounded-md">
                <AiOutlineGithub className="text-white" size={35} />
              </div>
              <span className="font-semibold ">Our Github</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="border-2 p-1 rounded-md">
                <AiOutlineCreditCard className="text-black p-1" size={35} />
              </div>
              <span className="font-semibold ">Gift Card</span>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col max-w-[1200px] mx-auto pb-8">
          <AccordionChakra
            deskripsi={deskripsi}
            textAlignDirection="center"
            useInnerHtml={false}
            // className="flex flex-col items-center justify-center w-full"
          />
          <div className="flex flex-row justify-center mt-8 leading-3 gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-black p-1 rounded-md">
                <AiOutlineGithub className="text-white" size={35} />
              </div>
              <span className="font-semibold text-sm">Our Github</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="border-2 p-1 rounded-md">
                <AiOutlineCreditCard className="text-black p-1" size={35} />
              </div>
              <span className="font-semibold text-sm">Gift Card</span>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="bg-[#fafafa]  border border-t-0 md:px-0 px-4">
        <div className="flex flex-row text-center justify-center md:justify-start md:text-start max-w-[1200px] mx-auto pl-6 py-6">
          <div className="flex flex-row">
            <div className="flex md:flex-row flex-col-reverse  gap-5">
              <img src="/svg/end.svg" alt="" className="h-4 mt-2.5" />
              {/* <div className="flex flex-col">
                <div className="flex flex-row gap-4"></div>
                <span className="text-sm text-gray-500">
                  © 2021 END. All Rights Reserved.
                </span>
              </div> */}
              <div className="flex flex-col mx-auto mt-2.5 md:hidden">
                <div className="flex flex-row items-center gap-4 md:gap-6 mb-5">
                  <img src="/svg/visa.svg" alt="" className="h-3" />
                  <img src="/svg/mc.svg" alt="" className="h-3" />
                  <img src="/svg/amex.svg" alt="" className="h-3" />
                  <img src="/svg/paypal.svg" alt="" className="h-3" />
                  <img src="/svg/jcb.svg" alt="" className="h-3" />
                  <img src="/svg/afterpay.svg" alt="" className="h-3" />
                  <img src="/svg/klarna.svg" alt="" className="h-3" />
                </div>
                <p className="py-1.5 text-xs text-center w-full px-4 leading-5 text-gray-300">
                  Copyright © Ashworth and Parker Limited (t/a END.) 2023 | All
                  Rights Reserved | Company registration number: 06866013 | VAT
                  number: GB 389764913
                </p>
              </div>
              <div className="flex flex-row gap-4 mx-auto">
                <span className="md:py-2 py-1.5 text-sm text-gray-500">
                  Terms & Conditions
                </span>
                <span className="md:py-2 py-1.5 text-sm text-gray-500">
                  Privacy Policy
                </span>
                <span className="md:py-2 py-1.5 text-sm text-gray-500">
                  Other Policies
                </span>
              </div>
            </div>
          </div>
          <div className="flex-col mx-auto mt-2.5 hidden md:flex">
            <div className="flex flex-row items-center gap-4 md:gap-5 mb-5">
              <img src="/svg/visa.svg" alt="" className="h-2.5" />
              <img src="/svg/mc.svg" alt="" className="h-2.5" />
              <img src="/svg/amex.svg" alt="" className="h-2.5" />
              <img src="/svg/paypal.svg" alt="" className="h-2.5" />
              <img src="/svg/jcb.svg" alt="" className="h-2.5" />
              <img src="/svg/afterpay.svg" alt="" className="h-2.5" />
              <img src="/svg/klarna.svg" alt="" className="h-4" />
            </div>
            <p className="py-1.5 text-xs text-gray-400">
              Copyright © Ashworth and Parker Limited (t/a END.) 2023 | All
              Rights Reserved
            </p>
            <p className=" text-xs text-gray-400">
              Company registration number: 06866013 | VAT number: GB 389764913
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
