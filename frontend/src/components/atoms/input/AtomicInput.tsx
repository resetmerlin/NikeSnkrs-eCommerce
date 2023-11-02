import { TNormalElementProps } from '../../../types';
import { UseFormRegister } from 'react-hook-form';
import './AtomicInput.scss';

type FormValues = {
  userEmail: string;
  userPassword: string;
  userName?: string;
  userConfirmPassword?: string;
};

interface IProps extends TNormalElementProps<HTMLInputElement> {
  type: 'password' | 'email' | 'name';
  name: keyof FormValues;
  register?: UseFormRegister<FormValues>;
}

export default function AtomicInput({
  className = '',
  name,
  type,
  register,
  ...props
}: IProps) {
  return (
    <input
      {...props}
      {...(register && register(name))}
      name={name}
      type={type}
      className={`${className} input`}
    />
  );
}
