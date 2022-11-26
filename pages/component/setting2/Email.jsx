import { XIcon } from '@heroicons/react/solid';
import UserApi from '../../api/UserApi';
import EmailForm from './shared/EmailForm';
import { useSelector } from 'react-redux';

export default function Email() {
  const { usersEmail } = useSelector((state) => state.profile.profile);
  const removeEmail = async (emailId) => {
    if (confirm('are you sure want to delete the email')) {
      console.log(emailId);
      const result = await UserApi.removeEmail(emailId);
      console.log(result);
    }
  };

  return (
    <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Email address</dt>

      <dd className='mt-1 text-sm grid grid-cols-1 text-gray-900 sm:col-start-2 sm:col-span-2 sm:mt-0'>
        <div>
          <ul className='space-y-2'>
            {usersEmail?.map((email) => (
              <li key={email?.pmailId} className='flex items-center gap-2'>
                {email?.pmailAddress}
                <button
                  onClick={() => removeEmail(email?.pmailId)}
                  className='items-center flex font-bold text-gray-700'
                >
                  <XIcon className='w-5 h-5 inline-block' /> Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute right-5 top-3'>
          <EmailForm />
        </div>
      </dd>
    </div>
  );
}
