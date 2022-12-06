import { call, put } from "redux-saga/effects";
import AlumniApi from "../../api/AlumniApi";
import { GetStorySuccess, GetStoryFailed, GetTestimonySuccess, GetTestimonyFailed } from "../Action/AlumniAction";

function* handleGetStory() {
  try {
    const result = yield call(AlumniApi.story)
    yield put(GetStorySuccess(result))
  } catch (error) {
    yield put(GetStoryFailed(error))
  }
}

function* handleGetTestimony() {
  try {
    const result = yield call(AlumniApi.testi)
    console.log(result);
    yield put(GetTestimonySuccess(result))
  } catch (error) {
    yield put(GetTestimonyFailed(error))
  }
}

export { handleGetStory, handleGetTestimony }