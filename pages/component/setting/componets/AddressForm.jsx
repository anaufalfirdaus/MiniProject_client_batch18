import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddressForm() {
  let [isOpen, setIsOpen] = useState(false);

  const addressTypes = [
    'home',
    'main Office',
    'primary',
    'shipping',
    'billing',
    'archive',
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      newAddress: '',
      postalCode: '',
      city: '',
      addressType: 1,
    },
    validationSchema: Yup.object().shape({
      newAddress: Yup.string().required('please provite your new Address'),
      postalCode: Yup.string().required('please provite a postal code'),
      city: Yup.string().required('please insert city'),
      addressType: Yup.number().required('please Choose the address type'),
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
            <PlusIcon className='w-5 h-5 inline-block' />
            <span>Add Address</span>
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
                    <LocationMarkerIcon className='w-6 h-6 inline-block' />
                    Add Address
                  </Dialog.Title>

                  <div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='flex flex-col'>
                        <label htmlFor='newAddress'>New Address</label>
                        <input
                          value={formik.values.newAddress}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='newAddress'
                          id='newAddress'
                        />
                      </div>
                      <div className='flex items-center gap-3'>
                        <label htmlFor='postalCode'>Postal Code</label>
                        <input
                          value={formik.values.postalCode}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='postalCode'
                          id='postalCode'
                          placeholder='Postal Code...'
                        />
                        <label htmlFor='city'>City</label>
                        <input
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='city'
                          id='coty'
                          placeholder='city'
                        />
                      </div>
                      <div className='flex gap-3 items-center'>
                        <label htmlFor='addressType'>Address Type</label>
                        <select
                          value={formik.values.addressType}
                          onChange={(e) =>
                            formik.setFieldValue('addressType', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 w-2/5 capitalize'
                          name='addressType'
                          id='addressType'
                        >
                          {addressTypes.map((type, i) => (
                            <option
                              className='capitalize'
                              key={i}
                              value={i + 1}
                            >
                              {type}
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
