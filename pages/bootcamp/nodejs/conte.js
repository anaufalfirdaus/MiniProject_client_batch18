import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetContRequest } from "../../redux-saga/Action/ContAction";

export default function Conte() {
  const dispatch = useDispatch();
  const conts = useSelector((state) => state.contStated.conts);
  useEffect(() => {
    dispatch(GetContRequest());
    console.log(conts);
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 pr-4 pt-3">
        <div className="border border-gray-500/30 shadow-md p-3">
          <h1 className="text-2xl font-normal leading-normal">Who you learn</h1>
          <div>
            {conts &&
              conts.map((content) => (
                <tr key={content.contId}>
                  <li>{content.contTitle}</li>
                </tr>
              ))}
          </div>
        </div>
        <div className="py-3">
          <div className="relative overflow-hidden border">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
            ></input>
            <div className="bg-blue-500 h-12 w-full pl-5 flex items-center">
              <h1 className="text-lg font-semibold text-white">Titles</h1>
            </div>
            <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
              <div className="p-4">
                <p>Isi konten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 border border-white shadow-md rounded-lg overflow-hidden -mt-40 mr-5">
        <iframe
          className="w-full object-cover max-h-96"
          src="https://www.youtube.com/embed/sSLJx5t4OJ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="button button3">Apply Regular Bootcamp</button>
        <h1>Persyaratan : </h1>
      </div>
    </div>
  );
}
