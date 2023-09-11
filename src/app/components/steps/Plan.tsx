import Image from 'next/image';
import arcadePlanIcon from '../../../../public/icon-arcade.svg';
import advancedPlanIcon from '../../../../public/icon-advanced.svg';
import proPlanIcon from '../../../../public/icon-pro.svg';
import StepButton from '../StepButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { handleChangeTime } from '@/redux/slices/timeSlice';

export default function Plan() {
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>Select your plan</h1>
      <div className="flex justify-around items-center h-3/5">
        <div className="flex flex-col justify-between">
          <Image src={arcadePlanIcon} alt="arcade plan" />
          <div>
            <p>Arcade</p>
            <p>U$ 5,00/month</p>
          </div>
        </div>
        <div>
          <Image src={advancedPlanIcon} alt="advanced plan" />
          <div>
            <p>Advanced</p>
            <p>U$ 5,00/month</p>
          </div>
        </div>
        <div>
          <Image src={proPlanIcon} alt="pro plan" />
          <div>
            <p>Pro</p>
            <p>U$ 5,00/month</p>
          </div>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(handleChangeTime(true))}>
          Monthly
        </button>
        <button type="button" onClick={() => dispatch(handleChangeTime(false))}>
          Yearly
        </button>
      </div>
      <div className="flex justify-between">
        <StepButton nextStep={'initial'} />
        <StepButton nextStep={'add-ons'} />
      </div>
    </>
  );
}
