import { TNormalElementProps } from '../../../types';
import './AtomicInput.scss';

interface IProps extends TNormalElementProps<HTMLInputElement> {
  type: 'password' | 'email' | 'name';
  name: 'userPassword' | 'userEmail' | 'userName' | 'userConfirmPassword';
  register?: (name: string) => {
    ref: (instance: any) => void;
    name: string;
  } | void;
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
