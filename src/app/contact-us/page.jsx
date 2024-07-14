import React from 'react'

const Contact = () => {
  return (
    <section className="bg-[#4169E1] h-full lg:h-[120vh] lg:pt-10">
  <div className="lg:mx-24 mx-4">
    <div className="">
      <div>
        <div className="flex flex-row gap-4 pt-10 pb-3">
          <h1 className="font-bold lg:text-5xl  text-3xl text-white">
            CONTACT
          </h1>
          <h1 className="font-bold lg:text-5xl  text-3xl text-black">US</h1>
        </div>
      </div>
      <div>
        <hr className="min-h-5" />
      </div>
    </div>
    <div className="grid grid-cols-12 mt-10 gap-0 h-full w-full">
      <iframe
        className="md:col-span-6 col-span-12 w-full h-full object-cover"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.3235940970079!2d8.540719273659763!3d47.3713194174677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a00aa1e1d17%3A0x278f576acdd580f5!2sStorchen%20Z%C3%BCrich%20-%20Lifestyle%20Boutique%20Hotel!5e0!3m2!1sde!2sch!4v1658505945506!5m2!1sde!2sch"
        allowFullScreen=""
        loading="lazy"
      />
      <form className="md:col-span-6 col-span-12 bg-[#292929] flex flex-col justify-center items-center text-center lg:gap-6 gap-3 py-5 ">
        <h2 className="lg:text-4xl text-2xl text-white font-bold mb-4">
          GET IN TOUCH
        </h2>
        <div className="bg-[#292929] border-2 border-[gray] flex flex-row items-center">
          <i className="fa-solid fa-user-large lg:pl-4 pl-2 lg:text-2xl text-xl text-white" />
          <input
            className="w-full lg:w-[70vh] lg:py-6 py-4 px-2 lg:px-3 my-3 lg:text-2xl  text-xl bg-[#292929] text-white outline-none"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="bg-[#292929] border-2 border-[gray] flex flex-row items-center ">
          <i className="fa-solid fa-envelope lg:pl-4 pl-2 lg:text-2xl text-xl text-white" />
          <input
            className="w-full lg:w-[70vh] lg:py-6 py-4 px-2 lg:px-2 my-3 lg:text-2xl  text-xl bg-[#292929] text-white outline-none"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="bg-[#292929] border-2 border-[gray] mb-4 flex flex-row items-center">
          <i className="fa-solid fa-phone lg:pl-4 pl-2 lg:text-2xl text-xl text-white" />
          <input
            className="w-full lg:w-[70vh] lg:py-6 py-4 px-2 lg:px-2 my-3 lg:text-2xl  text-xl bg-[#292929] text-white outline-none"
            type="number"
            placeholder="number"
          />
        </div>
        <button className="rounded-full text-[#4169E1] lg:text-xl text-lg lg:p-4 p-3 lg:px-8  px-6 lg:mt-4 mt-3 font-bold bg-white">
          Contact Now
        </button>
      </form>
    </div>
  </div>
</section>

  )
}

export default Contact