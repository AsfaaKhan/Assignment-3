
import Image from "next/image"

export default function SubAbout() {
    return (
        <div>
            <hr />
            <div id="about" className="p-5">
                <h1 className="text-center underline text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-serif  my-20">
                    About
                </h1>


                {/* Section 1 */}
                <div className=" container flex flex-col justify-center items-center  gap-8 md:flex-row lg:flex-row md:justify-between lg:justify-between xl:justify-between md:items-center  pt-5 lg:pt-6 pb-16  ">
                    <div className=" flex flex-col justify-center   gap-6">
                        <h1 className="text-xl sm:text-2xl underline pb-4 pt-8 lg:pt-12">
                            What Do you know about our website?
                        </h1>
                        <p className="w-[350px] lg:w-[450px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi illo quidem corporis mollitia? Ab eum tempora voluptatum quae aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur architecto fugiat rem earum fuga similique. Quaerat laboriosam maxime aperiam nisi?
                        </p>

                        <h1 className="text-xl sm:text-2xl underline pb-4 pt-8 lg:pt-12">
                            What Do you know about our website?
                        </h1>
                        <p className="w-[350px] lg:w-[450px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi illo quidem corporis mollitia? Ab eum tempora voluptatum quae aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur architecto fugiat rem earum fuga similique. Quaerat laboriosam maxime aperiam nisi?
                        </p>
                    </div>

                    <div>
                        <Image
                            src={'/New folder/backgroundImage.jpg'} width={400} height={200} alt="about pic" ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
