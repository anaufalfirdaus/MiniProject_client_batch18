import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

const fqa = [
  {
    id: 1,
    question: 'Syarat untuk mengikuti bootcamp?',
    answer: 'Syarat mengikuti bootcamp adalah kamu sudah lulus kuliah minimal D3/S1, jurusan informatika/matematika/fisika/komputer/SI, sedang tidak bekerja, siap mengikuti dinas.'
  },
  {
    id: 2,
    question: 'Tahapan sampai mengikuti bootcamp',
    answer: 'Pertama kamu harus daftar dulu di situs kami dan pilih bootcamp yang kamu inginkan, lalu kamu akan mengikuti filtering test, lalu interview, legal contract dan kamu siap join bootcamp'
  },
  {
    id: 3,
    question: 'Kak, fasilitas nya apa aja ya selama mengikuti bootcamp?',
    answer: 'Untuk yang offline, kamu akan belajar di sentul bogor, suasana seperti villa, kamu nginap di sana selama 3 bulan, makan gratis 3x sehari, peralatan mandi, mesin cuci, tempat nongkrong, enak deh pokoknya, kamu bisa lebih konsen belajar'
  },
  {
    id: 4,
    question: 'Kak, ijazah ditahan ga?',
    answer: 'Ijazah kami simpan, dan pasti aman, kami kembalikan jika sudah mengikuti ikatan dinas selama 2 tahun'
  },
];

export default function Faq() {
  return (
    <div className="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10">
      <div className="text-xl font-bold text-gray-900 text-center mb-10">
        <span>Frequently Asked Question</span>
      </div>
      
      {fqa.map((fqa, index) => (
        <Disclosure key={index + fqa.id} as="div" className="mt-2">
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
  )
}
