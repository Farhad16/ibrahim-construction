import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FormInput from "../shared/FormInput";
import { sendEmail } from "../../api/api";

const EmailSection = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      if (!values.name) {
        setError("name", { type: "manual", message: "The name is required" });
      }

      if (!values.subject) {
        setError("subject", {
          type: "manual",
          message: "The subject is required",
        });
      }

      if (!values.email) {
        setError("email", {
          type: "manual",
          message: "The email is required",
        });
      }

      if (!values.email || !values.name || !values.subject) {
        return;
      }

      const res = await sendEmail(values);
      if (res) {
        toast.success(
          "Thanks for your message, We will get back to you asap.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col relative">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-2xl sm:text-4xl capitalize text-global leading-[80%]">
            Get in touch
          </h2>
          <p className="font-medium text-sm sm:text-base mt-4">
            Connect with us to embark on your construction journey! Our
            construction company offers expertise in building your dreams into
            reality. Whether it's a residential project, commercial development,
            or renovation, we're here to guide you every step of the way. Reach
            out to us today to discuss your project needs and let's bring your
            vision to life together.
          </p>
        </div>
        <form
          className="shadow-f w-full flex flex-col gap-4 p-6 sm:p-8 rounded bg-light-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            label="Your name*"
            name="name"
            placeholder="Name"
            register={{ ...register("name") }}
            errors={errors}
          />
          <FormInput
            label="Your email*"
            name="email"
            placeholder="Email address"
            register={{ ...register("email") }}
            errors={errors}
          />
          <FormInput
            label="Write your subject*"
            name="subject"
            placeholder="subject"
            register={{ ...register("subject") }}
            errors={errors}
          />

          <FormInput
            name="message"
            label="Your message"
            textarea={true}
            register={{ ...register("message") }}
            errors={errors}
          />

          <button
            disabled={loading}
            type="submit"
            className="text-white bg-global bg-opacity-90 focus:outline-none outline-none group flex items-center border border-1.5 justify-center rounded-full transition duration-300 py-[10px] px-[32px] w-full min-w-[150px] min-h-[50px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
