import React from 'react';

export default function SearchFeature(props) {

    //const { searchTitle } = this.state;

    

    return (
        <form className="form-inline my-2 my-lg-0">
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Busca un muñeco" 
                aria-label="Search"
                // value={searchTitle}
                // onChange={this.onChangeSearchTitle}
                />
        </form>
    )
}
