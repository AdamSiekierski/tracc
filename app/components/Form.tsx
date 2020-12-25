import React, { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import * as z from "zod"
import Button from "./Button"
export { FORM_ERROR } from "final-form"

type FormProps<S extends z.ZodType<any, any>> = {
  children: ReactNode
  submitText: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
} & Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit">

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={(values) => {
        if (!schema) return
        try {
          schema.parse(values)
        } catch (error) {
          return error.formErrors.fieldErrors
        }
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} className="text-left" {...props}>
          {children}
          {submitError && (
            <div role="alert" className="text-red-600 text-sm italic text-center">
              {submitError}
            </div>
          )}
          <Button
            type="submit"
            disabled={submitting}
            className="block rounded-md px-4 py-2 mx-auto mt-1 text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          >
            {submitText}
          </Button>
        </form>
      )}
    />
  )
}

export default Form
