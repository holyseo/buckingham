import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="  mx-auto bg-[#F0F0F0] border-[2px] border-opacity-20 border-[#BEBEBE]">
        <div className=" relative bg-black">
          <img
            src="images/MaskGroup1.png"
            className=" object-cover w-full max-h-[1082px] opacity-50"
          />
          <div className=" absolute inset-0 max-w-[1920px] mx-auto">
            <div className="3xs:hidden md:flex flex-row justify-center xl:justify-between gap-x-28 items-start mt-[33px] text-white text-[20px] px-14 font-Noto font-light">
              <div className="flex flex-row justify-between w-[492px] py-3">
                <div className=" cursor-pointer hover:underline underline-offset-8 hover:text-indigo-500 transition-all duration-300">
                  Home
                </div>
                <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                  About
                </div>
                <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                  Our Artists
                </div>
                <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                  Where to Buy
                </div>
                <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                  Blog
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[514px]">
                <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-orange-500 transition-all duration-300">
                  Artist Submissions
                </div>
                <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-orange-500 transition-all duration-300">
                  Trade Enquiries
                </div>
                <div className="bg-[#AC9B65] h-fit py-3 px-5 cursor-pointer  hover:bg-orange-700 hover:opacity-80 hover:rounded-md transition-all duration-300">
                  Arthub Login
                </div>
              </div>
            </div>
            <div
              onClick={() => setToggle(!toggle)}
              className="grid place-content-end md:hidden"
            >
              <div
                className={`absolute end-10 top-10 cursor-pointer w-8 h-1 bg-white rounded-full transition-all duration-300 before:content-[''] before:absolute before:w-8 before:h-1 before:bg-white before:rounded-full before:-translate-y-[12px] after:absolute after:w-8 after:h-1 after:bg-white after:rounded-full after:translate-y-[12px] ${
                  toggle
                    ? `z-50 h-[0] before:bg-white before:rotate-45 before:translate-y-[12px] before:transition-all before:duration-500 after:bg-white after:-rotate-45 after:translate-y-[12px] after:transition-all after:duration-500`
                    : null
                }`}
              ></div>

              <div
                className={`text-white w-full h-80 flex justify-center gap-10 3xs:text-[10px] 2xs:text-[16px] ${
                  toggle ? "bg-black absolute top-0 opacity-90" : "3xs:hidden"
                }`}
              >
                <div className="grid grid-rows-5 place-items-start items-center py-10 xs:pr-16">
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                    Home
                  </div>
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                    About
                  </div>
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                    Our Artists
                  </div>
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                    Where to Buy
                  </div>
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-indigo-500 transition-all duration-300">
                    Blog
                  </div>
                </div>
                <div className="grid grid-rows-5 gap-12 place-items-start items-center py-10 sm:pr-16 ">
                  <div></div>
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-orange-500 transition-all duration-300">
                    Artist Submissions
                  </div>
                  <div className=" cursor-pointer hover:underline underline-offset-8  hover:text-orange-500 transition-all duration-300">
                    Trade Enquiries
                  </div>
                  <div className="bg-[#AC9B65] h-fit py-1 px-2 cursor-pointer  hover:bg-orange-700 hover:opacity-90 hover:rounded-md transition-all duration-300">
                    Arthub Login
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="text-white mt-18 flex flex-col items-center justify-center">
              <div className="3xs:mt-8 lg:mt-16 xl:mt-20 ">
                <img
                  src="images/Image1.png"
                  className="3xs:w-[50%] sm:w-[60%] md:w-fit mx-auto "
                />
              </div>
              <div className="3xs:text-[0] 2xs:text-[12px] xs:text-[25px] sm:text-[40px] mt-5 xl:mt-12 font-Cormorant ">
                INVESTING IN INNOVATIVE ARTISTS
                <span className="text-[#AC9B65]"> SINCE 1983</span>
              </div>
              <div className="max-w-[764px] mt-3 xl:mt-6 3xs:text-[0] xs:text-[15px] sm:text-[20px] mx-5 text-center tracking-wide font-Noto font-[300] ">
                Suspendisse at lorem id velit condimentum sagittis. Praesent ac
                feugiat nisi. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Suspendisse potenti.
                Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in.
              </div>
              <div className="xs:mt-6 sm:mt-16 3xs:hidden sm:block sm:text-[20px] border-2 border-white px-4 py-2 cursor-pointer font-Noto font-[300]  hover:bg-orange-800 hover:opacity-80 transition-all duration-300">
                About us
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-20 flex flex-col items-center">
          <div className="text-[#AC9B65] text-center 2xs:text-[20px] xs:text-[30px] md:text-[40px] 2xl:text-[50px] font-Cormorant">
            DUIS TINCIDUNT ORNARE DIGNISSIM
          </div>
          <div className="mt-10 place-items-center grid  gap-8 2xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
            <div className="2xs:w-[280px] 2xs:h-[420px] xs:w-[534px] xs:h-[616px] flex flex-col justify-between border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white">
              <div className="">
                <img src="images/Rectangle6.png" className="object-cover" />
              </div>
              <div className="2xs:text-[16px] xs:text-[30px] px-8 text-[#1C1C1C] font-Cormorant font-semibold">
                PROMOTE YOUR ARTWORK
              </div>
              <div className="2xs:text-[12px] xs:text-[20px] px-8 text-[#5F5F5F] font-Noto font-[300] ">
                Suspendisse at lorem id velit condimentum sagittis. Praesent ac
                feugiat nisi. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Suspendisse potenti.
                Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in.
              </div>
              <div className="bg-[#AC9B65] 2xs:text-[12px] xs:text-[20px] p-3 w-fit text-white mx-8 mb-6 cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300 ">
                Artist Submissions
              </div>
            </div>
            <div className="2xs:w-[280px] 2xs:h-[420px] xs:w-[534px] xs:h-[616px] flex flex-col justify-between border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white">
              <div className="w-fit">
                <img src="images/Rectangle8.png" />
              </div>
              <div className="2xs:text-[16px] xs:text-[30px] px-8 text-[#1C1C1C] font-Cormorant font-semibold">
                SELL OUR PORTFOLIO
              </div>
              <div className="2xs:text-[12px] xs:text-[20px] px-8 text-[#5F5F5F] font-Noto font-[300] ">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Suspendisse potenti. Duis
                tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in. Suspendisse at lorem id velit condimentum
                sagittis. Praesent ac feugiat nisi.
              </div>
              <div className="bg-[#AC9B65] 2xs:text-[12px] xs:text-[20px] p-3 w-fit text-white mx-8 mb-6 cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300">
                Trade Enquiries
              </div>
            </div>
            <div className="2xs:w-[280px] 2xs:h-[420px] xs:w-[534px] xs:h-[616px] flex flex-col justify-between border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white">
              <div className="w-fit">
                <img src="images/Rectangle10.png" />
              </div>
              <div className="2xs:text-[16px] xs:text-[30px] px-8 text-[#1C1C1C] font-Cormorant font-semibold">
                BUY HIGH QUALITY ARTWORKS
              </div>
              <div className="2xs:text-[12px] xs:text-[20px] px-8 text-[#5F5F5F] font-Noto font-[300] ">
                Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in. Suspendisse at lorem id velit condimentum
                sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Suspendisse potenti.
              </div>
              <div className="bg-[#AC9B65] 2xs:text-[12px] xs:text-[20px] p-3 w-fit text-white mx-8 mb-6 cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300">
                Where to Buy
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1920px] mx-auto mt-20 text-center flex flex-col justify-center items-center">
          <div className="text-[#141414] text-center 2xs:text-[20px] xs:text-[30px] md:text-[40px] 2xl:text-[50px] font-Cormorant font-semibold">
            ARTIST SHOWCASE
          </div>
          <div className="my-3 max-w-[883px] text-[#5F5F5F] text-center 2xs:text-[14px] xs:text-[16px] md:text-[18px] 2xl:text-[20px] font-Noto">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare
            dignissim.
          </div>
          <div className="mt-8 grid grid-cols-3 3xs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-[40px] ">
            <div className="transition duration-200 hover:opacity-60 cursor-pointer">
              <img src="images/Rectangle15.png" className="w-[248px] h-auto " />
            </div>
            <div className="transition duration-200 hover:opacity-60 cursor-pointer">
              <img src="images/Rectangle16.png" className="w-[248px] h-auto" />
            </div>
            <div className="transition duration-200 hover:opacity-60 cursor-pointer">
              <img src="images/Rectangle18.png" className="w-[248px] h-auto" />
            </div>
            <div className="transition duration-200 hover:opacity-60 cursor-pointer">
              <img src="images/Rectangle17.png" className="w-[248px] h-auto" />
            </div>
            <div className="transition duration-200 hover:opacity-60 cursor-pointer">
              <img src="images/Rectangle20.png" className="w-[248px] h-auto" />
            </div>
            <div className="transition duration-200 hover:opacity-60 cursor-pointer">
              <img src="images/Rectangle19.png" className="w-[248px] h-auto" />
            </div>
          </div>
          <div className="my-14 bg-[#AC9B65] 3xs:text-[8px] 2xs:text-[12px] xs:text-[20px]  p-4 w-fit text-white m-4 cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300">
            Browser Our Artists
          </div>
        </div>
        <div className="relative bg-black font-Cormorant ">
          <img
            src="images/Rectangle29.png"
            className="object-cover w-full max-h-[521px] opacity-30"
          />
          <div className="absolute inset-0 max-w-[1287px] flex flex-col gap-4 justify-center mx-auto px-10">
            <div className="3xs:text-[0] 2xs:text-[13px] xs:text-[20px] sm:text-[30px] md:text-[40px] 2xl:text-[54px] text-white leading-tight">
              Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
              condimentum in. Suspendisse at lorem id velit condimentum
              sagittis. Praesent ac feugiat nisi.
            </div>
            <div className="3xs:text-[0] 2xs:text-[12px] xs:text-[14px] sm:text-[20px] md:text-[24px] 2xl:text-[32px] text-[#AC9B65]">
              Duis tincidunt ornare dignissim.
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto grid place-items-center 3xs:grid-cols-1 2xl:grid-cols-2 mt-[116px] gap-y-12 ">
          <div className="2xs:w-[280px] xs:w-[570px] sm:w-[825px] max-h-[377px] flex flex-row border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white ">
            <div className="w-[33%]">
              <img src="images/Rectangle24.png" className="object-cover" />
            </div>
            <div className="w-2/3 flex flex-col justify-between p-[18px]">
              <div className="2xs:text-[18px] 2xs:leading-4 xs:text-[24px] sm:text-[30px] font-Cormorant font-semibold">
                SUSPENDISSE AT LOREM
              </div>
              <div className=" 3xs:text-[0] xs:text-[14px] sm:text-[20px] text-[#5F5F5F] font-Noto">
                Id velit condimentum sagittis. Praesent ac feugiat nisi. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Suspendisse potenti. Duis tincidunt
                ornare dignissim. Duis mi risus, tincidunt varius condimentum
                in.
              </div>
              <div className=" bg-[#AC9B65] 2xs:text-[7px] xs:text-[9px] sm:text-[20px] py-3 px-5 w-fit text-white cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300 ">
                Read more
              </div>
            </div>
          </div>
          <div className="2xs:w-[280px] xs:w-[570px] sm:w-[825px] max-h-[377px] flex flex-row border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white ">
            <div className="w-[33%]">
              <img src="images/Rectangle26.png" className="object-cover" />
            </div>
            <div className="w-2/3 flex flex-col justify-between p-[18px] ">
              <div className="2xs:text-[18px] 2xs:leading-4 xs:text-[24px] sm:text-[30px] font-Cormorant font-semibold">
                SUSPENDISSE POTENTI
              </div>
              <div className="3xs:text-[0] xs:text-[14px] sm:text-[20px] text-[#5F5F5F] font-Noto">
                Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Duis
                tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in. Suspendisse at lorem id velit condimentum
                sagittis.
              </div>
              <div className=" bg-[#AC9B65] 2xs:text-[7px] xs:text-[9px] sm:text-[20px] py-3 px-5 w-fit text-white cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300 ">
                Read more
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[116px] mb-[72px] ">
          <div className=" mx-auto  bg-[#AC9B65]  3xs:text-[8px] 2xs:text-[12px] xs:text-[20px]  py-3 px-5 w-fit text-white cursor-pointer font-Noto transition-all hover:scale-105 duration-200 hover:shadow-lg hover:shadow-gray-300 ">
            All News & Media
          </div>
        </div>
        <div className=" bg-white flex flex-col items-center px-[43px] gap-8 py-12">
          <div>
            <img src="images/Image2.png" className="object-cover" />
          </div>
          <div className="max-w-[1134px] flex flex-col text-center justify-between items-center gap-3 3xs:text-[0] 2xs:text-[12px] sm:text-[18px] text-[#5F5F5F] font-Noto">
            <p>
              © Buckingham Fine Art Publishers Ltd, Unit D, Denbigh West
              Business Park, Third Avenue, Milton Keynes, Bucks. MK1 1DH.
              England
            </p>
            <p className="flex flex-row flex-wrap justify-center gap-x-10 ">
              <div>Company Number 01608690</div>
              <div>Tel: 01908 658830</div>
              <div>
                Email:
                <span className=" underline underline-offset-1">
                  admin@bucksfineart.co.uk
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
