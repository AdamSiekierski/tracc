import React from "react"
import Form from "../../components/Form"
import LabeledTextField from "../../components/LabeledTextField"

const AddTransactionForm = () => {
  return (
    <Form submitText="Add" onSubmit={(res) => console.log(res)}>
      <LabeledTextField name="name" label="name" />
    </Form>
  )
}

export default AddTransactionForm
