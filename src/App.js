import React, {Component} from 'react'
import './App.css'
import imgFavFruit from './assets/manga.jpg' 

class App extends Component {
  state ={
    nome:"Lucas",
    idade:20,
    comidaFavorita:"Prato feito",
    musicasFavoritas:["Minha felicidade","Era só mais um Silva","Experience","Neopolitan Dreams-Remix"]
  }
  render(){
    return(
      <div>
      <h1>lista de informações:{this.state.nome}</h1>
      <h2>Idade: {this.state.idade} </h2>
      <h3>Comida favorita: {this.state.comidaFavorita} </h3>
      <h3>Musicas favoritas:</h3>
      <ul>
        <li> {this.state.musicasFavoritas[0]} </li>
        <li> {this.state.musicasFavoritas[1]} </li>
        <li> {this.state.musicasFavoritas[2]} </li>
        <li> {this.state.musicasFavoritas[3]} </li>
      </ul>
      <h3>Fruta favorita:</h3>
      <img src={imgFavFruit} />

    </div>
    )
    }
}export default App;