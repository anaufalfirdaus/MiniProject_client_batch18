import React from 'react'
import { SearchIcon } from '@heroicons/react/solid';
import Dropdown from '../../component/job/Dropdown';
import AppLayout from '../../component/layout/AppLayout';
import JobPost from '../../component/job/JobPost';
import CreateModal from '../../component/job/CreateModal'


export default function Hiring() {
  
  return (
    <AppLayout>
      <div className='p-3 flex border-4 border-zinc-600 rounded-md'>
        <h3 className='font-bold tracking-wide pb-3 text-2xl text-black-700'>
          Jobs Posting
        </h3>
        <div className='px-5 pb-3 absolute top-2.5 right-10'>
        <CreateModal/>
        </div>
      </div>
      <div className='flex'>
              <form className='absolute inset-20' action='#' method='GET'>
                <label htmlFor='search_field' className='sr-only'>
                  Search
                </label>
                <div className='text-gray-400 focus-within:text-gray-600 items-center'>
                  <div className='flex mx-7 my-5 items-center'>
                    <SearchIcon className='h-10 w-10' aria-hidden='true' />
                    <input
                    id='search_field'
                    name='search_field'
                    className='pl-15 pr-100 py-2 w-full border-solid rounded-md text-gray-900 placeholder-gray-500 focus:ring-0 focus:border-solid focus:placeholder-gray-400'
                    placeholder='title, experience, industry, category'
                    type='search'
                    />
       <Dropdown/>
        <button type="button" class="ml-2 text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">Search</button>
                  </div>
                  <JobPost/>
                </div>
              </form>
            </div>
    </AppLayout>
  )
}
