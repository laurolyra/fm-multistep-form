import Sidebar from './components/Sidebar';
import StepButton from './components/StepButton';

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="grid grid-cols-12 gap-1 h-5/6 container">
        <div className="col-span-4">
          <Sidebar />
        </div>
        <div className="col-span-8">
          <h1>Hello world</h1>
          <StepButton />
        </div>
      </div>
    </div>
  );
}
