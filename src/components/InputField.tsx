interface InputFieldProps {
  value: string
  placeholder: string
  isInvalid?: boolean
  type?: string
  onChange: (value: string) => void
};

export default function InputField({
    value, placeholder, isInvalid, type = 'text', onChange
}: InputFieldProps) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={
                `w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300
                transition ${isInvalid ? 'border-red-500' : 'border-gray-300'}`
            }
            onChange={e => onChange(e.target.value)}
        />
    );
};
