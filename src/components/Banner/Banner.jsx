import BannerImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='pt-10 md:flex mb-24 items-center p-4 md:p-0'>
            <div className='order-2 mb-8 md:mb-0'>
                <figure>
                    <img className='h-full w-full' src={BannerImg} alt="" />
                </figure>
            </div>
            <div className='order-1'>
                <h1 className='text-3xl md:text-6xl font-bold mb-6'>One Step <br className='hidden md:block' /> Closer To Your <br /> <span className='text-[#9576FF]'>Dream Job</span></h1>
                <p className='mb-8 w-5/6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <a className="btn hover:bg-[#9576FF] bg-[#9576FF] font-bold text-xl text-white">Get Started</a>
            </div>


        </div>
    )
}

export default Banner;