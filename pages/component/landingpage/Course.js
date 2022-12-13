import { ChevronRightIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCourseRequest } from '../../redux-saga/Action/ProgramAction'

export default function Course() {
  const dispatch = useDispatch()
  const { course } = useSelector(state => state.programStated)

  useEffect(() => {
    dispatch(GetCourseRequest())
  }, [])

  return (
    <div className="mx-auto max-w-2xl py-8 px-4 lg:max-w-7xl lg:px-8">
      <div className="text-xl font-bold text-gray-900 text-center mb-2">
        <span>Online Course</span>
      </div>
      <p className="text-sm font-medium text-gray-700 text-center mb-10">Bagi kamu yang tidak punya waktu untuk mengikuti full bootcamp,
        kami sediakan online course, dimana kamu bisa belajar kapan saja dan full time access</p>

      <div className="grid grid-cols-1 gap-8 row-gap-5 md:grid-cols-3">
        {course && course.slice(0,3).map((cr, index) => (
          <div key={index + cr.progTitle} className="p-px overflow-hidden border rounded shadow-sm duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="flex h-full p-5 bg-white rounded-sm lg:items-center flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 bg-indigo-50 lg:w-32 lg:h-32">
                  <img
                    src={cr.progImage}
                    // className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    {cr.progTitle}
                  </h6>
                  <p className="mb-2 text-sm text-gray-900">
                    {cr.progHeadline.substring(0,60)}
                  </p>
                </div>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Curriculum <ChevronRightIcon className="ml-2 h-5 w-5" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
