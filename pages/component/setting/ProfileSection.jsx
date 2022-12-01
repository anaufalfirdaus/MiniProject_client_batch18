import Image from 'next/image';
import { useSelector } from 'react-redux';
import { UserIcon } from '@heroicons/react/solid';
import ProfileForm from './componets/ProfileForm';

export default function ProfileSection() {
  const { username, firstname, lastname } = useSelector(
    (state) => state.profile.profile
  );
  const { defaultEmail } = useSelector((state) => state.profile.profile);
  const { defaultRole } = useSelector((state) => state.profile.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <UserIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Profile</span>
        </h2>
        {/* <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
          <div className='flex items-center space-x-1'>
            <PencilAltIcon className='w-5 h-5 inline-block' />
            <span>Edit</span>
          </div>
        </button> */}
        <ProfileForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <div className='grid grid-cols-5 items-center'>
          <Image
            className='col-span-1 rounded-full object-cover w-24 h-24 border-4 border-gray-800/10 shadow-sm'
            src='/assets/images/yuri.jpg'
            width={480}
            height={480}
            sizes='480'
            alt='profile'
          />
          <div className='col-span-4 flex flex-col'>
            <span className='font-bold font-mono tracking-tight text-gray-700 text-lg'>
              {firstname} {lastname}{' '}
              <span className='font-medium text-gray-600 text-sm'>
                {username}
              </span>
            </span>
            <span className='italic font-sans text-gray-600 font-semibold'>
              {defaultEmail}
            </span>
            <span className='text-gray-500 font-regular'>{defaultRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
