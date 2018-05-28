export function validateCategoriesForm(values) {
  let errors = {}

  if (!values.name) {
    errors.name = 'Vui lòng nhập tên danh mục'
  }

  if (values.address && values.address.length > 5) {
    errors.address = 'Vui lòng nhập địa chỉ nhỏ hơn 5 ký tự'
  }

  return errors
}