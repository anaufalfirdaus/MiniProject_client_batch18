import { call, put } from 'redux-saga/effects'
import JobTypeApi from '../../../pages/api/JobTypeApi';
import {
    GetJobTypeSuccess, GetJobTypeFailed, AddJobTypeSuccess, AddJobTypeFailed
    , DelJobTypeSuccess, DelJobTypeFailed, GetOneJobTypeSuccess, GetOneJobTypeFailed
    , EditJobTypeSuccess, EditJobTypeFailed
} from '../Action/JobTypeAction'

function* handleGetJobType() {
    try {
        const result = yield call(JobTypeApi.List)
        yield put(GetJobTypeSuccess(result))
    } catch (error) {
        yield put(GetJobTypeFailed(error))
    }
}

function* handleGetOneJobType(action) {
    const { payload } = action
    try {
        const result = yield call(JobTypeApi.FindOne, payload)
        yield put(GetOneJobTypeSuccess(result))
    } catch (error) {
        yield put(GetOneJobTypeFailed(error))
    }
}

function* handleDelJobType(action) {
    const { payload } = action
    try {
        const result = yield call(JobTypeApi.Delete, payload)
        yield put(DelJobTypeSuccess(payload))
    } catch (error) {
        yield put(DelJobTypeFailed(error))
    }
}

function* handleAddJobType(action) {
    const { payload } = action
    try {
        const result = yield call(JobTypeApi.Create, payload)
        yield put(AddJobTypeSuccess(result.data))
    } catch (error) {
        yield put(AddJobTypeFailed(error))
    }
}

function* handleEditJobType(action) {
    const { payload } = action
    try {
        const result = yield call(JobTypeApi.UpdateFile, payload)
        yield put(EditJobTypeSuccess(result.data))
    } catch (error) {
        yield put(EditJobTypeFailed(error))
    }
}

export {
    handleAddJobType,
    handleDelJobType,
    handleEditJobType,
    handleGetOneJobType,
    handleGetJobType
}