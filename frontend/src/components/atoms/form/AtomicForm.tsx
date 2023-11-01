import { TNormalElementProps } from '../../../types';

export default function AtomicForm({
  children,
  className = '',
  ...props
}: TNormalElementProps<HTMLFormElement>) {
  return (
    <form {...props} className={`${className}  form`}>
      {children}
    </form>
  );
}
