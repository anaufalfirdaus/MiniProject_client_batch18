import LandingPage from "./component/layout/LandingPage";

const stories = [
  {
      name: 'Abdul Rozak',
      job_cate: 'Software Engineer',
      client: 'Astra',
      comment: 'Di Codeid Academy saya belajar bla bla bla',
      href: 'https://www.youtube.com/watch?v=MFuwkrseXVE',
  },
  {
      name: 'Abdul Rozak',
      job_cate: 'Software Engineer',
      client: 'Astra',
      comment: 'Di Codeid Academy saya belajar bla bla bla',
      href: '#',
  },
  {
      name: 'Abdul Rozak',
      job_cate: 'Software Engineer',
      client: 'Astra',
      comment: 'Di Codeid Academy saya belajar bla bla bla',
      href: '#',
  },
];

export default function Home() {
  return (
    <div>
      <LandingPage>
      <>
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h6 className="font font-bold tracking-tight text-gray-900 sm:text-3xl">
                Upgrade your skill, it&apos;s free, graps your dream to become software engineer
              </h6>
              <p className="mt-4 text-base text-gray-500">
                Code Academy sampai saat ini telah menyelenggarakan lebih dari #20 batch coding bootcamp,
                dan menyalurkan 250 lebih alumni bootcamp ke 33 perusahaan besar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="isolate bg-gray-100">
        <div className="absolute inset-x-0">
          <div className="mx-auto max-w-2xl py-8 px-4 lg:max-w-7xl lg:px-8">
            <div className="text-xl font-bold text-gray-900 text-center mb-10">
              <span>Our alumni have work at</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-12 px-4 lg:max-w-7xl lg:px-8">
          <div className="text-xl font-bold text-gray-900 text-center mb-10">
            <h2>Alumni Success Story</h2>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-28 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-28">
            {stories.map((story) => (
              <a key={story.id} href={story.href} className="group">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src="https://img.youtube.com/vi/MFuwkrseXVE/0.jpg"
                  />
                </div>
                <h4 className="mt-4 text-lg font-medium text-gray-900">{story.name}</h4>
                <h3 className="mt-1 text-sm font-medium text-gray-800">{story.job_cate} | {story.client}</h3>
                <p className="mt-1 text-xs text-gray-700">{story.comment}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      </>
      </LandingPage>
    </div>
  )
}
