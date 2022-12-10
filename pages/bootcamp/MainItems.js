import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doGetBootcampRequest } from "../redux-saga/Action/BootcampAction";
import Pagination from "./KiriKanan";
import _ from "lodash";
import Link from "next/link";

function MainItems() {
  const dispatch = useDispatch();

  //call redux saga
  const listBootCamp = useSelector(
    (state) => state.bootcampStated.ListBootcamp
  );

  useEffect(() => {
    dispatch(doGetBootcampRequest());
    console.log(listBootCamp);
  }, []);

  //fitur search
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewKeyword, setViewKeyword] = useState("");

  //const pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };
  //end pagination

  //fitur search
  const handleSearch = () => {
    setSearchTerm(keyword);
  };

  const filteredBootcamp = useMemo(() => {
    if (searchTerm.length > 0) {
      setViewKeyword(searchTerm);
      return listBootCamp.filter((bc) => {
        return bc.progTitle.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    return listBootCamp;
  }, [searchTerm, listBootCamp]);

  //pagination
  const paginateBootCamp = paginate(filteredBootcamp, currentPage, pageSize);

  return (
    <div>
      <div className=" p-1 mb-2 flex justify-center gap-1 items-center mt-2 w-[90%] ml-[5%] ">
        <input
          className="p-1 border-1 border-blackw-fit-content px-3 py-1.5 text-base font-normal text-gray-700 bg-   ite bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          placeholder="Java, Nodejs, Golang, .Net"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn-primary " onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 border shadow my-6 p-3 w-[90%] ml-[5%]  ">
        {paginateBootCamp && paginateBootCamp.length > 0 ? (
          paginateBootCamp.map((bc) => (
            <div
              key={bc.progTitle}
              className="ml-[22%] border shadow my-6 w-60 p-3 pb-11  relative "
            >
              <div className="box-border h-32 w-auto  color-red-200 border shadow my-2 justify-items-center">
                <img
                  className=" h-[100%] rounded-full"
                  src={
                    bc.progImage
                      ? bc.progImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVG8-k0zPmvHb-jQavBj9kY-jyKls8SdTTg&usqp=CAU"
                  }
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVG8-k0zPmvHb-jQavBj9kY-jyKls8SdTTg&usqp=CAU"
                ></img>
              </div>
              <h2 className="text-[20px] font-bold">{bc.progTitle}</h2>
              <ul className="text-[11px] ">
                <li>{bc.progHeadline}</li>
                <li>Durasi: 3 Bulan</li>
                <li>Pembelajaran: {bc.progLearningType}</li>
              </ul>
              <Link href={`/bootcamp/simpen/${bc.progTitle}`}>
                <button class="btn-primary p-2 absolute right-4">
                  <p className="text-[8px]">Curriculum </p>
                </button>
              </Link>
            </div>

            // <div>
            //   <h1>{bc.progTitle}</h1>
            // </div>
          ))
        ) : (
          <div className=" col-span-3 font-medium text-lg  flex place-content-center w-full">
            <p>Data Not Found</p>
          </div>
        )}
      </div>
      <div className="w-2/5 mx-auto">
        <Pagination
          items={filteredBootcamp.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default MainItems;
