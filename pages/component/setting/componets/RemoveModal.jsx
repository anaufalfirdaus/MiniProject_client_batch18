import {
  XIcon,
  ArrowNarrowLeftIcon,
  TrashIcon,
  DocumentRemoveIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeAddressRequest,
  removeEducationRequest,
  removeEmailRequest,
  removeExperienceRequest,
  removePhoneRequest,
  removeSkillRequest,
} from '../../../redux-saga/Action/profileAction';

export default function RemoveModal({ modalTitle, id, children }) {
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const removeAction = (name, id) => {
    if (name === 'email') {
      dispatch(removeEmailRequest(id));
      closeModal();
      return;
    }
    if (name === 'phone') {
      dispatch(removePhoneRequest(id));
      closeModal();
      return;
    }
    if (name === 'address') {
      dispatch(removeAddressRequest(id));
      closeModal();
      return;
    }
    if (name === 'education') {
      dispatch(removeEducationRequest(id));
      closeModal();
      return;
    }
    if (name === 'experience') {
      dispatch(removeExperienceRequest(id));
      closeModal();
      return;
    }
    if (name === 'skill') {
      dispatch(removeSkillRequest(id));
      closeModal();
      return;
    }
  };

  return (
    <>
      {modalTitle === 'skill' ? (
        <>
          <button
            onClick={openModal}
            className='border-2 border-gray-700/75 rounded-full bg-transparent hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300 p-1'
          >
            <XIcon className='w-5 h-5 ' />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={openModal}
            className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
          >
            <div className='flex items-center space-x-1'>
              <XIcon className='w-5 h-5 inline-block' />
              <span>Delete</span>
            </div>
          </button>
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
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    <div className='flex items-center space-x-2'>
                      <DocumentRemoveIcon className='w-5 h-5 inline-block' />
                      <span>Remove {modalTitle}</span>
                    </div>
                  </Dialog.Title>

                  <div>{children}</div>
                  <div className='mt-4 flex gap-2 justify-end'>
                    <button
                      type='submit'
                      className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'
                      onClick={() => removeAction(modalTitle, id)}
                    >
                      <div className='flex items-center space-x-1'>
                        <TrashIcon className='w-5 h-5 inline-block' />
                        <span>Remove</span>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
