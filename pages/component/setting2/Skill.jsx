import { useSelector } from 'react-redux';
import SkillForm from './shared/SkillForm';

export default function Skill() {
  const userSkills = useSelector((state) => state.profile.profile.usersSkills);

  return (
    <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Skills</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
        {userSkills?.map((skill) => (
          <div key={skill.uskiId}>
            <span>{skill.uskiSktyName.sktyName}</span>
          </div>
        ))}
      </dd>
      <div className='absolute right-5 top-3'>
        <SkillForm />
      </div>
    </div>
  );
}
