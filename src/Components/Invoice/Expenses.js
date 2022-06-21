import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


const Expenses = () => {
  return (
    <div className="products">
    <img style={{"padding":"100px"}}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDnkZjrOZPN6FFaGGU4nxy0MujueM9UWdAg&usqp=CAU"
      className="productimage"
      alt=""
    />
    <h3>Add your 1st Expense</h3>
    <p className="producttext">
    Record your business expenses & know your real profits.
    </p>
    <Link to={ROUTES.ADDEXPENSES} className="add-item-button" style={{"backgroundColor":"red"}}>
    <i class="fa-solid fa-circle-plus"></i>Add Expenses
    </Link>
  </div>
  )
}

export default Expenses
