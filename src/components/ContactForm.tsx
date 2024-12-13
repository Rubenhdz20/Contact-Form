import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import RadioGroup from './RadioGroup';
import CheckBox from './CheckBox';
import SuccessToast from "./SuccessToast";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    queryType: string;
    message: string;
    consent: boolean;
}

function ContactForm () {
    const [isSuccess, setIsSuccess] = useState(false);

    // Setting Up React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form Data:", data); 
        console.log("Errors:", errors);
        setIsSuccess(true);
    }

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 3000); // Hide the toast after 3 seconds
    
            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }
    }, [isSuccess]);

    return(
        <div className="flex justify-center items-center h-screen bg-light-green">
            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 max-w-4xl p-8 bg-white rounded-2xl shadow-lg grid grid-cols-1 gap-6">
                <h1 className="text-strong-grey text-3xl font-bold">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                        label="First Name"
                        {...register("firstName", { required: "First Name is required" })}
                        error={errors.firstName}
                    />
                    <InputField
                        label="Last Name"
                        {...register("lastName", { required: "Last Name is required" })}
                        error={errors.lastName}
                    />
                </div>
                <InputField 
                    label="Email" 
                    type="email" 
                    {...register("email", {required: "Email is required"})} 
                    error={errors.email}
                />
                <RadioGroup 
                    label="Query Type" 
                    options={['General Enquiry', 'Support Request']} 
                    {...register('queryType', { required: "Please select a query type" })}
                    error={errors.queryType}
                />
                <InputField 
                    label="Message" 
                    textarea 
                    {...register('message', { required: 'Message is required' })} 
                    error={errors.message}
                />
                <CheckBox 
                    label="I consent to being contacted by the team *"
                    {...register("consent", { required: "To submit this form, please consent to being contacted" })}
                    error={errors.consent}
                />
                <button  type="submit" className="py-4 px-10 bg-strong-green text-white rounded-lg hover:bg-green-900 transition duration-300 ease-in-out">Submit</button>
            </form>
            {isSuccess && <SuccessToast onClose={() => setIsSuccess(false)} />}
        </div>
    )
};

export default ContactForm;