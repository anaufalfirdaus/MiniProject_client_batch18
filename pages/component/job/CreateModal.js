import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { AddJopoRequest } from "../../redux-saga/Action/JopoAction";
import JopoModal from "./components/JopoModal";


const dispatch = useDispatch()
    const validationSchema = Yup.object().shape({
        jopoNumber: Yup.string('Enter Jopo Number').required('Jopo Number is Required'),
        jopoTitle: Yup.string('Enter Jopo Title').required('Jopo Title is Required'),
        jopoMinSalary: Yup.number('Enter Minimum Salary').required('Minimum Salary is Required'),
        jopoMaxSalary: Yup.number('Enter Max Salary').required('Max Salary is Required'),
        jopoDescription: Yup.object('Enter Jopo Description').required('Jopo Description is Required'),
        jopoResponsibility: Yup.object('Enter Jopo Responsibility').required('Jopo Responsibility is Required'),
        jopoTarget: Yup.object('Enter Jopo Target').required('Jopo Target is Required'),
        jopoBenefit: Yup.object('Enter Jopo Benefit').required('Jopo Benefit is Required'),
        jopoStartDate: Yup.date('Enter Start Date').required('Start Date is Required'),
        jopoEndDate: Yup.date('Enter End Date').required('End Date is Required'),
        jopoEmpEntity: Yup.number('Enter Employee Id').required('Employee Id is Required'),
        jopoClit: Yup.number('Enter Client Id').required('Client Id is Required'),
        jopoJoro: Yup.number('Enter Job Role Id').required('Job Role is Required'),
        jopoJoty: Yup.number('Enter Job Type').required('Job Type is Required'),
        jopoJoca: Yup.number('Enter Job Category').required('Job Category is Required'),
        jopoStatus: Yup.string('Enter Status').required('Status is Required'),
        jopoMinExperience: Yup.number('Enter Min Experience').required('Min Experience is Required'),
        jopoSkill: Yup.string('Enter Skill').required('Skill is Required'),
        jopoMaxExperience: Yup.number('Enter Max Experience').required('Max Experience is Required')
    })
    const formik = useFormik({
        initialValues: {
            jopoNumber: 0,
            jopoTitle: undefined,
            jopoMinSalary: undefined,
            jopoMaxSalary: undefined,
            jopoDescription: {},
            jopoResponsibility: {},
            jopoTarget: {},
            jopoBenefit: {},
            jopoStartDate: new Date(),
            jopoEndDate: undefined,
            jopoEmpEntity: 0,
            jopoClit: 0,
            jopoJoro: 0,
            jopoJoty: 0,
            jopoJoca: 0,
            jopoStatus: 'unpublished',
            jopoMinExperience: 0,
            jopoSkill: undefined,
            jopoMaxExperience: 0
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('regionName', values.regionName)
            payload.append('foto', values.foto)
            payload.append('file', values.file)

            dispatch(AddJopoRequest(payload))
            props.closeAdd()
            window.alert('Data Successfully Insert')
            props.onRefresh()
        }
    })

export default function Createmodal() {
  return (
      <div className='flex items-center justify-between p-2'>
        <JopoModal
          modalTitle={'Create Job Post'}
          buttonTitle={'Posting Job'}
        >
          <form className='grid grid-cols-2 items-center mt-2 gap-3'>
            <label htmlFor='title'>Title</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='title'
              id='title'
            />

            <label htmlFor='startDate'>Start Date</label>
            <input
              className='rounded-lg px-2 py-1'
              type='date'
              name='startDate'
              id='startDate'
            />

            <label htmlFor='endDate'>End Date</label>
            <input
              className='rounded-lg px-2 py-1'
              type='date'
              name='endDate'
              id='endDate'
            />

            <label htmlFor='minSalary'>Min Salary</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='minSalary'
              id='minSalary'
            />

            <label htmlFor='maxSalary'>Max Salary</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='maxSalary'
              id='maxSalary'
            />

            <label htmlFor='experience'>Experience</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='experience'
              id='experience'
            />

            <label htmlFor='industry'>Industry</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='industry'
              id='industry'
            />

            <label htmlFor='status'>Status</label>
            <div class="form-check form-check-inline">
              <input
                className='form-check-input rounded-lg mx-3 px-2 py-1'
                type='radio'
                name='status'
                id='status'
              />
              <label class="form-check-label" for="inlineRadio1">Publish</label>
              <input
                className='form-check-input rounded-lg mx-3 px-2 py-1'
                type='radio'
                name='status'
                id='status'
              />
              <label class="form-check-label" for="inlineRadio1">Unpublish</label>
            </div>
          </form>
        </JopoModal>
      </div>
  );
}