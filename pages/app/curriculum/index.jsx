import {
  AcademicCapIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import AppLayout from '../../component/layout/AppLayout';
import ButtonMenu from '../../component/curriculum/ButtonMenu';
import ListBox from '../../component/curriculum/ListBox';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurriculumsReq } from '../../redux-saga/Action/curriculumAction';

export default function Curriculum() {
  const dispatch = useDispatch();
  const curriculums = useSelector((state) => state.curriculum.curriculums);
  const { isLoading } = useSelector((state) => state.curriculum);
  useEffect(() => {
    dispatch(getCurriculumsReq());
  }, []);

  // const curriculum = [
  //   {
  //     id: 1,
  //     name: 'Nodejs',
  //     title: 'Develop with Javasript',
  //     duration: '3 Month',
  //     total: {
  //       members: 150,
  //       batchs: 15,
  //     },
  //     type: 'offline',
  //     rating: 4,
  //     status: 'ongoing',
  //   },
  //   {
  //     id: 2,
  //     name: 'Java Basics',
  //     title: 'Login & Solving Problems',
  //     duration: '2 Weeks',
  //     total: {
  //       members: 15,
  //       batchs: 2,
  //     },
  //     type: 'offline',
  //     rating: 5,
  //     status: 'ongoing',
  //   },
  //   {
  //     id: 3,
  //     name: 'Nest Js Backend',
  //     title: 'Make Backend Easy',
  //     duration: '5 Weeks',
  //     total: {
  //       members: 10,
  //       batchs: 2,
  //     },
  //     type: 'offline',
  //     rating: 3,
  //     status: 'completed',
  //   },
  //   {
  //     id: 4,
  //     name: 'Next Js Frondend',
  //     title: 'Make Frondend Easy',
  //     duration: '5 Weeks',
  //     total: {
  //       members: 20,
  //       batchs: 3,
  //     },
  //     type: 'offline',
  //     rating: 4,
  //     status: 'waiting',
  //   },
  // ];

  const [searchKeyword, setSearchKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  const handleChangeStatus = (status) => {
    setStatusFilter(status);
    // console.log(statusFilter.status);
  };

  const filteredCuriculum =
    statusFilter.status === 'all'
      ? searchKeyword.length > 0
        ? curriculums.filter(
            (curriculum) =>
              curriculum.name
                .toLowerCase()
                .includes(searchKeyword.toLowerCase()) ||
              curriculum.title
                .toLowerCase()
                .includes(searchKeyword.toLowerCase())
          )
        : curriculums
      : curriculums
          .filter((curriculum) => curriculum.learnType === statusFilter.status)
          .filter(
            (curriculum) =>
              curriculum.name
                .toLowerCase()
                .includes(searchKeyword.toLowerCase()) ||
              curriculum.title
                .toLowerCase()
                .includes(searchKeyword.toLowerCase())
          );

  return (
    <AppLayout>
      <div className='sm:w-5/5  mx-auto px-5 pb-3 flex flex-col gap-3'>
        <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
          <div className='flex justify-between items-center'>
            <h2 className='tracking-tight text-gray-700 flex items-center gap-2'>
              <AcademicCapIcon className='w-6 h-6 inline-block' />
              <span className='font-bold text-2xl'>Curriculum</span>
            </h2>
            <Link
              href='/app/curriculum/new'
              className='px-4 py-2 font-bold tracking-tight text-gray-500 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            >
              <div className='flex items-center space-x-1'>
                <PlusIcon className='w-5 h-5 inline-block' />
                <span>Create Curriculum</span>
              </div>
            </Link>
          </div>
        </div>

        <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-lg shadow-sm'>
          <div className='grid grid-cols-5 justify-around items-center space-x-2'>
            <span className='col-span-1 font-semibold text-sm text-gray-700'>
              Search by category
            </span>
            <div className='col-span-4 space-x-2'>
              <div className='grid grid-cols-5 space-x-2'>
                <div className='col-span-3 relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <SearchIcon className='w-5 h-5 text-gray-500' />
                  </div>
                  <input
                    value={searchKeyword}
                    onChange={(e) => handleChange(e)}
                    type='search'
                    id='default-search'
                    autoComplete='off'
                    className='block w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300'
                    placeholder='Search...'
                    required
                  />
                </div>
                <ListBox changeStatus={handleChangeStatus} />
                <button className='font-bold tracking-tight text-gray-500 text-xs px-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='border border-gray-300 relative shadow-md sm:rounded-lg'>
          <table className='table-auto w-full duration-200'>
            <thead>
              <tr className='text-gray-600 bg-gray-100 text-sm font-semibold tracking-wide uppercase'>
                <th className='p-2'>No.</th>
                <th className='p-2'>Title</th>
                <th className='p-2'>Headline</th>
                <th className='p-2'>Duration</th>
                <th className='p-2'>Total</th>
                <th className='p-2'>Type</th>
                <th className='p-2'>Rating</th>
                <th className='p-2'></th>
              </tr>
            </thead>
            <tbody className='p-2 divide-y font-medium'>
              {!isLoading
                ? filteredCuriculum?.map((curriculum, i) => (
                    <tr
                      key={curriculum?.id}
                      className='divide-x text-sm text-gray-500'
                    >
                      <td className='py-1 px-5'>
                        <div className='text-center'>{i + 1}</div>
                      </td>
                      <td className='py-1 px-5'>
                        <div className='line-clamp-2' title={curriculum?.name}>
                          {curriculum?.name}
                        </div>
                      </td>
                      <td className='py-1 px-5' title={curriculum?.title}>
                        <div className='line-clamp-2'>{curriculum?.title}</div>
                      </td>
                      <td className='py-1 px-5 text-center'>
                        <span>{curriculum.duration}</span>
                      </td>
                      <td className='py-1 px-5 flex flex-col h-auto my-auto'>
                        <span>
                          members:{' '}
                          <span className='italic text-xs'>
                            {curriculum?.total?.members}
                          </span>
                        </span>
                        <span>
                          batchs:{' '}
                          <span className='italic text-xs'>
                            {curriculum.total.batchs
                              ? curriculum.total.batchs
                              : 0}
                          </span>
                        </span>
                      </td>
                      <td className='py-1 px-5 text-center'>
                        <span>{curriculum?.type}</span>
                      </td>
                      <td className='py-1 px-5'>
                        <div className='flex place-content-center'>
                          {Array(5)
                            .fill(curriculum?.rating)
                            .map((rate, i) => (
                              <StarIcon
                                key={i}
                                className={`w-5 h-5 ${
                                  rate - i > 0
                                    ? 'text-yellow-500'
                                    : 'text-gray-400'
                                } inline`}
                              />
                            ))}
                        </div>
                      </td>
                      <td className='py-1 px-5'>
                        <div className='flex place-content-center'>
                          <ButtonMenu curriculum={curriculum} />
                        </div>
                      </td>
                    </tr>
                  ))
                : ''}
            </tbody>
          </table>
          {isLoading ? (
            <>
              <p className='p-3 text-gray-500 text-center text-sm font-semibold'>
                Loading...
              </p>
            </>
          ) : (
            ''
          )}
          {filteredCuriculum.length === 0 && searchKeyword !== '' && (
            <h2 className='p-3 text-gray-500 text-center text-sm font-semibold'>
              Sorry, Not found any data for keyword {searchKeyword} ... use
              another keyword
            </h2>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
