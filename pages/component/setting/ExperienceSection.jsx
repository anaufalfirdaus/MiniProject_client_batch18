import {
  BookOpenIcon,
  PencilAltIcon,
  XIcon,
  ArrowRightIcon,
} from '@heroicons/react/solid';
import { PlusIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

export default function ExperienceSection() {
  const { usersExperiences } = useSelector((state) => state.profile.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <BookOpenIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Experience</span>
        </h2>
        <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
          <div className='flex items-center space-x-1'>
            <PlusIcon className='w-5 h-5 inline-block' />
            <span>Add Experience</span>
          </div>
        </button>
      </div>
      {usersExperiences?.map((exp) => (
        <div
          key={exp.usexId}
          className=' text-gray-700 m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl space-y-2'
        >
          <div className='px-5 flex flex-col space-y-3'>
            <span className='text-gray-800 text-3xl font-bold'>
              {exp.usexTitle}
            </span>
            <span className='text-gray-700 text-xl font-semibold italic'>
              {exp.usexProfileHeadline}
            </span>
            <span className='text-grary-600 text-2xl font-semibold'>
              {exp.usexCompanyName}
            </span>
            <div className='grid grid-cols-5'>
              <span className='text-grary-600 col-span-1 font-semibold tracking-tight'>
                Start-Until
              </span>
              <span className='flex items-center gap-1 text-grary-600 col-span-4'>
                {new Date(exp.usexStartDate).getUTCFullYear()}-
                {new Date(exp.usexStartDate).getUTCMonth()}{' '}
                <ArrowRightIcon className='w-5 h-5' />{' '}
                {new Date(exp.usexEndDate).getFullYear()}-
                {new Date(exp.usexEndDate).getMonth()}
              </span>
            </div>
            <span className='text-grary-600 text-lg tracking-wide'>
              {exp.usexIndustry}
            </span>
            <span className='text-grary-600 text-justify'>
              {exp.usexDescription} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aperiam reprehenderit voluptate fugiat, error
              amet, veniam voluptates, quod repellendus consectetur aspernatur
              harum doloremque corporis recusandae dolorem consequatur illo vel
              necessitatibus hic.
            </span>
          </div>

          <div className='grid grid-flow-col place-items-end'>
            <div className='space-x-3'>
              <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
                <div className='flex items-center space-x-1'>
                  <PencilAltIcon className='w-5 h-5 inline-block' />
                  <span>Edit</span>
                </div>
              </button>
              <button className=' m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
                <div className='flex items-center space-x-1'>
                  <XIcon className='w-5 h-5 inline-block' />
                  <span>Delete</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
