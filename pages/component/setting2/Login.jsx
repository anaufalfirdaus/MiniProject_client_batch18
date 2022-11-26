import { PencilIcon } from '@heroicons/react/solid';
import LoginForm from './shared/LoginForm';

export default function Login() {
  return (
    <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Login</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
        Change Password
      </dd>
      <div className='absolute right-5 bottom-3 py-1'>
        <LoginForm />
      </div>
    </div>
  );
}
