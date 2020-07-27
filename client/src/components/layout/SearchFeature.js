// import React, { Component, Link, useState, useMemo } from 'react';

// export default class SearchFeature extends Component{

//     render() {
//         return (
//             <div className="ToysListItem">
//                 {/* <img
//                     className="ToysListItem_avatar"
//                     src={this.props.toy.}
//                     alt={`${this.props.toy.titulo} ${this.props.toy.descripcion}`}
//                 /> */}
//                 <div>
//                     <strong>
//                         {this.props.toy.titulo} {this.props.toy.descripcion}
//                     </strong>
//                     <br/>
//                     <br/>
//                     {this.props.toy.precio}
//                 </div>
//             </div>
//         );
//     }
// }

// function useSearchToys(toys) {

//     const [query, setQuery] = useState('');
//     const [filteredToys, setFilteredToys] = useState(toys);

//     useMemo(
//         () => {
//             const result = toys.filter(toy => {
//                 return `${toy.titulo} ${toy.descripcion}`
//                 .toLowerCase()
//                 .includes(query.toLowerCase());
//             })

//             setFilteredToys(result)
//         }, [ toys, query ]);

//         return { query, setQuery, filteredToys }
// }

// function ToysList(props) {
//     const { query, setQuery, filteredToys } = useSearchToys(props.toys)
//         if(props.toys.length === 0){
//             return(
//                 <div className="box">
//                     <p>No se encontraron muñecos</p>
//                 </div>
//             )
//         }
//         return (
//             <div className="ToysList">
//                 <div className="form-group">
//                     <label>Filtrar Muñecos</label>
//                     <input
//                         value={query}
//                         type="text"
//                         className="form-control"
//                         onChange={(e) => {
//                             setQuery(e.target.value)
//                         }}
//                     />
//                 </div>
//                 <ul className="list-unstyled">
//                         {filteredToys.map(toy => {
//                             return(
//                                 <li key={toy.id}>
//                                     <Link to={`/toys/${toy.id}`}>
//                                         <SearchFeature toy={toy} />
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                 </ul>
//             </div>
//         );
// }
