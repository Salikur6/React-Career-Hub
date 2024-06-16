import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
    console.log(feature)
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = feature;
    return (
        <div className="border border-[#e8e8e8] p-10 mb-10 flex flex-col justify-between">


            <div>
                <img className="mb-8" src={logo} alt="" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{job_title}</h2>
            <h3 className="text-xl font-semibold text-[#757575] mb-4">{company_name}</h3>

            <div className="mb-4">
                <button className=" mb-2 btn font-bold text-[#7e90fe] py-2 px-5 border border-[#7e90fe] mr-4 rounded">{remote_or_onsite}</button>
                <button className="btn font-bold text-[#7e90fe] py-2 px-5 border border-[#7e90fe] mr-4 rounded">{job_type}</button>
            </div>



            <div className="sm:flex">

                <p className="flex items-center text-xl text-[#757575] mr-6 mb-2"> <CiLocationOn className="text-2xl mr-2" /> {location}</p>

                <p className="flex items-center text-xl text-[#757575]">
                    <RiMoneyDollarCircleLine className="text-2xl mr-2" /> Salary :  {salary}
                </p>

            </div>


            <div>
                <Link to={`/job/${id}`}>    <button className="mt-6 text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                    View Details
                </button></Link>
            </div>


        </div>
    )
}

export default Feature;