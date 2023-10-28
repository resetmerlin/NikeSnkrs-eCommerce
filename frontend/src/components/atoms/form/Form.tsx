import { TNormalElementProps } from '../../../types';
import './Form.scss';

export default function Form({
  children,
  className = '',
}: TNormalElementProps<HTMLFormElement>) {
  return <form className={`${className}  form`}>{children}</form>;
}
