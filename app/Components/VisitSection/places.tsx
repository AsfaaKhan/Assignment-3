import Image from "next/image"
import visitPlaces from "../../public/visitPIc.jpg"

const Places =() =>{
    return(
        <div id="places">
            <hr />
            <div className="mt-20 items-center">
                <h1 className="text-center text-6xl font-serif">Visiting Places</h1>
                <h1 className="text-center pt-10 text-2xl underline ">
                    <a href="/VisitingPlaces" target="_blank" className="hover:text-purple-600" >
                        Winter Holidays You are Dream About
                    </a>
                </h1>
                
                <div className="pt-16 place-items-center ">
                <Image src={visitPlaces} width={600}  height={500} alt="visitImage" className="content-center"/>
                </div>
            </div>



        </div>
    )
}
export default Places