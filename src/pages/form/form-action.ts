import { SelectValue } from '../../components/Inputs/input-type'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] }
}

export enum FormActionTypes {
  TextChange = 'text',
  NumberChange = 'number',
  PasswordChange = 'password',
  TextareaChange = 'textarea',
  SelectChange = 'select',
  DateChange = 'date',
  TimeChange = 'time',
  RadioChange = 'radio',
  ReactCheckChange = 'reactCheck',
  PythonCheckChange = 'pythonCheck',
  DockerCheckChange = 'dockerCheck',
}

type FormPayloads = {
  [FormActionTypes.TextChange]: string
  [FormActionTypes.NumberChange]: string
  [FormActionTypes.PasswordChange]: string
  [FormActionTypes.TextareaChange]: string
  [FormActionTypes.SelectChange]: SelectValue | null
  [FormActionTypes.DateChange]: object | null
  [FormActionTypes.TimeChange]: object | null
  [FormActionTypes.RadioChange]: string
  [FormActionTypes.ReactCheckChange]: boolean
  [FormActionTypes.PythonCheckChange]: boolean
  [FormActionTypes.DockerCheckChange]: boolean
}

export type FormActions = ActionMap<FormPayloads>[keyof ActionMap<FormPayloads>]
