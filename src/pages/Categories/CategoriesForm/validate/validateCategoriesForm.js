export function validateCategoriesForm(values) {
  let errors = {}

  if (!values.name) {
    errors.name = 'Vui lòng nhập tên danh mục'
  } else  if (values.name.length > 5) {
    errors.name = 'Vui lòng nhập tên danh mục nhỏ hơn 5 ký tự'
  }

  return errors
}