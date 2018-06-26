import React from 'react'
import Select from 'react-select'
import classes from './SelectField.scss'

const handleChange = (changeValue) => (selectedValue) => {
  changeValue(selectedValue.value)
}

const SelectField = ({
  options,
  searchable = true,
  meta: {touched, error},
  name,
  changeValue,
  label,
  value
}) => (
  <div>
    <label> {label} </label>
    <Select
      options={options}
      searchable={searchable}
      name={name}
      noResultsText='không có dữ liệu nào'
      onChange={handleChange(changeValue) }
      value={value}
    />
    { touched && error && <span className={classes.error}> {error} </span> }
  </div>
)

export default SelectField
