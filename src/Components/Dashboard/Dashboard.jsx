import React, { Component } from 'react';
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      this.setState({ data: JSON.parse(storedData), loading: false });
    }
  }

  getData = (pdata) => {
    console.log(pdata, "clicked");
    let url;

    if (pdata === "fakeData") {
      url = "https://fakestoreapi.com/products";
    } else if (pdata === "products") {
      url = "https://dummyjson.com/products";
    } else if (pdata === "reciepes") {
      url = "https://dummyjson.com/recipes";
    } else {
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let fetchData = res.products || res.recipes || res;
        localStorage.setItem("data", JSON.stringify(fetchData)); // Save
        this.setState({ data: fetchData, loading: false });      // Load
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='child-left'>
          <button onClick={() => this.getData("fakeData")}>Fake Data</button>
          <button onClick={() => this.getData("products")}>Products</button>
          <button onClick={() => this.getData("reciepes")}>Recipes</button>
        </div>

        <div className='child-right'>
          {this.state.loading ? (
            <p className="loading-text">Please wait, data loading...</p>
          ) : (
            this.state.data.map((p, index) => (
              <div key={index} className="card">
                <h1>{p.title || p.name}</h1>
                <img src={p.image || p.thumbnail} alt="" />
                <h6>Price: {p.price}</h6>
                <h5>Rating: {p.rating?.rate || p.rating || "N/A"}</h5>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
