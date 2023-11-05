import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  userEmail: yup
    .string()
    .required('Please write your email')
    .matches(/^[^\s@]+@example\.com$/, '@example.com required'),
  userPassword: yup.string().required('Please write your password'),
});
