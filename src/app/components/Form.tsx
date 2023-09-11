import { useAppSelector } from '@/redux/hooks';
import Initial from './steps/Initial';
import Plan from './steps/Plan';
import AddOns from './steps/AddOns';
import Summary from './steps/Summary';

export default function Form() {
  const step = useAppSelector((state) => state.stepperReducer.value);
  const generateStep = (step: string) => {
    switch (step) {
      case 'plan':
        return <Plan />;
      case 'add-ons':
        return <AddOns />;
      case 'summary':
        return <Summary />;
      default:
        return <Initial />;
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit');
      }}
      className="h-full flex flex-col justify-between pb-3"
    >
      {generateStep(step)}
    </form>
  );
}
