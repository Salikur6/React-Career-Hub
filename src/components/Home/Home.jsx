import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div className="  ">
            <div className="">
                <div className='bg-[#F9F9FF]'>
                    <Banner></Banner>
                </div>
                <Category></Category>
                <Features></Features>
            </div>
        </div>
    )
}

export default Home;