import React, { Component } from 'react';

class DogList extends Component {
  constructor(props) {
    super(props);

    this.fetchAPI = this.fetchAPI.bind(this);
    this.updateDogList = this.updateDogList.bind(this);

    this.state = {
      isLoading: true,
      dogList: []
    }
  }

  updateDogList(imgPath) {
    this.setState(({ dogList }) => (
      {
        isLoading: false ,
        dogList: [...dogList, imgPath] 
      }
    ));
  }

  async fetchAPI() {
    const API_URL = `https://dog.ceo/api/breeds/image/random`;
    this.setState(
      { isLoading: true },
      async () => {
        const response = await fetch(API_URL);
        const { message } = await response.json();
    
        if (!message.includes('terrier')) this.updateDogList(message);
      }
    )
  }

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { dogList }= this.state;
    const lastItem = dogList.length - 1;

    console.log("--------------------");
    console.log(prevState.dogList, this.state.dogList)
    console.log(dogList[lastItem])
    console.log("componentDidUpdate");
    console.log("--------------------");
  }

  render() {
    const { dogList, isLoading } = this.state;

    return (
      <div>
        <h2>DogList</h2>
        <span>{(isLoading) ? 'Loading...' : null}</span>
        <ul>
          {dogList.map((dog) => <li key={dog}><img object-fit="cover" width="300px" height="300px" src={dog} alt="dog pic" /></li>)}
        </ul>
        <button onClick={this.fetchAPI}>Get another dog</button>
      </div>
    )
  }
}

export default DogList;
