import React from 'react';
import { useState, Fragment, useRef } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { BiMessageSquare } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Transition, Dialog } from "@headlessui/react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';

const Talk = () => {


    const [isLoading, setIsLoading] = useState(false);

    let success_id = 'success1';

    const toastId = success_id;

    let [isOpenn, setIsOpenn] = useState(false);


    const notify = (success_id) => {

        if (!toast.isActive(toastId.current)) {

            toast.success("Mail Sent Successfully", {
                toastId: success_id,
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                transition: Slide,
            });
        }

    };

    function closeModal() {
        setIsOpenn(false)
        setIsLoading(false)
    }

    function openModal() {
        setIsOpenn(true)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.sendForm('service_2kqlkyf', 'template_7c0qjf3', form.current, '3EBwPpbj9eCMwMRtD')
            .then((result) => {
                closeModal()
                notify(success_id);
                console.log('Sent');
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <>
            <Transition appear show={isOpenn} as={Fragment}>
                <Dialog as="div" className="relative z-10 w-screen" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-end'>
                                        <AiOutlineClose className='text-white cursor-pointer' onClick={closeModal} />
                                    </div>
                                    <div className='flex flex-col justify-center px-6'>
                                        <h1 className='text-white text-left text-6xl font-extrabold'>Contact Now.</h1>
                                        <div className='px-1 py-6'>
                                            <p className='text-gray-500 text-left'>Have a project or question? Send me a message. I will reply within 48 hours.</p>
                                        </div>
                                        <form method='post' ref={form} onSubmit={sendEmail}>
                                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="text" name="user_name" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                    <label for="user_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="email" name="user_email" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                    <label for="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input rows='5' type="text" name="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                <label for="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">
                                                <textarea rows='5' type="text" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                                            </div>
                                            <div className='flex'>
                                                {isLoading ? <Loader /> : <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>}
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div className='w-screen'>
                <ToastContainer />
                <section className='bg-white h:{2vh} w-screen'>
                    <div className="container mx-auto flex flex-col justify-center items-center px-5 py-28">
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-green-500 object-cover object-center mr-2' />
                            <p id='available' className='uppercase font-light'>Available for Freelance Projects</p>
                        </div>
                        <div className='flex justify-center items-center align-middle'>
                            <h2 className='text-zinc-700 title-font font-medium py-14 sm:text-4xl text-2xl'>Do you have Web Development <br /> project? Let's talk.</h2>
                        </div>
                        <div>
                            <motion.button
                                whileHover={{ scale: 0.8 }}
                                initial={{ x: 100 }}
                                animate={{ x: 1 }}
                                transition={{ ease: "easeOut" }}
                                className="inline-flex items-center text-white bg-green-600 border-0 py-3 px-6 focus:outline-none hover:bg-green-300 my-3 rounded-full" onClick={openModal}>
                                <BiMessageSquare className='mr-2' /><p>Let's Talk Now</p>
                            </motion.button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Talk