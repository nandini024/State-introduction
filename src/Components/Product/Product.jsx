

// // import React, { Component } from 'react'

// // export default class Product extends Component {
// //     constructor()
// //     {
// //         super();
// //         this.state={
// //             data:[]
// //         }
// //     }
// //     Getdata=()=>{
// //          fetch("https://fakestoreapi.com/products").then(res=>res.json())
// //          .then(res=>{console.log(res);
// //        this.setState({data:res}) 
// //      })
// //         this.setState({data:res})
// //     }
    
// //   render() {
    
// //     return (
// //       <div>
// //       <button onClick={ this.Getdata}>Getdata</button>
// //       {this.state.data.map((p)=>{
// //         return(
// //             <>
// //             <h1>{p.title}</h1>
// //             <h3>{p.price}</h3>
// //             <h3>{p.description}</h3>
// //             <img src={p.image} alt="" />
// //             <h5>{p.rating.rate}|| {p.rating.count}</h5>
            
// //             </>
// //         )

// //       })}
// //       </div>
// //     )
// //   }
// // }

// //FOR LOADING 

// import React, { Component } from 'react'

// export default class Product extends Component {
//     constructor()
//     {
//         super();
//         this.state={
//             data:[,],
//             loading:false
//         }
//     }
//     Getdata=()=>{
//          fetch("https://fakestoreapi.com/products").then(res=>res.json())
//          .then(res=>{console.log(res);
//        this.setState({data:res}) 
//      })
//         this.setState({data:res})
//     }
    
//   render() {
//     if(this.state.loading)
//     {
//         return <h2>Data is Loading...</h2>
//     }
//     return (
//       <div>
//       <button onClick={ this.Getdata}>Getdata</button>
//       {this.state.data.map((p)=>{
//         return(
//             <>
//             <h1>{p.title}</h1>
//             <h3>{p.price}</h3>
//             <h3>{p.description}</h3>
//             <img src={p.image} alt="" />
//             <h5>{p.rating.rate}|| {p.rating.count}</h5>
            
//             </>
//         )

//       })}
//       </div>
//     )
//   }
// }




import React, { Component } from 'react'
import "./Product.css"

export default class Product extends Component {
  constructor()
  {
    super()
    this.state={
      data:[],
      loading:true
    }
  }
 
  componentDidMount(){
 console.log("Click");
  let fake=JSON.parse(localStorage.getItem("fakeData"))
  if(fake)
  {
    this.setState({data:fake,loading:false})
  }
  else{

     fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
 this.setState({data:res,loading:false})
 localStorage.setItem("fakeData",JSON.stringify(res))

    })
  }
    
   

  }
  
  
  render() {
    if(this.state.loading)
    {
      return <h1>Data is loading please Wait....</h1>
    }

    return (
  <div className="product-container">
    {this.state.data.map((p) => {
      return (
        <div className="product-card" key={p.id}>
          <img src={p.image} alt={p.title} />
          <div className="product-title">{p.title}</div>
          <div className="product-price">${p.price}</div>
          <div className="product-description">{p.description}</div>
          <div className="product-rating">
            {p.rating.rate} ★ ({p.rating.count} reviews)
          </div>
        </div>
      );
    })}
  </div>
);

  }
}
