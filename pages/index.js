import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import AlumniApi from "./api/AlumniApi";
import ClientApi from "./api/ClientApi";
import ProgramApi from "./api/ProgramApi";
import LandingPage from "./component/layout/LandingPage";

const fqa = [
  {
    id: 1,
    question: 'Pertanyaan Abdul Rozak',
    answer: 'Software Engineer'
  },
  {
    id: 1,
    question: 'Pertanyaan Abdul Rozak',
    answer: 'Software Engineer'
  },
  {
    id: 1,
    question: 'Pertanyaan Abdul Rozak',
    answer: 'Software Engineer'
  },
];


export default function Home() {
  const [client, setClient] = useState([])
  const [stories, setStories] = useState([])
  const [testimony, setTestimony] = useState([])
  const [bootcamp, setBootcamp] = useState([])
  const [course, setCourse] = useState([])

  useEffect(() => {
    ClientApi.list().then(data => {
      setClient(data)
    })
  }, [])

  useEffect(() => {
    AlumniApi.story().then(data => {
      setStories(data)
    })
  }, [])

  useEffect(() => {
    AlumniApi.testi().then(data => {
      setTestimony(data)
    })
  }, [])

  useEffect(() => {
    ProgramApi.bootcamp().then(data => {
      setBootcamp(data)
    })
  }, [])

  useEffect(() => {
    ProgramApi.course().then(data => {
      setCourse(data)
    })
  }, [])

  const linkMedia = (eccoMediaLink) => {
    let link = "";
    link = eccoMediaLink.split("=")
    link = link[1].replace("&ab_channel", "")
    link = `https://img.youtube.com/vi/${link}/0.jpg`
    return link
  }

  const srcLogo = (clitLogo) => {
    let logo = `../assets/images/${clitLogo}`
    return logo
  }

  return (
    <div>
      <LandingPage>
      <>
      {/* Hero */}
      <div className="px-8 py-8 mx-auto lg:px-12 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-2xl lg:pr-5">
            <div className="lg:max-w-xl mb-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Upgrade your skill, it&apos;s free, graps your dream to become software engineer
              </h2>
              <p className="text-gray-700 text-base md:text-lg">Code Academy sampai saat ini telah menyelenggarakan lebih dari #20 batch coding bootcamp,
                dan menyalurkan 250 lebih alumni bootcamp ke 33 perusahaan besar.</p>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-orange-600 py-2 px-8 text-center font-medium text-white hover:bg-orange-700"
              >
                Join Bootcamp
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-2/5">
            {stories && stories.slice(0,3).map((story) => (
              <div key={story.eccoId} className="w-1/3 lg:w-2/5">
                <div className="bg-white rounded shadow-2xl p-2 sm:p-4 text-center">
                  <img src="../assets/images/yuri.jpg"
                    className="w-full lg:h-40 h-20 object-cover object-center" />
                  <h4 className="text-md text-gray-900 font-semibold lg:text-lg">{story.eccoEntity.empEntity.userFirstName}</h4>
                  <h4 className="text-sm text-gray-700 lg:text-md">{story.eccoClit.clitName}</h4>
                  <p className="text-xs text-gray-700 lg:text-base">{story.eccoEntity.empJoro.joroName} at</p>
                  <img src="../assets/images/codeid.png" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="inset-x-0 bg-gray-100">
        <div className="mx-auto py-8">
        {/* <div className="mx-auto max-w-2xl py-8 px-4 lg:max-w-7xl lg:px-8"> */}
          <div className="text-xl font-bold text-gray-900 text-center mb-10">
            <span>Our alumni have work at</span>
          </div>

          <div className="relative mx-auto px-6 lg:max-w-7xl lg:px-12">
            <div className="flex flex-wrap flex-row items-center justify-between lg:justify-center lg:space-x-8">
              {client && client.map((clit, index) => (
                <div key={index}>
                  <img src={srcLogo(clit.clitLogo)} alt={clit.clitName} className="w-32 h-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Success Story */}
      <div className="mx-auto max-w-2xl py-12 px-8 lg:max-w-7xl lg:px-16">
        <div className="text-xl font-bold text-gray-900 text-center mb-10">
          <h2>Alumni Success Story</h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-20">
          {stories && stories.slice(0,3).map((story) => (
            <Link key={story.eccoId} href={story.eccoMediaLink}
              className="group" target="_blank" rel="noopener noreferrer">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src = {linkMedia(story.eccoMediaLink)}
                  />
                </div>
                <h4 className="mt-4 text-lg font-medium text-gray-900">{story.eccoEntity.empEntity.userFirstName} {story.eccoEntity.empEntity.userLastName}</h4>
                <h3 className="mt-1 text-sm font-medium text-gray-800">{story.eccoEntity.empJoro.joroName} | {story.eccoClit.clitName}</h3>
                <p className="mt-1 text-xs text-gray-700">{story.eccoComment}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/successStory"
            className="inline-block rounded-sm border border-orange-600 bg-white py-1 px-8 text-center font-medium text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Watch More Success Story
          </Link>
        </div>
      </div>

      {/* Bootcamp */}
      <div className="mx-auto py-8 px-4 lg:max-w-7xl lg:px-12">
        <div className="text-xl font-bold text-gray-900 text-center mb-2">
          <span>Our Bootcamp</span>
        </div>
        <p className="text-sm font-medium text-gray-700 text-center mb-10">Kurikulum bootcamp kami disesuikan dengan kebutuhan industry
          agar kamu selepas bootcamp, siap untuk bekerja</p>
        
        <div className="grid grid-cols-1 gap-y-5 gap-x-28 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-y-10 lg:gap-x-28">
          {bootcamp && bootcamp.slice(0,4).map((bt, index) => (
            <div key={index} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="relative flex h-full p-5 bg-white rounded-sm lg:items-center flex-row">
                <div className="mb-6 mr-6 lg:mb-0">
                  <div className="flex items-center justify-center w-20 h-20 bg-indigo-50 lg:w-32 lg:h-32">
                    <img
                      src="../assets/images/codeid.png"
                      // className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                      {bt.progTitle}
                    </h6>
                    <p className="mb-2 text-sm text-gray-900">
                      {bt.progHeadline.substring(0,100)}
                    </p>
                  </div>
                  <a
                    href="#"
                    aria-label=""
                    className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Curriculum <ChevronRightIcon className="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-900" aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/bootcamp"
            className="inline-block rounded-sm border border-orange-600 bg-white py-1 px-8 text-center font-medium text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            More Bootcamp
          </Link>
        </div>
      </div>

      {/* Alumni Testimony */}
      <div className="mx-auto lg:max-w-2xl pt-10 pb-16 px-4 lg:max-w-7xl">
        <div className="text-xl font-bold text-gray-900 text-center mb-10">
          <span>Alumni Testimony</span>
        </div>
        
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {testimony && testimony.slice(0,6).map((testi, index) => (
            <div key={index} className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="relative flex lg:flex-row flex-col h-full">
                <div className="lg:w-1/3 grid grid-cols-2 lg:grid-cols-1">
                  <div className="pr-4 mb-3">
                    <img src="../assets/images/yuri.jpg" className="w-full lg:h-25 h-20 object-cover object-top" />
                  </div>
                  <div className="lg:pr-4 lg:text-center">
                    <h4 className="text-md font-semibold">{testi.poreEntity.userFirstName}</h4>
                    <p className="text-sm text-gray-500 font-medium">Batch {testi.poreProg.progTitle}</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm text-gray-900">{testi.boreReview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefit */}
      <div className="mx-auto px-4 sm:max-w-xl sm:pb-8 md:max-w-full lg:max-w-7xl lg:pb-12">
        <div className="border">
          <div className="flex flex-col lg:pb-10 mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <img
                className="bg-indigo-50"
                src="../assets/images/codeid.png"
                alt="codeid"
              />
            </div>
            <div className="lg:w-1/2 pt-8 px-8">
              <h4 className="text-xl text-gray-800 font-semibold mb-4">Kenapa pilih Codeid Academy?</h4>
              <p className="text-sm text-gray-700">
                Codeid Academy berdiri tahun 2017 dan sekarang telah mencapai lebih dari 20 batch, dan telah menyalurkan lebih dari 250 lulusan bootcamp ke 33 perusahaan ternama.
                Kamu tidak usah bayar, semua gratis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto sm:max-w-xl sm:-mt-4 md:max-w-full lg:max-w-screen-xl lg:-mt-24">        
        <div className="flex flex-col mb-4 lg:flex-row md:mb-10">
          <div className="lg:w-1/3 bg-white rounded border mx-12 py-3 px-5 text-center">
            <h4 className="text-lg text-gray-800 font-medium mb-2">Trainer</h4>
            <p className="text-sm text-gray-500">Trainer kami merupakan tenaga profesional yang berpengalaman lebih dari 5 tahun
              dan tahu kebutuhan industry baik legacy ataupun latest technology. Jadi kamu akan di-guide bagaimana menguasai coding
              mulai dari fundamental dampai advance</p>
          </div>

          <div className="lg:w-1/3 bg-white rounded border mx-12 py-3 px-5 text-center">
            <h4 className="text-lg text-gray-800 font-medium mb-2">Materi</h4>
            <p className="text-sm text-gray-500">Materi di Codeod Academy telah settle dengan roadmap terstruktur dan dinamis mengikuti kebutuhan industry,
              kamu bisa belajar langsung dari trainer, kami sediakan juga materi berupa video</p>
          </div>

          <div className="lg:w-1/3 bg-white rounded border mx-12 py-3 px-5 text-center">
            <h4 className="text-lg text-gray-800 font-medium mb-2">Placement</h4>
            <p className="text-sm text-gray-500">Kami akan salurkan ke client kami ketika kamu telah selesai bootcamp</p>
          </div>
        </div>
      </div>

      {/* Course */}
      <div className="mx-auto max-w-2xl py-8 px-4 lg:max-w-7xl lg:px-8">
        <div className="text-xl font-bold text-gray-900 text-center mb-2">
          <span>Online Course</span>
        </div>
        <p className="text-sm font-medium text-gray-700 text-center mb-10">Bagi kamu yang tidak punya waktu untuk mengikuti full bootcamp,
          kami sediakan online course, dimana kamu bisa belajar kapan saja dan full time access</p>

        <div className="grid grid-cols-1 gap-8 row-gap-5 md:grid-cols-3">
          {course && course.slice(0,3).map((cr, index) => (
            <div key={index} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="relative flex h-full p-5 bg-white rounded-sm lg:items-center flex-row">
                <div className="mb-6 mr-6 lg:mb-0">
                  <div className="flex items-center justify-center w-20 h-20 bg-indigo-50 lg:w-32 lg:h-32">
                    <img
                      src="../assets/images/codeid.png"
                      // className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                      {cr.progTitle}
                    </h6>
                    <p className="mb-2 text-sm text-gray-900">
                      {cr.progHeadline.substring(0,60)}
                    </p>
                  </div>
                  <a
                    href="#"
                    aria-label=""
                    className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Curriculum <ChevronRightIcon className="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-900" aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div class="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10">
        <div className="text-xl font-bold text-gray-900 text-center mb-10">
          <span>Frequently Asked Question</span>
        </div>
        
        {fqa.map((fqa) => (
          <Disclosure key={fqa.id} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-white border px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span>{fqa.question}</span>
                  <ChevronDownIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {fqa.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      </>
      </LandingPage>
    </div>
  )
}
