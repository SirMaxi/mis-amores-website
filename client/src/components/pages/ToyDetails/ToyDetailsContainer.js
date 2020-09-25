import React, { Component } from "react";
import ToyDetails from "./ToyDetails";
import Axios from "axios";

export default class ToyDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await Axios.get(
        `http://localhost:5000/toys/toy/${this.props.match.params.id}`
      );
      this.setState({ data: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error });
      console.log("error");
    }
  };

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }

    if (this.state.error) {
      return <h1>error</h1>;
    }

    return (
      <ToyDetails
        toy={this.state.data}
        modalIsOpen={this.state.modalIsOpen}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
      />
    );
  }
}
