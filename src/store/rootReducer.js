import { PREV_MONTH, NEXT_MONTH, SELECT_DAY } from './types';

const initialState = {
  date: new Date(),
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dayOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dayOfWeekFullName: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  currentDate: new Date(),
  selectedDate: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_MONTH:
      return {
        ...state,
        date: new Date(state.date.getFullYear(), state.date.getMonth() - 1)
      };
    case NEXT_MONTH:
      return {
        ...state,
        date: new Date(state.date.getFullYear(), state.date.getMonth() + 1)
      };
    case SELECT_DAY:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};