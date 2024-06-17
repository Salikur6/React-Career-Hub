import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        <li><NavLink to='/statistic'>Statistic</NavLink></li>

        <li><NavLink to='applied'>Applied Jobs</NavLink></li>
        <li><NavLink to='blogs'>Blogs</NavLink></li>
    </>
    return (
        <div className="bg-[#F9F9FF] z-50">
            <div className="navbar container mx-auto pt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn text-[#1A1919] text-sm sm:text-2xl font-bold">CareerHub</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1  font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn hover:bg-[#9576FF] bg-[#9576FF] font-bold sm:text-xl text-sm text-white">Start Applying</a>
                </div>
            </div>
        </div>
    )
}

export default Header;