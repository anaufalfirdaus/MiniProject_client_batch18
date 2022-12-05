import React, {useState, useEffect} from "react";
import MinimalMenu from "./MinimalMenu";
import {Switch} from "antd";
import JopoApi from "../../api/JopoApi";

export default function JobPost() {

    const [jopo, setJopo] = useState()
    const getJopo = async () => {
    const result = await JopoApi.getAll();
    console.log(result.data);
    setJopo(result.data);
    return result.data;
  }
  

//   const toggler = async(status) => {
//     console.log('xxxx')
//     setToggle(status=="published")
//     // const result = await JopoApi.publish(jopo.jopoId);
//     // if(result) {
//     //     setToggle(true)
//     //     return result.data
//     // }
//     //     setToggle(false)
//     //     return result.data
//   }

  useEffect(() => {
    getJopo()
  }, [])

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
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        INDUSTRY
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
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
                            <tbody className="divide-y divide-gray-200">
                                {
                                    jopo?.map(job => (
                                <tr key={job.jopoId}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {job.jopoTitle}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>{new Date(job.jopoStartDate).toDateString()}</span> <br/>
                                        <span>{new Date(job.jopoEndDate).toDateString()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>IDR {job.jopoMinSalary} - </span> <br/> 
                                        IDR {job.jopoMaxSalary}
                                    </td>
                                    <td className="px-6 py-4 text-right font-sm text-gray-800 whitespace-nowrap">
                                        {job.jopoMinExperience} tahun
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>Retail</span> <br/>
                                        <span>Software Engineer</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
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