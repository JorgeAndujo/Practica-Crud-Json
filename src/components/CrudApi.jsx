import { useEffect, useState } from "react";
import helpHttp from "../helper/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader/Loader";
import Message from "./Message/Message";

const CrudApi = () => {
  let api = helpHttp();
  let url = "http://localhost:5000/users";

  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createData = (data) => {
    data.id = Date.now();
    let option = {
        body: data,
        headers: { "content-type": "application/json" },
      };
    api
      .post(url, option)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb([...db, res]);
          console.log(db);
        } else {
          setError(res);
        }
      });
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let option = {
        body: data,
        headers: { "content-type": "application/json" },
      };
    api
      .put(endpoint, option)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = db.map((item) => (item.id === data.id ? data : item));
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id ${id}?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let option = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, option).then((res) => {
        console.log(res);
        if (!res.err) {
          let eliminar = db.filter((item) => item.id !== id);
          setDb(eliminar);
        } else{
            setError(res);
        }
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    api.get(url).then((response) => {
      // console.log(response);
      if (!response.err) {
        setDb(response);
        setError(null);
      } else {
        setDb(null);
        setError(response);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>CRUD App</h1>
      <CrudForm
        create={createData}
        update={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApi;
