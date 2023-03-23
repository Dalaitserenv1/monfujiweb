import React from "react";
import Image from "next/image";
import background from "../public/Picture1.png";
import chiglel from "../public/Picture2.png";
import amjilt from "../public/Picture3.png";
import { motion } from "framer-motion";


const Monfuji = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className="sm:col-span-8  mb-10 sm:rounded-r-lg   w-100 h-100">
        <div className="relative ">
          <Image src={background} alt="Monfujiback" objectFit="cover" />

          <div className="sm:absolute bottom-0">
            <div className="  text-white px-5 mt-0 font-sans text-left text-2xl font-thin bg-[#d42b32]">
              МОНФУЖИ ТӨВИЙН ЗОРИЛГО
            </div>
            <div className=" text-black  text-justify">
              <div className=" bg-white p-5 pb-10 text-base sm:text-xl">
                Монфужи” ХХК нь 2011 оноос хойш Япон улсын Их Дээд сургуулиудад
                оюутнууд илгээх, Үндсэн ажилтан илгээх хөтөлбөр, Аялал жуулчлал,
                Бизнес консалтинг, Гадаад Дотоод худалдаа зэрэг өргөн хүрээнд
                үйл ажиллагаа явуулсаар ирсэн бөгөөд Тухайн орон руу явах
                хүсэлтэй байгаа хувь хүн болон хүүхдийн Хэлний мэдлэг, Материал
                бүрдүүлэлт болон Виз мэдүүлэг зэрэг бүх үйл ажиллагааг манай
                байгууллага хариуцан найдвартайгаар ажилласаар байна. Мөн хүүхэд
                залуусаа дэлхийн хэмжээний боловсролтой боловсон хүчин болгох
                зорилготойгоор Таны ирээдүйд оюуны хөрөнгө оруулалт хийн хамтран
                ажиллах болсондоо таатай байна. Та хичээгээрэй, Бид дэмжье.
                Уриатайгаар ажилласаар байна.
              </div>
            </div>
          </div>
        </div>
        <div
          className="  
         text-white px-5 mt-10 font-sans text-left text-2xl font-thin bg-[#d42b32]"
        >
          ХӨТӨЛБӨРҮҮД
        </div>
        <div
          className="  
         text-black  text-justify"
        >
          <div className=" bg-white p-5 pb-10">
            <Image src={chiglel} alt="chiglel" />
          </div>
        </div>
        <div
          className="  
         text-black mt-10"
        >
          <div
            className="  
        text-white px-5  font-sans text-left text-2xl font-thin bg-[#d42b32]"
          >
            БИДНИЙ АМЖИЛТ
          </div>
        </div>
        <div
          className="  
         text-black  text-justify bg-white"
        >
          <Image src={amjilt} alt="amjilt" />

          <div className=" bg-white p-5 pb-10 text-base sm:text-xl">
            Манай МонФүжи ХХК нь үйл ажиллагаа явуулаад 10 жил болж байгаа
            туршлагатай байгууллага бөгөөд 2020-2021 оны байдлаар Япон хэлний
            сургууль, Их дээд сургууль, Мэргэжлийн сургууль, Магистр,Сонингийн
            хөтөлбөр зэрэг Сургалтын чиглэлээр 450 гаруй хүн, Асрахуйн хөтөлбөр,
            Үндсэн ажилтан, Үйлдвэрлэлийн хөтөлбөр, Тусгай ур чадвартай ажилтан
            зэрэг Хөдөлмөр, Ажил эрхлэлтийн чиглэлээр 600 гаруй хүнийг
            амжилттайгаар Япон орон руу илгээсээр байна. Мөн манай байгууллага
            дах Япон хэлний 45-60 хоногийн сургалтанд суралцан JFT-basic болон
            NAT-test N4,N5 түвшиний шалгалтанд тэнцэх магадлал 80% байдаг.
            Түүнчлэн бид чадах хэмжээгээрээ оюутан залуусдаа мэдээллээ хүргэн
            хүрч ажиллахын тулд Монгол орныхоо хол аймаг сум болон Япон оронд
            салбараа нээн үйл ажиллагаа явуулсаар байна
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Monfuji;
