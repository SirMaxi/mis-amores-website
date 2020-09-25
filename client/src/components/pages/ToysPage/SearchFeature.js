import React from "react";

export default function SearchFeature({ onChange }) {
  return (
    <div className="form-group">
      <label>Busca un muñeco</label>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar"
        onChange={onChange}
      />
    </div>
  );
}
