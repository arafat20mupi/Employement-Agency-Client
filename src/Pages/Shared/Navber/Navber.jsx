import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className="navbar bg-pink-50  md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-50 bg-white mt-3 w-52 p-2 shadow">
                        <li><Link to={'/'}>Home</Link></li>
                        <li>
                            <details>
                                <summary><Link to={'/service'}>Service</Link></summary>
                                <ul className="flex flex-col z-50 gap-1">
                                    <Link className=' px-3 py-2 hover:bg-gray-100 ' to={'/employer'}><a>For Employer</a></Link>
                                    <Link className=' px-3 py-2 hover:bg-gray-100 ' to={'/candidate'}><a>For Candidates</a></Link>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={'/team'}>Our Team</Link></li>
                        <li><Link to={'/jobs'}>Jobs</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="w-16 h-16">
                    {/* Euro-Bangla */}
                    <img src="logo.png" alt=""
                        className='rounded-full '
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl font-medium px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li>
                        <details>
                            <summary><Link to={'/service'}>Service</Link></summary>
                            <ul className="flex flex-col z-50 gap-1">
                                <Link className=' px-3 py-2 hover:bg-gray-100 ' to={'/employer'}><a>For Employer</a></Link>
                                <Link className=' px-3 py-2 hover:bg-gray-100 ' to={'/candidate'}><a>For Candidates</a></Link>
                            </ul>
                        </details>
                    </li>
                    <li><Link to={'/team'}>Our Team</Link></li>
                    <li><Link to={'/jobs'}>Jobs</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/contact'} className="bg-blue-400 hover:bg-pink-500 btn">Contact Us</Link>
            </div>
        </div>
    );
};

export default Navbar;
