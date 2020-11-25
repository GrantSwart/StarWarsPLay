import React, { Component } from "react";
import Character from "/src/Character";
import Person from "/src/Person";

class Mepa extends Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      peopledata: [],
      books: [],
      loading: false
    };
  }

  componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    //const url = "https://some-api.com/harry-potter";
    this.setState({ loading: true });
    fetch(url)
      //call response.json() to convert data into a readable stream
      //xml response.text
      //iimage response.blob
      .then((response) => response.json())
      //stars wars results is the inner array of the response object ie books.results
      .then((books) => this.setState({ books: books.results }))
      .catch(console.log)
      //.then((json) => json.data)
      //.then(json => json.map(country => country.name))

      //conversion methods return another promise of the actual data
      .then((data) => {
        this.setState({ loading: false });
        //data json object
        //console.log(data);
        //show results in array - there are 10
        //console.log(data.results)}
        //print name value of first object in results
        //console.log(data.results[0].name);
        //curly braces to ensure valid Javascript object
        //this.setState({ allAEPA: data });
      });
    console.log("Component mounted");
    //console.log(this.state.books.map((p) => { return console.log(p.name)});
  }

  // displayData() {
  //  console.log("p " + this.state.peopledata);
  // }
  //map function returns an array of components (Joke in this case)

  render() {
    //create array of Person components
    const PersonComponents = this.state.books.map((joke, i) => (
      <Person key={joke.name} name={joke.name} />
    ));
    //this approach pass in the books array to the Character component
    //use map function to return array of components
    return (
      <div>
        <h2>Mepa component</h2>
        <h1>Approach 1 - use map in parent component</h1>
        {this.state.books.map((project, i) => {
          return (
            <Person
              key={project.name}
              name={project.name}
              gender={project.gender}
              homeworld={project.homeworld}
            />
          );
        })}

        <h1>Approach 2 - pass array into child component</h1>
        <Character people={this.state.books} />
        <h1>Approach 3 - map function outside of render</h1>
        <div>{PersonComponents}</div>
      </div>
    );
  }
}

export default Mepa;
