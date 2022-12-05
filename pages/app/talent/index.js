import { useRouter } from 'next/router';
import Breadcrump from '../../component/breadcrump';
import AppLayout from '../../component/layout/AppLayout';

export default function Talent() {
  const router = useRouter();
  return (
    <AppLayout>
      <div>
        <Breadcrump path={router.pathname} />
      <div className="text-center mt-14">
        <h2 className="text-2xl tracking-tight">
          Professional Application Process
        </h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <input
                id="fullName"
                name="FullName"
                type="text"
                autoComplete="FullName"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Full Name"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6 flex">
              <input
                id="date"
                name="date"
                type="date"
                autoComplete="date"
                className="appearance-none flex mr-2 block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Date"
                required />
              <input
                id="age"
                name="age"
                type="number"
                autoComplete="age"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="age"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                id="pendidikan"
                name="Pendidikan"
                type="text"
                autoComplete="Pendidikan"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Pendidikan"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                id="institusi"
                name="Institusi"
                type="text"
                autoComplete="Institusi"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Sekolah / University"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                id="jurusan"
                name="Jurusan"
                type="text"
                autoComplete="Jurusan"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Jurusan"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                id="phoneNumber"
                name="PhoneNumber"
                type="text"
                autoComplete="PhoneNumber"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Phone Number"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                id="resume"
                name="Resume"
                type="file"
                autoComplete="Resume"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="resume"
                accept=".pdf"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </AppLayout>
  )
}
