import React from "react";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import poster from "../public/ur.png";
import Image from "next/image";
import zurag2 from "../public/Picture4.png";
import zurag3 from "../public/Picture5.png";
import zurag4 from "../public/Picture6.jpg";
import Nuur from "./Burtguuleh";
const Urchadvar = () => {
  return (
    <div className="container mx-auto">
      
    <div className=" grid md:grid-cols-9 grid-rows-4 h-screen justify-center mb-8 text-black  text-xl  ">
      <Head>
        <title>Monfuji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="bg-white md:col-span-8 row-span-4 md:rounded-r-lg">
        <Image src={poster} alt="poster" />

        <div
          className="  
        relative text-white px-5  font-sans text-left text-2xl font-thin bg-[#d42b32]"
        >
          TOKUTEIGINO БУЮУ УР ЧАДВАРТАЙ АЖИЛТАН
        </div>
        <div
          className="  
        relative text-black  text-justify"
        >
          <div className=" bg-white p-5 pb-10 text-base md:text-xl">
            2018 оны 12 сарын Засгийн газрын ээлжит бус хурлаар “Ур чадвартай
            ажилтан”-ны оршин суух зөвшөөрлийг шинээр оруулах “Хилийн шалган
            нэвтрүүлэх болон Цагаачлал, дүрвэгсдийг хүлээн зөвшөөрөх тухай
            хууль, Хууль зүйн яамыг байгуулах хуулийн зарим нэг заалтад өөрчлөлт
            оруулах тухай хууль” батлагдсан. 2019 оны 4 сарын 1-ний өдрөөс эхлэн
            ажиллах хүчний хомсдолтой аж үйлдвэрийн салбарт “Ур чадвартай”
            гадаадаад ажилтан хүлээн авах боломжтой болсон.
          </div>
          <div className=" bg-white p-5 pb-10 text-base md:text-xl">
            Энэхүү “Ур чадвартай ажилтан”-ны оршин суух зөвшөөрөл нь жижиг дунд
            үйлдвэрлэл, бичил бизнес эрхлэгчдийн ажиллах хүчний хомсдолыг
            арилгах зорилготой юм. Япон улс нь үйлдвэрлэлийн бүтээмжийг
            дээшлүүлэх болон дотоодын ажиллах хүчнээр хангах арга хэмжээг авч
            буй хэдий ч ажиллах хүчний нөөцийг хангалттай бүрдүүлж чадахгүй хүнд
            нөхцөлд байгаа аж үйлдвэрийн салбарт тодорхой мэргэжлийн ур
            чадвартай шууд ажиллах боломжтой ажиллах хүчнийг гадаадаас хүлээж
            авах юм.
          </div>
        </div>
        <div className="mt-10">
          <Image src={zurag2} alt="zurag2" />
          <div
            className="  
        relative text-white px-5  font-sans text-left text-2xl font-thin bg-[#d42b32]"
          >
            УР ЧАДВАРТАЙ АЖИЛТНААР ХЭРХЭН ЯВАХ ВЭ?
          </div>
          <div
            className="  
        relative text-black  text-justify"
          >
            <div className=" bg-white p-5 pb-10 text-base md:text-xl">
              Тусгай ур чадвартай ажилтны 14 төрөлд шалгалт өгөн шалгалтандаа
              тэнцсэн мөн тодорхой шалгууруудад тэнцсэн тохиолдолд Япон орон руу
              явах бүрэн боломжтой
            </div>
          </div>
        </div>
        <div
          className="  
        relative text-white px-5  font-sans text-left text-2xl font-thin bg-[#d42b32] mt-10"
        >
          УР ЧАДВАРТАЙ АЖИЛТНЫ ШАЛГАЛТ ӨГӨХ ТӨРЛҮҮД
        </div>
        <Image src={zurag3} alt="zurag3" />
        <div
          className="  
        relative text-white px-5  font-sans text-left text-2xl font-thin bg-[#d42b32] mt-10"
        >
          УР ЧАДВАРТАЙ АЖИЛТНЫ ДАВУУ ТАЛ
        </div>
        <div
          className="  
        relative text-black  text-justify"
        >
          <div className=" bg-white p-5 pb-10 ">
            <div className="flex flex-row drop-shadow-2xl p-5 m-5 bg-white ">
              <div className="m-5 text-2xl text-[#d42b32]">1</div>
              <div>Гэр бүлтэйгээ явах боломжтой</div>
            </div>
            <div className="flex flex-row drop-shadow-2xl rounded-lg p-5 m-5 bg-white">
              <div className="m-5 text-2xl text-[#d42b32]">2</div>
              <div>Монголд ирж очих чөлөөтэй</div>
            </div>
            <div className="flex flex-row drop-shadow-2xl rounded-lg p-5 m-5 bg-white">
              <div className="m-5 text-2xl text-[#d42b32]">3</div>
              <div>
                Ажиллаж буй чиглэлээ солих боломжтой (тухайн чиглэлээр 1-2 жил
                ажилласны дараа ур чадвартай ажилтаны 14 төрлийн шалгалт өгөөд
                ажлаа солих боломжтой)
              </div>
            </div>
            <div className="flex flex-row drop-shadow-2xl rounded-lg p-5 m-5 bg-white">
              <div className="m-5 text-2xl text-[#d42b32]">4</div>
              <div>
                Гэрээний хугацаа дуусах үед дахин гэрээгээ сунгах ажиллах
                боломжтой эсвэл Япондоо өөр ажилд тэнцэн ажиллах боломжтой.
              </div>
            </div>
            <div className="flex flex-row drop-shadow-2xl rounded-lg p-5 m-5 bg-white">
              <div className="m-5 text-2xl text-[#d42b32]">5</div>
              <div>
                Эрүүл мэндийн даатгал болон Ниигмийн даатгалд бүрэн хамрагдана.
              </div>
            </div>
          </div>
        </div>
        <div
          className="  
        relative text-white px-5  font-sans text-left text-2xl font-thin bg-[#d42b32] mt-10"
        >
          ТАВИГДАХ ШААРДЛАГА
        </div>
        <div
          className="  
        relative text-black  text-justify"
        >
          <div className=" bg-white p-5 pb-10 grid md:grid-cols-2 ">
            <Image src={zurag4} alt="zurag4" />
            <div className="p-10 break-normal">
              <div>{`\u2B24`} 18-с дээш нас </div>
              <div>{`\u2B24`} ЕБС төгссөн байх </div>

              <div>{"\u2B24"}Мэргэжил харгалзахгүй</div>

              <div>{"\u2B24"}Хүйс харгалзахгүй</div>

              <div>{"\u2B24"}Эрүүл мэндийн шаардлага хангасан байх</div>

              <div>
                {" "}
                {"\u2B24"}МонФүжи байгууллагын хэлний сургалтанд хамрагдсан байх
              </div>

              <div>
                {"\u2B24"}Японд хэлний JFT, JLPT N4 шалгалтанд тэнцсэн байх
              </div>

              <div>
                {" "}
                {"\u2B24"}Тогтвортой суурьшилтай, итгэлтэй ажилласан тохиолдолд
                гэр бүлээрээ Япон улсад амьдрах эрхтэй.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Urchadvar;
