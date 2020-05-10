import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import { GrFormPreviousLink } from 'react-icons/gr';

export default class Beer extends Component {
  state = {
    beer: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/beers/${id}`);
    this.setState({ beer: response.data[0] });
  }

  render() {
    const { beer } = this.state;
    console.log(beer);
    return (
      <div>
        {beer && (
          <div className="container-details">
            <img className="beerImg" src={beer.image_url} alt={beer.name} />
            <div className="description">
              <h1>{beer.name}</h1>
              <p className="tagline">Tagline: {beer.tagline}</p>
              <p className="description">Description: {beer.description}</p>
              <p className="firstBrewed">First brewer: {beer.first_brewed}</p>
              <div className="ingredientsItems">
                <h3>Hops</h3>
                <ul>
                  {beer.ingredients.hops.map((hop, index) => (
                    <li key={index}>* {hop.name}</li>
                  ))}
                </ul>
              </div>
              <div className="ingredientsItems">
                <h3>Malt</h3>
                <ul>
                  {beer.ingredients.malt.map((mal, index) => (
                    <li key={index}>* {mal.name}</li>
                  ))}
                </ul>
              </div>
              <div className="ingredientsItems">
                <h3>Yeast</h3>
                <p>{beer.ingredients.yeast}</p>
              </div>
            </div>
          </div>
        )}
        <Link to="/" className="btn-back">
          <GrFormPreviousLink className="back" /> Voltar
        </Link>
      </div>
    );
  }
}
