import {useState} from "react";
import Link from 'next/link';
import { Avatar } from "@nextui-org/react";


export const Navbar = ()=> {



    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };


    return(
        <>
            <nav className='flex items-center flex-wrap shadow-sm p-3 '>
                <Avatar size="lg" src="./assets/profile.jpg" color="primary" bordered />
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                                Home
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Blog
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                About
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
