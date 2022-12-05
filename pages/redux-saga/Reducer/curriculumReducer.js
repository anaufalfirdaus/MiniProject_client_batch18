import { actionTypesCurriculum } from '../Constants/curriculumType';

const initial_state = {
  curriculums: [],
  isLoading: false,
  message: null,
  errors: null,
};

const curriculumReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypesCurriculum.GET_CURRICULUMS_REQEUST: {
      return { ...state, isLoading: true };
    }
    case actionTypesCurriculum.GET_CURRICULUMS_SUCCESS: {
      return getCurriculums(state, action);
    }
    case actionTypesCurriculum.GET_CURRICULUMS_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

function getCurriculums(state, action) {
  const { payload } = action;
  const getCurriculums = payload.map((curriculum) => {
    return {
      id: curriculum.progId,
      name: curriculum.progTitle,
      title: curriculum.progHeadline,
      duration: '3 Month',
      total: {
        members: curriculum.progTotalStudent,
      },
      learnType: curriculum.progLearningType,
      type: curriculum.progType,
      rating: curriculum.progRating,
    };
  });

  return {
    ...state,
    isLoading: false,
    curriculums: [...getCurriculums],
  };
}

export default curriculumReducer;
