import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBootcampRequest } from '../../redux-saga/Action/ProgramAction'

export default function Bootcamp() {
  const dispatch = useDispatch()
  const { bootcamp } = useSelector(state => state.programStated || {})

  useEffect(() => {
    dispatch(GetBootcampRequest())
  }, [])
  
  return (
    <div className="mx-auto py-8 px-4 lg:max-w-7xl lg:px-12">
      <div className="text-xl font-bold text-gray-900 text-center mb-2">
        <span>Our Bootcamp</span>
      </div>
      <p className="text-sm font-medium text-gray-700 text-center mb-10">Kurikulum bootcamp kami disesuikan dengan kebutuhan industry
        agar kamu selepas bootcamp, siap untuk bekerja</p>
      
      <div className="grid grid-cols-1 gap-y-5 gap-x-28 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-y-10 lg:gap-x-28">
        {bootcamp && bootcamp.slice(0,4).map((bt, index) => (
          <div key={index + bt.progTitle} className="p-px overflow-hidden border rounded shadow-sm duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="flex h-full p-5 bg-white rounded-sm lg:items-center flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 bg-indigo-50 lg:w-32 lg:h-32">
                  <img
                    src={bt.progImage}
                    // className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    {bt.progTitle}
                  </h6>
                  <p className="mb-2 text-sm text-gray-900">
                    {bt.progHeadline.substring(0,100)}
                  </p>
                </div>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Curriculum <ChevronRightIcon className="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-900" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/bootcamp"
          className="inline-block rounded-sm shadow-xl transition duration-500 ring-1 ring-orange-600 bg-white py-1 px-8 text-center font-medium text-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white hover:scale-105 group"
        >
          More Bootcamp
        </Link>
      </div>
    </div>
  )
}
