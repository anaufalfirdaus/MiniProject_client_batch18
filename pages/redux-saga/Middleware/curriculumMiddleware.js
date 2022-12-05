import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getCurriculumsFal,
  getCurriculumsSuc,
} from '../Action/curriculumAction';

const getCurriculums = () => {
  const req = axios.get('http://localhost:3003/curriculums');
  return req;
};

export function* handlerGetCurriculum() {
  try {
    const curriculums = yield call(getCurriculums);
    yield put(getCurriculumsSuc(curriculums.data));
  } catch (error) {
    yield put(getCurriculumsFal(error));
  }
}
