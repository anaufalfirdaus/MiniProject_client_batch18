import React from 'react'

export default function Benefit() {
  return (
    <>
      <div className="mx-auto px-4 sm:max-w-xl sm:pb-8 md:max-w-full lg:max-w-7xl lg:pb-12">
        <div className="border">
          <div className="flex flex-col lg:pb-10 mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <img
                className="bg-indigo-50"
                src="../assets/images/codeid.png"
                alt="codeid" />
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
    </>
  )
}
