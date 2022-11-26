import { MapIcon, PencilAltIcon, XIcon } from '@heroicons/react/solid';
import { PlusIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

export default function AddressSection() {
  const { usersAddresses } = useSelector((state) => state.profile.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <MapIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Address</span>
        </h2>
        <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
          <div className='flex items-center space-x-1'>
            <PlusIcon className='w-5 h-5 inline-block' />
            <span>Add Address</span>
          </div>
        </button>
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {usersAddresses?.map((address) => (
            <li
              key={address.etadAddrId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-gray-700 font-regular'>
                {address.etadAddr.addrLine1} {address.etadAddr.addrLine2}{' '}
              </span>
              <div className='space-x-3'>
                <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
                  <div className='flex items-center space-x-1'>
                    <PencilAltIcon className='w-5 h-5 inline-block' />
                    <span>Edit</span>
                  </div>
                </button>
                <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
                  <div className='flex items-center space-x-1'>
                    <XIcon className='w-5 h-5 inline-block' />
                    <span>Delete</span>
                  </div>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}