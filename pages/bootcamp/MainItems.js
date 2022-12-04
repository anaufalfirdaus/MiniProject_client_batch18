import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doGetBootcampRequest } from "../redux-saga/Action/BootcampAction";
import Link from "next/link";
import Search from "./Search";

function MainItems() {
  const dispatch = useDispatch();
  const listBootCamp = useSelector(
    (state) => state.bootcampStated.ListBootcamp
  );

  useEffect(() => {
    dispatch(doGetBootcampRequest());
    console.log(listBootCamp);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 border-4 border-black p-3 w-[90%] ml-[5%] ">
      {/* kotak 1 */}
      {/* <div className="ml-[22%] border-2 w-60 p-3 pb-11 border-black relative ">
        <div className="box-border h-32 w-auto  color-red-200 border-2 border-black justify-items-center"></div>
        <h2 className="text-md">NodeJS Full Stack</h2>
        <ul className="text-[8px]">
          <li>Build Rest API With NodeJS</li>
          <li>Durasi: 3 Bulan</li>
          <li>Pembelajaran: Online / Offline</li>
        </ul>
        <button class="rounded-md bg-red-500 p-2 absolute right-4">
          <p className="text-[8px]">Curriculum ▶</p>
        </button>
      </div> */}

      {listBootCamp &&
        listBootCamp.map((bc) => (
          <div
            key={bc.progTitle}
            className="ml-[22%] border-2 w-60 p-3 pb-11 border-black relative "
          >
            <div className="box-border h-32 w-auto  color-red-200 border-2 border-black justify-items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="../../public/assets/images/java.jpg"
              ></img>
            </div>
            <h2 className="text-md">{bc.progTitle}</h2>
            <ul className="text-[8px]">
              <li>{bc.progHeadline}</li>
              <li>Durasi: 3 Bulan</li>
              <li>Pembelajaran: {bc.progLearningType}</li>
            </ul>
            <Link href={`/bootcamp/simpen/${bc.progTitle}`}>
              <button class="rounded-md bg-red-500 p-2 absolute right-4">
                <p className="text-[8px]">Curriculum ▶</p>
              </button>
            </Link>
          </div>

          // <div>
          //   <h1>{bc.progTitle}</h1>
          // </div>
        ))}
    </div>
  );
}

export default MainItems;
