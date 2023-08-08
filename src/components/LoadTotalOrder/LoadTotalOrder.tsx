import React from 'react'
import "./styles.scss"
import { Form, Formik } from 'formik'
import { usePayMentContext } from '../../context/PaymentContext'
import { InputField } from '../../common'

type FormInitValues = {
  total: number
}

const LoadTotalOrder = () => {
  const { handleSetTotalAmounts, totalOrder } = usePayMentContext()
  const handleSubmit = (values: FormInitValues) => {
    handleSetTotalAmounts(values.total)
  }

  return (
    <div className='total-order'>
      <div className='inform-amount'>
        What is your total bill?
      </div>
      <Formik enableReinitialize initialValues={{ total: 0 }} onSubmit={handleSubmit}>
        {({ values, handleChange }) => {
          return (
            <Form>
              <InputField type='number' name='total' value={values.total} onChange={handleChange} />
              <button type='submit' className='set-total'>Next</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default LoadTotalOrder
