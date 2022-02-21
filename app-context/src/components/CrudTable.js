import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Data table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
