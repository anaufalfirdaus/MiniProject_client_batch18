import { PencilIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ProfileForm from './shared/ProfileForm';
export default function Profile() {
  const isLoading = useSelector((state) => state.profile.isLoading);
  const profile = useSelector((state) => state.profile.profile);
  const { userName, userFirstName, userLastName } = profile;
  const { defaultEmail } = useSelector((state) => state.profile.profile);
  const { defaultRole } = useSelector((state) => state.profile.profile);

  if (isLoading) {
    return <p>loading...</p>;
  }
  // const pmailAddress = 'kflmattuk@gmail.com';
  // const roleName = 'Cannidate';
  return (
    <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Profile</dt>
      <div className='col-start-2 col-span-2'>
        <div className='sm:grid sm:grid-cols-2 sm:gap-3'>
          <div className='flex flex-flow-col gap-3'>
            <Image
              alt='user-profile'
              className='max-w-16 max-h-16 bg-gray-300 object-cover rounded-full'
              width={72}
              height={72}
              src='/assets/images/yuri.jpg'
            />
            <dd className='text-sm text-gray-900'>
              <span className='font-bold block'>
                {userFirstName} {userLastName}{' '}
                <span className='font-medium tracking-wide text-gray-600'>
                  {userName}
                </span>
              </span>
              ({defaultEmail}) {defaultRole}
            </dd>
          </div>
        </div>
      </div>
      <div className='absolute right-5 top-3'>
        <ProfileForm />
      </div>
    </div>
  );
}
