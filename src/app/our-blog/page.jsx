import React from 'react'
import burgerImage from './lastburger1.jpg';
import burgerImage2 from './lastburger2.jpg';
import burgerImage3 from './lastburger3.jpg';
const Blog = () => {
  return (
    <section className="bg-[#4169E1] h-full lg:h-[120vh] lg:pt-10">
  <div className="lg:mx-24 mx-4">
    <div className="">
      <div>
        <div className="flex flex-row gap-4 pt-10 pb-3">
          <h1 className="font-bold lg:text-5xl  text-3xl text-white">OUR</h1>
          <h1 className="font-bold lg:text-5xl  text-3xl text-black">BLOG</h1>
        </div>
      </div>
      <div>
        <hr className="min-h-5" />
      </div>
    </div>
    <div className="grid grid-cols-12 mt-5 gap-4 ">
      <div className="bg-white text-black rounded-[35px] xl:col-span-4 md:col-span-6 col-span-12 flex flex-col items-left   justify-self-start hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black text-left h-full">
        <div className="pt-0">
          <img
            className="h-full w-full bg-cover rounded-t-[35px]"
            src={burgerImage.src}
            alt=""
          />
        </div>
        <div className="p-3 pt-6 pl-4">
          <h1 className="lg:text-3xl text-2xl ">How To Make Burgers</h1>
        </div>
        <div>
          <span className="text-sm pl-4">By Admin / 10st May, 2020</span>
        </div>
        <div className="lg:text-xl text-lg text-gray-400 pl-4 pt-2">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Eos
            Esse Nesciunt Cupiditate Expedita.
          </p>
        </div>
        <div className="p-5 pb-8 pt-6">
          <button className="rounded-full hover:bg-[#3D3D3D] lg:p-6 lg:px-12 p-3 px-6 text-white bg-[#292929] shadow-xl lg:text-xl text-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white text-black rounded-[35px] xl:col-span-4 md:col-span-6 col-span-12 flex flex-col items-left   justify-self-start hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black text-left h-full">
        <div className="pt-0">
          <img
            className="h-full w-full bg-cover rounded-t-[35px]"
            src={burgerImage2.src}
            alt=""
          />
        </div>
        <div className="p-3 pt-6 pl-4">
          <h1 className="lg:text-3xl text-2xl ">How To Make Burgers</h1>
        </div>
        <div>
          <span className="text-sm pl-4">By Admin / 10st May, 2020</span>
        </div>
        <div className="lg:text-xl text-lg text-gray-400 pl-4 pt-2">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Eos
            Esse Nesciunt Cupiditate Expedita.
          </p>
        </div>
        <div className="p-5 pb-8 pt-6">
          <button className="rounded-full hover:bg-[#3D3D3D] lg:p-6 lg:px-12 p-3 px-6 text-white bg-[#292929] shadow-xl lg:text-xl text-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white text-black rounded-[35px] xl:col-span-4 md:col-span-6 col-span-12 flex flex-col items-left   justify-self-start hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black text-left h-full ">
        <div className="pt-0">
          <img
            className="h-full w-full bg-cover rounded-t-[35px]"
            src={burgerImage3.src}
            alt=""
          />
        </div>
        <div className="p-3 pt-6 pl-4">
          <h1 className="lg:text-3xl text-2xl  ">How To Make Burgers</h1>
        </div>
        <div>
          <span className="text-sm pl-4">By Admin / 10st May, 2020</span>
        </div>
        <div className="lg:text-xl text-lg text-gray-400 pl-4 pt-2">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Eos
            Esse Nesciunt Cupiditate Expedita.
          </p>
        </div>
        <div className="p-5 pb-8 pt-6">
          <button className="rounded-full hover:bg-[#3D3D3D] lg:p-6 lg:px-12 p-3 px-6 text-white bg-[#292929] shadow-xl lg:text-xl text-lg ">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Blog