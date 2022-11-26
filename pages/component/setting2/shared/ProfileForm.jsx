import { PencilIcon } from '@heroicons/react/solid';
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
      birthDate: new Date(1997, 2, 12),
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
          className='text-sm font-bold text-gray-700 hover:text-gray-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          <div className='grid grid-cols-2 items-center'>
            <PencilIcon className='w-5 h-5' />
            <span className='block'>Edit</span>
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
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='ex. Doe'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <label htmlFor='birthDate'>Birthdate</label>
                        <input
                          value={formik.values.birthDate}
                          onChange={formik.handleChange}
                          type='date'
                          name='birthDate'
                          id='birthDate'
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
