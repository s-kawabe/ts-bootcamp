import React, {ChangeEvent, FC} from 'react'
import styles from 'styles/atoms/form.module.scss'

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number
  type: string 
}

const TextInput: FC<Props> = ({ onChange, value, type }) => {
  return (
    <input 
      className={styles.form__text}
      onChange={(e) => onChange(e)}
      value={value}
      type={type}
    />
  )
}

export default TextInput
