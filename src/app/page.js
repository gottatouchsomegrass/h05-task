"use client"
import Image from 'next/image';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Top banner */}
      <Navbar/>


      {/* Hero Section */}
      {/* <div className='position-relative'>

        <Image src="/hero-image.png" alt="Hero" width={1980} height={663} className='absolute top-[120] left-0 w-[1980] h-[650] object-cover z-0' />
        <Image src="/Vector 1.png" alt="Vector 1" width={56} height={56} className='absolute top-[431] left-[750] w-[56] h-[56] object-cover z-0' />
        <Image src="/Vector 2.png" alt="Vector 2" width={104} height={104} className='absolute right-7 xl:right-8 top-200 md:top-44 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px]' />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-16 relative z-10 w-[1000] h-[650]">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-gray-600">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black text-white px-12 py-2 rounded-full">Shop Now</button>
            <div className="flex space-x-8 pt-4">
              <div><strong className='text-4xl font-semibold'>200+</strong><br />International Brands</div>
              <div data-orientation="vertical" role="none" class="shrink-0 w-[1px] ml-6 md:ml-0 h-12 md:h-full bg-black/10"></div>
              <div><strong className='text-4xl font-semibold'>2,000+</strong><br />High-Quality Products</div>
              <div data-orientation="vertical" role="none" class="shrink-0 w-[1px] ml-6 md:ml-0 h-12 md:h-full bg-black/10"></div>
              <div><strong className='text-4xl font-semibold'>30,000+</strong><br />Happy Customers</div>
            </div>
          </div>
  
        </div>
      </div> */}

      <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
  <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <section className="max-w-frame px-4 md:mt-12 md:ml-8 md:text-left text-center">
      <h2 className="__className_931021 text-4xl lg:text-[64px] lg:leading-[64px] mb-5 font-extrabold lg:mb-8">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h2>
      <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <div>
        <a
          className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full "
          href="/shop"
        >
          Shop Now
        </a>
      </div>
      <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[100px]">
        <div className="flex flex-col">
          <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>200</span>+
          </span>
          <span className="text-xs xl:text-base text-black/60 text-nowrap">
            International Brands
          </span>
        </div>
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 w-[1px] ml-6 md:ml-0 h-12 md:h-full bg-black/10"
        ></div>
        <div className="flex flex-col ml-6 md:ml-0">
          <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>2,000</span>+
          </span>
          <span className="text-xs xl:text-base text-black/60 text-nowrap">
            High-Quality Products
          </span>
        </div>
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 h-full w-[1px] hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
        ></div>
        <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
          <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>3,000</span>+
          </span>
          <span className="text-xs xl:text-base text-black/60 text-nowrap">
            Happy Customers
          </span>
        </div>
      </div>
    </section>
    <section className="relative md:px-4 min-h-[448px] md:min-h-[570px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/hero-image-new.png')] md:bg-[url('/hero-image-new.png')]">
      <img
        alt="big star"
        fetchpriority="high"
        width={104}
        height={104}
        decoding="async"
        data-nimg="1"
        className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
        src="/Vector 2.png"
        style={{ color: "transparent" }}
      />
      <img
        alt="small star"
        fetchpriority="high"
        width={56}
        height={56}
        decoding="async"
        data-nimg="1"
        className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_4s_infinite]"
        src="/Vector 1.png"
        style={{ color: "transparent" }}
      />
    </section>
  </div>
