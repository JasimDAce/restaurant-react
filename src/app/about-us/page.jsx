import React from 'react'
import burgerImage from './burgerDancing.png';

const About = () => {
  return (
    <section className="bg-[#4169E1] h-dvh">
  <div className="lg:mx-24 mx-4">
    <div className="">
      <div>
        <div className="flex flex-row gap-4 pt-10 pb-3">
          <h1 className="font-bold text-5xl text-white">ABOUT</h1>
          <h1 className="font-bold text-5xl text-black">US</h1>
        </div>
      </div>
      <div>
        <hr className="min-h-5" />
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 p-6">
        <img
          className="hover:animate-bounce"
          src={burgerImage.src}
          alt=""
        />
      </div>
      <div className="col-span-12 lg:col-span-6 p-8">
        <h1 className="text-4xl font-bold text-white">
          What Is The Secret Receipe Of Our Burgers
        </h1>
        <p className="py-5 text-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          deserunt itaque a omnis. Molestias, officia?
        </p>
        <p className="py-5 text-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          deserunt itaque a omnis. Molestias, officia?
        </p>
        <p className="py-5 text-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          deserunt itaque a omnis. Molestias, officia?
        </p>
        <p className="py-5 text-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          deserunt itaque a omnis. Molestias, officia?
        </p>
        <button className="rounded-full bg-[#292929] my-5 hover:bg-white hover:text-[#4169E1] p-5 text-white shadow px-10 text-xl">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

  )
}

export default About