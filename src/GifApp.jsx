import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GridGif from "./components/GridGif";

export default function GifApp() {
  const [categories, setCategories] = useState([ 'Naruto' ]);

  const onAddCategory = ( newCategory ) => {
    if(!categories.includes(newCategory)){
      setCategories([newCategory, ...categories])
    }
  };  

  return (
    <section className="w-full py-8 flex flex-col justify-center gap-y-4 text-slate-700 max-w-screen-md mx-auto ">
      <h1 className="mx-auto">GifApp</h1> 
      <AddCategory 
        onNewCategory={onAddCategory}
      />
      <div className="w-full">
        {categories.map((category) => ( 
          <GridGif key={category} category={category} /> 
        ))}
      </div>
    </section>
  );
}