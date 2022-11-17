import { call, put } from 'redux-saga/effects'
import JobCategoryApi from '../../../pages/api/JobCategoryApi';
import {
    GetJobCategorySuccess, GetJobCategoryFailed, AddJobCategorySuccess, AddJobCategoryFailed
    , DelJobCategorySuccess, DelJobCategoryFailed, GetOneJobCategorySuccess, GetOneJobCategoryFailed
    , EditJobCategorySuccess, EditJobCategoryFailed
} from '../Action/JobCategoryAction'

function* handleGetJobCategory() {
    try {
        const result = yield call(JobCategoryApi.List)
        yield put(GetJobCategorySuccess(result))
    } catch (error) {
        yield put(GetJobCategoryFailed(error))
    }
}

function* handleGetOneJobCategory(action) {
    const { payload } = action
    try {
        const result = yield call(JobCategoryApi.FindOne, payload)
        yield put(GetOneJobCategorySuccess(result))
    } catch (error) {
        yield put(GetOneJobCategoryFailed(error))
    }
}

function* handleDelJobCategory(action) {
    const { payload } = action
    try {
        const result = yield call(JobCategoryApi.Delete, payload)
        yield put(DelJobCategorySuccess(payload))
    } catch (error) {
        yield put(DelJobCategoryFailed(error))
    }
}

function* handleAddJobCategory(action) {
    const { payload } = action
    try {
        const result = yield call(JobCategoryApi.Create, payload)
        yield put(AddJobCategorySuccess(result.data))
    } catch (error) {
        yield put(AddJobCategoryFailed(error))
    }
}

function* handleEditJobCategory(action) {
    const { payload } = action
    try {
        const result = yield call(JobCategoryApi.UpdateFile, payload)
        yield put(EditJobCategorySuccess(result.data))
    } catch (error) {
        yield put(EditJobCategoryFailed(error))
    }
}

export {
    handleAddJobCategory,
    handleDelJobCategory,
    handleEditJobCategory,
    handleGetOneJobCategory,
    handleGetJobCategory
}