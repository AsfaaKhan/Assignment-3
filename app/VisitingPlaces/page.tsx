import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"
import Image from "next/image"
import mareePic from "../../app/public/maree.jpg"
import hunzaPic from "../../app/public/hunza.jpg"
import gilgitPic from "../../app/public/gilgit baltistan.jpg"
import naranPic from "../../app/public/naran.jpg"
import sawatPic from "../../app/public/sawat.jpg"
import skarduPic from "../../app/public/skardu.jpg"


const places = () => {
    return (

        <div id="visitingPlaces" >
    <Header />
    
    <div className="container mx-auto pt-32 md:p-16">
        <h1 className="text-center text-4xl font-serif font-extrabold underline pb-12">
            Destinations
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* Each image section */}
            <div className="relative group">
                <Image
                    src={mareePic}
                    width={300}
                    height={400}
                    alt="Maree Pic"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Maree</span>
                </div>
            </div>

            <div className="relative group">
                <Image
                    src={sawatPic}
                    width={300}
                    height={400}
                    alt="Sawat Pic"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Sawat</span>
                </div>
            </div>

            <div className="relative group">
                <Image
                    src={gilgitPic}
                    width={300}
                    height={400}
                    alt="Gilgit Pic"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Gilgit</span>
                </div>
            </div>

            <div className="relative group">
                <Image
                    src={hunzaPic}
                    width={300}
                    height={400}
                    alt="Hunza Pic"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Hunza</span>
                </div>
            </div>

            <div className="relative group">
                <Image
                    src={skarduPic}
                    width={300}
                    height={400}
                    alt="Skardu Pic"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Skardu</span>
                </div>
            </div>

            <div className="relative group">
                <Image
                    src={naranPic}
                    width={300}
                    height={400}
                    alt="Naran Pic"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Naran</span>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>

    )
}
export default places