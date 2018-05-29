export function validateSubcategoriesForm(values) {
  const error = {};

  if (!values.parentCategoryId) {
    error.parentCategoryId = 'Vui lòng chọn danh mục cha'
  }

  if (!values.name) {
    error.name = 'vui lòng nhập danh mục con'
  }

  return error
}