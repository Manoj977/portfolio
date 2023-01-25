import React from 'react';
import { useForm } from 'react-hook-form';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen relative flex  flex-col text-left md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="mt-[200px] md:mt-32 flex flex-col space-y-10">
        <h4 className="text-xl px-10 mx-4 mt-[120px] md:mt-[120px] md:text-4xl md:font-semibold text-center">
          I have got Just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl text-xl mx-5">manojsharvan98@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl text-xl">Tirunelveli,Tamilnadu</p>
          </div>
          <form
            className="md:flex md:flex-col  grid space-y-6 md:space-y-2 w-fit mx-auto"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:flex grid space-y-6 md:space-y-0  md:space-x-2">
              <input
                {...register('name')}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register('subject')}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] px-10 py-5  rounded-md text-black font-bold"
            >
              Submit{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
