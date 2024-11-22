import React from 'react';
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
    label: string;
    type?: string;
    textarea?: boolean;
    error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

function InputField({ label, type = "text", textarea, error, ...rest}: InputFieldProps) {
    return(
        <div>
            <label className="block text-sm font-medium">{label}</label>
            {textarea ? (
                <textarea className="border rounded w-full p-2" {...rest}/>
            ) : (
                <input type={type} className="border rounded w-full p-2" {...rest}/>
            )}
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    )
}

export default InputField;