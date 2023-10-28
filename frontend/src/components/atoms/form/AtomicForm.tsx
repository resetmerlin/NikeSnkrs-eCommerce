import { TNormalElementProps } from '../../../types';
import './AtomicForm.scss';

export default function AtomicForm({
  children,
  className = '',
}: TNormalElementProps<HTMLFormElement>) {
  return <form className={`${className}  form`}>{children}</form>;
}
