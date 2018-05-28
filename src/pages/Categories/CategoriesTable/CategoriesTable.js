import React from 'react'
import { observer } from 'mobx-react'
import CategoriesCell from './CategoriesCell'

const CategoriesTable = ({ categoriesStore }) => (
  <table className='table'>
    <thead>
      <tr>
        <th> Tên Danh Mục Cha </th>
        <th> Ngày tạo </th>
        <th> &nbsp; </th>
      </tr>
    </thead>
    <tbody>
      { categoriesStore.categories && categoriesStore.categories.map((category) => (
        <CategoriesCell category={category} key={category.id} categoriesStore={categoriesStore} />
      )) }
    </tbody>
  </table>
)

export default observer(CategoriesTable)
