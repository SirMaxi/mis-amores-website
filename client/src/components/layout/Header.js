import React from 'react';
import AuthOptions from '../auth/AuthOptions';
import SearchFeature from './SearchFeature';
//import Axios from 'axios';


export default function Header() {

  // constructor(props){
  //   this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
  //   this.searchTitle = this.searchTitle.bind(this);

  //   this.state = {
  //     searchTitle: ''
  //   };
  // }

  // onChangeSearchTitle(e) {
  //   const searchTitle = e.target.value;

  //   this.setState({
  //     searchTitle: searchTitle
  //   });
  // }

  // searchTitle() {
  //   Axios.post("http://localhost:5000/toys/getToysPost")
  //     .then(response => {
  //       this.setState({
  //         titulo: response.data
  //       });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }



  //render() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
        <img src="http://placehold.it/150x50?text=Logo" width="40" height="40" alt="" loading="lazy"/>
          Los amores de la tia Jenny
        </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-4">
            <AuthOptions />
          </ul>
            <SearchFeature />         
        </div>
    </nav>
    )
  }
//}
