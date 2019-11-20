import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  handleType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = (event) => {
    
     if (this.state.filters.type === 'cat'){
      fetch("/api/pets?type=cat")
      .then(r => r.json())
      .then(results => {
        this.setState.pets = results
      })
    }
    else if (this.state.filters.type === 'dog'){
      fetch("/api/pets?type=dog")
      .then(r => r.json())
      .then(results => {
        this.state.pets.push(results)
      })
    }
    else if (this.state.filters.type === 'micropig'){
      fetch("/api/pets?type=micropig")
      .then(r => r.json())
      .then(results => {
        this.state.pets.push(results)
      })
    }
    else {
      fetch("/api/pets")
      .then(r => r.json())
      .then(results => {
        this.state.pets.push(results)
      })
    }
  }

  handleAdoptPet = (id) => {
   this.state.pets.forEach(pet => {
    
    if (pet.id === id){
      pet.isAdopted = true
    }

    })
  
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
    
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
