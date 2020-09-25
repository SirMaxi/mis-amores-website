import React from "react";

const categories = [
  {
    _id: 1,
    name: "Disney",
  },
  {
    _id: 2,
    name: "Pixar",
  },
  {
    _id: 3,
    name: "Marvel",
  },
  {
    _id: 4,
    name: "Juegos",
  },
  {
    _id: 5,
    name: "Mascotas",
  },
  {
    _id: 6,
    name: "Personas",
  },
];

function CategoriesBox({ handleCheck }) {
  return (
    <div>
      <h3>Categorias</h3>
      <div className="form-check">
        {categories.map((value, index) => (
          <div key={index}>
            <input
              className="form-check-input"
              id={value.name}
              onChange={() => handleCheck(value.name)}
              type="checkbox"
            />
            <label className="form-check-label" htmlFor={value.name}>
              <p>{value.name}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesBox;
