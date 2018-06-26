import React from 'react'
import Select from 'react-select'
import renderField from 'Form/renderField'

const handleChange = (changeValue) => (selectedValue) => {
  changeValue(selectedValue.value)
}

const SelectField = ({
  options,
  searchable = true,
  name,
  changeValue,
  value
}) => (
  <Select
    options={options}
    searchable={searchable}
    name={name}
    noResultsText='không có dữ liệu nào'
    onChange={handleChange(changeValue) }
    value={value}
  />
)

export default renderField(SelectField)