</header>

      {/* Brands */}
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between px-6 md:px-16 py-6 bg-black top-[750px] xl:px-0 space-x-7">
        <Image key="versace" src={`/versace.png`} alt="versace" width={166.48} height={33.16} className='mx-4 my-4'/>
        <Image key="zara" src={`/zara.png`} alt="zara" width={91} height={38} className='mr-4 my-4'/>
        <Image key="gucci" src={`/gucci.png`} alt="gucci" width={156} height={36} className='mr-4 my-4'/>
        <Image key="prada" src={`/prada.png`} alt="prada" width={194} height={32} className='mr-4 my-4'/>
        <Image key="calvinklein" src={`/calvin.svg`} alt="calvinklein" width={206.79} height={33.35} className='mr-4 my-4'/>
      </div>

      {/* New Arrivals */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-3xl font-extrabold mb-12 text-center">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-left">
            <Image src="/Products/Homepage/Checkered shirt.png" alt="Checkered shirt" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Checkered shirt</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
          <div className="text-left">
            <Image src="/Products/Homepage/Skinny fit jeans.png" alt="Skinny fit jeans" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Skinny fit jeans</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
          <div className="text-left">
            <Image src="/Products/Homepage/Sleeve striped t-shirt.png" alt="Sleeve striped t-shirt" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Sleeve striped t-shirt</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
          <div className="text-left">
            <Image src="/Products/Homepage/T-shirt with Tape details.png" alt="T-shirt with Tape Details" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">T-shirt with Tape Details</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
        </div>
        <div className="w-full px-4 sm:px-0 text-center mt-6">
          <a className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">View All</a>
        </div>
      </section>

      {/* Top Selling */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-3xl font-extrabold mb-12 text-center">TOP SELLING</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-left">
            <Image src="/Products/Homepage/Vertical Striped Shirt.png" alt="Vertical Striped Shirt" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Vertical Striped Shirt</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
          <div className="text-left">
            <Image src="/Products/Homepage/Courage Graphic T-shirt.png" alt="Courage Graphic T-shirt" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Courage Graphic T-shirt</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
          <div className="text-left">
            <Image src="/Products/Homepage/Loose Fit Bermuda Shorts.png" alt="Loose Fit Bermuda Shorts" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Loose Fit Bermuda Shorts</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
          <div className="text-left">
            <Image src="/Products/Homepage/Faded Skinny Jeans.png" alt="Faded Skinny Jeans" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
            <p className="mt-2 text-l md:text-xl font-semibold">Faded Skinny Jeans</p>
            <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
            <p className="font-bold text-2xl">$120</p>
          </div>
        </div>
        <div class="w-full px-4 sm:px-0 text-center mt-6">
          <a class="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">View All</a>
        </div>
      </section>

      {/* Browse by Dress Style */}
      {/* <section className="px-6 md:px-16 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div key={style} className="text-center">
              <Image src={`/${style.toLowerCase()}.png`} alt={style} width={200} height={200} className="mx-auto rounded-lg" />
              <p className="mt-2 font-semibold">{style}</p>
            </div>
          ))}
        </div>
      </section> */}
      {/* <div className="flex justify-center">
        <Image src="/dress-style.png" alt="Dress Style" width={1239} height={866} className='' />
      </div> */}
      <div className='mb-[50px] sm:mb-20'>
        <div className='px-4 xl:px-0'>
          <section className="mx-auto max-w-[1220px] bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
            <h2 className="font-extrabold text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize">BROWSE BY DRESS STYLE</h2>
              <div className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5">
                <a className="w-full md:h-full rounded-[20px]  text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover lg:max-w-[360px] xl:max-w-[407px] bg-top h-[190px] bg-[url('/images/dress-style-1.png')]" href="/shop#casual">Casual</a>
                <a className="w-full md:h-full rounded-[20px]  bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-2.png')]" href="/shop#formal">Formal</a>
              </div>
              <div className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5">
                <a className="w-full md:h-full rounded-[20px]  bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-3.png')]" href="/shop#party">Party</a>
                <a className="w-full md:h-full rounded-[20px]  bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-4.png')]" href="/shop#gym">Gym</a>
              </div>
          </section>
        </div>
      </div>

      {/* Customer Reviews */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-2xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Sarah M.", "Alex K.", "James L."].map((name) => (
            <div key={name} className="p-4 border rounded-xl">
              <p className="text-yellow-500">★★★★★</p>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600 mt-2">Customer review text goes here. Replace this with actual review.</p>
            </div>
          ))}
        </div>
      </section>

    <Footer/>
    </div>
  );
}
