import { XIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import PhoneForm from './shared/PhoneForm';

export default function Phone() {
  // const staticPhones = ['082345678900', '082567899876', '083456234456'];
  const { usersPhones } = useSelector((state) => state.profile.profile);

  return (
    <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Phones</dt>

      <dd className='mt-1 text-sm grid grid-cols-1 text-gray-900 sm:col-start-2 sm:col-span-2 sm:mt-0'>
        <div>
          <ul className='space-y-2'>
            {/* <li key={phones?.uspoEntityId} className='flex items-center gap-2'>
              {usersPhone?.uspoNumber}
              <button className='items-center flex font-bold text-gray-700'>
                <XIcon className='w-5 h-5 inline-block' /> Delete
              </button>
            </li> */}

            {usersPhones?.map((phone) => (
              <li key={phone.uspoPhoneId} className='flex items-center gap-2'>
                {phone.uspoPhone}
                <button className='items-center flex font-bold text-gray-700'>
                  <XIcon className='w-5 h-5 inline-block' /> Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute right-5 top-3'>
          <PhoneForm />
        </div>
      </dd>
    </div>
  );
}
