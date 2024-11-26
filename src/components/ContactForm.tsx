import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import RadioGroup from './RadioGroup';
import CheckBox from './CheckBox';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    queryType: string;
    message: string;
    consent: boolean;
}

function ContactForm () {
    // Setting Up React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return(
        <div className="flex justify-center h-screen bg-light-green">
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 h-5/6 flex flex-col justify-around content-center flex-wrap mt-11 bg-white rounded-2xl">
                <h1 className="text-strong-grey text-3xl font-bold">Contact Us</h1>
                <InputField label="First Name" {...register("firstName", {required: "First Name is required"})} error={errors.firstName}/>
                <InputField label="Last Name" {...register("firstName", {required: "Last Name is required"})} error={errors.lastName}/>
                <InputField label="Email" type="email"/>
                <RadioGroup label="Query Type" options={['General Enquiry', 'Support Request']} {...register('queryType', { required: true })}/>
                <InputField label="Message" textarea {...register('message', { required: 'Message is required' })} error={errors.message}/>
                <CheckBox label="I consent to being contacted by the team"/>
                <button type="submit" className="w-9/12 py-4 px-10 bg-strong-green text-white rounded-lg hover:bg-green-900 transition duration-300 ease-in-out">Submit</button>
            </form>
        </div>
    )
};

export default ContactForm;