/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import { doAddSignupRequest } from './redux-saga/Action/UsrAction';
import { useRouter } from 'next/router';
import { LockClosedIcon } from '@heroicons/react/solid'
import * as Yup from "yup";
import Link from 'next/link';

export default function signup() {
  const dispatch = useDispatch();
  const router = useRouter()
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required('First Name is required'),
    LastName: Yup.string().required('Last Name is required'),
    Number: Yup.string().required('Phone Number is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup
      .string()
      .min(3)
      .max(10)
      .required('Password is required'),
    confirmPassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      FirstName: "",
      LastName: "",
      Number: "",
      PontyCode: "",
      confirmPassword: "",
      RoleId: 1
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      let payload = {
        userFirstName: values.FirstName,
        userLastName: values.LastName,
        userName: values.username,
        password: values.password,
        uspoNumber: values.Number,
        uspoPontyCode: values.PontyCode,
        pmailAddress: values.email,
        usroRoleId: values.RoleId
      };
      dispatch(doAddSignupRequest(payload));
      router.push('/signin')
    }
  });
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="FirstName"
                name="FirstName"
                type="text"
                value={formik.values.FirstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="FirstName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
              {formik.touched.FirstName && formik.errors.FirstName ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.FirstName}</span> : null}
            </div>
            <div>
              <input
                id="LastName"
                name="LastName"
                type="text"
                value={formik.values.LastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="LastName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
              {formik.touched.LastName && formik.errors.LastName ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.LastName}</span> : null}
            </div>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {formik.touched.username && formik.errors.username ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.username}</span> : null}
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
              {formik.touched.email && formik.errors.email ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.email}</span> : null}
            </div>
            <div>
              <select
                id="PontyCode"
                name="PontyCode"
                type="select"
                value={formik.values.PontyCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="PontyCode"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Code Telp."
              >
                <option value="Home" label="Home">
                  Home
                </option>
                <option value="Cell" label="Cell">
                  Cell
                </option>
              </select>
              {formik.touched.PontyCode && formik.errors.PontyCode ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.PontyCode}</span> : null}
            </div>
            <div>
              <input
                id="Number"
                name="Number"
                type="text"
                value={formik.values.Number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="Number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Number Telp."
              />
              {formik.touched.Number && formik.errors.Number ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.Number}</span> : null}
            </div>
            <div>
              <select
                id="RoleId"
                name="RoleId"
                type="select"
                value={formik.values.RoleId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="RoleId"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Role Type"
              >
                <option value="11">
                  Outsource
                </option>
                <option value="1">
                  Candidat
                </option>
              </select>
              {formik.touched.RoleId && formik.errors.RoleId ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.RoleId}</span> : null}
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.password}</span>
                : null}
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.confirmPassword}</span>
                : null}
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={formik.handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >

              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
