import { TNormalElementProps } from '../../../types';
import './AtomicInput.scss';

interface IProps extends TNormalElementProps<HTMLInputElement> {
  type: 'password' | 'email' | 'name';
  name?: 'userPassword' | 'userEmail' | 'userName';
}

export default function AtomicInput({
  className = '',
  name,
  type,
  ...props
}: IProps) {
  return (
    <input
      {...props}
      name={name}
      type={type}
      className={`${className} input`}
    />
  );
}
