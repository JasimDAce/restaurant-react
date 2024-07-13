import myImage from './head.jpg';

export default function Home() {
  return (
    <header  
    style={{ backgroundImage: `url(${myImage.src})` }}
    className="h-screen bg-cover bg-center flex flex-col items-start gap-8 justify-center font-[Poppins]">
  <div className="flex flex-col items-start gap-8 justify-center lg:m-24 m-8">
    <h1 className="lg:text-7xl  text-5xl text-white font-bold">
      Fast Food Delivery
    </h1>
    <p className="lg:text-2xl text-xl text-white lg:w-1/2 w-full">
      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Incidunt
      Perferendis Obcaecati Iste Voluptatum, Quaerat Nihil Magnam Numquam Sint?
    </p>
    <button className="rounded-full bg-[#292929] hover:bg-[#3D3D3D] lg:p-5 p-3 px-6 text-white shadow lg:px-10 lg:text-xl text-lg">
      Order Now
    </button>
  </div>
</header>
  )
}
