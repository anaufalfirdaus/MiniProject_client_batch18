import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  LocationMarkerIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAddressRequest,
  updateAddressRequest,
} from '../../../redux-saga/Action/profileAction';

export default function AddressForm({ edit }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.profile.profile.userId);
  const addresses = useSelector((state) => state.profile.listAddresses);
  const addressTypes = useSelector((state) => state.profile.addressType);
  const { city } = useSelector((state) => state.profile);

  const [query, setQuery] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  let [isOpen, setIsOpen] = useState(false);

  const oneOfCity = city?.map((ci) => ci.cityId);
  const oneOfaddress = addressTypes.map((addrs) => addrs.adtyId);

  const filteredAddress = query
    ? addresses.filter((address) =>
        address.addrLine1.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      userId: id,
      addressLine1: '',
      addressLine2: '',
      addressPostalCode: '',
      cityId: '',
      addressType: '',
    },
    validationSchema: Yup.object().shape({
      userId: Yup.number().required(),
      addressLine1: Yup.string()
        .min(5)
        .max(255)
        .required('please provite your new Address'),
      addressLine2: Yup.string()
        .min(5)
        .max(255)
        .required('please provite your new Address'),
      addressPostalCode: Yup.number().required('please provite a postal code'),
      cityId: Yup.number()
        .oneOf(oneOfCity, 'Pleace Choose City that we Provided')
        .required('please insert city'),
      addressType: Yup.number()
        .oneOf(oneOfaddress, 'Please Choose Address Type that we Provided')
        .required('please Choose the address type'),
    }),
    onSubmit: async (values) => {
      if (edit) {
        const payload = {};
        dispatch(updateAddressRequest(payload));
      } else {
        dispatch(addAddressRequest(values));
        formik.resetForm();
      }
      console.log(values);
      closeModal();
    },
  });

  return (
    <>
      {edit ? (
        <>
          <div>
            <button
              type='button'
              onClick={openModal}
              className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
            >
              <div className='flex items-center space-x-1'>
                <PencilAltIcon className='w-5 h-5 inline-block' />
                <span>Edit Address</span>
              </div>
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <button
              type='button'
              onClick={openModal}
              className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
            >
              <div className='flex items-center space-x-1'>
                <PlusIcon className='w-5 h-5 inline-block' />
                <span>Add Address</span>
              </div>
            </button>
          </div>
        </>
      )}

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
                    {edit ? 'Update' : 'Add'} Address
                  </Dialog.Title>

                  <div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='flex flex-col'>
                        <label htmlFor='addressLine1'>New Address</label>
                        <input
                          value={formik.values.addressLine1}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='addressLine1'
                          id='addressLine1'
                          placeholder='ex. Jl.Melati no.10'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <label htmlFor='addressLine2'>Address Line</label>
                        <input
                          value={formik.values.addressLine2}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='addressLine2'
                          id='addressLine2'
                          placeholder='ex . Kec. Baru / Kab. Gowa'
                        />
                      </div>
                      <div className='flex flex-col space-x-1'>
                        <label
                          className='ml-2 text-gray-600 text-sm font-semibold tracking-tight'
                          htmlFor='address'
                        >
                          Address
                        </label>
                        <input
                          type='text'
                          onChange={(event) => setQuery(event.target.value)}
                          className='rounded-lg px-2 py-1'
                          placeholder='type your address here...'
                        />
                        {filteredAddress.length > 0 ? (
                          <>
                            <div className=''>
                              <div className='w-full flex flex-col max-h-94 overflow-y-auto overflow-x-hidden space-x-1 bg-white'>
                                {filteredAddress.map((address) => (
                                  <button
                                    key={address.addrId}
                                    type='button'
                                    onClick={() => console.log(address)}
                                    className='hover:bg-blue-500 truncate p-1 w-full rounded-lg  border border-gray-500/75'
                                  >
                                    <div className='text-sm'>
                                      <span className='font-semibold text-gray-700'>
                                        {address.addrLine1}{' '}
                                      </span>
                                      <span className='text-gray-600'>
                                        {address.addrLine2}{' '}
                                      </span>
                                      <span className='text-gray-500 text-xs tracking-wide'>
                                        {address.addrPostalCode}
                                      </span>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className='flex items-center gap-3'>
                        <label htmlFor='addressPostalCode'>Postal Code</label>
                        <input
                          value={formik.values.addressPostalCode}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='addressPostalCode'
                          id='addressPostalCode'
                          placeholder='ex. 34045'
                        />
                        <label htmlFor='cityId'>City</label>
                        <select
                          value={formik.values.cityId}
                          onChange={(e) =>
                            formik.setFieldValue(
                              'cityId',
                              Number(e.target.value)
                            )
                          }
                          className='rounded-lg px-2 py-1 w-2/5 capitalize'
                          name='cityId'
                          id='cityId'
                        >
                          <option>-Choose City-</option>
                          {city?.map((ci) => (
                            <option
                              className='capitalize'
                              key={ci.cityId}
                              value={ci.cityId}
                            >
                              {ci.cityName}
                            </option>
                          ))}
                        </select>
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
                          <option>-Address Type-</option>
                          {addressTypes?.map((type) => (
                            <option
                              className='capitalize'
                              key={type.adtyId}
                              value={type.adtyId}
                            >
                              {type.adtyName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='flex flex-col space-x-1'>
                        {formik.touched.addressLine1 &&
                        formik.errors.addressLine1 ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.addressLine1}
                          </span>
                        ) : null}
                        {formik.touched.addressPostalCode &&
                        formik.errors.addressPostalCode ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.addressPostalCode}
                          </span>
                        ) : null}
                        {formik.touched.cityId && formik.errors.cityId ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.cityId}
                          </span>
                        ) : null}
                        {formik.touched.addressType &&
                        formik.errors.addressType ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.addressType}
                          </span>
                        ) : null}
                      </div>
                      <div className='mt-4 flex gap-2 justify-end'>
                        <button
                          type='submit'
                          className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                          // onClick={closeModal}
                        >
                          <div className='flex items-center space-x-1'>
                            <SaveIcon className='w-5 h-5 inline-block' />
                            <span>{edit ? 'Update' : 'Save'}</span>
                          </div>
                        </button>
                        <button
                          type='button'
                          className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
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
