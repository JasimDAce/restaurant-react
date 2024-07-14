import React from 'react'
import pizzaImage from './pizza.png';
import burgerImage from './burger.png';
import burgerImage2 from './burger2.png';

const Menu = () => {
  return (
    <section className="bg-[#4169E1] h-full lg:h-[120vh] lg:pt-10">
  <div className="lg:mx-24 mx-4">
    <div className="">
      <div>
        <div className="flex flex-row gap-4 pt-4 pb-3">
          <h1 className="font-bold lg:text-5xl  text-3xl text-white">OUR</h1>
          <h1 className="font-bold lg:text-5xl  text-3xl text-black">MENU</h1>
        </div>
      </div>
      <div>
        <hr className="min-h-5" />
      </div>
    </div>
    <div className="grid grid-cols-12 gap-4">
      <div className="bg-white text-black rounded-3xl col-span-12 md:col-span-6 xl:col-span-4 flex flex-col justify-center items-center hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black">
        <div className="pt-4">
          <img className="h-full w-full bg-cover" src={pizzaImage.src} alt="" />
        </div>
        <div>
          <span className="text-sm">PIZZA</span>
        </div>
        <div className="p-3">
          <h1 className="lg:text-4xl text-2xl font-bold">6 Mini Pizzas</h1>
        </div>
        <div className="lg:text-2xl text-xl font-medium">
          ₹104.99{" "}
          <sub>
            <del>₹119.99</del>
          </sub>
        </div>
        <div className="p-5 pb-8">
          <button className="rounded-full hover:bg-[#3D3D3D] lg:p-6 lg:px-12 p-3 px-6 text-white bg-[#292929] shadow-xl lg:text-xl text-lg">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="bg-white text-black rounded-3xl col-span-12 md:col-span-6 xl:col-span-4 flex flex-col justify-center items-center hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black">
        <div className="pt-4">
          <img className="h-full w-full bg-cover" src={burgerImage.src} alt="" />
        </div>
        <div>
          <span className="text-sm">BURGER</span>
        </div>
        <div className="p-3">
          <h1 className="lg:text-4xl text-2xl font-bold">5 Mini Burgers</h1>
        </div>
        <div className="lg:text-2xl text-xl font-medium">
          ₹99.99{" "}
          <sub>
            <del>₹105.99</del>
          </sub>
        </div>
        <div className="p-5 pb-8">
          <button className="rounded-full hover:bg-[#3D3D3D] lg:p-6 lg:px-12 p-3 px-6 text-white bg-[#292929] shadow-xl lg:text-xl text-lg">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="bg-white text-black rounded-3xl col-span-12 md:col-span-6 xl:col-span-4 flex flex-col justify-center items-center hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black">
        <div className="pt-4">
          <img className="h-full w-full bg-cover" src={burgerImage2.src} alt="" />
        </div>
        <div>
          <span className="text-sm">BURGER</span>
        </div>
        <div className="p-3">
          <h1 className="lg:text-4xl text-2xl font-bold">3 Meatball Burgers</h1>
        </div>
        <div className="lg:text-2xl text-xl font-medium">
          ₹79.99{" "}
          <sub>
            <del>₹99.99</del>
          </sub>
        </div>
        <div className="p-5 pb-8">
          <button className="rounded-full hover:bg-[#3D3D3D] lg:p-6 lg:px-12 p-3 px-6 text-white bg-[#292929] shadow-xl lg:text-xl text-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Menu