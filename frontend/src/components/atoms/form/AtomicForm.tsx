import { TNormalElementProps } from '../../../types';

export default function AtomicForm({
  children,
  className = '',
}: TNormalElementProps<HTMLFormElement>) {
  return <form className={`${className}  form`}>{children}</form>;
}
