import {
  PencilAltIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

export default function ProfileForm({ user }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      username: 'kflmattuk',
      firstName: 'Sulkifli',
      lastName: 'Asmunandar',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required(),
      firstName: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required(),
      lastName: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required(),
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
          className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
        >
          <div className='flex items-center space-x-1'>
            <PencilAltIcon className='w-5 h-5 inline-block' />
            <span>Edit</span>
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
                    className='text-lg font-medium leading-6 flex items-center gap-3 mb-3 text-gray-700'
                  >
                    <UserIcon className='w-6 h-6 inline-block' />
                    Profile Edit
                  </Dialog.Title>

                  <div>
                    <form
                      className='flex flex-col gap-3'
                      onSubmit={formik.handleSubmit}
                    >
                      <div className='flex flex-col'>
                        <label htmlFor='username'>Username</label>
                        <input
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          className='py-2 rounded-xl text-gray-700 placeholder-gray-400'
                          type='text'
                          name='username'
                          id='username'
                          placeholder='ex. johndoe'
                        />
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex flex-col'>
                          <label htmlFor='firstName'>First Name</label>
                          <input
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            className='py-2 rounded-xl text-gray-700 placeholder-gray-400'
                            type='text'
                            name='firstName'
                            id='firstName'
                            placeholder='ex. John'
                          />
                        </div>
                        <div className=' flex flex-col'>
                          <label htmlFor='lastName'>Last Name</label>
                          <input
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            className='py-2 rounded-xl text-gray-700 placeholder-gray-400'
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='ex. Doe'
                          />
                        </div>
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
