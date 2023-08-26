'use client';
import StepButton from './StepButton';

export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit');
      }}
      className="h-full flex flex-col justify-between p-3"
    >
      <h1>Personal Info</h1>
      <StepButton />
    </form>
  );
}
