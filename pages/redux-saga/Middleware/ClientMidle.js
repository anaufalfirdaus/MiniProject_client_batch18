import { call, put } from "redux-saga/effects";
import ClientApi from "../../api/ClientApi";
import { GetClientSuccess, GetClientFailed } from "../Action/ClientAction";

function* handleGetClient() {
  try {
    const result = yield call(ClientApi.list)
    // console.log(result);
    yield put(GetClientSuccess(result))
  } catch (error) {
    yield put(GetClientFailed(error))
  }
}

export { handleGetClient }