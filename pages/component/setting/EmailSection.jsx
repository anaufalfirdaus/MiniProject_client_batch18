import { MailIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import EmailForm from './componets/EmailForm';
import RemoveModal from './componets/RemoveModal';

export default function EmailSection() {
  const { emails } = useSelector((state) => state.profile);
  const { defaultEmail } = useSelector((state) => state.profile.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <MailIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {emails?.length > 1 ? 'Emails' : 'Email'}
          </span>
        </h2>
        <EmailForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {emails?.map((email) => (
            <li
              key={email.pmailId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-gray-700 font-regular'>
                {email?.pmailAddress}
                {email?.pmailAddress === defaultEmail ? ' (Default)' : ''}
              </span>
              <div className='flex space-x-3'>
                <EmailForm edit={email} />
                <RemoveModal modalTitle={'email'} id={email.pmailId}>
                  <span>
                    Are you sure want to delete Email{' '}
                    <span className='font-semibold'>{email?.pmailAddress}</span>{' '}
                    ?
                  </span>
                </RemoveModal>
                {/* <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
                  <div className='flex items-center space-x-1'>
                    <XIcon className='w-5 h-5 inline-block' />
                    <span>Delete</span>
                  </div>
                </button> */}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
