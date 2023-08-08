import { useField } from 'formik'
import React from 'react'
import "./styles.scss"

type InputFieldProps = {
  type: string,
  name: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<any>) => void
}

const InputField: React.FC<InputFieldProps> = ({ type, onChange, ...rest }) => {
  const [{ name, value }, others] = useField(rest)
  return (
    <>
      <input type={type} name={name} value={value} className='input-custom' onChange={onChange} />
    </>
  )
}

export default InputField
