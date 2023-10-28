import { TNormalElementProps } from '../../../types';
import './AtomicInput.scss';

interface IProps extends TNormalElementProps<HTMLInputElement> {
  type: 'password' | 'email';
  name?: 'userPassword' | 'userEmail';
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
