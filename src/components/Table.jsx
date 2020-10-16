import React, { useState, useEffect } from "react";
import Button from "./Button";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const selectedStyle = {
    backgroundColor: "#357EC7",
    color: "white",
  };
  const [searchText, setSearchText] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      uid: 1,
      name: "Adidas Shoes",
      price: 2100,
      coupon: "no",
      instock: "yes",
      completed: false,
      editable: false,
    },
    {
      id: 2,
      uid: 2,
      name: "Puma Bat",
      price: 2101,
      coupon: "yes",
      instock: "yes",
      completed: false,
    },
    {
      id: 3,
      uid: 3,
      name: "Puma Shoes",
      price: 2102,
      coupon: "no",
      instock: "no",
      completed: false,
      editable: false,
    },
    {
      id: 4,
      uid: 4,
      name: "Reebok Shoes",
      price: 2103,
      coupon: "no",
      instock: "yes",
      completed: false,
      editable: false,
    },
    {
      id: 5,
      uid: 5,
      name: "Asics Shoes",
      price: 2105,
      coupon: "no",
      instock: "yes",
      completed: false,
      editable: false,
    },
    {
      id: 6,
      uid: 6,
      name: "OnePlus 5T",
      price: 2100,
      coupon: "no",
      instock: "yes",
      completed: false,
      editable: false,
    },
    {
      id: 7,
      uid: 7,
      name: "MI A1",
      price: 2100,
      coupon: "no",
      instock: "yes",
      completed: false,
      editable: false,
    },
    {
      id: 8,
      uid: 8,
      name: "MI T-Shirt",
      price: 2200,
      coupon: "no",
      instock: "yes",
      completed: false,
      editable: false,
    },
  ]);

  const handleEdit = (id) => {
    const editedArray = data.map((item) => {
      if (item.id === id) {
        item.editable = true;
      }
      return item;
    });
    setData(editedArray);
  };

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  }, [searchText, data]);
  const handleChangePrice = (e) => {
    const upDatedData = data.map((item) => {
      if (item.editable === true) {
        item.price = e.target.value;
      }
      return item;
    });
    setData(upDatedData);
  };

  const handleChange = (id) => {
    const upDatedData = data.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setData(upDatedData);
  };

  const deleteHandler = () => {
    const filteredData = data.filter((item) => item.completed === false);
    setData(filteredData);
  };
  const resetInputToText = () => {
    const newData = data.map((item) => {
      if (item.editable === true) {
        item.editable = false;
      }
      return item;
    });
    setData(newData);
  };

  const resetHandler = () => {
    const resetData = data.map((item) => {
      if (item.completed === true) {
        item.completed = false;
      }
      return item;
    });
    setData(resetData);
  };

  return (
    <div className="container mt-3">
      <table className="table ">
        <TableHeader setSearchText={setSearchText} />
        <tbody>
          {filteredData.map((item) => (
            <TableRow
              item={item}
              handleChange={handleChange}
              selectedStyle={selectedStyle}
              handleEdit={handleEdit}
              handleChangePrice={handleChangePrice}
              resetInputToText={resetInputToText}
              resetHandler={resetHandler}
            />
          ))}
        </tbody>
      </table>

      <div className="container text-center mt-2">
        <Button handleClick={deleteHandler}>Delete</Button>
        <Button reset handleClick={resetHandler}>
          Reset
        </Button>
    </div>
    </div>
  );
};

export default Table;
