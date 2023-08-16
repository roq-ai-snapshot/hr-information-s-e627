import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  pay_period: yup.date().required(),
  gross_pay: yup.number().integer().required(),
  net_pay: yup.number().integer().required(),
  employee_id: yup.string().nullable(),
});
