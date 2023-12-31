import { CHOOSE_LANGUAGE } from '../actionTypes';

import { dataLocalStorage } from '../../Components/Shared/SelectLanguage/dataLocalStorage';

const initialState = {
  language: dataLocalStorage.getLocale() || 'sq-AL',
};

export const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };

    default:
      return state;
  }
};

