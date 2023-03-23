import React from "react";
import Image from "next/image";
import zurag1 from "../public/monfuji.png";
import zurag2 from "../public/academy.png";
import zurag3 from "../public/urchadvar.png";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
const nuur = () => {
  return (
    <div 
    className="container mx-auto pb-10 mb-10">
       
      <Head>
        <title>Monfuji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid lg:grid-cols-3 bg-white ">
        <div className="drop-shadow-2xl justify-between rounded-lg p-10 m-5 bg-white flex flex-col items-center space-y-5 ">
          <Image src={zurag1} alt="zurag1" width={150} height={150} />
          <div className="text-center font-bold ">МОНФУЖИ ТӨВ</div>
          <div className=" text-justify text-base sm:text-xl">
            МонФужи төв нь 2011 оноос хойш Япон улсын Их Дээд сургуулиудад
            оюутнууд илгээх, Үндсэн ажилтан илгээх хөтөлбөр, Аялал жуулчлал,
            Бизнес консалтинг, Гадаад Дотоод худалдаа зэрэг өргөн хүрээнд үйл
            ажиллагаа явуулсаар байна
          </div>
          <Link
            href={`https://docs.google.com/forms/d/e/1FAIpQLSerl6nW9DeMhiDKJ6Ux4NAFswt-aBxaNw0BTvzmmo-R3O3umQ/viewform`}
          >
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#d42b32] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              БҮРТГҮҮЛЭХ
            </span>
          </Link>
        </div>
        <div className=" drop-shadow-2xl rounded-lg p-10 m-5  bg-white flex flex-col items-center  justify-between space-y-5 ">
          <Image src={zurag3} alt="zurag1" width={150} height={150} />
          <div className="text-center font-bold">
            ТУСГАЙ УР ЧАДВАРТАЙ АЖИЛТАН БЭЛТГЭХ ТӨВ
          </div>
          <div className=" text-justify text-base sm:text-xl">
            2019 оны 4-р сараас эхлэн Япон улсын аж үйлдвэрийн зарим нэгэн
            салбарт тухайн мэргэжлээр бэлтгэгдсэн гадаадын боловсон хүчнийг
            хүлээн авах &quot;Тусгай ур чадвартай ажилтан&quot; буюу SSW гэсэн оршин суух
            статусыг шинээр бий болгосон. Тус визаны төрлийн шалгалтанд
            амжилттай бэлтгэн тэнцүүлж Япон улсад ажилтанаар илгээсээр байна
          </div>
          <Link
            href={`https://docs.google.com/forms/d/e/1FAIpQLScVhZIZyStUqC-JmH28Xu_fV9ksRexq4mRwlRtsIDtVniA0BA/viewform`}
          >
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#d42b32] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              БҮРТГҮҮЛЭХ
            </span>
          </Link>
        </div>
        <div className=" drop-shadow-2xl rounded-lg p-10 m-5 space-y-5 bg-white flex flex-col items-center  justify-between ">
          <Image src={zurag2} alt="zurag1" width={250} height={130} />
          <div className="text-center font-bold ">
            МОНФУЖИ ГЛОБАЛ СКИЛЛ АКАДЕМИ
          </div>
          <div className=" text-justify text-base sm:text-xl">
            Бид Монгол улсын ирээдүй болсон хүүхэд залуустаа орчин цагийн
            залуусын хамгийн их сонирхдог боловсрол мэргэжлийг Япон болон Франц
            улсын заах арга, сургалтын системээр олгож байгаа бөгөөд Мөн
            түүнчлэн таны сонирхсон мэргэжлийн суурь боловсролыг танд олгох
            бөгөөд цаашдаа Японы Коллеж, Их Дээд сургууль, Магистр-т шууд элсэн
            суралцах боломжтойгоор бэлтгэн тэнцүүлж байна.
          </div>
          <Link
            href={`https://docs.google.com/forms/d/e/1FAIpQLSf5J5-cUH1dYkutqqIoWUXpPOAfJHZ0LH-849bAzXJPxo7AFA/viewform`}
          >
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#d42b32] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              БҮРТГҮҮЛЭХ
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default nuur;
