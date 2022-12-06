import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetClientRequest } from "../../redux-saga/Action/ClientAction"

export default function ClientPartners() {
  const dispatch = useDispatch()
  const { clients } = useSelector(state => state.clitStated)

  useEffect(() => {
    dispatch(GetClientRequest())
  }, [])

  const srcLogo = (clitLogo) => {
    let logo = `../assets/images/${clitLogo}`
    return logo
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto py-8">
      {/* <div className="mx-auto max-w-2xl py-8 px-4 lg:max-w-7xl lg:px-8"> */}
        <div className="text-xl font-bold text-gray-900 text-center mb-10">
          <span>Our alumni have work at</span>
        </div>

        <div className="mx-auto px-6 lg:max-w-7xl lg:px-12">
          <div className="flex flex-wrap flex-row items-center justify-between lg:justify-center lg:space-x-8">
            {clients && clients.map((clit, index) => (
              <div key={index + clit.clitName}>
                <img src={srcLogo(clit.clitLogo)} alt={clit.clitName} className="w-32 h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
