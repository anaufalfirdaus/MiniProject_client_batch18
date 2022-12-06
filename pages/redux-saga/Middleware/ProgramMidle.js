import { call, put } from "redux-saga/effects";
import ProgramApi from "../../api/ProgramApi";
import { GetBootcampFailed, GetBootcampSuccess, GetCourseFailed, GetCourseSuccess } from "../Action/ProgramAction";

function* handleGetBootcamp() {
  try {
    const result = yield call(ProgramApi.bootcamp)
    // console.log(result);
    yield put(GetBootcampSuccess(result))
  } catch (error) {
    yield put(GetBootcampFailed(error))
  }
}

function* handleGetCourse() {
  try {
    const result = yield call(ProgramApi.course)
    yield put(GetCourseSuccess(result))
  } catch (error) {
    yield put(GetCourseFailed(error))
  }
}

export { handleGetBootcamp, handleGetCourse }