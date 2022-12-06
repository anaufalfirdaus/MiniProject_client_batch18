import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetStoryRequest } from "../../redux-saga/Action/AlumniAction"

export default function AlumniStory() {
  const dispatch = useDispatch()
  const { stories } = useSelector(state => state.alumniStated)

  useEffect(() => {
    dispatch(GetStoryRequest())
  }, [])

  const linkMedia = (eccoMediaLink) => {
    let link = "";
    link = eccoMediaLink.split("=")
    link = link[1].replace("&ab_channel", "")
    link = `https://img.youtube.com/vi/${link}/0.jpg`
    return link
  }

  return (
    <div className="mx-auto max-w-2xl py-12 px-8 lg:max-w-7xl lg:px-16">
        <div className="text-xl font-bold text-gray-900 text-center mb-10">
          <h2>Alumni Success Story</h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-20">
          {stories && stories.slice(0,3).map((story) => (
            <Link key={story.eccoId} href={story.eccoMediaLink}
              className="group" target="_blank" rel="noopener noreferrer">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200 transition duration-500 border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                  <img
                    src = {linkMedia(story.eccoMediaLink)}
                  />
                </div>
                <h4 className="mt-4 text-lg font-medium text-gray-900">{story.eccoEntity.empEntity.userFirstName} {story.eccoEntity.empEntity.userLastName}</h4>
                <h3 className="mt-1 text-sm font-medium text-gray-800">{story.eccoEntity.empJoro.joroName} | {story.eccoClit.clitName}</h3>
                <p className="mt-1 text-xs text-gray-700">{story.eccoComment}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/successStory"
            className="inline-block rounded-sm shadow-xl transition duration-500 ring-1 ring-orange-600 bg-white py-1 px-8 text-center font-medium text-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white hover:scale-105 group"
          >
            Watch More Success Story
          </Link>
        </div>
      </div>
  )
}
