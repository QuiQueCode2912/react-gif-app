import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = () => {
        event.preventDefault(); // Prevenir el comportamiento por defecto de recargar la página
        // Evitar agregar una categoría vacía o duplicada
        if (inputValue.trim().length > 0 ) {
            onNewCategory(inputValue.trim())
            //setCategories([inputValue, ...categories]);
            setInputValue(""); // Limpiar el campo de texto después de agregar
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="mx-auto flex flex-col gap-y-2">
                <input
                type="text"
                placeholder="Categoría"
                className="border rounded-md px-2 py-1"
                value={inputValue}
                onChange={onInputChange}
                />
                <button 
                type="submit"
                onClick={onSubmit} 
                className="px-2 py-1 border rounded-md bg-indigo-600 text-white"
                >
                    Agregar categoría
                </button>
            </form>
        </>
  )
}

export default AddCategory