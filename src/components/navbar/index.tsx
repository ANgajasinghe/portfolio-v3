import React from 'react';
import {useState} from "react";
import Link from 'next/link';
import { Avatar } from "@nextui-org/react";
import styles from './Navbar.module.css';


export const Navbar = ()=> {



    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };


    return(
        <>
            <nav className='container mx-auto flex items-center flex-wrap p-3 '>
                <Avatar size="lg" src="./assets/profile.jpg" color="primary" bordered />
                <span className='text-lg font-bold ml-4'>
                    Akalanka Nayanajith
                </span>
                <button
                    className=' inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto hover:text-white outline-none'
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
                    }   w-full mt-2 lg:inline-flex lg:flex-grow lg:w-auto lg:mt-0`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a className={styles.navItem}>
                                Home
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className={styles.navItem}>
                                Blog
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className={styles.navItem}>
                                About
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
