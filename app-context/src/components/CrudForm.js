import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
  id: null,
  name: "",
  phone: "",
};

const CrudForm = () => {
  const {createData,updateData,dataToEdit,setDataToEdit} = useContext(CrudContext)
  const [form, setForm] = useState(initialForm);


  useEffect(()=>{
  
    if (dataToEdit) {
      setForm(dataToEdit);
    }else{
      setForm(initialForm)
    }
  },[dataToEdit])

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || (!form.phone)) {
      alert("Incomplete data");
      return;
    }
   
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
  };

  const handleReset = (e) => {
    console.log("datos reseteados null");
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Edit":"Add"}</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
        />
        <input
          onChange={handleChange}
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
        />
        <input type="submit" value="Send" />
        <input onClick={handleReset} type="reset" value="Clean" />
      </form>
    </div>
  );
};

export default CrudForm;
