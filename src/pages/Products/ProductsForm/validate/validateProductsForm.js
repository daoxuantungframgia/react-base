export function validateProductsForm (values) {
  const errors = {}

  if (!values.subCategory) {
    errors.subCategory = 'Vui lòng lựa chọn danh mục con'
  }

  if (!values.productDescriptions) {
    errors.productDescriptions = 'Vui lòng nhập mô tả sản phâm'
  }

  if (!values.bannerLink) {
    errors.bannerLink = 'vui lòng nhập bannner link'
  }

  if (!values.navigateLink) {
    errors.navigateLink = 'Vui lòng nhập navigate link'
  }
  return errors
}