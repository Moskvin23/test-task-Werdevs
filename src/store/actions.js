import { PREV_MONTH, NEXT_MONTH, SELECT_DAY } from './types';

export const prevMonthAction = () => ({
  type: PREV_MONTH,
});

export const nextMonthAction = () => ({
  type: NEXT_MONTH,
});

export const selectDayAction = (date) => ({
  type: SELECT_DAY,
  payload: date,
});