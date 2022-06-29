import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Notfound = () => {
  return (
    <div className='h-screen w-scree flex flex-col justify-center'>
      <center>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl font-bold'>Page Not Found</h1>
          <p className='py-2 text-gray-400'>Sorry, we couldn't find the page you're looking for.</p>
          <div>
            <motion.button font-bold
              initial={{ opacity: 0, y: '-100vh' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 50 }}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to='/'>Go back home</Link>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Notfound