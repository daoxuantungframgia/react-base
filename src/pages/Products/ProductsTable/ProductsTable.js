import React from 'react'
import ProductsCell from './ProductsCell'

const ProductsTable = ({ products, deleteProduct, productEdit }) => (
  <table className='table'>
    <thead>
      <tr>
        <th> danh mục con </th>
        <th> Mô tả sản phẩm </th>
        <th> Banner Link </th>
        <th> navigate Link</th>
        <th> Ngày tạo </th>
        <th> &nbsp; </th>
      </tr>
    </thead>
    <tbody>
      {products && products.map((product) => (
        <ProductsCell key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          productEdit={productEdit}
        />
      ))}
    </tbody>
  </table>
)

export default ProductsTable
