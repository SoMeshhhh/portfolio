import React, { useRef, useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai';
import { Button } from '@nextui-org/react';
import Loader from './Loader';

const Hireme = () => {

  let navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const form = useRef();


  const sendEmail = (e) => {

    e.preventDefault();
    setIsLoading(true)

    emailjs.sendForm('service_2kqlkyf', 'template_ixklihk', form.current, '3EBwPpbj9eCMwMRtD')
      .then((result) => {
        openModal();
        setIsLoading(false);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='bg-slate-900 w-screen h-screen'>
      <div className='p-3 h-1'>
        <Button onClick={() => navigate(-1)} shadow color='secondary' size='xs'>Back</Button>
      </div>
      <div className='h-screen flex justify-center items-center'>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                    >
                      Mail sent successful. <AiOutlineCheck className='text-green-900' />
                    </Dialog.Title>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className='flex flex-col justify-center px-6'>
          <h1 className='text-white text-left text-6xl font-extrabold'>Hire Me.</h1>
          <div className='px-1 py-6'> 
            <p className='text-gray-500 text-left'>I am available for full time, part time and freelance work. Connect with me via email:</p>
            <p className='text-white text-left pt-2 font-bold'>someshhh09@gmail.com</p>
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
              <textarea rows='5' type="text" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
            </div>
            <div className='flex'>
              {isLoading ? <Loader /> : <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hireme