"use client"

import Image from "next/image";

export default function ProductSection(){
    return(
        <>
                  <section className="px-6 md:px-16 py-10 mb-4 max-w-[1350px] mx-auto">
                    <h2 className="text-3xl font-extrabold mb-12 text-center">YOU MIGHT ALSO LIKE</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-left">
                        <Image src="/Product Page/Frame 32.png" alt="Checkered shirt" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
                        <p className="mt-2 text-l md:text-xl font-semibold">Polo with Contrast Trims</p>
                        <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
                        <p className="font-bold text-2xl">$120</p>
                      </div>
                      <div className="text-left">
                        <Image src="/Product Page/Frame 33.png" alt="Skinny fit jeans" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
                        <p className="mt-2 text-l md:text-xl font-semibold">Gradient Graphic T-shirt</p>
                        <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
                        <p className="font-bold text-2xl">$120</p>
                      </div>
                      <div className="text-left">
                        <Image src="/Product Page/Frame 34.png" alt="Sleeve striped t-shirt" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
                        <p className="mt-2 text-l md:text-xl font-semibold">Polo with Tipping Details</p>
                        <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
                        <p className="font-bold text-2xl">$120</p>
                      </div>
                      <div className="text-left">
                        <Image src="/Product Page/Frame 38.png" alt="T-shirt with Tape Details" width={400} height={400} className="mx-auto hover:scale-105 transition-transform" />
                        <p className="mt-2 text-l md:text-xl font-semibold">Black Striped T-shirt</p>
                        <p className="text-yellow-500 text-left text-2xl">★★★★☆</p>
                        <p className="font-bold text-2xl">$120</p>
                      </div>
                    </div>
                    {/* <div className="w-full px-4 sm:px-0 text-center mt-6">
                      <a className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">View All</a>
                    </div> */}
                  </section>
            
        </>
    );
}