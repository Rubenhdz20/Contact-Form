import React from 'react';
import { FieldError } from 'react-hook-form';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    textarea?: boolean; // Flag to indicate whether this is a textarea
    error?: FieldError;
};

function InputField({ label, type = "text", textarea, error, ...rest}: InputFieldProps) {
    return(
        <div>
            <label className="block text-base text-strong-grey font-medium">{label}</label>
            {textarea ? (
                <textarea 
                    className="border border-light-grey rounded w-full p-2 hover:outline-strong-green" {...rest}/>
            ) : (
                <input
                    type={type}
                    className={`border rounded w-full p-2 
                        ${error ? "border-red-500 focus:outline-red-500" : "border-light-grey hover:outline-strong-green"}`
                    }           
                    {...rest}
                />
            )}
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    )
}

export default InputField;