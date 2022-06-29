import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import my_emote from '../images/my_emote.png'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

function Nav() {


    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div>
                <nav className="text-gray-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 pt-2">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 items-center">
                                    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                        <motion.img whileHover={{ scale: 1.2 }} src={my_emote} alt='my_emote' srcSet="" style={{ width: '38.4px' }} className='rounded-full cursor-pointer sm:{w-2 h-24}' />
                                        <span className="ml-3 text-xl">Somesh Patel</span>
                                    </a>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-center justify-center space-x-4 pt-5">
                                        <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
                                            <motion.nav initial={{ opacity: 0, x: '-100vw' }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.1, duration: 2, type: 'spring', stiffness: 70 }} className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-1">
                                                <motion.li whileHover={{ scale: 1.2 }} className='list-none'><Link to='/about' className="mr-5 text-gray-500 hover:text-gray-900 font-bold">about me.</Link></motion.li>
                                                {/* <motion.li whileHover={{ scale: 1.2 }} className='list-none'><button className="mr-5 text-gray-500 hover:text-gray-900 font-bold" onClick={openModal}>contact.</button></motion.li> */}
                                                <motion.li whileHover={{ scale: 1.2 }} className='list-none'><a href='../Resume/Somesh_Patel.pdf' download className="mr-5 text-gray-500 hover:text-gray-900 font-bold">download resume.</a></motion.li>
                                                <motion.li whileHover={{ scale: 1.2 }} className='list-none'><a href="#section-1" className="mr-5 text-gray-500 hover:text-gray-900 font-bold">connect.</a></motion.li>
                                                <motion.li whileHover={{ scale: 1.2 }} className='list-none'>
                                                    <motion.div font-bold
                                                        initial={{ opacity: 0, x: '-100vw' }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 1.1, duration: 2, type: 'spring', stiffness: 70 }}
                                                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to='/hireme' className="text-gray-500">Hire Me</Link>
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </motion.div>
                                                </motion.li>
                                            </motion.nav>
                                        </Scrollspy>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-white-900 inline-flex items-center justify-center p-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="black"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="black"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-1000 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-1000 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} >
                                    <ul className="flex flex-col justify-center items-end px-2 pt-2 pb-3 space-y-1 sm:px-3 pr-1">
                                        <li><Link to='/about' className="mr-5 text-gray-500 hover:text-gray-900 font-bold">about me.</Link></li>

                                        {/* <li><button className="mr-5 text-gray-500 hover:text-gray-900 block px-3 py-2 font-bold" onClick={openModal}>contact.</button></li> */}

                                        <li><a
                                            href="../Resume/Somesh_Patel.pdf"
                                            download
                                            className="mr-5 text-gray-500 hover:text-gray-900 block px-3 py-2 font-bold"
                                        >
                                            download resume.
                                        </a></li>

                                        <li><a
                                            href="#section-1"
                                            className="mr-5 text-gray-500 hover:text-gray-900 block px-3 py-2 font-bold"
                                        >
                                            connect.
                                        </a></li>
                                        <motion.li whileHover={{ scale: 1.2 }} className='list-none'>
                                            <motion.button font-bold
                                                initial={{ opacity: 0, x: '-100vw' }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.1, duration: 2, type: 'spring', stiffness: 70 }}
                                                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to='/hireme' className="text-gray-500">Hire Me</Link>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </motion.button>
                                        </motion.li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </div>
        </>
    );
}

export default Nav;
