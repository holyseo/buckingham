function App() {
  return (
    <>
      <div className=" max-w-[1920px] mx-auto h-auto bg-[#F0F0F0] border-[2px] border-opacity-20 border-[#BEBEBE]">
        <div className=" relative bg-black">
          <img src="src/assets/images/MaskGroup1.png" className="opacity-50" />
          <div className=" absolute inset-0 ">
            <div className="flex flex-row justify-between items-start mt-[33px]  text-white text-[20px] px-14 font-Noto font-light">
              <div className="flex flex-row justify-between w-[492px] py-4">
                <div className=" cursor-pointer">Home</div>
                <div className=" cursor-pointer">About</div>
                <div className=" cursor-pointer">Our Artists</div>
                <div className=" cursor-pointer">Where to Buy</div>
                <div className=" cursor-pointer">Blog</div>
              </div>
              <div className="flex flex-row justify-between items-center w-[514px]">
                <div className=" cursor-pointer">Artist Submissions</div>
                <div className=" cursor-pointer">Trade Enquiries</div>
                <div className="bg-[#AC9B65] h-fit py-3 px-5 cursor-pointer">
                  Arthub Login
                </div>
              </div>
            </div>
            <div className="text-white mt-18 flex flex-col items-center">
              <div className=" mt-36">
                <img src="/src/assets/images/Image1.png" />
              </div>
              <div className="text-[40px] mt-12 font-Cormorant ">
                INVESTING IN INNOVATIVE ARTISTS
                <span className="text-[#AC9B65]"> SINCE 1983</span>
              </div>
              <div className="w-[764px] mt-6 text-[20px] text-center tracking-wide font-Noto font-[300]">
                Suspendisse at lorem id velit condimentum sagittis. Praesent ac
                feugiat nisi. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Suspendisse potenti.
                Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in.
              </div>
              <div className="mt-10 text-[20px] border-2 border-white px-4 py-2 cursor-pointer font-Noto font-[300]">
                About us
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <div className="text-[#AC9B65] text-[50px] font-Cormorant">
            DUIS TINCIDUNT ORNARE DIGNISSIM
          </div>
          <div className="mt-10 flex flex-row gap-8 items-center">
            <div className="w-[534px] h-[616px] flex flex-col justify-between border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white">
              <div className="w-fit">
                <img src="src/assets/images/Rectangle6.png" />
              </div>
              <div className="text-[30px] px-8 text-[#1C1C1C] font-Cormorant font-semibold">
                PROMOTE YOUR ARTWORK
              </div>
              <div className="text-[20px] px-8 text-[#5F5F5F] font-Noto font-[300] ">
                Suspendisse at lorem id velit condimentum sagittis. Praesent ac
                feugiat nisi. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Suspendisse potenti.
                Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in.
              </div>
              <div className="bg-[#AC9B65] text-[20px] p-3 w-fit text-white mx-8 mb-6 cursor-pointer font-Noto">
                Artist Submissions
              </div>
            </div>
            <div className="w-[534px] h-[616px] flex flex-col justify-between border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white">
              <div className="w-fit">
                <img src="src/assets/images/Rectangle8.png" />
              </div>
              <div className="text-[30px] px-8 text-[#1C1C1C] font-Cormorant font-semibold ">
                SELL OUR PORTFOLIO
              </div>
              <div className="text-[20px] px-8 text-[#5F5F5F] font-Noto font-[300]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Suspendisse potenti. Duis
                tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in. Suspendisse at lorem id velit condimentum
                sagittis. Praesent ac feugiat nisi.
              </div>
              <div className="bg-[#AC9B65] text-[20px] p-3 w-fit text-white mx-8 mb-6 cursor-pointer font-Noto">
                Trade Enquiries
              </div>
            </div>
            <div className="w-[534px] h-[616px] flex flex-col justify-between border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white">
              <div className="w-fit">
                <img src="src/assets/images/Rectangle10.png" />
              </div>
              <div className="text-[30px] px-8 text-[#1C1C1C] font-Cormorant font-semibold">
                BUY HIGH QUALITY ARTWORKS
              </div>
              <div className="text-[20px] px-8 text-[#5F5F5F] font-Noto font-[300]">
                Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in. Suspendisse at lorem id velit condimentum
                sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Suspendisse potenti.
              </div>
              <div className="bg-[#AC9B65] text-[20px] p-3 w-fit text-white mx-8 mb-6 cursor-pointer font-Noto">
                Where to Buy
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center flex flex-col justify-center items-center">
          <div className="text-[#141414] text-[50px] font-Cormorant font-semibold">
            ARTIST SHOWCASE
          </div>
          <div className="my-3 w-[883px] text-[#5F5F5F] text-[20px] font-Noto">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare
            dignissim.
          </div>
          <div className="mt-8 flex flex-row justify-between items-center w-full px-32">
            <div>
              <img
                src="src/assets/images/Rectangle15.png"
                className="w-[248px] h-[234px]"
              />
            </div>
            <div>
              <img
                src="src/assets/images/Rectangle16.png"
                className="w-[248px] h-[234px]"
              />
            </div>
            <div>
              <img
                src="src/assets/images/Rectangle18.png"
                className="w-[248px] h-[234px]"
              />
            </div>
            <div>
              <img
                src="src/assets/images/Rectangle17.png"
                className="w-[248px] h-[234px]"
              />
            </div>
            <div>
              <img
                src="src/assets/images/Rectangle20.png"
                className="w-[248px] h-[234px]"
              />
            </div>
            <div>
              <img
                src="src/assets/images/Rectangle19.png"
                className="w-[248px] h-[234px]"
              />
            </div>
          </div>
          <div className="my-14 bg-[#AC9B65] text-[20px] p-4 w-fit text-white m-4 cursor-pointer font-Noto ">
            Browser Our Artists
          </div>
        </div>
        <div className="relative bg-black font-Cormorant">
          <img src="src/assets/images/Rectangle29.png" className="opacity-30" />
          <div className="absolute inset-0  w-[1287px] flex flex-col gap-4 justify-center mx-auto px-10">
            <div className="text-[54px] text-white  leading-tight">
              Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius
              condimentum in. Suspendisse at lorem id velit condimentum
              sagittis. Praesent ac feugiat nisi.
            </div>
            <div className="text-[32px] text-[#AC9B65]">
              Duis tincidunt ornare dignissim.
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-[116px] px-[116px]">
          <div className="w-[825px] h-[377px] flex flex-row border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white ">
            <div className="w-1/3">
              <img
                src="src/assets/images/Rectangle24.png"
                className="w-[288px] h-[375px]"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between p-[30px]">
              <div className="text-[30px] font-Cormorant font-semibold">
                SUSPENDISSE AT LOREM
              </div>
              <div className="text-[20px] text-[#5F5F5F] font-Noto">
                Id velit condimentum sagittis. Praesent ac feugiat nisi. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Suspendisse potenti. Duis tincidunt
                ornare dignissim. Duis mi risus, tincidunt varius condimentum
                in.
              </div>
              <div className=" bg-[#AC9B65] text-[20px] py-3 px-5 w-fit text-white cursor-pointer font-Noto ">
                Read more
              </div>
            </div>
          </div>
          <div className="w-[825px] h-[377px] flex flex-row border-[1px] border-[#BEBEBE] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white ">
            <div className="w-1/3">
              <img
                src="src/assets/images/Rectangle26.png"
                className="w-[288px] h-[375px]"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between p-[30px]">
              <div className="text-[30px] font-Cormorant font-semibold">
                SUSPENDISSE POTENTI.
              </div>
              <div className="text-[20px] text-[#5F5F5F] font-Noto">
                Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Duis
                tincidunt ornare dignissim. Duis mi risus, tincidunt varius
                condimentum in. Suspendisse at lorem id velit condimentum
                sagittis.
              </div>
              <div className=" bg-[#AC9B65] text-[20px] py-3 px-5 w-fit text-white cursor-pointer font-Noto ">
                Read more
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[116px] mb-[72px] ">
          <div className=" mx-auto  bg-[#AC9B65] text-[20px] py-3 px-5 w-fit text-white cursor-pointer font-Noto  ">
            All News & Media
          </div>
        </div>
        <div className="h-[295px] bg-white flex flex-col items-center p-[43px] gap-8 ">
          <div>
            <img
              src="src/assets/images/Image2.png"
              className="w-[271px] h-[98px]"
            />
          </div>
          <div className="w-[1134px] flex flex-col justify-between items-center gap-3 text-[18px] text-[#5F5F5F] font-Noto">
            <p>
              © Buckingham Fine Art Publishers Ltd, Unit D, Denbigh West
              Business Park, Third Avenue, Milton Keynes, Bucks. MK1 1DH.
              England
            </p>
            <p>
              Company Number 01608690 Tel: 01908 658830 Email:
              <span className=" underline underline-offset-1">
                admin@bucksfineart.co.uk
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
