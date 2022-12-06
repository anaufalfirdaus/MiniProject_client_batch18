import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTestimonyRequest } from "../../redux-saga/Action/AlumniAction"

export default function AlumniTestimony() {
  const dispatch = useDispatch()
  const { testimony } = useSelector(state => state.alumniStated)

  useEffect(() => {
    dispatch(GetTestimonyRequest())
  }, [])

  return (
    <div className="mx-auto pt-10 pb-16 px-4 lg:max-w-7xl">
      <div className="text-xl font-bold text-gray-900 text-center mb-10">
        <span>Alumni Testimony</span>
      </div>
      
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {testimony && testimony.slice(0,6).map((testi, index) => (
          <div key={index} className="p-5 duration-300 bg-white border rounded shadow-sm hover:shadow-lg">
            <div className="flex lg:flex-row flex-col h-full">
              <div className="lg:w-1/3 grid grid-cols-2 lg:grid-cols-1">
                <div className="pr-4 mb-3">
                  <img src="../assets/images/yuri.jpg" className="w-full lg:h-25 h-20 object-cover object-top" />
                </div>
                <div className="lg:pr-4 lg:text-center">
                  <h4 className="text-md font-semibold">{testi.poreEntity.userFirstName}</h4>
                  <p className="text-sm text-gray-500 font-medium">Batch {testi.poreProg.progTitle}</p>
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-sm text-gray-900">{testi.boreReview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
