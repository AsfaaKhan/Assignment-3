import Image from "next/image"


const places = () => {
    return (
        <div id="visitingPlaces" >
            {/* 1st Section */}
            <div className="container mx-auto mt-28 py-32 md:p-16">
                <h1 className="text-center text-4xl font-serif font-extrabold underline pb-12">
                    Destinations
                </h1>

               

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Each image section */}
                    <div className="relative group">
                        <Image
                            src={"/places/maree.jpg"}
                            width={300}
                            height={400}
                            alt="Maree Pic"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Maree</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">25000 Rs</p>
                           
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/places/sawat.jpg"}
                            width={300}
                            height={400}
                            alt="Sawat Pic"
                            className="w-full  object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Sawat</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">25000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/places/hunza.jpg"}
                            width={300}
                            height={400}
                            alt="Hunza Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex  flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Hunza</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">22000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/places/gilgit baltistan.jpg"}
                            width={300}
                            height={400}
                            alt="Gilgit Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Gilgit</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">35000 Rs</p>
                        </div>
                    </div>

                    

                    <div className="relative group">
                        <Image
                            src={"/places/skardu.jpg"}
                            width={300}
                            height={400}
                            alt="Skardu Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Skardu</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">20000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/destination5.jpg"}
                            width={300}
                            height={400}
                            alt="Naran Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Naran</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">30,000 Rs</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Parallax */}
            <div className="bg-[url('/parallax.jpg')] bg-cover bg-fixed bg-no-repeat bg-center  h-screen">
            </div>
           

           {/* 2nd Section */}
           <div className="container mx-auto mt-28 py-32 md:p-16">
                <h1 className="text-center text-4xl font-serif font-extrabold underline pb-12">
                    Destinations
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Each image section */}
                    <div className="relative group">
                        <Image
                            src={"/destination1.jpg"}
                            width={300}
                            height={400}
                            alt="Maree Pic"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Maree</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">25000 Rs</p>
                           
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/destination2.jpg"}
                            width={300}
                            height={400}
                            alt="Sawat Pic"
                            className="w-full  object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Sawat</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">25000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/destination3.jpg"}
                            width={300}
                            height={400}
                            alt="Hunza Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex  flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Hunza</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">22000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/destination4.jpg"}
                            width={300}
                            height={400}
                            alt="Gilgit Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Gilgit</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">35000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/image3.jpg"}
                            width={300}
                            height={400}
                            alt="Skardu Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Skardu</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">20000 Rs</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image
                            src={"/destination5.jpg"}
                            width={300}
                            height={400}
                            alt="Naran Pic"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-3xl font-bold">Naran</span>
                            <h1 className="text-white text-2xl font-extrabold overline">3 Days Packages:</h1>
                            <p  className="text-white text-xl font-extrabold italic">30,000 Rs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default places