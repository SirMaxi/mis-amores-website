import React, { Component } from "react";
import "./style.css";
import ToyCards from "../../layout/ToyCards";
import SearchFeature from "./SearchFeature";
import CategoriesBox from "./CategoriesBox";
import Axios from "axios";

export default class ToysPage extends Component {
  state = {
    toys: undefined,
    toysSearched: undefined,
    toysCheckBox: undefined,
    check: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await Axios.post("http://localhost:5000/toys/getToysPost")
      .then((response) => {
        this.setState({
          toys: response.data,
          loading: false,
          toysCheckBox: response.data,
          toysSearched: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true, loading: false });
      });
  };

  handleCheck = (idCategory) => {
    let check = this.state.check;

    const currentIndex = check.indexOf(idCategory);
    const newChecked = [...check];

    if (currentIndex === -1) {
      newChecked.push(idCategory);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    let result = this.state.toys.filter((toy) =>
      newChecked.includes(toy.categoria)
    );

    console.log(result);

    if (result.length === 0) {
      this.setState({
        toysCheckBox: this.state.toys,
        toysSearched: this.state.toys,
      });
    } else {
      this.setState({
        toysCheckBox: result,
        toysSearched: result,
      });
    }

    this.setState({ check: newChecked });
  };

  handleSearchBar = (e) => {
    let result = this.state.toysCheckBox.filter((toy) =>
      toy.titulo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(result);
    this.setState({ toysSearched: result });
  };

  render() {
    if (this.state.loading) {
      return <p>Cargando...</p>;
    }

    if (this.state.error) {
      return <p>Error</p>;
    }

    return (
      <>
        <div className="container" id="ContainerToys">
          <div className="row">
            <SearchSide
              toysFiltered={this.state.toysFiltered}
              onChange={this.handleSearchBar}
              handleCheck={this.handleCheck}
              check={this.state.check}
            />
            <ToysSide toys={this.state.toysSearched} />
          </div>
        </div>
      </>
    );
  }
}

function SearchSide({ toysSearched, onChange, check, handleCheck }) {
  return (
    <>
      <div className="col-3">
        <SearchFeature toysSearched={toysSearched} onChange={onChange} />
        <CategoriesBox handleCheck={handleCheck} check={check} />
      </div>
    </>
  );
}

function ToysSide({ toys }) {
  return (
    <>
      <div className="col mb-3 ml-0">
        <ToyCards toys={toys} />
      </div>
    </>
  );
}
