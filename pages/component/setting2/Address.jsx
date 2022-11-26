import { XIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import AddressForm from './shared/AddressForm';

export default function Address() {
  const { usersAddresses } = useSelector((state) => state.profile.profile);

  const staticAddress = [
    'Jl Ciburial Indah 5 RT 1/01, Jawa Barat',
    'Jl Asiroh RT 007/01, Dki Jakarta',
    'Jl Tmn Cirendeu Permai 13 Kompl Cirendeu Permai, Dki Jakarta',
  ];

  return (
    <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Address</dt>

      <dd className='mt-1 text-sm grid grid-cols-1 text-gray-900 sm:col-start-2 sm:col-span-2 sm:mt-0'>
        <div>
          <ul className='space-y-2'>
            {usersAddresses?.map((address) => (
              <li key={address.etadAddrId} className='flex items-center gap-2'>
                {address.etadAddr.addrLine1} {address.etadAddr.addrLine2}{' '}
                <span className='font-bold text-gray-700 tracking-tight'>
                  ({address.etadAdty.adtyName})
                </span>
                <button className='items-center flex font-bold text-gray-700'>
                  <XIcon className='w-5 h-5 inline-block' /> Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute right-5 top-3'>
          <AddressForm />
        </div>
      </dd>
    </div>
  );
}
