import { PlusIcon, DesktopComputerIcon, XIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import SkillForm from './componets/SkillForm';

export default function SkillSection() {
  const { usersSkills } = useSelector((state) => state.profile.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <DesktopComputerIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Skills</span>
        </h2>
        <SkillForm />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        {usersSkills?.map((skill) => (
          <div
            key={skill.uskiId}
            className='flex items-center justify-between py-1 px-2 bg-white border border-gray-500/30 rounded-full'
          >
            <span className='ml-3 text-gray-600 font-bold capitalize'>
              {skill.uskiSktyName.sktyName}
            </span>
            <button className='border-2 border-gray-700/75 rounded-full bg-transparent hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300 p-1'>
              <XIcon className='w-5 h-5 ' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
