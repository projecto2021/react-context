
import { useContext } from "react";
import CrudContext from "../context/CrudContext";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const {loading,db,error} = useContext(CrudContext)
  return (
    <div>
      <h2>Crud Api con Context Api</h2>
      <article className="grid-1-2">
          <CrudForm />
          {loading && <Loader />}
          {error && (
            <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />
          )}
          {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
