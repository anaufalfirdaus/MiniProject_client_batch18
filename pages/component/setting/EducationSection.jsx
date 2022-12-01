import { AcademicCapIcon, PencilAltIcon, XIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import EducationForm from './componets/EducationForm';
import RemoveModal from './componets/RemoveModal';

export default function EducationSection() {
  const { educations } = useSelector((state) => state.profile);

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <AcademicCapIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {educations?.length > 1 ? 'Educations' : 'Education'}
          </span>
        </h2>
        <EducationForm />
      </div>
      {educations?.map((education) => (
        <div
          key={education.usduId}
          className='relative text-gray-700 m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl space-y-2'
        >
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              School
            </span>
            <span className='col-span-4'>: {education.usduSchool}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Degree
            </span>
            <span className='col-span-4'>: {education.usduDegree}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Field Study
            </span>
            <span className='col-span-4'>: {education.usduFieldStudy}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Grade(IPK)
            </span>
            <span className='col-span-4'>: {education.usduGrade}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Start-Until
            </span>
            <span className='col-span-4'>
              : {new Date(education.usduStartDate).getUTCFullYear()}-
              {new Date(education.usduStartDate).getUTCMonth()} -{' '}
              {new Date(education.usduEndDate).getFullYear()}-
              {new Date(education.usduEndDate).getMonth()}
            </span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Activity
            </span>
            <span className='col-span-4 text-justify'>
              : {education.usduActivities} Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat distinctio odio corrupti
              sapiente iusto, inventore quas, exercitationem esse laboriosam
              ullam magni enim, rerum dicta quisquam dolores quasi accusantium
              omnis iure.
            </span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Descriptions
            </span>
            <span className='col-span-4 text-justify'>
              : {education.usduDescription} Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum quidem provident optio atque
              facere voluptatibus eos, sapiente incidunt rerum alias quos
              voluptatum officiis ullam illo nulla ipsam quisquam dolores sequi.
            </span>
          </div>
          <div className='grid grid-flow-col place-items-end'>
            <div className='space-x-3'>
              <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
                <div className='flex items-center space-x-1'>
                  <PencilAltIcon className='w-5 h-5 inline-block' />
                  <span>Edit</span>
                </div>
              </button>
              <RemoveModal modalTitle={'education'} id={education.usduId}>
                Are you sure want to delete Education from this{' '}
                <span className='font-semibold'>{education.usduSchool}</span> ?
              </RemoveModal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
