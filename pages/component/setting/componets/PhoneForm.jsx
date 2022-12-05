import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  PhoneIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  addPhoneRequest,
  updatePhoneRequest,
} from '../../../redux-saga/Action/profileAction';

export default function PhoneForm({ edit }) {
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const phoneCode = ['Cell', 'Home'];

  const id = useSelector((state) => state.profile.profile.userId);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      userId: id,
      phone: edit ? edit.uspoPhone : '',
      code: edit ? edit.pontyCode : '',
    },
    validationSchema: Yup.object().shape({
      userId: Yup.number().required(),
      phone: Yup.string().required('Please provite your number'),
      code: Yup.string()
        .oneOf(phoneCode, 'Please Choose Phone Type')
        .required('Please Choose Phone Type'),
    }),

    onSubmit: async (values) => {
      if (edit) {
        const payload = {
          uspoPhoneId: edit.uspoPhoneId,
          uspoEntity: values.userId,
          uspoPhone: values.phone,
          pontyCode: values.code,
        };
        dispatch(updatePhoneRequest(payload));
      } else {
        dispatch(addPhoneRequest(values));
        formik.resetForm();
      }
      closeModal();
    },
  });

  return (
    <>
      <div>
        {edit ? (
          <>
            <button
              onClick={openModal}
              className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
            >
              <div className='flex items-center space-x-1'>
                <PencilAltIcon className='w-5 h-5 inline-block' />
                <span>Edit</span>
              </div>
            </button>
          </>
        ) : (
          <>
            <button
              type='button'
              onClick={openModal}
              className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
            >
              <div className='flex items-center space-x-1'>
                <PlusIcon className='w-5 h-5 inline-block' />
                <span>Add Phone</span>
              </div>
            </button>
          </>
        )}
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
                    <PhoneIcon className='w-6 h-6 inline-block' />
                    {edit ? 'Update' : 'Add'} Phone
                  </Dialog.Title>

                  <div>
                    <form
                      className='flex flex-col gap-3'
                      onSubmit={formik.handleSubmit}
                    >
                      <div className='grid grid-cols-2 items-center mt-2 gap-3'>
                        <label htmlFor='phone'>New Phone</label>
                        <input
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='phone'
                          id='phone'
                          placeholder='ex. 083456789098'
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone ? (
                        <span className='mt-2 text-sm text-red-600'>
                          {formik.errors.phone}
                        </span>
                      ) : null}
                      <div className='grid grid-cols-2 items-center mt-2 gap-3'>
                        <label htmlFor='code'>Phone Type</label>
                        <select
                          value={formik.values.code}
                          onSelect={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onChange={(e) =>
                            formik.setFieldValue('code', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 col-span-1'
                          name='code'
                          id='code'
                        >
                          <option value='Bachelor'>-- Phone Type --</option>
                          {phoneCode.map((code, i) => (
                            <option key={i} value={code}>
                              {code}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.touched.code && formik.errors.code ? (
                        <span className='mt-2 text-sm text-red-600'>
                          {formik.errors.code}
                        </span>
                      ) : null}
                      <div className='mt-4 flex gap-2 justify-end'>
                        <button
                          type='submit'
                          className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
                          // onClick={closeModal}
                        >
                          <div className='flex items-center space-x-1'>
                            <SaveIcon className='w-5 h-5 inline-block' />
                            <span>{edit ? 'Update' : 'Save'}</span>
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
