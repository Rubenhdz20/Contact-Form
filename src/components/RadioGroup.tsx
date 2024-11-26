import React from 'react';

type RadioGroupProps = {
    label: string;
    options: string [];
} & React.InputHTMLAttributes<HTMLInputElement>;

function RadioGroup({ label, options, ...rest }: RadioGroupProps) {
    return(
        <div>
            <p className="block text-base font-normal">{label}</p>
            {options.map((option) => (
                <div key={option} className="flex items-center cursor-pointer mt-4 py-3 px-6 border border-light-grey rounded-lg focus:bg-light-green">
                    <label className="flex items-center space-x-2">
                        <input type="radio" value={option} {...rest} />
                        <span>{option}</span>
                    </label>
                </div>
            ))}
        </div>
    )
}

export default RadioGroup;