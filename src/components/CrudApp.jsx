// import { useState } from "react";
// import CrudForm from "./CrudForm";
// import CrudTable from "./CrudTable";

// const initialDb = [
//   {
//     id: 0,
//     name: "Jorge",
//     lastName: "Andujo",
//   },
//   {
//     id: 1,
//     name: "Alberto",
//     lastName: "Valdez",
//   },
// ];

// const CrudApp = () => {

//     const [db, setDb] = useState(initialDb);
//     const [dataToEdit, setDataToEdit] = useState(null);
//     const createData = (data) => {
//         data.id = db.length;
//         // console.log(data);
//         setDb([...db, data]);
//     }
//     const updateData = (data) => {
//         let newData = db.map((item) => item.id === data.id ? data : item);
//         setDb(newData);
//     }
//     const deleteData = (id) => {
//         let eliminar = db.filter(item => item.id !== id);
//         setDb(eliminar);
//     }
 
//     return(
//         <div>
//             <h1>CRUD App</h1>
//             <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
//             <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} /> 
//         </div>
//     )
// };

// export default CrudApp;