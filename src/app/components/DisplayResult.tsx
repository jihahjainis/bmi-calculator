//output the result of our function
interface DisplayResultProps {
    bmi: number;
  }
  
  const DisplayResult: React.FC<DisplayResultProps> = ({ bmi }) => {
    return <div>Your BMI is: {bmi.toFixed(2)}</div>;
  };
  
  export default DisplayResult;