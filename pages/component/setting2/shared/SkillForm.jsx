import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SkillForm() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      newSkills: '',
    },
    validationSchema: Yup.object().shape({
      newSkills: Yup.string().required('please provite your new Skill'),
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
            Add Skill
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
                <Dialog.Panel className='transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Add Skill
                  </Dialog.Title>

                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className='grid grid-cols-3 items-center mt-2 gap-3'>
                        <label className='col-span-1' htmlFor='newSkills'>
                          Skills
                        </label>
                        {/* TODO: update to SELECT Options and take skill type from database to make a list */}
                        <input
                          value={formik.values.newSkills}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1 col-span-2'
                          type='email'
                          name='newSkills'
                          id='newSkills'
                        />
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
