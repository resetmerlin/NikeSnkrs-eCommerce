import { TNormalElementProps } from '../../../types';

interface IProps extends TNormalElementProps<HTMLLabelElement> {
  htmlFor:
    | 'userPassword'
    | 'userEmail'
    | 'userName'
    | 'userConfirmPassword'
    | 'postalCode'
    | 'address'
    | 'specificAddress'
    | 'referenceItem';
}
export default function Label({
  children,
  className = '',
  htmlFor,
  ...props
}: IProps) {
  return (
    <label {...props} htmlFor={htmlFor} className={`${className}  label`}>
      {children}
    </label>
  );
}
