import React from 'react';
import { FieldError } from "react-hook-form";

type CheckboxProps = {
    label: string;
    error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, error, ...rest }, ref) => {
        return (
            <div>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        ref={ref} // Forward the ref here
                        className="cursor-pointer accent-strong-green"
                        {...rest} // Spread additional props
                    />
                    <span>{label}</span>
                </label>
                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
            </div>
        );
    }
);

CheckBox.displayName = "CheckBox";

export default  CheckBox;