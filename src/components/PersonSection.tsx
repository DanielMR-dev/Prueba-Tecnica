import InputField from './InputField';
import { Person } from '../types';
interface PersonSectionProps {
    title: string
    data: Person
    onChange: (field: keyof Person, value: string) => void
    isInvalid?: boolean
    labels: Record<keyof Person, string>
};

export default function PersonSection({
    title, data, onChange, isInvalid, labels
}: PersonSectionProps) {
    return (
        <div className="border rounded-lg p-4 space-y-3 bg-white shadow-md">
            <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
            { (Object.keys(labels) as (keyof Person)[]).map(field => {
                const type = field === 'email' ? 'email' : 'text'
                const handleValue = (v: string) => {
                    let val = v
                    if (field === 'fullName') {
                        val = v.replace(/[^A-Za-z\s]/g, '')
                    } else if (field === 'id') {
                        val = v.replace(/\D/g, '')
                    } else if (field === 'phone') {
                        val = v.replace(/\D/g, '').slice(0, 10)
                    } else if (field === 'email') {
                        val = v.replace(/[^A-Za-z0-9@._-]/g, '').toLowerCase()
                    }
                    onChange(field, val)
                }

                return (
                    <InputField
                        key={field}
                        type={type}
                        placeholder={labels[field]}
                        value={data[field]}
                        isInvalid={isInvalid}
                        onChange={handleValue}
                    />
                );
            }) }
        </div>
    );
};
