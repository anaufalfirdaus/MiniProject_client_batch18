import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  BookOpenIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ExperienceForm() {
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

  const expType = ['Company', 'Voluntieer', 'Organization', 'Reward'];
  const empType = ['Full-time', 'Contract', 'Freelance', 'Remote'];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      newEmail: '',
    },
    validationSchema: Yup.object().shape({
      newEmail: Yup.string().email().required(),
    }),

    onSubmit: async (values) => {
      console.log(values);
      // await UserApi.addEmail(userId, values.newEmail);
    },
  });

  return (
    <>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
        >
          <div className='flex items-center space-x-1'>
            <PlusIcon className='w-5 h-5 inline-block' />
            <span>Add Experience</span>
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
                <Dialog.Panel className='transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all w-3/5 mx-auto'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 flex items-center gap-3 mb-3 text-gray-700'
                  >
                    <BookOpenIcon className='w-6 h-6 inline-block' />
                    Add Experience
                  </Dialog.Title>

                  <div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='title'>
                          Title
                        </label>
                        <input
                          value={formik.values.title}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='title'
                          id='title'
                          placeholder='Title...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='headline'>
                          Headline
                        </label>
                        <input
                          value={formik.values.headline}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='headline'
                          id='headline'
                          placeholder='Headline...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='company'>
                          Company
                        </label>
                        <input
                          value={formik.values.company}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='company'
                          id='company'
                          placeholder='Company...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='city'>
                          City
                        </label>
                        <input
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='city'
                          id='city'
                          placeholder='City...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='grade'>
                          Start
                        </label>
                        <div className='grid grid-cols-2 gap-1 col-span-2'>
                          <select
                            value={formik.values.startMonth}
                            onChange={(e) =>
                              formik.setFieldValue('startMonth', e.target.value)
                            }
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
                            value={formik.values.startYear}
                            onChange={formik.handleChange}
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
                            value={formik.values.untilMonth}
                            onChange={(e) =>
                              formik.setFieldValue('untilMonth', e.target.value)
                            }
                            className='rounded-lg px-2 py-1 col-span-1'
                            name='untilMonth'
                            id='untilMonth'
                          >
                            <option value=''>-- Month --</option>
                            {months.map((month, i) => (
                              <option key={i} value={month}>
                                {month}
                              </option>
                            ))}
                          </select>
                          <input
                            value={formik.values.untilYear}
                            onChange={formik.handleChange}
                            className='rounded-lg px-2 py-1 col-span-1'
                            type='text'
                            name='untilYear'
                            id='untilYear'
                            placeholder='eg. 2017'
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='industry'>
                          industry
                        </label>
                        <input
                          value={formik.values.title}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='industry'
                          id='industry'
                          placeholder='Industry...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='employmentType'>
                          Employment Type
                        </label>
                        <select
                          value={formik.values.employementType}
                          onChange={(e) =>
                            formik.setFieldValue(
                              'employmentType',
                              e.target.value
                            )
                          }
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='employmentType'
                          id='employmentType'
                        >
                          <option value=''>-- Employment Type ---</option>
                          {empType.map((emp, i) => (
                            <option key={i} value={emp}>
                              {emp}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='grid grid-cols-6'>
                        <label className='col-span-1' htmlFor='description'>
                          Description
                        </label>
                        <textarea
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          name='description'
                          id='description'
                          cols='5'
                          rows='5'
                        ></textarea>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='experienceType'>
                          Experience Type
                        </label>
                        <select
                          value={formik.values.experienceType}
                          onChange={(e) =>
                            formik.setFieldValue(
                              'experienceType',
                              e.target.value
                            )
                          }
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='experienceType'
                          id='experienceType'
                        >
                          <option value=''>-- Experience Type ---</option>
                          {expType.map((exp, i) => (
                            <option key={i} value={exp}>
                              {exp}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='mt-4 flex gap-2 justify-end'>
                        <button
                          type='submit'
                          className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
                          // onClick={closeModal}
                        >
                          <div className='flex items-center space-x-1'>
                            <SaveIcon className='w-5 h-5 inline-block' />
                            <span>Save</span>
                          </div>
                        </button>
                        <button
                          type='button'
                          className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
                          onClick={closeModal}
                        >
                          <div className='flex items-center space-x-1'>
                            <ArrowNarrowLeftIcon className='w-5 h-5 inline-block' />
                            <span>Cancel</span>
                          </div>
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
