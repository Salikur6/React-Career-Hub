import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
const DetailsTopSection = ({ title }) => {


    return (

        <div className='bg-[#F9F9FF] relative mb-32' >
            <h2 className="text-3xl font-bold text-center py-32 ">{title}</h2>
            <img className='absolute bottom-0 z-0 pointer-events-none' src={bg1} alt="" />
            <img className='absolute top-[-100px] right-0 z-0 pointer-events-none' src={bg2} alt="" />
        </div>
    )
}

export default DetailsTopSection;