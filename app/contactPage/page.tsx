import ContactPage from "@/components/Contact";
import Image from "next/image";

export default function Contact(){
    return(
        <div className="flex flex-col gap-6 mt-32 mb-20 justify-center items-center">
            <div>
                <Image src={"/places/contsctImg.png"}
                alt="contact image"
                width={500}
                height={400}>

                </Image>
            </div>
            <div>
            <ContactPage/>
            </div>

            <div>
                <Image src={"/places/logoPic.png"}
                alt="contact image"
                width={500}
                height={400}>

                </Image>
            </div>
           
        </div>
    )
}