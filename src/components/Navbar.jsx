import Link from 'next/link';
import React from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const Navbar = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div>
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-4">
                            <Link href='/'>Home</Link>
                            <Link href='/profile'>Profile</Link>
                        </ul>
                    </div>
                    <a className="text-xl">Blog-Viewer</a>
                </div>
                
                <div className="navbar-end">
                    {
                        user ? <>
                            <button className='btn btn-primary'><LogoutLink>Log out</LogoutLink></button>
                        </> : <>
                            <button className='btn btn-primary'><LoginLink>Sign in</LoginLink></button>
                            <button className='btn btn-primary ml-2'><RegisterLink>Sign up</RegisterLink></button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;