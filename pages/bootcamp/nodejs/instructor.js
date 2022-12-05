import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneEmpRequest } from "../../redux-saga/Action/EmpAction";

export default function Instructor() {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState([]);
  const emps = useSelector((state) => state.empStated.emps);
  useEffect(() => {
    dispatch(GetOneEmpRequest());
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 pr-4 pt-3">
        <div className="border border-gray-500/30 shadow-md p-3">
          <h1 className="text-3xl pb-1">Instructor</h1>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <img
                className="rounded-full w-100 h-100"
                src=""
                width={100}
                height={100}
              />
            </div>
            <div className="col-span-2">
              <p>Kang Dian</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
