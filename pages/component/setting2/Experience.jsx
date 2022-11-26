import { useSelector } from 'react-redux';
import ExperienceForm from './shared/ExperienceForm';

export default function Experience() {
  const userExperiences = useSelector(
    (state) => state.profile.profile.usersExperiences
  );

  return (
    <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Experiences</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
        {userExperiences?.map((exp) => (
          <div key={exp.usexId} className='flex flex-col gap-2'>
            <span>{exp.usexTitle}</span>
            <span>{exp.usexProfileHeadline}</span>
            <span>{exp.usexEmploymentType}</span>
            <span>{exp.usexCompanyName}</span>
            <span>{Number(exp.usexIsCurrent) ? 'Active' : 'Not-Active'}</span>
            <span>
              {new Date(exp.usexStartDate).toDateString()} -{' '}
              {new Date(exp.usexEndDate).toDateString()}
            </span>
            <span>{exp.usexIndustry}</span>
            <span>{exp.usexDescription}</span>
            <span>{exp.usexExperienceType}</span>
          </div>
        ))}
      </dd>
      <div className='absolute right-5 top-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
        <ExperienceForm />
      </div>
    </div>
  );
}
