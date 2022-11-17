import LandingPage from "../component/layout/LandingPage";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetJobTypeRequest } from "../redux-saga/Action/JobTypeAction";
import { GetJobCategoryRequest } from "../redux-saga/Action/JobCategoryAction";
import Head from "next/head";
import JobDisclosure from "../component/jobhiring/JobDisclosure";
import JobCard from "../component/jobhiring/JobCard";
import Pagination from "../component/jobhiring/Pagination";
import Toggle from "../component/jobhiring/Toggle";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobtypes } = useSelector((state) => state.jotyStated);
  const { jobcategories } = useSelector((state) => state.jocaStated);

  useEffect(() => {
    dispatch(GetJobTypeRequest());
    dispatch(GetJobCategoryRequest());
  }, []);

  const logos = [
    "https://static.wixstatic.com/media/62eb01_03a53ec2fff64aa283688eb5974750bc~mv2.png/v1/fill/w_157,h_103,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bank%20Danamon.png",
    "https://static.wixstatic.com/media/62eb01_b64d1391272f47bfbde9f4cd4e2da7d4~mv2.png/v1/fill/w_208,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CIMB%20Niaga.png",
    "https://static.wixstatic.com/media/62eb01_441352dc7d2f47dfab7b4361cbd6214e~mv2.png/v1/fill/w_150,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Erajaya.png",
    "https://static.wixstatic.com/media/62eb01_9bb807787f98493a9cf8f1811d0b3c3f~mv2.png/v1/fill/w_164,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Prudential.png",
    "https://static.wixstatic.com/media/62eb01_fc70b342a57f453897a70430a9e7dd10~mv2_d_5000_1300_s_2.png/v1/fill/w_181,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BNP%20Paribas.png",
    // "https://static.wixstatic.com/media/62eb01_06aba73de47c4d3dbc0e4a9d09a02865~mv2.png/v1/fill/w_181,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Bank%20Mandiri.png"
  ];

  return (
    <LandingPage>
      <Head>
        <title>CodeAcademy | Jobs</title>
      </Head>
      <div>
        <p className="text-2xl font-semibold text-gray-800">Our Network</p>

        {/* Carousel */}
        <div className="flex gap-x-5 py-5 justify-center items-center px-16 border shadow my-5 rounded">
          <ChevronLeftIcon className="h-16 w-16 text-gray-600 cursor-pointer" />
          {logos.map((logo) => (
            <img
              key={logo}
              src={logo}
              className="object-contain"
              alt="network-logo"
            />
          ))}
          <ChevronRightIcon className="h-16 w-16 text-gray-600 cursor-pointer" />
        </div>

        {/* Search */}
        <div className="flex gap-x-5 py-5 justify-center px-16 border shadow my-5 rounded">
          <input
            type="text"
            placeholder="Jabatan, Kata Kunci, Perusahaan"
            className="rounded w-4/12 bg-gray-50 border-gray-200"
          />
          <input
            type="text"
            placeholder="Location"
            className="rounded w-4/12 bg-gray-50 border-gray-200"
          />
          <select className="rounded w-4/12 bg-gray-50 border-gray-200">
            {jobcategories.map((joca) => (
              <option key={joca.jocaId} value={joca.jocaName}>
                {joca.jocaName}
              </option>
            ))}
          </select>
          <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
            Search
          </button>
        </div>

        <p className="text-xl mb-3 mt-6 font-semibold text-gray-800">
          108 Lowongan Kerja di Indonesia
        </p>

        {/* Container */}
        <div className="shadow border flex justify-center p-5 gap-5 rounded">
          {/* Sidebar */}
          <div className="border border-gray-200 w-3/12 px-5 py-3 flex flex-col gap-y-5">
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
                {jobtypes.map((jobtype) => (
                  <>
                    <input
                      type="checkbox"
                      id={jobtype.jotyName}
                      name={jobtype.jotyName}
                      value={jobtype.jotyName}
                      className="mr-1"
                    />
                    <label for={jobtype.jotyName}> {jobtype.jotyName}</label>
                    <br />
                  </>
                ))}
                {/* <input
                  type="checkbox"
                  id="Magang"
                  name="Magang"
                  value="Magang"
                  className="mr-2"
                />
                <label for="Magang">Magang</label>
                <br />
               <input
                  type="checkbox"
                  id="Full-time"
                  name="Full-time"
                  value="Full-time"
                  className="mr-2"
                />
                <label for="Full-time">Full-time</label>
                <br />
               <input
                  type="checkbox"
                  id="Part-time"
                  name="Part-time"
                  value="Part-time"
                  className="mr-2"
                />
                <label for="Part-time">Part-time</label>
                <br />
               <input
                  type="checkbox"
                  id="Freelance"
                  name="Freelance"
                  value="Freelance"
                  className="mr-2"
                />
                <label for="Freelance">Freelance</label>
                <br /> */}
              </div>
            </JobDisclosure>
            <JobDisclosure title="Pengalaman">
              <div className="ml-3 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="1tahun"
                  name="1tahun"
                  value="<1 Tahun"
                  className="mr-2"
                />
                <label for="1tahun">1 Tahun</label>
                <br />
                <input
                  type="checkbox"
                  id="3tahun"
                  name="3tahun"
                  value="1-3 Tahun"
                  className="mr-2"
                />
                <label for="3tahun">1-3 Tahun</label>
                <br />
                <input
                  type="checkbox"
                  id="5tahun"
                  name="5tahun"
                  value="5-10 Tahun"
                  className="mr-2"
                />
                <label for="5tahun">5-10 Tahun</label>
                <br />
                <input
                  type="checkbox"
                  id="10tahun"
                  name="10tahun"
                  value="> 10 Tahun"
                  className="mr-2"
                />
                <label for="10tahun">10 Tahun</label>
                <br />
              </div>
            </JobDisclosure>
            <JobDisclosure title="Remotely">
              <Toggle />
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
            <div className="w-8/12 grid grid-rows-4 grid-flow-col gap-4">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
            <div className="mt-5 flex justify-center items-end">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default Jobs;
