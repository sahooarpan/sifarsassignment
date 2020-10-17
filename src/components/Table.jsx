import React  from "react";
import Button from "./Button";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import useData from '../hooks/useData'

const Table = () => {
//Custom Hook
  const {selectedStyle,setSearchText,handleEdit,filteredData, 
  handleChangePrice,handleChange,deleteHandler,resetInputToText,resetHandler}=useData();

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
