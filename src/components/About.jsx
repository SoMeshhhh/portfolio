import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { Button } from '@nextui-org/react';
import emoji from '../images/emoji.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const About = () => {

    let navigate = useNavigate();

    let [categories] = useState({
        'Main Skills': [
            {
                id: 1,
                title: 'Frontend & Backend Development',
                text: `Build websites and web apps using javascript and it's frameworks.`,
            },
            {
                id: 2,
                title: "Working with API and version control systems",
                text: 'Designing and developing APIs.',
            },
        ],
        'Education': [
            {
                id: 1,
                title: 'B.com (Computer Application)',
                text: 'Navsamvat Law College - 2022',
            },
            {
                id: 2,
                title: 'Secondry & Higher Secondry Education',
                text: 'Kalidas Montessori Sr. Sec. school - 2019',
            },
        ],
    })

    return (
        <div className='bg-neutral-900'>
            <div className='p-3 h-1'>
                <Button onClick={() => navigate(-1)} shadow color='secondary' size='xs'>Back</Button>
            </div>
            <div className='h-screen flex flex-col justify-center items-center'>
                <div className='flex justify-center px-6'>
                    <div className=''>
                        <img src={emoji} alt="" className='w-44' />
                    </div>
                    <div className='flex items-end py-5'>
                        <h1 className='text-white text-6xl font-extrabold md:{text-3xl}'>About Me.</h1>
                    </div>
                </div>
                <div className="max-w-md px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl bg-neutral-900 p-3',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative rounded-md p-3 hover:bg-black"
                                            >
                                                <h3 className="text-lg text-white font-medium leading-5">
                                                    {post.title}
                                                </h3>

                                                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                    <li>{post.text}</li>
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}

export default About