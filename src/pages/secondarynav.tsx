import React from 'react'
import { useEffect, useState } from 'react';
import Loading from '../components/loading'


export default function SecondaryNav(props: any) {
    const thisPage = props.page
    const [recent, setRecent] = useState(false)
    const [popular, setPopular] = useState(false)
    const [Rising, setRising] = useState(false)
    const [oldest, setOldest] = useState(false)
    const [done, setDone] = useState(false)
    useEffect(() => {
        
        setTimeout(() => {
            setDone(true)
        }, 250)
        
      }, []);
    useEffect(() => {
        if (props.page === 'recent') {
            setRecent(true)
        }
        if (props.page === 'popular') {
            setPopular(true)
        }
        if (props.page === 'rising') {
            setRising(true)
        }
        if (props.page === 'oldest') {
            setOldest(true)
        }
    }, [])
    
    return (
    <>
    
    { recent ? (
        <div className='w-full h-full flex'>
            {! done ? (
                <Loading />
            ): (
              <ul className="mx-auto flex text-sm font-medium text-center text-gray-500 rounded-full divide-x divide-gray-200 border-2 hover:text-black active:bg-blue-700 dark:divide-gray-700 dark:text-gray-400 mt-24">
                <li className="w-full">
                    <a href="/?page=recent" className="inline-block px-6 py-3 w-full text-gray-900 hover:text-black rounded-l-full bg-blue-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Recent</a>
                </li>
                <li className="w-full">
                    <a href="/?page=popular" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Popular</a>
                </li>
                <li className="w-full">
                    <a href="/?page=rising" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Rising</a>
                </li>
                <li className="w-full">
                    <a href="/?page=oldest" className="inline-block px-6 py-3 w-full text-gray-900 bg-white rounded-r-full hover:text-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Oldest</a>
                </li>
            </ul>  
            )}
            
        </div>
    ) : null }
    { popular ? (
        <div className='w-full h-full flex'>
            {! done ? (
                < Loading />
            ): (
                <ul className="mx-auto flex text-sm font-medium text-center text-gray-500 rounded-full divide-x divide-gray-200 border-2 hover:text-black active:bg-blue-700 dark:divide-gray-700 dark:text-gray-400 mt-24">
                <li className="w-full">
                    <a href="/?page=recent" className="inline-block px-6 py-3 w-full text-gray-900 hover:text-black rounded-l-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Recent</a>
                </li>
                <li className="w-full">
                    <a href="/?page=popular" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Popular</a>
                </li>
                <li className="w-full">
                    <a href="/?page=rising" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Rising</a>
                </li>
                <li className="w-full">
                    <a href="/?page=oldest" className="inline-block px-6 py-3 w-full text-gray-900 bg-white rounded-r-full hover:text-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Oldest</a>
                </li>
            </ul>
            )
        }
            
        </div>
    ) : null }
    { Rising ? (
        <div className='w-full h-full flex'>
            {! done ? (
                <Loading />
            ) : (
                <ul className="mx-auto flex text-sm font-medium text-center text-gray-500 rounded-full divide-x divide-gray-200 border-2 hover:text-black active:bg-blue-700 dark:divide-gray-700 dark:text-gray-400 mt-24">
                <li className="w-full">
                    <a href="/?page=recent" className="inline-block px-6 py-3 w-full text-gray-900 hover:text-black rounded-l-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Recent</a>
                </li>
                <li className="w-full">
                    <a href="/?page=popular" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Popular</a>
                </li>
                <li className="w-full">
                    <a href="/?page=rising" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Rising</a>
                </li>
                <li className="w-full">
                    <a href="/?page=oldest" className="inline-block px-6 py-3 w-full text-gray-900 bg-white rounded-r-full hover:text-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Oldest</a>
                </li>
            </ul>
            )
                
            }
            
        </div>
    ) : null }
    { oldest ? (
        <div className='w-full h-full flex'>
            {! done ? (
                <Loading />
            ): (
                <ul className="mx-auto flex text-sm font-medium text-center text-gray-500 rounded-full divide-x divide-gray-200 border-2 hover:text-black active:bg-blue-700 dark:divide-gray-700 dark:text-gray-400 mt-24">
                <li className="w-full">
                    <a href="/?page=recent" className="inline-block px-6 py-3 w-full text-gray-900 hover:text-black rounded-l-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Recent</a>
                </li>
                <li className="w-full">
                    <a href="/?page=popular" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Popular</a>
                </li>
                <li className="w-full">
                    <a href="/?page=rising" className="inline-block px-6 py-3 w-full text-gray-900 bg-white hover:text-black hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Rising</a>
                </li>
                <li className="w-full">
                    <a href="/?page=oldest" className="inline-block px-6 py-3 w-full text-gray-900 bg-white rounded-r-full hover:text-black bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Oldest</a>
                </li>
            </ul>
            )
        }
           
        </div>
    ) : null }
    
    </>
    )
}