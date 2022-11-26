import { useSelector } from 'react-redux';
import EducationForm from './shared/EducationForm';

export default function Education() {
  const userEducations = useSelector(
    (state) => state.profile.profile.usersEducations
  );
  return (
    <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Educations</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
        {userEducations?.map((education) => (
          <div key={education.usduId} className='flex flex-col gap-2'>
            <span>School : {education.usduSchool}</span>
            <span>Degree : {education.usduDegree}</span>
            <span>Field Study: {education.usduFieldStudy}</span>
            <span>
              Year : {new Date(education.usduStartDate).toDateString()} until:{' '}
              {new Date(education.usduEndDate).toDateString()}
            </span>
            <span>Grade: {education.usduGrade}</span>
            <span>Activities: {education.usduActivities}</span>
            <span>Description: {education.usduDescription}</span>
          </div>
        ))}
      </dd>
      <div className='absolute right-5 top-3'>
        <EducationForm />
      </div>
    </div>
  );
}
