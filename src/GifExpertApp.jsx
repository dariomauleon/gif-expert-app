import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Itachi"]);
  const onAddCategorie = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Inputs */}
      <AddCategory onNewCategorie={onAddCategorie} />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
