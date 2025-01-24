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
                    <a className="text-xl">Blog-Viewer</a>
                </div>

                <div className="navbar-end">
                    <Link href='/' className='text-black'>Home</Link>
                    <Link href={`${user ? '/profile' : '/api/auth/login'}`} className='text-black'>Profile</Link>
                    {
                        user ? <>
                            <LogoutLink> <button className='btn btn-primary'>Log out</button></LogoutLink>
                        </> : <>
                            <LoginLink><button className='btn btn-primary'>Sign in</button></LoginLink>
                            <RegisterLink> <button className='btn btn-primary ml-2'>Sign up</button></RegisterLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;