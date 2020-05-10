import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  state = {
    beers: [],
    beerInfo: {},
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = async () => {
    const response = await api.get('/beers');
    this.setState({ beers: response.data });
  };

  render() {
    const { beers } = this.state;
    return (
      <>
        <div className="list">
          {beers.map((beer) => (
            <div className="item" key={beer.id}>
              <h2 key={beer.id}>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <img width="50" src={beer.image_url} alt="" />
              <Link className="btn-detalhes" to={`/beers/${beer.id}`}>
                Acessar
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}
