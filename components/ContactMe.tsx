import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href=`mailto:madivallarino@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className='h-screen w-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-0'>
            <h4 className='text-4xl font-semibold text-center'>Lets Build. <span className='decoration-[#D1B7F5]/50 underline'>Lets Talk</span></h4>

            <div className="space-y-2">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#D1B7F5] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+615.310.8866</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#D1B7F5] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">madivallarino@gmail.com.</p>
                </div> 
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#D1B7F5] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">New York, NY</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput" />
                <button type="submit" className="bg-[#D1B7F5] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe