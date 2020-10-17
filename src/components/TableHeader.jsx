import React from "react";

const TableHeader = ({ setSearchText }) => {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">
          Name
          <br />
          <input
            type="text"
            className="mt-2"
            placeholder="Enter Name"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </th>
        <th scope="col">Price</th>
        <th scope="col">Coupon</th>
        <th scope="col">In Stock</th>
      </tr>
    </thead>
  );
};

export default TableHeader;