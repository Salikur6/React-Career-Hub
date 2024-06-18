import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job, handleRemoveBtn }) => {
    // console.log(job)

    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = job;



    return (
        <div className="container mx-auto">
            <div className="border border-[#e8e8e8] gap-8 p-[30px] mb-10 flex flex-col justify-between lg:grid lg:grid-cols-4 lg:items-center">


                <div className="bg-[#F4F4F4] flex h-full w-full p-14 lg:p-0 justify-center items-center">
                    <img className="" src={logo} alt="" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">{job_title}</h2>
                    <h3 className="text-xl font-semibold text-[#757575] mb-4">{company_name}</h3>

                    <div className="mb-4">
                        <button className=" mb-2 btn font-bold text-[#7e90fe] py-2 px-5 border border-[#7e90fe] mr-4 rounded">{remote_or_onsite}</button>
                        <button className="btn font-bold text-[#7e90fe] py-2 px-5 border border-[#7e90fe] mr-4 rounded">{job_type}</button>
                    </div>
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

                    <button onClick={() => handleRemoveBtn(id)} className="mt-6 text-xl font-bold text-white btn btn-error">
                        Remove
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Job;