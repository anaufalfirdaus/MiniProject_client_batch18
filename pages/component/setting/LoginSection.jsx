import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import LoginForm from './componets/LoginForm';
import { useSelector } from 'react-redux';

export default function LoginSection() {
  const [notif, setNotif] = useState(true);
  const message = useSelector((state) => state.profile.message);

  if (notif) {
    setTimeout(() => {
      setNotif(false);
    }, 3000);
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <LockClosedIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Login</span>
        </h2>
        {message ? (
          <span
            className={`text-gray-600 italic text-sm ${
              notif && message ? '' : 'hidden'
            }`}
          >
            {message?.message}
          </span>
        ) : (
          ''
        )}
        <LoginForm />
      </div>
    </div>
  );
}
