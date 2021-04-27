import { memo } from 'react'

import { css } from 'glamor'
import Select from 'react-select'
import moment from 'moment'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@material-ui/core'

import {
  CheckboxInputGroupProps,
  CheckboxInputProps,
  DateTimeInputProps,
  RadioInputProps,
  SelectInputProps,
  SelectValue,
  TextAreaInputProps,
  TextInputProps,
} from './input-type'

import './Input.css'

const primaryColor = '#16a085'

const inputFocusStyle = (color: string) =>
  css({
    '& .form-control:focus': {
      boxShadow: 'none',
      borderColor: color,
    },
  })

const datetimeFocusStyle = (color: string) =>
  css({
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: color,
    },
  })

const TextInput = memo(
  (props: TextInputProps): JSX.Element => {
    const showError = props.isTouched && !props.isValid
    const styles: string[] = ['form-group', 'custom-input']
    if (showError) {
      styles.push('custom-input--not-valid')
    }

    return (
      <div className={styles.join(' ')} {...inputFocusStyle(primaryColor)}>
        <label>{props.label}</label>
        <input
          className="form-control"
          value={props.value}
          onChange={props.onChange}
          type={props.type}
        />
        {showError ? (
          <small>
            {props.errMessage ? props.errMessage : 'Field is required'}
          </small>
        ) : null}
      </div>
    )
  },
  (prevProps, nextProps) => {
    if (
      prevProps.value !== nextProps.value ||
      prevProps.isTouched !== nextProps.isTouched ||
      prevProps.isValid !== nextProps.isValid
    ) {
      return false
    }

    return true
  }
)

const TextAreaInput = memo(
  (props: TextAreaInputProps) => {
    const showError = props.isTouched && !props.isValid
    const styles = ['form-group', 'custom-input']
    if (showError) {
      styles.push('custom-input--not-valid')
    }

    return (
      <div className={styles.join(' ')} {...inputFocusStyle(primaryColor)}>
        <label>{props.label}</label>
        <textarea
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
        {showError ? (
          <small>
            {props.errMessage ? props.errMessage : 'Field is required'}
          </small>
        ) : null}
      </div>
    )
  },
  (prevProps, nextProps) => {
    if (
      prevProps.value !== nextProps.value ||
      prevProps.isTouched !== nextProps.isTouched ||
      prevProps.isValid !== nextProps.isValid
    ) {
      return false
    }

    return true
  }
)

const SelectInput = memo(
  (props: SelectInputProps) => {
    const showError = props.isTouched && !props.isValid
    const styles = ['form-group', 'custom-input']
    if (showError) {
      styles.push('custom-input--select-not-valid')
    }

    return (
      <div className={styles.join(' ')}>
        <label>{props.label}</label>
        <Select
          placeholder="Pilih..."
          options={props.options}
          value={props.value}
          onChange={props.onChange}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: primaryColor,
            },
          })}
        />
        {showError ? (
          <small>
            {props.errMessage ? props.errMessage : 'Field is required'}
          </small>
        ) : null}
      </div>
    )
  },
  (prevProps, nextProps) => {
    if (
      (!prevProps.value && nextProps.value) ||
      prevProps.isTouched !== nextProps.isTouched ||
      prevProps.isValid !== nextProps.isValid
    ) {
      return false
    }

    if (prevProps.value && nextProps.value) {
      if (
        (prevProps.value as SelectValue).value !==
        (nextProps.value as SelectValue).value
      ) {
        return false
      }
    }

    return true
  }
)

const DateTimeInput = memo(
  (props: DateTimeInputProps) => {
    const showError = props.isTouched && !props.isValid
    const styles = ['form-group', 'custom-input']
    if (showError) {
      styles.push('custom-input--mui-not-valid')
    }

    let pickerDisplay: JSX.Element | null = null
    if (props.picker === 'date') {
      pickerDisplay = (
        <DatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="DD MMMM YYYY"
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        />
      )
    } else if (props.picker === 'time') {
      pickerDisplay = (
        <TimePicker
          autoOk
          ampm={false}
          variant="inline"
          inputVariant="outlined"
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        />
      )
    }

    return (
      <div className={styles.join(' ')} {...datetimeFocusStyle(primaryColor)}>
        <label>{props.label}</label>
        {pickerDisplay}
        {showError ? (
          <small>
            {props.errMessage ? props.errMessage : 'Field is required'}
          </small>
        ) : null}
      </div>
    )
  },
  (prevProps, nextProps) => {
    if (
      (!prevProps.value && nextProps.value) ||
      prevProps.isTouched !== nextProps.isTouched ||
      prevProps.isValid !== nextProps.isValid
    ) {
      return false
    }

    let prevDateTime: string = ''
    let nextDateTime: string = ''

    if (prevProps.value && nextProps.value) {
      switch (prevProps.picker) {
        case 'date':
          prevDateTime = moment(prevProps.value).format('YYYY-MM-DD')
          nextDateTime = moment(nextProps.value).format('YYYY-MM-DD')
          break

        case 'time':
          prevDateTime = moment(prevProps.value).format('YYYY-MM-DD HH:mm')
          nextDateTime = moment(nextProps.value).format('YYYY-MM-DD HH:mm')
          break

        default:
          break
      }
    }

    if (prevDateTime !== nextDateTime) {
      return false
    }

    return true
  }
)

const RadioInput = memo(
  (props: RadioInputProps) => {
    return (
      <div className="form-group custom-input">
        <label>{props.label}</label>
        <RadioGroup row={true} value={props.value} onChange={props.onChange}>
          {props.options.map((o, i) => (
            <FormControlLabel
              key={i}
              control={<Radio color="primary" />}
              value={o.value}
              label={o.label}
            />
          ))}
        </RadioGroup>
      </div>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.value !== nextProps.value) {
      return false
    }

    return true
  }
)

const CheckboxInputGroup = memo((props: CheckboxInputGroupProps) => {
  return (
    <div className="form-group custom-input">
      <label>{props.label}</label>
      <FormGroup row={props.row}>{props.children}</FormGroup>
    </div>
  )
})

const CheckboxInput = memo(
  (props: CheckboxInputProps) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={props.checked}
            onChange={props.onChange}
          />
        }
        label={props.label}
      />
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.checked !== nextProps.checked) {
      return false
    }

    return true
  }
)

export {
  TextInput,
  TextAreaInput,
  SelectInput,
  DateTimeInput,
  CheckboxInput,
  CheckboxInputGroup,
  RadioInput,
}
