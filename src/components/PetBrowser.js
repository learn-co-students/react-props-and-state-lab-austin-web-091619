import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }

  mappedPets = () => {
   return this.props.pets.map(pet => (
      
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
   ))
  }

  render() {
    return <div className="ui cards">
      {this.mappedPets()}
    </div>
  }
}

export default PetBrowser
