import { useReducer, useState } from 'react'

import { formReducer, initialFormState, radioOptions } from './form-reducer'
import {
  CheckboxInput,
  CheckboxInputGroup,
  DateTimeInput,
  RadioInput,
  SelectInput,
  TextAreaInput,
  TextInput,
} from '../../components/Inputs/Inputs'
import { FormActionTypes } from './form-action'

export default function FormPage() {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState)
  const [isFormTouched, setFormTouched] = useState(false)

  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <form>
          <TextInput
            label="Text Input"
            type="text"
            value={formState.text.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.TextChange,
                payload: e.target.value,
              })
            }
            isValid={formState.text.isValid}
            isTouched={isFormTouched}
          />
          <TextInput
            label="Number Input"
            type="number"
            value={formState.number.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.NumberChange,
                payload: e.target.value,
              })
            }
            isValid={formState.number.isValid}
            isTouched={isFormTouched}
          />
          <TextInput
            label="Password Input"
            type="password"
            value={formState.password.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.PasswordChange,
                payload: e.target.value,
              })
            }
            isValid={formState.password.isValid}
            isTouched={isFormTouched}
          />
          <TextAreaInput
            label="Text Area Input"
            value={formState.textarea.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.TextareaChange,
                payload: e.target.value,
              })
            }
            isValid={formState.textarea.isValid}
            isTouched={isFormTouched}
          />
          <SelectInput
            label="Select Input"
            value={formState.select.value}
            options={[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
            ]}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.SelectChange,
                payload: e,
              })
            }
            isValid={formState.select.isValid}
            isTouched={isFormTouched}
          />
          <DateTimeInput
            picker="date"
            label="Date Input"
            value={formState.date.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.DateChange,
                payload: e,
              })
            }
            isValid={formState.date.isValid}
            isTouched={isFormTouched}
          />
          <DateTimeInput
            picker="time"
            label="Time Input"
            value={formState.time.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.TimeChange,
                payload: e,
              })
            }
            isValid={formState.time.isValid}
            isTouched={isFormTouched}
          />
          <RadioInput
            label="Radio Input"
            options={radioOptions}
            value={formState.radio.value}
            onChange={(e) =>
              formDispatch({
                type: FormActionTypes.RadioChange,
                payload: e.target.value,
              })
            }
          />
          <CheckboxInputGroup row={true} label="Tech Stack:">
            <CheckboxInput
              label="React"
              checked={formState.reactCheck.value}
              onChange={(e, c) =>
                formDispatch({
                  type: FormActionTypes.ReactCheckChange,
                  payload: c,
                })
              }
            />
            <CheckboxInput
              label="Python"
              checked={formState.pythonCheck.value}
              onChange={(e, c) =>
                formDispatch({
                  type: FormActionTypes.PythonCheckChange,
                  payload: c,
                })
              }
            />
            <CheckboxInput
              label="Docker"
              checked={formState.dockerCheck.value}
              onChange={(e, c) =>
                formDispatch({
                  type: FormActionTypes.DockerCheckChange,
                  payload: c,
                })
              }
            />
          </CheckboxInputGroup>
          <div>
            <button type="submit" className="btn btn-secondary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
