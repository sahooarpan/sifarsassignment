import React from "react";

const TableRow = ({
  item,
  handleChange,
  handleChangePrice,
  resetInputToText,
  selectedStyle,
  handleEdit,
}) => {
  return (
    <tr style={item.completed ? selectedStyle : null} key={item.id}>
      <th scope="row">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleChange(item.id)}
            className="custom-control-input"
            id={item.id}
          />
          <label className="custom-control-label" htmlFor={item.id}></label>
        </div>
      </th>
      <td>{item.uid}</td>
      <td>{item.name}</td>
      <td onClick={() => handleEdit(item.id)}>
        {item.editable ? (
          <input
            type="text"
            value={item.price}
            onChange={handleChangePrice}
            onBlur={resetInputToText}
          />
        ) : (
          item.price
        )}
      </td>
      <td>{item.coupon}</td>
      <td>{item.instock}</td>
    </tr>
  );
};

export default TableRow;