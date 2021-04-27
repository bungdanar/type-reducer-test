import { ValueType } from 'react-select'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

interface InputProps {
  type?: string
  label: string
  isValid: boolean
  isTouched: boolean
  errMessage?: string
}

export interface TextInputProps extends InputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TextAreaInputProps extends InputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export interface SelectValue {
  label: string
  value: any
}

export interface SelectInputProps extends InputProps {
  value: ValueType<SelectValue, false>
  options: SelectValue[]
  onChange: (value: ValueType<SelectValue, false>) => void
}

export interface DateTimeInputProps extends InputProps {
  picker: 'date' | 'time'
  value: MaterialUiPickersDate
  onChange: (value: MaterialUiPickersDate) => void
}

export interface RadioInputProps {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  options: { value: string; label: string }[]
}

export interface CheckboxInputGroupProps {
  children: React.ReactNode
  row: boolean
  label: string
}

export interface CheckboxInputProps {
  checked: boolean
  label: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void
}
