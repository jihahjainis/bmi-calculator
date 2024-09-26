//our input form component to take user height and weight info
interface InputFormProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
  }
  
  const InputForm: React.FC<InputFormProps> = ({ label, value, onChange }) => {
    return (
      <div>
        <label className="block text-sm font-medium leading-6">{label}</label>
        <input className="block flex-1 border border-white bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            type="number" value={value} onChange={(e) => onChange(parseFloat(e.target.value))} />
      </div>
    );
  };
  
  export default InputForm;