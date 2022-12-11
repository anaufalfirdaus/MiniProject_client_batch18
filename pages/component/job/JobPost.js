/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import MinimalMenu from "./MinimalMenu";
import { Switch } from "antd";
import JopoApi from "../../api/JopoApi";
import { GetJopoRequest } from "../../redux-saga/Action/JopoAction";

export default function JobPost({keyword, searchTerm, setViewKeyword, status}) {

    const dispatch = useDispatch();
    const jopos = useSelector((state) => state.jopoStated.jopos);
    const [jopo, setJopo] = useState()
    const getJopo = async () => {
    const result = await JopoApi.getAll();
    console.log(result.data);
    setJopo(result.data);
    return result.data;
  }

  const filteredJopos = useMemo(() => {
    if (searchTerm.length > 0) {
      setViewKeyword(searchTerm);
      return jopos.filter((jp) => {
        return jp.jopoTitle.toLowerCase().includes(searchTerm.toLowerCase())
      });
    }
    return jopos;
  }, [searchTerm, jopos]);
  console.log({keyword, searchTerm, status});
  useEffect(() => {
    dispatch(GetJopoRequest());
    console.log(jopos);
  }, []);
  



    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        TITLE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        START END DATE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        UP TO SALARY
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        EXPERIENCE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        INDUSTRY
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        PUBLISH
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 -z-10">
                                {
                                   Array.isArray(filteredJopos) && (filteredJopos).map(job => (
                                <tr key={job.jopoId}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {job.jopoTitle}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>{new Date(job.jopoStartDate).toDateString()}</span> <br/>
                                        <span>{new Date(job.jopoEndDate).toDateString()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>Rp. {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(job.jopoMinSalary)} - </span> <br/> 
                                        Rp. {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(job.jopoMaxSalary)}
                                    </td>
                                    <td className="px-6 py-4 text-right font-sm text-gray-800 whitespace-nowrap">
                                        {job.jopoMinExperience} tahun
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>Retail</span> <br/>
                                        {job.jopoJoca.jocaName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                                        <Switch defaultChecked={job.jopoStatus=='published'} onClick = { async(tes) => {
                                            let result;
                                            if (tes) {
                                                 result = await JopoApi.publish(job.jopoId);
                                            }
                                            else {
                                                 result = await JopoApi.unPublish(job.jopoId);
                                            }
                                                if(result) {
                                                    return result.data
                                                }
                                                    return result.data
                                            console.log('xxx')
                                        }}/>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <MinimalMenu/>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}