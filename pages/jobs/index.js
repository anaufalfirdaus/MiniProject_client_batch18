import LandingPage from "../component/layout/LandingPage";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetJobTypeRequest } from "../redux-saga/Action/JobTypeAction";
import { GetJobCategoryRequest } from "../redux-saga/Action/JobCategoryAction";
import { GetJobPostRequest } from "../redux-saga/Action/JobPostAction";
import Head from "next/head";
import JobDisclosure from "../component/jobhiring/JobDisclosure";
import JobCard from "../component/jobhiring/JobCard";
import Pagination from "../component/jobhiring/Pagination";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobtypes } = useSelector((state) => state.jotyStated);
  const { jobcategories } = useSelector((state) => state.jocaStated);
  const { jobposts } = useSelector((state) => state.jopoStated);

  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [location, setLocation] = useState("Indonesia");
  const [viewKeyword, setViewKeyword] = useState("");
  const [category, setCategory] = useState("1");
  const [filteredJopo, setFilteredJopo] = useState();
  const [jotyTerm, setJotyTerm] = useState(["5"]);
  const [expTerm, setExpTerm] = useState(["1"]);

  const handleSearch = () => {
    setSearchTerm(keyword);
    setCategoryTerm(category);
  };

  const filteredJopos = useMemo(() => {
    if (categoryTerm.length > 0 || searchTerm.length > 0) {
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
    setFilteredJopo(jobposts);
  }, [jobposts]);

  useEffect(() => {
    dispatch(GetJobPostRequest());
    dispatch(GetJobTypeRequest());
    dispatch(GetJobCategoryRequest());
  }, []);

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/ASTRA_international.svg/320px-ASTRA_international.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/320px-Bank_Central_Asia.svg.png",
    "https://static.wixstatic.com/media/ab2f5c_4090dbbaeafb4b0d975bd44c6cd498f6~mv2_d_5000_3314_s_4_2.png/v1/fill/w_262,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/code-colored.png",
    "https://static.wixstatic.com/media/62eb01_fc70b342a57f453897a70430a9e7dd10~mv2_d_5000_1300_s_2.png/v1/fill/w_181,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BNP%20Paribas.png",
    // "https://static.wixstatic.com/media/62eb01_b64d1391272f47bfbde9f4cd4e2da7d4~mv2.png/v1/fill/w_208,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CIMB%20Niaga.png",
    // "https://static.wixstatic.com/media/62eb01_03a53ec2fff64aa283688eb5974750bc~mv2.png/v1/fill/w_157,h_103,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bank%20Danamon.png",
    // "https://static.wixstatic.com/media/62eb01_9bb807787f98493a9cf8f1811d0b3c3f~mv2.png/v1/fill/w_164,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Prudential.png",
    // "https://static.wixstatic.com/media/62eb01_441352dc7d2f47dfab7b4361cbd6214e~mv2.png/v1/fill/w_150,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Erajaya.png",
    // "https://static.wixstatic.com/media/62eb01_06aba73de47c4d3dbc0e4a9d09a02865~mv2.png/v1/fill/w_181,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Bank%20Mandiri.png"
  ];

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
          {logos.map((logo) => (
            <img
              key={logo}
              src={logo}
              className="h-12"
              alt="network-logo"
            />
          ))}
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
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm  text-white bg-orange-600 hover:bg-orange-700 font-medium">
                  Match
                </button>
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm text-white bg-orange-600 hover:bg-orange-700 font-medium">
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
                <input
                  type="checkbox"
                  id="1"
                  name="1"
                  value="&lt;1 Tahun"
                  className="mr-2"
                  checked={(e) => expTerm.includes(e.target.name)}
                  onChange={handleExpChange}
                />
                <label for="1tahun">&lt;1 Tahun</label>
                <br />
                <input
                  type="checkbox"
                  id="3tahun"
                  name="1,3"
                  value="1-3 Tahun"
                  className="mr-2"
                  onChange={handleExpChange}
                />
                <label for="3tahun">1-3 Tahun</label>
                <br />
                <input
                  type="checkbox"
                  id="5tahun"
                  name="5,10"
                  value="5-10 Tahun"
                  className="mr-2"
                  onChange={handleExpChange}
                />
                <label for="5tahun">5-10 Tahun</label>
                <br />
                <input
                  type="checkbox"
                  id="10tahun"
                  name="10"
                  value="> 10 Tahun"
                  className="mr-2"
                  onChange={handleExpChange}
                />
                <label for="10tahun">10 Tahun</label>
                <br />
              </div>
            </JobDisclosure>
            <JobDisclosure title="Terupdate">
              <div className="ml-3 text-gray-700 text-[14px] font-medium">
                <input
                  type="radio"
                  id="24jam"
                  name="updated"
                  value="24 Jam Terakhir"
                  className="mr-2"
                />
                <label for="24jam">24 Jam Terakhir</label>
                <br />
                <input
                  type="radio"
                  id="seminggu"
                  name="updated"
                  value="Seminggu Terakhir"
                  className="mr-2"
                />
                <label for="seminggu">Seminggu Terakhir</label>
                <br />
                <input
                  type="radio"
                  id="sebulan"
                  name="updated"
                  value="Sebulan Terakhir"
                  className="mr-2"
                />
                <label for="sebulan">Sebulan Terakhir</label>
                <br />
                <input
                  type="radio"
                  id="kapanpun"
                  name="updated"
                  value="Kapan pun"
                  className="mr-2"
                />
                <label for="kapanpun">Kapan pun</label>
              </div>
            </JobDisclosure>
          </div>
          {/* Job Card */}
          <div>
            <div className="min-w-8/12 grid grid-cols-1 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-4">
              {/* <div className="max-w-8/12 flex flex-wrap gap-4"> */}
              {/* {jobposts.length !== 0 ? (
                jobposts
                  .filter((jopo) => {
                    if (keyword) {
                      return jopo.jopoTitle
                        .toLowerCase()
                        .includes(keyword.toLowerCase());
                    }
                    return jopo;
                  })
                  .map((jopo) => (
                    <JobCard
                      key={jopo.jopoId}
                      title={jopo.jopoTitle}
                      publishDate={jopo.jopoPublishDate}
                      minExp={jopo.jopoMinExperience}
                      maxExp={jopo.jopoMaxExperience}
                      clitName={jopo.jopoClit.clitName}
                      clitLogo={jopo.jopoClit.clitLogo}
                    />
                  ))
              ) : (
                <p>No Job Available</p>
              )} */}
              {filteredJopos && filteredJopos.length > 0 ? (
                filteredJopos
                  // .filter((jopo) => (
                  //   (jopo.jopoTitle.toLowerCase().includes(keyword.toLowerCase()) ||
                  //       jopo.jopoClit.clitName.toLowerCase().includes(keyword.toLowerCase()))
                  //       && jopo.jopoJoca.jocaId == category
                  // ))
                  .filter((jopo) =>
                    jotyTerm.includes(jopo.jopoJoty.jotyId.toString())
                  )
                  .map((jopo) => (
                    <JobCard
                      key={jopo.jopoId}
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
              <Pagination />
              }
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default Jobs;
