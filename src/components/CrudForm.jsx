import { useEffect, useState } from "react"

const initialForm = {
    id: null,
    name: '',
    lastName: ''
}

const CrudForm = ({setDataToEdit, create, update, dataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        console.log("Elementos: " + dataToEdit);
        if(dataToEdit){
            setForm(dataToEdit);
        } else{
            setForm(initialForm);
        }
    }, [dataToEdit])

    const handleChange = (e) => {
        // console.log(e.target.name + " " + e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.lastName){
            alert("Datos incompletos");
            return;
        }
        if(form.id === null){
            create(form);
        }
        else{
            update(form);
        }
        handleReset();
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return(
        <div>
            <h3>
                {dataToEdit ? "Editar" : "Agregar"}
            </h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder="Nombre" onChange={handleChange} value={form.name} />
                <input type='text' name='lastName' placeholder="Apellido " onChange={handleChange} value={form.lastName} />
                <input type='submit' name='Enviar'/>
                <input type='reset' name='Limpiar' onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm;