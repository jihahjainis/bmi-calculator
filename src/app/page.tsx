//putting everything together
"use client" //add this to avoid runtime error resulting from using react hooks
import { useState } from 'react';
import InputForm from '../app/components/InputForm';
import CalculateButton from '../app/components/CalculateButton';
import DisplayResult from '../app/components/DisplayResult';

const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <InputForm label="Weight (kg)" value={weight} onChange={setWeight} />
      <InputForm label="Height (cm)" value={height} onChange={setHeight} />
      <CalculateButton onClick={calculateBMI} />
      {bmi > 0 && <DisplayResult bmi={bmi} />}
    </div>
  );
};

export default BmiCalculator;