import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { SelectValue } from '../../components/Inputs/input-type'
import { FormActions, FormActionTypes } from './form-action'

const radioOptions = [
  { label: 'Human', value: 'Human' },
  { label: 'Non Human', value: 'NonHuman' },
]

type FormInputValue<T> = {
  value: T
  isValid: boolean
}

type InitialFormState = {
  text: FormInputValue<string>
  number: FormInputValue<string>
  password: FormInputValue<string>
  textarea: FormInputValue<string>
  select: FormInputValue<SelectValue | null>
  date: FormInputValue<MaterialUiPickersDate>
  time: FormInputValue<MaterialUiPickersDate>
  radio: FormInputValue<string>
  reactCheck: FormInputValue<boolean>
  pythonCheck: FormInputValue<boolean>
  dockerCheck: FormInputValue<boolean>
}

const initialFormState: InitialFormState = {
  text: {
    value: '',
    isValid: false,
  },
  number: {
    value: '',
    isValid: false,
  },
  password: {
    value: '',
    isValid: false,
  },
  textarea: {
    value: '',
    isValid: false,
  },
  select: {
    value: null,
    isValid: false,
  },
  date: {
    value: null,
    isValid: false,
  },
  time: {
    value: null,
    isValid: false,
  },
  radio: {
    value: radioOptions[0].value,
    isValid: true,
  },
  reactCheck: {
    value: false,
    isValid: true,
  },
  pythonCheck: {
    value: false,
    isValid: true,
  },
  dockerCheck: {
    value: false,
    isValid: true,
  },
}

const formReducer = (
  state: InitialFormState,
  action: FormActions
): InitialFormState => {
  switch (action.type) {
    case FormActionTypes.TextChange:
    case FormActionTypes.NumberChange:
    case FormActionTypes.PasswordChange:
    case FormActionTypes.TextareaChange: {
      return {
        ...state,
        [action.type]: {
          value: action.payload,
          isValid: action.payload.trim() !== '',
        },
      }
    }

    case FormActionTypes.RadioChange: {
      return {
        ...state,
        [FormActionTypes.RadioChange]: {
          value: action.payload,
          isValid: true,
        },
      }
    }

    case FormActionTypes.SelectChange: {
      return {
        ...state,
        [FormActionTypes.SelectChange]: {
          value: action.payload,
          isValid: action.payload !== null,
        },
      }
    }

    case FormActionTypes.DateChange:
    case FormActionTypes.TimeChange: {
      return {
        ...state,
        [action.type]: {
          value: action.payload,
          isValid: action.payload !== null,
        },
      }
    }

    case FormActionTypes.ReactCheckChange:
    case FormActionTypes.PythonCheckChange:
    case FormActionTypes.DockerCheckChange: {
      return {
        ...state,
        [action.type]: {
          value: action.payload,
          isValid: true,
        },
      }
    }

    default:
      return state
  }
}

export { initialFormState, formReducer, radioOptions }
