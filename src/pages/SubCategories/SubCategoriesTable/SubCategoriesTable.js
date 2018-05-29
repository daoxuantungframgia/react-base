import React from 'react'
import SubCategoriesCell from './SubCategoriesCell'

const SubCategoriesTable = ({ subCategories, deleteSubCategory, subCategoryEdit }) => (
  <table className='table'>
    <thead>
      <tr>
        <th> danh mục cha </th>
        <th> danh mục con </th>
        <th> ngày tạo </th>
        <th> &nbsp; </th>
      </tr>
    </thead>
    <tbody>
      {subCategories && subCategories.map((subCategory) => (
        <SubCategoriesCell subCategory={subCategory}
          key={subCategory.id}
          deleteSubCategory={deleteSubCategory}
          subCategoryEdit={subCategoryEdit}
        />
      ))}
    </tbody>
  </table>
)

export default SubCategoriesTable
