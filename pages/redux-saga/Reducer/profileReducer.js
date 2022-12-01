import { actionTypesProfile } from '../Constants/profileType';

const initial_state = {
  profile: {
    userId: '',
    username: '',
    firstname: '',
    lastname: '',
    defaultEmail: '',
    defaultPhone: '',
    defaultRole: '',
  },
  roles: [],
  emails: [],
  phones: [],
  addresses: [],
  educations: [],
  experiences: [],
  skills: [],
  addressType: [],
  city: [],
  employeementType: [],
  skillType: [],
  statusType: [],
  isLoading: false,
  message: {},
  errors: null,
};

const profileReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypesProfile.GET_PROFILE_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.GET_PROFILE_SUCCESS: {
      return setPorfile(state, action);
    }
    case actionTypesProfile.GET_PROFILE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.UPD_PROFILE_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_PROFILE_SUCCESS: {
      return updateProfile(state, action);
    }
    case actionTypesProfile.UPD_PROFILE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.UPD_PASSWORD_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_PASSWORD_SUCCESS: {
      return { ...state, isLoading: false, message: { ...action.payload } };
    }
    case actionTypesProfile.UPD_PASSWORD_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    //* ADD CASE
    case actionTypesProfile.ADD_EMAIL_REQUEST: {
      // * EMAIL
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.ADD_EMAIL_SUCCESS: {
      return addEmail(state, action);
    }
    case actionTypesProfile.ADD_EMAIL_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.ADD_PHONE_REQUEST: {
      //* PHONE
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.ADD_PHONE_SUCCESS: {
      return addPhone(state, action);
    }
    case actionTypesProfile.ADD_PHONE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.ADD_ADDRESS_REQUEST: {
      //* ADDRESS
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.ADD_ADDRESS_SUCCESS: {
      return addAddress(state, action);
    }
    case actionTypesProfile.ADD_ADDRESS_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.ADD_EDUCATION_REQUEST: {
      //* EDUCATION
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.ADD_EDUCATION_SUCCESS: {
      return addEducation(state, action);
    }
    case actionTypesProfile.ADD_EDUCATION_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.ADD_EXPERIENCE_REQUEST: {
      //* EXPERIENCE
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.ADD_EXPERIENCE_SUCCESS: {
      return addExperience(state, action);
    }
    case actionTypesProfile.ADD_EXPERIENCE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.ADD_SKILL_REQUEST: {
      //* SKILL
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.ADD_SKILL_SUCCESS: {
      return addSkill(state, action);
    }
    case actionTypesProfile.ADD_SKILL_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    //* REMOVE CASE
    case actionTypesProfile.REM_EMAIL_REQUEST: {
      //* EMAIL
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.REM_EMAIL_SUCCESS: {
      return removeEmail(state, action);
    }
    case actionTypesProfile.REM_EMAIL_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.REM_PHONE_REQUEST: {
      //* PHONE
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.REM_PHONE_SUCCESS: {
      return removePhone(state, action);
    }
    case actionTypesProfile.REM_PHONE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.REM_ADDRESS_REQUEST: {
      //* ADDRESS
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.REM_ADDRESS_SUCCESS: {
      return removeAddress(state, action);
    }
    case actionTypesProfile.REM_ADDRESS_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.REM_EDUCATION_REQUEST: {
      //* EDUCATION
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.REM_EDUCATION_SUCCESS: {
      return removeEducation(state, action);
    }
    case actionTypesProfile.REM_EDUCATION_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.REM_EXPERIENCE_REQUEST: {
      //* EXPERIENCE
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.REM_EXPERIENCE_SUCCESS: {
      return removeExperience(state, action);
    }
    case actionTypesProfile.REM_EXPERIENCE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.REM_SKILL_REQUEST: {
      //* SKILL
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.REM_SKILL_SUCCESS: {
      return removeSkill(state, action);
    }
    case actionTypesProfile.REM_SKILL_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    //* UPDATE CASE
    case actionTypesProfile.UPD_EMAIL_REQUEST: {
      //* EMAIL
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_EMAIL_SUCCESS: {
      return updateEmail(state, action);
    }
    case actionTypesProfile.UPD_EMAIL_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.UPD_PHONE_REQUEST: {
      //* PHONE
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_PHONE_SUCCESS: {
      return updatePhone(state, action);
    }
    case actionTypesProfile.UPD_PHONE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.UPD_ADDRESS_REQUEST: {
      //* ADDRESS
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_ADDRESS_SUCCESS: {
      return updateAddress(state, action);
    }
    case actionTypesProfile.UPD_ADDRESS_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.UPD_EDUCATION_REQUEST: {
      //* EDUCATION
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_EDUCATION_SUCCESS: {
      return updateEducation(state, action);
    }
    case actionTypesProfile.UPD_EDUCATION_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesProfile.UPD_EXPERIENCE_REQUEST: {
      //* EXPERIENCE
      return { ...state, isLoading: true };
    }
    case actionTypesProfile.UPD_EXPERIENCE_SUCCESS: {
      return updateExperience(state, action);
    }
    case actionTypesProfile.UPD_EXPERIENCE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

const setPorfile = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    profile: {
      userId: payload.userEntityId,
      username: payload.userName,
      firstname: payload.userFirstName,
      lastname: payload.userLastName,
      defaultEmail: payload.defaultEmail,
      defaultPhone: payload.defaultPhone,
      defaultRole: payload.defaultRole,
    },
    roles: [...payload.usersRoles],
    emails: [...payload.usersEmail],
    phones: [...payload.usersPhones],
    addresses: [...payload.usersAddresses],
    educations: [...payload.usersEducations],
    experiences: [...payload.usersExperiences],
    skills: [...payload.usersSkills],
    addressType: [...payload.addressType],
    city: [...payload.city],
    employeementType: [...payload.jobType],
    skillType: [...payload.skillType],
    statusType: [...payload.statusType],
  };
};

const updateProfile = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    profile: {
      ...state.profile,
      username: payload.userName,
      firstname: payload.userFirstName,
      lastname: payload.userLastName,
    },
  };
};
//* ADD FUNCTION
const addEmail = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    emails: [...state.emails, payload],
  };
};

const addPhone = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    phones: [...state.phones, payload],
  };
};

const addAddress = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    addresses: [...state.addresses, payload],
  };
};

const addEducation = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    educations: [...state.educations, payload],
  };
};

const addExperience = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    experiences: [...state.experiences, payload],
  };
};

const addSkill = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: false,
    skills: [...state.skills, payload],
  };
};

