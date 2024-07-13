import React from 'react'
import burgerImage from './burger3.png';
import burgerImage2 from './burger5.png';
import burgerImage3 from './burger4.png';

const Products = () => {
  return (
    <section className="bg-[#4169E1] h-full">
  <div className="lg:mx-24 mx-4">
    <div className="">
      <div>
        <div className="flex flex-row gap-4 pt-10 pb-3">
          <h1 className="font-bold lg:text-5xl  text-3xl text-white">OUR</h1>
          <h1 className="font-bold lg:text-5xl  text-3xl text-black">
            PRODUCTS
          </h1>
        </div>
      </div>
      <div>
        <hr className="min-h-5" />
      </div>
    </div>
    <div className="grid grid-cols-12 mt-5 gap-4">
      <div className="bg-white text-black rounded-3xl col-span-12 md:col-span-6 xl:col-span-4 flex flex-col justify-center items-start px-5 hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black">
        <div className="pt-5 pl-2 flex items-start text-start h-full flex-col gap-2">
          <span className="text-sm text-left pl-2">Mini Burger</span>
          <h1 className="lg:text-5xl text-3xl font-bold">Bacon Burger</h1>
        </div>
        <div className="pt-4 flex items-center justify-center w-full">
          <img className="h-full w-full bg-cover" src={burgerImage.src} alt="" />
        </div>
        <div className="flex flex-row justify-between w-full items-center pl-2 my-8">
          <div>
            <div className="lg:text-4xl text-2xl font-bold">₹60.00</div>
            <span className="ml-1">110gr / 300 Cal</span>
          </div>
          <div className="text-center">
            <button className="rounded-[50px] border text-center border-2 border-[#4169E1] hover:text-white hover:bg-black hover:border-none shadow lg:p-3 px-4 p-2 lg:px-6 lg:pb-4 text-[#4169E1] text-2xl">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white text-black rounded-3xl col-span-12 md:col-span-6 xl:col-span-4 flex flex-col justify-center items-start px-5 hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black ">
        <div className="pt-5 pl-2 flex items-start text-start h-full flex-col gap-2">
          <span className="text-sm text-left pl-2">Cheese Burger</span>
          <h1 className="lg:text-5xl text-3xl font-bold">Cheese Burger</h1>
        </div>
        <div className="pt-4 flex items-center justify-center w-full">
          <img className="h-full w-full bg-cover" src={burgerImage2.src} alt="" />
        </div>
        <div className="flex flex-row justify-between w-full items-center pl-2 mb-8 mt-8">
          <div>
            <div className="lg:text-4xl text-2xl font-bold">₹120.00</div>
            <span className="ml-1">140gr / 2500 Cal</span>
          </div>
          <div className="text-center">
            <button className="rounded-[150px] border text-center border-2 border-[#4169E1] hover:text-white hover:bg-black hover:border-none shadow lg:p-3 px-4 p-2 lg:px-6 lg:pb-4 text-[#4169E1] text-2xl">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white text-black rounded-3xl col-span-12 md:col-span-6 xl:col-span-4 flex flex-col justify-center items-start px-5 hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black">
        <div className="pt-5 pl-2">
          <span className="text-sm text-left">Double Burger</span>
        </div>
        <div className="pt-2 text-left">
          <h1 className="lg:text-5xl text-3xl font-bold">Double Burger</h1>
        </div>
        <div className="pt-4 flex items-center justify-center w-full">
          <img className="h-full w-full bg-cover" src={burgerImage3.src} alt="" />
        </div>
        <div className="flex flex-row justify-between w-full items-center pl-2 mb-8 mt-8">
          <div>
            <div className="lg:text-4xl text-2xl font-bold">₹240.00</div>
            <span className="ml-1">440gr / 600 Cal</span>
          </div>
          <div className="text-center">
            <button className="rounded-[150px] border text-center border-2 border-[#4169E1] hover:text-white hover:bg-black hover:border-none shadow lg:p-3 px-4 p-2 lg:px-6 lg:pb-4 text-[#4169E1] text-2xl">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Products