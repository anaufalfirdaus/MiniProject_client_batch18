import React, { useEffect } from 'react'
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { GetStoryRequest } from "../../redux-saga/Action/AlumniAction"

export default function Hero() {
  const dispatch = useDispatch()
  const { stories } = useSelector(state => state.alumniStated)

  useEffect(() => {
    dispatch(GetStoryRequest())
  }, [])

  const srcLogo = (clitLogo) => {
    let logo = `../assets/images/${clitLogo}`
    return logo
  }

  return (
    <div className="px-8 py-8 mx-auto lg:px-12 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-2xl lg:pr-5">
          <div className="lg:max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Upgrade your skill, it&apos;s free, graps your dream to become software engineer
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Code Academy sampai saat ini telah menyelenggarakan lebih dari #20 batch coding bootcamp,
              dan menyalurkan 250 lebih alumni bootcamp ke 33 perusahaan besar.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/bootcamp"
              className="inline-block rounded-md border border-transparent bg-orange-600 py-2 px-8 text-center font-medium text-white duration-300 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:shadow-xl"
            >
              Join Bootcamp
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-2/5">
          {stories && stories.slice(0,3).map((story) => (
            <div key={story.eccoId} className="w-1/3 lg:w-2/5">
              <div className="bg-white rounded shadow-2xl p-2 sm:p-4 text-center">
                <img src={story.eccoEntity.empEntity.userPhoto}
                  className="w-full lg:h-40 h-20 object-cover object-center" />
                <h4 className="text-md text-gray-900 font-semibold lg:text-lg">{story.eccoEntity.empEntity.userFirstName}</h4>
                {/* <h4 className="text-sm text-gray-700 lg:text-md">{story.eccoClit.clitName}</h4> */}
                <p className="text-sm text-gray-700 lg:text-sm">{story.eccoEntity.empJoro.joroName} at</p>
                <div className='flex items-center justify-center'>
                  <img src={srcLogo(story.eccoClit.clitLogo)}
                    className="h-20 w-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
