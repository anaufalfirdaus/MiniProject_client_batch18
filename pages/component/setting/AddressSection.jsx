import {
  LocationMarkerIcon,
  PencilAltIcon,
  XIcon,
} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import AddressForm from './componets/AddressForm';
import RemoveModal from './componets/RemoveModal';

export default function AddressSection() {
  const { addresses } = useSelector((state) => state.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <LocationMarkerIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {addresses?.length > 1 ? 'Addresses' : 'Address'}
          </span>
        </h2>
        <AddressForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {addresses?.map((address) => (
            <li
              key={address?.etadAddrId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-gray-700 font-regular truncate'>
                {address?.etadAddr?.addrLine1} {address?.etadAddr?.addrLine2}{' '}
              </span>
              <div className='space-x-3'>
                <button className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'>
                  <div className='flex items-center space-x-1'>
                    <PencilAltIcon className='w-5 h-5 inline-block' />
                    <span>Edit</span>
                  </div>
                </button>
                <RemoveModal modalTitle={'address'} id={address?.etadAddrId}>
                  Are you sure want to delete address{' '}
                  <span className='font-semibold'>
                    {address?.etadAddr?.addrLine1}{' '}
                    {address?.etadAddr?.addrLine2}
                  </span>{' '}
                  ?
                </RemoveModal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
