import React from "react";
import Head from "next/head";
import zurag from "../public/Picture13.png";
import Image from "next/image";
import zurag2 from "../public/Picture14.png";
import zurag3 from "../public/1.png";
import zurag4 from "../public/2.png";
import zurag5 from "../public/3.png";
import zurag6 from "../public/4.png";
import zurag7 from "../public/5.png";
import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>
      {" "}
      <Head>
        <title>AboutUs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="   text-justify grid sm:grid-cols-2 bg-white ">
          <div className=" text-white bg-[#d42b32] p-5 pb-10  items-center">
            <div className="text-3xl text-center font-bold p-5">
              БИДНИЙ ТУХАЙ
            </div>
            <div className="p-5">
              Бидний үйл ажиллагаа өргөжин тэлж өнөөдөр Япон улсын 20 гаруй
              сургууль болон албан байгууллагын албан ёсны хамтрагч байгууллага
              болон ажиллаж байна. Бид та бүхэнд сургууль сонголт хийхэд
              зөвлөгөө өгч, хамтран ажилладаг сургуулиудад танилцуулах,
              элсэлтийн материал бүрдүүлэлт, баталгаат орчуулга хийх зэрэг цогц
              үйлчилгээ үзүүлэх япон хэлний N3 болон түүнээс дээш мэдлэгтэй 23
              ажилтан болон Магистр, Доктор хангасан бакалавр магистр докторын
              зэрэгтэй 11 мэргэжлийн багш ажилтантай олон жилийн туршлага бүхий
              найрсаг баг хамт олон үйлчлэх болно.
            </div>
          </div>
          <Image src={zurag} alt="zurag" />
        </div>

        <div
          className="  
         text-white px-5 mt-10 text-2xl font-sans text-left  font-thin bg-[#d42b32]"
        >
          ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
        </div>
        <div
          className="  
         text-black  text-justify"
        >
          <div className=" bg-white  pb-10">
            <Image src={zurag2} alt="zurag2" />
            <div className="p-5">
              “Монфужи” ХХК нь 2011 онд байгуулагдсанаасаа хойш өнөөдрийг хүртэл
              гадаад оронд тэр тусмаа Япон улсад ажиллаж амьдрах хүсэл
              зорилготой оюутан залуусын хүсэл мөрөөдлийг биелүүлэх зорилтой
              гүүр нь болон ажилласаар ирсэн юм. Манай байгууллагын үйл
              ажиллагааны үндсэн чиглэл :
            </div>
            <div className="grid md:grid-cols-5  text-center mx-5  items-center justify-items-center">
              <div className="flex flex-col m-5">
                <Image src={zurag3} alt="zurag3" width={150} height={150} />
                <p className="m-5">Гадаад худалдаа</p>
              </div>
              <div className="flex flex-col m-5  ">
                <Image src={zurag4} alt="zurag4" width={150} height={150} />
                <p className="m-5">Бизнес консалтинг</p>
              </div>
              <div className="flex flex-col m-5">
                <Image src={zurag5} alt="zurag5" width={150} height={150} />
                <p className="m-5">Ажилтан илгээх</p>
              </div>
              <div className="flex flex-col m-5">
                <Image src={zurag6} alt="zurag6" width={150} height={150} />
                <p className="m-5">Оюутан илгээх</p>
              </div>
              <div className="flex flex-col m-5">
                <Image src={zurag7} alt="zurag7" width={150} height={150} />
                <p className="m-5">Цалинтай дадлага</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondPage;
