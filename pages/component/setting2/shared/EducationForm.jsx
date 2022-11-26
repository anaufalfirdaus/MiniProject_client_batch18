import { PencilIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function EducationForm() {
  let [isOpen, setIsOpen] = useState(false);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const degrees = ['Bachelor', 'Diploma', 'PHD', 'High School'];
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      school: '',
      degree: '',
    },
    validationSchema: Yup.object().shape({
      newPhone: Yup.string().required('please provite your new Number'),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='text-sm font-bold text-gray-700 hover:text-gray-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            Add Education
          </div>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all w-1/2'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Add Education
                  </Dialog.Title>

                  <div className='mt-2'>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='school'>
                          School
                        </label>
                        <input
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='school'
                          id='school'
                          placeholder='School Name...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='degreeType'>
                          Degree
                        </label>
                        <select
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='degreeType'
                          id='degreeType'
                        >
                          <option value=''>-- Degrees Options ---</option>
                          {degrees.map((degree, i) => (
                            <option key={i} value={degree}>
                              {degree}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='fieldStydy'>
                          Field Study
                        </label>
                        <input
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='fieldStydy'
                          id='fieldStydy'
                          placeholder='eg. Infomatic, Computer Science, Math'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='grade'>
                          Grade
                        </label>
                        <input
                          className='col-span-1 rounded-lg px-2 py-1'
                          type='number'
                          name='grade'
                          id='grade'
                          placeholder='eg. 3.14'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='grade'>
                          Start
                        </label>
                        <div className='grid grid-cols-2 gap-1 col-span-2'>
                          <select
                            className='rounded-lg px-2 py-1 col-span-1'
                            name='startMonth'
                            id='startMonth'
                          >
                            <option value='Bachelor'>-- Month --</option>
                            {months.map((month, i) => (
                              <option key={i} value={month}>
                                {month}
                              </option>
                            ))}
                          </select>
                          <input
                            className='rounded-lg px-2 py-1 col-span-1'
                            type='text'
                            name='startYear'
                            id='startYear'
                            placeholder='eg. 2012'
                          />
                        </div>
                        <label className='col-span-1 ml-8' htmlFor='grade'>
                          Until
                        </label>
                        <div className='grid grid-cols-2 gap-1 col-span-2'>
                          <select
                            className='rounded-lg px-2 py-1 col-span-1'
                            name='untilMonth'
                            id='untilMonth'
                          >
                            <option value='Bachelor'>-- Month --</option>
                            {months.map((month, i) => (
                              <option key={i} value={month}>
                                {month}
                              </option>
                            ))}
                          </select>
                          <input
                            className='rounded-lg px-2 py-1 col-span-1'
                            type='text'
                            name='untilYear'
                            id='untilYear'
                            placeholder='eg. 2017'
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-6'>
                        <label className='col-span-1' htmlFor='activities'>
                          Activities
                        </label>
                        <textarea
                          className='col-span-5 rounded-lg px-2 py-1'
                          name='activities'
                          id='activities'
                          cols='5'
                          rows='5'
                        ></textarea>
                      </div>
                      <div className='grid grid-cols-6'>
                        <label className='col-span-1' htmlFor='description'>
                          Description
                        </label>
                        <textarea
                          className='col-span-5 rounded-lg px-2 py-1'
                          name='description'
                          id='description'
                          cols='5'
                          rows='5'
                        ></textarea>
                      </div>
                      <div className='mt-4 flex gap-2 justify-end'>
                        <button
                          type='submit'
                          className='inline-flex justify-center rounded-md border border-transparent bg-green-300 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          // onClick={closeModal}
                        >
                          Save
                        </button>
                        <button
                          type='button'
                          className='inline-flex justify-center rounded-md border border-transparent bg-yellow-300 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
