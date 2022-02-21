import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  const {setDataToEdit,deleteData} = useContext(CrudContext)
  let { name, phone, id } = el;

  return (
    <tr>
      <th>{name}</th>
      <th>+34 {phone}</th>
      <th>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </th>
    </tr>
  );
};

export default CrudTableRow;
