import React from "react";
import { FieldError } from "react-hook-form";

type RadioGroupProps = {
    label: string;
    options: string [];
    error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
    ({ label, options, error, ...rest }, ref) => {
        return (
            <div>
                <p className="block text-base font-normal">{label}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    {options.map((option) => (
                        <label
                            key={option}
                            className={`flex items-center cursor-pointer mt-4 py-3 px-6 border rounded-lg 
                            ${
                                rest.value === option
                                    ? "border-strong-green bg-light-green"
                                    : "border-light-grey hover:bg-light-green"
                            }`}
                        >
                            <input
                                type="radio"
                                value={option}
                                ref={ref} // Forward the ref
                                className="cursor-pointer accent-strong-green"
                                {...rest} // Spread additional props
                            />
                            <span className="cursor-pointer">{option}</span>
                        </label>
                    ))}
                </div>
                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
            </div>
        );
    }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;