import { useAppDispatch } from '@/redux/hooks';
import { handleChangeStep } from '@/redux/slices/stepSlice';

export default function StepButton({ nextStep }: { nextStep: string }) {
  const dispatch = useAppDispatch();
  return (
    <button type="submit" onClick={() => dispatch(handleChangeStep(nextStep))}>
      StepButton
    </button>
  );
}
