//our button that triggers the calculation function
interface CalculateButtonProps {
    onClick: () => void;
  }
  
  const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick }) => {
    return (
      <div>
        <button onClick={onClick}>Calculate BMI</button>
      </div>
    );
  };
  
  export default CalculateButton;