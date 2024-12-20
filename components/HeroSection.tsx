import {Dancing_Script} from "next/font/google";
const Font = Dancing_Script({
  subsets : ["latin"],
  weight: ['400','500','600','700'],
});



const Section = () => {
    return (
        <div>
    <div className="relative bg-[url('/image1.jpg')] bg-cover bg-no-repeat bg-center  h-[400px]  md:h-[500px]  lg:h-[80vh]  mx-auto p-20 sm:p-10 md:p-20 flex justify-center flex-col  gap-7 items-center ">
    <div className="absolute inset-0 bg-black h-[400px] md:h-[500px] lg:h-[80vh] bg-opacity-60"></div>
        <div className={`${Font.className}   absolute text-white  font-extrabold text-4xl sm:text-[60px] md:text-[80px] p-4 sm:p-6 md:p-8 border-none  rounded-full flex flex-col gap-6  sm:gap-7 md:gap-8 lg:gap-10  justify-center items-center`}>
            <h1>Pakistan Travel Agency</h1>
            <a href="/VisitingPlaces" className= "p-4  text-white text-xl sm:text-2xl rounded-full hover:underline w-[150px] text-center hover:text-purple-500 border-[1px]  ">
                Explore Places
            </a>
        </div>
       
           
        
    </div>
</div>

    )

}
export default Section