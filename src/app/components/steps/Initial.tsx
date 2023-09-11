import StepButton from '../StepButton';

export default function Initial() {
  return (
    <>
      <div className="border border-red-500 h-5/6 flex flex-col justify-between">
        <h1>Personal Info</h1>
        <div className="h-3/6 flex flex-col justify-around">
          <div className="pb-1">
            <label htmlFor="name">Name</label>
            <input
              className="my-custom-input w-full"
              placeholder="John"
              required
              name="name"
              id="name"
            />
          </div>
          <div className="pb-1">
            <label htmlFor="email">E-mail address</label>
            <input
              className="my-custom-input w-full"
              placeholder="John"
              required
              name="email"
              id="email"
            />
          </div>
          <div className="pb-1">
            <label htmlFor="email">Phone Number</label>
            <input
              className="my-custom-input w-full"
              placeholder="John"
              required
              name="phone"
              id="phone"
            />
          </div>
        </div>
      </div>
      <StepButton nextStep={'plan'} />
    </>
  );
}
