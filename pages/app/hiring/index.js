/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SearchIcon } from '@heroicons/react/solid';
import Dropdown from '../../component/job/Dropdown';
import AppLayout from '../../component/layout/AppLayout';
import JobPost from '../../component/job/JobPost';
import Page from '../../component/commons/Page';
import { GetJopoRequest } from '../../redux-saga/Action/JopoAction'


export default function Hiring() {
  
  const [display, setDisplay] = useState(false)
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("")
  const [searchStatus, setSearchStatus] = useState("")
  const [searchTerm, setSearchTerm] = useState("");
  const [viewKeyword, setViewKeyword] = useState("");


  const handleSearch = () => {
    setSearchTerm(keyword);
    setSearchStatus(status)
  };



  
  return (
    <AppLayout>
      <Page
        name={"Job"}
        setDisplay={setDisplay}
        title="Job Post"
        titleButton="Posting Job"
        onClick={() => navigate("/app/job/")}
      >
      <div className=" flex justify-center">
          <div className="w-full">
            <div className="input-group relative flex justify-center items-stretch w-full mb-10">
              <p className="text-xs mx-2 py-1">Search by category</p>
              <input
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                className="form-control relative w-60 block px-2 py-0.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
                placeholder="title, experience, industry, category"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <select onChange={(e) => setStatus(e.target.value)} className="flex rounded max-w-xs px-4 py-0.5 text-xs mx-1">
                {/* <option>Status</option> */}
                <option value={"published"}>published</option>
                <option value={"unpublished"}>unpublished</option>
              </select>
              <button
                type="submit"
                onClick={handleSearch}
                className="btn px-3 py-2 bg-orange-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center"
              >
                {" "}
                Search
              </button>
            </div>
          </div>
        </div>
        <JobPost keyword={keyword} searchTerm={searchTerm} setViewKeyword={setViewKeyword} status={searchStatus}/>
      </Page>
    </AppLayout>
  )
}
