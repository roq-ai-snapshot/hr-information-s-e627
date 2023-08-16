import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  visit_date: yup.date().required(),
  interest: yup.string().required(),
  user_id: yup.string().nullable(),
});
