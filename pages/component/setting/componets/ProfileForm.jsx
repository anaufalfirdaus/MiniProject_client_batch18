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
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '../../../redux-saga/Action/profileAction';

export default function ProfileForm() {
  let [isOpen, setIsOpen] = useState(false);
  const id = useSelector((state) => state.profile.profile.userId);
  const { username, firstname, lastname } = useSelector(
    (state) => state.profile.profile
  );
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      userId: id,
      userName: username,
      userFirstName: firstname,
      userLastName: lastname,
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required('username name is required, please enter username'),
      userFirstName: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required('firstname name is required, please enter firstname'),
      userLastName: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required('lastname name is required, please enter lastname'),
    }),

    onSubmit: async (values) => {
      dispatch(updateProfileRequest(values));
      setIsOpen(false);
    },
  });

  return (
    <>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
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
                        <label htmlFor='userName'>Username</label>
                        <input
                          value={formik.values.userName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='py-2 rounded-xl text-gray-700 placeholder-gray-400'
                          type='text'
                          name='userName'
                          id='userName'
                          placeholder='ex. johndoe'
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.userName}
                          </span>
                        ) : null}
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex flex-col'>
                          <label htmlFor='userFirstName'>First Name</label>
                          <input
                            value={formik.values.userFirstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='py-2 rounded-xl text-gray-700 placeholder-gray-400'
                            type='text'
                            name='userFirstName'
                            id='userFirstName'
                            placeholder='ex. John'
                          />
                          {formik.touched.userFirstName &&
                          formik.errors.userFirstName ? (
                            <span className='mt-2 text-sm text-red-600'>
                              {formik.errors.userFirstName}
                            </span>
                          ) : null}
                        </div>
                        <div className=' flex flex-col'>
                          <label htmlFor='userLastName'>Last Name</label>
                          <input
                            value={formik.values.userLastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='py-2 rounded-xl text-gray-700 placeholder-gray-400'
                            type='text'
                            name='userLastName'
                            id='userLastName'
                            placeholder='ex. Doe'
                          />
                          {formik.touched.userLastName &&
                          formik.errors.userLastName ? (
                            <span className='mt-2 text-sm text-red-600'>
                              {formik.errors.userLastName}
                            </span>
                          ) : null}
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
