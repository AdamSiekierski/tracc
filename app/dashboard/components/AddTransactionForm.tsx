import getTransactions from "app/transactions/queries/getTransactions"
import { invalidateQuery, useMutation } from "blitz"
import Form, { FORM_ERROR } from "../../components/Form"
import LabeledTextField from "../../components/LabeledTextField"
import addTransaction, { AddTransactionInput } from "../../transactions/mutations/addTransaction"

type AddTransactionFormProps = {
  onSuccess?: () => void
}

const AddTransactionForm = ({ onSuccess }: AddTransactionFormProps) => {
  const [mutate] = useMutation(addTransaction)

  return (
    <Form
      submitText="Add"
      onSubmit={async (values) => {
        try {
          await mutate(values)
          invalidateQuery(getTransactions)
          onSuccess && onSuccess()
        } catch (err) {
          return {
            [FORM_ERROR]:
              "Sorry, we had an unexpected error. Please try again. - " + err.toString(),
          }
        }
      }}
      schema={AddTransactionInput}
    >
      <LabeledTextField name="name" label="Transaction name" />
      <LabeledTextField name="value" label="Value" type="number" />
      <LabeledTextField name="description" label="Description" rows={3} />
    </Form>
  )
}

export default AddTransactionForm
