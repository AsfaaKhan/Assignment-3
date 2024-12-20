import Image from "next/image"

const Places =() =>{
    return(
        <div id="places">
            <hr />
            <div className="mt-20 mb-20 items-center">
  <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">
    Visiting Places
  </h1>
  <h1 className="text-center pt-8 sm:pt-10 text-xl sm:text-2xl underline">
    <a
      href="/visitingPlaces"
      target="_blank"
      className="hover:text-purple-600"
    >
      Winter Holidays You are Dreaming About
    </a>
  </h1>

  <div className="pt-12 sm:pt-16 flex justify-center">
    <Image src={'/New folder/visitPIc.jpg'} width={400} height={300}
      className=" sm:w-96 md:w-[500px] lg:w-[600px]"
      alt="visitImage"
    />
  </div>
</div>




        </div>
    )
}
export default Places