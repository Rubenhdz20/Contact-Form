import React from 'react';
import { FieldError } from 'react-hook-form';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    type?: string;
    textarea?: boolean; // Flag to indicate whether this is a textarea
    error?: FieldError;
};

const InputField = React.forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    InputFieldProps
>(({ label, type = "text", textarea, error, ...rest }, ref) => {
    return (
        <div>
            <label className="block text-sm font-medium text-strong-grey mb-1">
                {label}
            </label>
            {textarea ? (
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>} // Forward ref for textarea
                    className={`border w-full p-2 rounded ${
                        error ? "border-red-500" : "border-light-grey"
                    }`}
                    {...rest}
                />
            ) : (
                <input
                    ref={ref as React.Ref<HTMLInputElement>} // Forward ref for input
                    type={type}
                    className={`border w-full p-2 rounded ${
                        error ? "border-red-500" : "border-light-grey"
                    }`}
                    {...rest}
                />
            )}
            {error && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
        </div>
    );
});

InputField.displayName = "InputField";

export default InputField;