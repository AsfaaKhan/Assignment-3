import Image from "next/image"
import aboutPic from "../../public/aboutpic.jpg"

export default function About() {
    return (
        <div>
            <hr  />
        <div id="about" className="p-5">
    <h1 className="text-center underline text-4xl sm:text-5xl md:text-6xl font-serif p-4">
        About
    </h1>

    <div className="flex flex-col-reverse lg:flex-row justify-around m-2 px-6 sm:px-10 md:px-12 pt-10 lg:pt-24 lg:pl-10 space-y-10 lg:space-y-0">
        <div className="lg:w-1/2">
            <h1 className="text-xl sm:text-2xl underline pb-4 pt-8 lg:pt-12">
                What Do you know about our website?
            </h1>
            <p className="pr-0 lg:pr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi illo quidem corporis mollitia? Ab eum tempora voluptatum quae aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur architecto fugiat rem earum fuga similique. Quaerat laboriosam maxime aperiam nisi?
            </p>

            <h1 className="text-xl sm:text-2xl underline pb-4 pt-8 lg:pt-12">
                What Do you know about our website?
            </h1>
            <p className="pr-0 lg:pr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi illo quidem corporis mollitia? Ab eum tempora voluptatum quae aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur architecto fugiat rem earum fuga similique. Quaerat laboriosam maxime aperiam nisi?
            </p>
        </div>

        <div className="flex items-center justify-center lg:w-1/4">
            <Image src={aboutPic} width={800} height={650} alt="about pic" />
        </div>
    </div>
</div>
</div>
    )
}