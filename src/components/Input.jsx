import { forwardRef } from "react";

const Input = forwardRef(({ textarea, name, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor="name" className=" uppercase text-stone-600 font-semibold">
        {name}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full bg-stone-300 pb-1 mt-0.5 rounded-sm"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full bg-stone-300 pb-1 mt-0.5 rounded-sm"
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
