import { useLoaderData } from "react-router-dom";
import SectionTitles from "../SectionTitles/SectionTitles";

const Category = () => {

    const categoryData = useLoaderData();
    console.log(categoryData)
    return (
        <div className="container mx-auto mb-24">
            <SectionTitles title='Job Category List' subtitle='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitles>

            <div className="grid grid-cols-4 gap-6">
                {categoryData.map(data => {
                    console.log(data)
                    return <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff1a] p-10 rounded-lg" key={data.id}>


                        <img className="bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff0d] p-[15px] rounded-lg mb-8" src={data.logo} alt="" />
                        <p className="text-xl font-bold mb-2">{data.category_name}</p>

                        <p className="text-[#A3A3A3] font-semibold">{data.availability}</p>

                    </div>
                })}
            </div>
        </div>
    )
}

export default Category;