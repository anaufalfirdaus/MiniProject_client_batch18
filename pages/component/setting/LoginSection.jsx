import { PencilAltIcon, LockClosedIcon } from '@heroicons/react/solid';
import LoginForm from './componets/LoginForm';

export default function LoginSection() {
  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <LockClosedIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Login</span>
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}
