import React from "react"
import { useMutation } from "blitz"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput } from "app/auth/validations"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <Form
      submitText="Sign up"
      schema={SignupInput}
      initialValues={{ email: "", password: "", name: "" }}
      onSubmit={async (values) => {
        try {
          await signupMutation(values)
          props.onSuccess?.()
        } catch (error) {
          if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return { email: "This email is already being used" }
          } else {
            return { [FORM_ERROR]: error.toString() }
          }
        }
      }}
    >
      <LabeledTextField name="name" label="Name" placeholder="John Doe" />
      <LabeledTextField name="email" label="Email" placeholder="john.doe@acme.com" />
      <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
    </Form>
  )
}

export default SignupForm
