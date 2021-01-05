import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  type?: "text" | "password" | "email" | "number"
  rows?: number
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  LabeledTextFieldProps
>(({ name, label, outerProps, type, rows, ...props }, ref) => {
  const Input = rows
    ? ("textarea" as keyof JSX.IntrinsicElements)
    : ("input" as keyof JSX.IntrinsicElements)

  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, { parse: (val) => (type === "number" ? Number(val) || "" : val) })

  const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

  return (
    <div {...outerProps} className="mb-2">
      <label className="text-sm text-gray-600">
        {label}
        <Input
          {...input}
          disabled={submitting}
          rows={rows}
          type={type}
          {...props}
          ref={ref}
          className={`bg-white border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal transition-colors duration-500 my-1 resize-none ${
            touched && normalizedError && "border-red-600"
          }`}
        />
      </label>
      <div role="alert" className="text-sm italic text-red-600">
        {touched && normalizedError ? normalizedError : ""}
      </div>
    </div>
  )
})

export default LabeledTextField
