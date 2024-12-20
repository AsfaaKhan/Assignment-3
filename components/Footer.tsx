import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-gradient-to-t from-white to-purple-950 p-6  py-20">
                <div className="flex  justify-center items-center gap-5  ">
                    <div className="flex gap-3">
                        <FaGithub size={24} className="hover:text-purple-950"/>
                        <a href="https://github.com/AsfaaKhan" target="_blank" className="hover:text-white underline text-lg md:text-xl">
                            GitHub
                        </a>
                    </div>
                    <div className="flex gap-3">
                        <FaLinkedin size={24} className="hover:text-purple-950"/>
                        <a href="https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank
                    " className="hover:text-white underline text-lg md:text-xl">
                            Linkedin
                        </a>
                    </div>

                    <div className="flex gap-3">
                        <FaFacebook size={24} className="hover:text-purple-950"/>
                        <a href="https://www.instagram.com/" target="_blank" className="hover:text-white underline text-lg md:text-xl">
                            Instagram
                        </a>
                    </div>
                </div>


            </div>


        </div>
    )
}
export default Footer