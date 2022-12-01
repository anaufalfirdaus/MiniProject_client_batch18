import { PhoneIcon, PencilAltIcon, XIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import PhoneForm from './componets/PhoneForm';
import RemoveModal from './componets/RemoveModal';

export default function EmailSection() {
  const { phones } = useSelector((state) => state.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <PhoneIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {phones?.length > 1 ? 'Phones' : 'Phone'}
          </span>
        </h2>
        <PhoneForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {phones?.map((phone) => (
            <li
              key={phone?.uspoPhoneId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-gray-700 font-regular'>
                {phone?.uspoPhone}
              </span>
              <div className='flex space-x-3'>
                <PhoneForm edit={phone} />
                <RemoveModal modalTitle={'phone'} id={phone?.uspoPhoneId}>
                  Are you sure to delete this phone number{' '}
                  <span className='font-semibold'>{phone?.uspoPhone}</span> ?
                </RemoveModal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
