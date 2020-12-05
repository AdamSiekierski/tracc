import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps} className="mb-4">
        <label className="text-sm text-gray-600">
          {label}
          <input
            {...input}
            disabled={submitting}
            {...props}
            ref={ref}
            className={`bg-white border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal transition-colors duration-500 my-1 ${
              touched && normalizedError && "border-red-600"
            }`}
          />
        </label>
        <div role="alert" className="text-sm italic text-red-600">
          {touched && normalizedError ? normalizedError : ""}
        </div>
      </div>
    )
  }
)

export default LabeledTextField