//* REMOVE FUNTION
const removeEmail = (state, action) => {
  const { payload } = action;
  const { emails } = state;
  const filterEmails = emails.filter(
    (email) => email.pmailAddress !== payload.pmailAddress
  );
  return {
    ...state,
    isLoading: false,
    emails: [...filterEmails],
  };
};

const removePhone = (state, action) => {
  const { payload } = action;
  const { phones } = state;
  const filterPhones = phones.filter(
    (phone) => phone.uspoPhone !== payload.uspoPhone
  );
  return {
    ...state,
    isLoading: false,
    phones: [...filterPhones],
  };
};

const removeAddress = (state, action) => {
  const { payload } = action;
  const { addresses } = state;
  const filterAddresses = addresses.filter(
    (address) => address.etadAddrId !== payload.etadAddrId
  );
  return {
    ...state,
    isLoading: false,
    addresses: [...filterAddresses],
  };
};

const removeEducation = (state, action) => {
  const { payload } = action;
  const { educations } = state;
  const filterEducations = educations.filter(
    (education) => education.usduId !== payload.usduId
  );
  return {
    ...state,
    isLoading: false,
    educations: [...filterEducations],
  };
};

const removeExperience = (state, action) => {
  const { payload } = action;
  const { experiences } = state;
  const filterExperiences = experiences.filter(
    (experience) => experience.usexId !== payload.usexId
  );
  return {
    ...state,
    isLoading: false,
    experiences: [...filterExperiences],
  };
};

const removeSkill = (state, action) => {
  const { payload } = action;
  const { skills } = state;
  const filterSkills = skills.filter(
    (skill) => skill.uskiId !== payload.uskiId
  );
  return {
    ...state,
    isLoading: false,
    skills: [...filterSkills],
  };
};

//* UPDATE FUNCTION
const updateEmail = (state, action) => {
  const { payload } = action;
  const { emails } = state;
  const updEmails = emails.map((email) => {
    if (email.pmailId === payload.pmailId) {
      Object.assign(email, payload);
      return email;
    }
    return email;
  });
  return {
    ...state,
    isLoading: false,
    emails: [...updEmails],
  };
};

const updatePhone = (state, action) => {
  const { payload } = action;
  const { phones } = state;
  const updPhones = phones.map((phone) => {
    if (phone.uspoPhoneId === payload.uspoPhoneId) {
      Object.assign(phone, payload);
      return phone;
    }
    return phone;
  });
  return {
    ...state,
    isLoading: false,
    phones: [...updPhones],
  };
};

const updateAddress = (state, action) => {
  return state;
};

const updateEducation = (state, action) => {
  return state;
};

const updateExperience = (state, action) => {
  return state;
};

export default profileReducer;
