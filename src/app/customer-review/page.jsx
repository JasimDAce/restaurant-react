import React from 'react'

const Review = () => {
  return (
    <section className="bg-[#4169E1] h-full">
  <div className="lg:mx-24 mx-4">
    <div className="">
      <div>
        <div className="flex flex-row gap-4 pt-10 pb-3">
          <h1 className="font-bold lg:text-5xl text-3xl text-white">
            CUSTOMER'S
          </h1>
          <h1 className="font-bold lg:text-5xl  text-3xl text-black">REVIEW</h1>
        </div>
      </div>
      <div>
        <hr className="min-h-5" />
      </div>
    </div>
    <div className="grid grid-cols-12 mt-5 gap-4">
      <div className="bg-white text-black rounded-3xl xl:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 text-center justify-center items-center px-5 hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black py-10">
        <div>
          <img
            className="lg:h-[25vh] lg:w-[25vh] h-[15vh] w-[15vh]"
            src="quotes.png"
            alt=""
          />
        </div>
        <p className="text-lg">
          Dicta Totam Suscipit Vero Praesentium Excepturi Facilis, Fuga At
          Architecto Dolor Tempora Molestias Quam Dignissimos Sit. Molestiae
          Temporibus Ratione Quas Placeat Possimus!
        </p>
        <div>
          <img className="h-[10vh] w-[10vh] mt-8" src="lady.png" alt="" />
        </div>
        <div className="text-sm font-bold">Patrick Hellinger</div>
        <div className="text-[#FFD700]">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="bg-white text-black rounded-3xl xl:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 text-center justify-center items-center px-5 hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black py-10">
        <div>
          <img
            className="lg:h-[25vh] lg:w-[25vh] h-[15vh] w-[15vh]"
            src="quotes.png"
            alt=""
          />
        </div>
        <p className="text-lg">
          Dicta Totam Suscipit Vero Praesentium Excepturi Facilis, Fuga At
          Architecto Dolor Tempora Molestias Quam Dignissimos Sit. Molestiae
          Temporibus Ratione Quas Placeat Possimus!
        </p>
        <div>
          <img className="h-[10vh] w-[10vh] mt-8" src="serena.png" alt="" />
        </div>
        <div className="text-sm font-bold">Helen Marksen</div>
        <div className="text-[#FFD700]">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="bg-white text-black rounded-3xl xl:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 text-center justify-center items-center px-5 hover:translate-y-[-12px] hover:shadow-xl hover:shadow-black py-10">
        <div>
          <img
            className="lg:h-[25vh] lg:w-[25vh] h-[15vh] w-[15vh]"
            src="quotes.png"
            alt=""
          />
        </div>
        <p className="text-lg">
          Dicta Totam Suscipit Vero Praesentium Excepturi Facilis, Fuga At
          Architecto Dolor Tempora Molestias Quam Dignissimos Sit. Molestiae
          Temporibus Ratione Quas Placeat Possimus!
        </p>
        <div>
          <img className="h-[10vh] w-[10vh] mt-8" src="willams.png" alt="" />
        </div>
        <div className="text-sm font-bold">Serena Williams</div>
        <div className="text-[#FFD700]">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Review