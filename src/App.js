import React, { Component } from 'react';
import api from './api';
import './app.css';
class App extends Component {

  state={
    filmes:[],
  }

  async componentDidMount(){
    const response = await api.get('');
    //console.log(response.data);

    this.setState({ filmes: response.data });
  }
  
  render() {

    const {filmes} = this.state;

    return (
      <div>
        <h1>Listar os filmes </h1>
        {console.log(filmes)}
        {filmes.map(filme =>(
          <div key={filme.show.id}>
            <h2> {filme.show.name}</h2>
            <img src={filme.show.image.medium} />
            <p>{filme.show.summary}</p>
          </div>
        ))}
      </div>
    );

  };
}

export default App;
