import LandingPage from "../component/layout/LandingPage";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetJobTypeRequest } from "../redux-saga/Action/JobTypeAction";
import { GetJobCategoryRequest } from "../redux-saga/Action/JobCategoryAction";
import { GetJobPostRequest } from "../redux-saga/Action/JobPostAction";
import { GetClientRequest } from "../redux-saga/Action/ClientAction";
import Head from "next/head";
import JobDisclosure from "../component/jobhiring/JobDisclosure";
import JobCard from "../component/jobhiring/JobCard";
import Pagination from "../component/jobhiring/Pagination";
import { Carousel } from "flowbite-react";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobtypes } = useSelector((state) => state.jotyStated);
  const { jobcategories } = useSelector((state) => state.jocaStated);
  const { jobposts } = useSelector((state) => state.jopoStated);
  const { clients } = useSelector((state) => state.clitStated);

  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [location, setLocation] = useState("Indonesia");
  const [viewKeyword, setViewKeyword] = useState("");
  const [category, setCategory] = useState("1");
  const [jotyTerm, setJotyTerm] = useState(["1", "2", "3", "4", "5", "6"]);
  const [updTerm, setUpdTerm] = useState("365");
  const [expTerm, setExpTerm] = useState(["1", "1,3", "5,10", "10"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newest, setNewest] = useState(false);
  const [match, setMatch] = useState(false);
  const jopoPerPage = 8;

  const exps = [
    {
      expValue: "1",
      expMin: 0,
      expMax: 1,
      expName: "< 1 Tahun"
    },
    {
      expValue: "1,3",
      expMin: 1,
      expMax: 3,
      expName: "1-3 Tahun"
    },
    {
      expValue: "5,10",
      expMin: 5,
      expMax: 10,
      expName: "5-10 Tahun"
    },
    {
      expValue: "10",
      expMin: 10,
      expMax: null,
      expName: "> 10 Tahun"
    },
  ]

  const updates = [
    {
      updValue: 1,
      updName: "24 Jam Terakhir"
    },
    {
      updValue: 7,
      updName: "Seminggu Terakhir"
    },
    {
      updValue: 30,
      updName: "Sebulan Terakhir"
    },
    {
      updValue: 365,
      updName: "Kapan Pun"
    },
  ]

  const handleSearch = () => {
    setSearchTerm(keyword);
    setCategoryTerm(category);
  };

  const filteredJopos = useMemo(() => {
    if (categoryTerm.length > 0 || searchTerm.length > 0) {
      setCurrentPage(1);
      setViewKeyword(searchTerm);
      return jobposts.filter((jopo) =>
      {
        return (
          (jopo.jopoTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          jopo.jopoClit.clitName.toLowerCase().includes(searchTerm.toLowerCase())) &&
          categoryTerm.includes(jopo.jopoJoca.jocaId)
        )
      }
      );
    }
    return jobposts;
  }, [searchTerm, categoryTerm, jobposts]);

  const handleJotyChange = (e) => {
    let newArray = [...jotyTerm, e.target.id];
    if (jotyTerm.includes(e.target.id)) {
      newArray = newArray.filter((item) => item !== e.target.id);
    }
    setJotyTerm(newArray);
  };

  const handleExpChange = (e) => {
    let newArray = [...expTerm, e.target.name];
    if (expTerm.includes(e.target.name)) {
      newArray = newArray.filter((item) => item !== e.target.name);
    }
    setExpTerm(newArray);
  };
  
  useEffect(() => {
    dispatch(GetJobPostRequest());
  }, [match]);

  useEffect(() => {
    dispatch(GetJobTypeRequest());
    dispatch(GetJobCategoryRequest());
    dispatch(GetClientRequest());
  }, []);

  // Pagination
  const lastJopoIndex = currentPage * jopoPerPage;
  const firstJopoIndex = lastJopoIndex - jopoPerPage;
  const currentJopo = filteredJopos.slice(firstJopoIndex, lastJopoIndex);

  const compare = (a, b) => {
    if ( a.jopoPublishDate > b.jopoPublishDate ){
      return -1;
    }
    if ( a.jopoPublishDate < b.jopoPublishDate ){
      return 1;
    }
    return 0;
  }

  const handleNewest = () => {
    setNewest(true);
    filteredJopos.sort(compare);
  }
  
  const handleMatch = () => {
    console.log("match", match);
    setMatch(!match);
    setNewest(false);
  }

  console.log("updTerm: ", updTerm);

  const calculateDate = (publishDate) => {
    const date = new Date(publishDate);
    const currentTime = new Date();
  
    const diff = (currentTime - date);
    const elapsed = Math.round(diff/(1000*60*60*24));
    return elapsed;
  }


  return (
    <LandingPage>
      <Head>
        <title>Lowongan Pekerjaan | CodeAcademy</title>
      </Head>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-semibold text-gray-800">Our Network</p>

        {/* Carousel */}
        <div className="flex gap-x-5 py-6 justify-center items-center px-16 border shadow my-5 rounded overflow-scroll md:overflow-auto">
          <ChevronLeftIcon className="h-16 w-16 text-gray-600 cursor-pointer" />
          <Carousel>
          {clients.map((clit) => (
            <img
              key={clit.clitName}
              src={`./assets/images/${clit.clitLogo}`}
              className="h-12"
              alt="network-logo"
            />
          ))}
            </Carousel>
          <ChevronRightIcon className="h-16 w-16 text-gray-600 cursor-pointer" />
        </div>

        {/* Search */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-y-4 md:gap-y-0 gap-x-5 py-5 justify-center px-16 border shadow my-5 rounded">
          <input
            type="text"
            placeholder="Jabatan, Kata Kunci, Perusahaan"
            className="rounded w-full md:w-4/12 bg-gray-50 border-gray-200"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="rounded w-full md:w-4/12 bg-gray-50 border-gray-200"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="rounded w-full md:w-4/12 bg-gray-50 border-gray-200"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {jobcategories.map((joca) => (
              <option key={joca.jocaId} value={joca.jocaId}>
                {joca.jocaName}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full md:w-min"
          >
            Search
          </button>
        </div>

        <p className="text-xl mb-3 mt-6 font-semibold text-gray-800">
          {filteredJopos?.length} Lowongan Kerja {viewKeyword} di Indonesia
        </p>

        {/* Container */}
        <div className="shadow border flex flex-col md:flex-row items-center md:items-start justify-center p-5 gap-5 rounded">
          {/* Sidebar */}
          <div className="border border-gray-200 w-11/12 md:w-3/12 px-5 py-3 flex flex-col gap-y-5">
            <p className="font-semibold text-lg border-b pb-3">
              Filter Pencarianmu
            </p>

            <JobDisclosure title="Tampilkan Berdasarkan">
              <div className="flex gap-2 justify-around">
                <button onClick={handleMatch} className={`whitespace-nowrap inline-flex items-center justify-center px-4 py-1 rounded-lg shadow-sm text-sm border border-gray-400 text-gray-500 bg-gray-300 hover:text-orange-600 font-medium ${!newest && `border text-orange-600 border-orange-400 bg-orange-200 hover:bg-gray-300 hover:border-gray-400`}`}>
                  Match
                </button>
                <button onClick={handleNewest} className={`whitespace-nowrap inline-flex items-center justify-center px-4 py-1 rounded-lg shadow-sm text-sm border border-gray-400 text-gray-500 bg-gray-300 hover:text-orange-600 font-medium ${newest && `border text-orange-600 border-orange-400 bg-orange-200 hover:bg-gray-300 hover:border-gray-400`}`}>
                  Newest
                </button>
              </div>
            </JobDisclosure>

            <JobDisclosure title="Tipe Pekerjaan">
              <div className="ml-3 text-gray-700 text-[14px] font-medium">
                {jobtypes.map((joty) => (
                  <>
                    <input
                      type="checkbox"
                      id={joty.jotyId}
                      name={joty.jotyName}
                      value={joty.jotyName}
                      className="mr-1"
                      checked={jotyTerm.includes(joty.jotyId.toString())}
                      onChange={handleJotyChange}
                    />
                    <label for={joty.jotyName}>{joty.jotyName}</label>
                    <br />
                  </>
                ))}
              </div>
            </JobDisclosure>
            <JobDisclosure title="Pengalaman">
              <div className="ml-3 text-gray-700 text-[14px] font-medium">
                {exps.map((exp) => (
                  <>
                  <input
                    type="checkbox"
                    id={exp.expValue}
                    name={exp.expValue}
                    value={exp.expValue}
                    className="mr-2"
                    checked={expTerm.includes(exp.expValue.toString())}
                    onChange={handleExpChange}
                    />
                  <label for={exp.expName}>{exp.expName}</label>
                  <br/>
                    </>
                ))}
              </div>
            </JobDisclosure>
            <JobDisclosure title="Terupdate">
              <div className="ml-3 text-gray-700 text-[14px] font-medium">
                {updates.map((update) => (
                       <>
                       <input
                   type="radio"
                   id={update.updValue}
                   name="update"
                   value={update.updValue}
                   className="mr-2"
                   onChange={() => setUpdTerm(update.updValue)}
                   checked={updTerm == update.updValue}
                 />
                 <label for={update.updValue}>{update.updName}</label>
                 <br />
                   </>
                ))}
              </div>
            </JobDisclosure>
          </div>
          {/* Job Card */}
          <div>
            <div className="min-w-8/12 grid grid-cols-1 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-4">
              {currentJopo && currentJopo.length > 0 ? (
                currentJopo
                  .filter((jopo) =>
                    jotyTerm.includes(jopo.jopoJoty.jotyId.toString()) &&
                    updTerm >= calculateDate(jopo.jopoPublishDate)
                    // calculateDate(jopo.jopoPublishDate) <= updTerm 
                  )
                  .map((jopo) => (
                    <JobCard
                      key={jopo.jopoId}
                      id={jopo.jopoId}
                      title={jopo.jopoTitle}
                      publishDate={jopo.jopoPublishDate}
                      minExp={jopo.jopoMinExperience}
                      maxExp={jopo.jopoMaxExperience}
                      clitName={jopo.jopoClit.clitName}
                      clitLogo={jopo.jopoClit.clitLogo}
                    />
                  ))
              ) : (
                <div className="font-medium text-lg text-center w-full">
                  <p>No Job Found</p>
                </div>
              )}
            </div>
            <div className="mt-5 flex justify-center items-end">
              {filteredJopos.length > 0 &&
              <Pagination totalData={filteredJopos.length} jopoPerPage={jopoPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
              }
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default Jobs;
