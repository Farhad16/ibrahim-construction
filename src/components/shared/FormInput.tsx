import React from "react";

const FormInput = ({
  name,
  placeholder,
  label,
  textarea,
  errors,
  defaultValue,
  register,
}: any) => {
  const error = errors[name];

  return (
    <div className="w-full">
      {textarea ? (
        <div className="flex flex-col">
          <label className="font-semibold text-black mb-1 text-sm">
            {label}
          </label>
          <div className="flex flex-col">
            <textarea
              defaultValue={defaultValue}
              placeholder="Write your message here..."
              className={`w-full text-sm border rounded px-2 py-2.5 focus:outline-global focus:outline-offset-0 boder-2 bg-transparent placeholder:font-light placeholder:text-sm ${
                error ? "border-[#FDA29B]" : "border-black"
              }`}
              rows="4"
              {...register}
            />
            {error && (
              <span className="text-red-500 text-xs mt-1">{error.message}</span>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <label className="font-semibold text-black mb-1 text-sm">
            {label}
          </label>
          <input
            type="text"
            className={`focus:shadow text-sm w-full border rounded px-2 py-2.5 focus:outline-global focus:outline-offset-0 boder-2 bg-transparent placeholder:font-light placeholder:text-sm ${
              error ? "border-[#FDA29B]" : "border-black"
            }`}
            placeholder={placeholder}
            {...register}
          />
          {error && (
            <span className="text-red-500 text-xs mt-1">{error.message}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default FormInput;
