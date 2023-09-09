'use client';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-color-light">
      <div className="grid grid-cols-12 gap-1 h-5/6 container p-3 bg-white rounded-md shadow-lg max-h-[80vh]">
        <div className="col-span-4">
          <Sidebar />
        </div>
        <div className="col-start-6 col-span-7">
          <Form />
        </div>
      </div>
    </div>
  );
}
