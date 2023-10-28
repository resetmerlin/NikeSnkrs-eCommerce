import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../atoms';
import './Form.scss';

export default function Form() {
  return (
    <AtomicForm>
      <div className="form__intro">
        <AtomicSubtitle size="xl">Sign in</AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
      </div>
      <div className="form__inputs-wrap">
        <AtomicLabel htmlFor="userEmail">
          <AtomicSubtitle size="m">Email</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput type="email" id="email" name="userEmail" />

        <AtomicLabel htmlFor="userPassword">
          <AtomicSubtitle size="m">Password</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput type="password" id="user-password" name="userPassword" />
      </div>
      <AtomicButton size="m" type="submit">
        <AtomicSubtitle size="m" color="tertiary" strength="600">
          Submit
        </AtomicSubtitle>
      </AtomicButton>
    </AtomicForm>
  );
}
