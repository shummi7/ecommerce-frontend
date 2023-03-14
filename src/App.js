import React, { Component } from "react";
import Header from "./components/Header/Header";
import AboutUs from "./components/Header/AboutUs";
import ContactUs from "./components/Header/ContactUs";
import Cart from "./components/Header/Cart";
import Category from "./components/Category/Category";
import Signin from "./components/SigninRegister/Signin";
import Register from "./components/SigninRegister/Register";
import Collections from "./components/Collections/Collections";
import Advertise from "./components/Advertise/Advertise";
import Products from "./components/Products/Products";
import Productdisp from "./components/Productdisp/Productdisp";
import Todaydeal from "./components/Todaydeal/Todaydeal";
import Featuredproducts from "./components/Featuredproducts/Featuredproducts";
import Footer from "./components/Footer/Footer";
import "./reset.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      headerSiginin: "Sign In",
      pageRoute: "mainPage",
      collectionPage: "",
      collectionData: [],
      productPage: "",
      productData: [],
      featuredProductData: [],
      newProductData: [],
      addToCartString: "",
      cartDetails: {},
      cartNumber: 0,
      productList: [],
    };
  }

  onAddToCart = (product) => {
    if (this.state.cartDetails[product.id]) {
      let updatedObj = this.state.cartDetails;
      updatedObj[product.id].count++;
      this.setState({ cartDetails: updatedObj });
    } else {
      let obj = {};
      obj["title"] = product.title;
      obj["price"] = product.price;
      obj["count"] = 1;
      obj["image"] = product.images[0];
      // this.setState(prevState => {
      //   let prod = prevState.cartDetails
      //   prod[product.id] = obj
      //   return { prod };
      // })
      this.setState({
        cartDetails: { ...this.state.cartDetails, [product.id]: obj },
      });
    }
  };

  onDelCart = (id) => {
    if (id === 0) {
      this.setState({ cartDetails: {} });
    }
    if (this.state.cartDetails[id]) {
      if (this.state.cartDetails[id].count === 1) {
        let updatedObj = this.state.cartDetails;
        delete updatedObj[id];
        this.setState({ cartDetails: updatedObj });
      } else if (this.state.cartDetails[id].count > 0) {
        let updatedObj = this.state.cartDetails;
        updatedObj[id].count--;
        this.setState({ cartDetails: updatedObj });
      }
    }
  };

  onSignin = (data) => {
    this.setState({ userData: data });
  };

  onPageRouteChange = (page) => {
    this.setState({ pageRoute: page });
  };

  onCollectionRouteChange = (collection) => {
    this.setState({ pageRoute: "collectionPage" });
    this.setState({ collectionPage: collection });

    var collectionname = collection.toLowerCase();

    fetch(`https://dummyjson.com/products/category/${collectionname}?limit=20`)
      .then((res) => res.json())
      // .then(json => console.log(json))

      // .then(json=>console.log(json))
      // fetch('http://localhost:3001/collection',{
      //     method:'post',
      //     headers: {'Content-Type':'application/json'},
      //     body: JSON.stringify({
      //         collection:collectionname
      //     })
      // })
      // .then(response=>response.json())
      .then((data) => {
        var data1 = JSON.parse(JSON.stringify(data));
        this.setState({ collectionData: data1 });
      });
  };

  onSearchRouteChange = (info) => {
    this.setState({ pageRoute: "collectionPage" });
    this.setState({ collectionPage: info });

    let list = this.state.productList.flat();
    let newList={
      products:[]
    };
    for(let i=0;i<list.length;i++){

      if(list[i].title.toLowerCase().includes(info.toLowerCase())){

        newList.products.push(list[i])
      }
    }
    this.setState({ collectionData: newList });
  };

  onProductRouteChange = (product) => {
    this.setState({ productData: product });
    this.setState({ pageRoute: "productPage" });

    // var productname = product.replace(/[0-9]/g, "");
    // fetch("http://localhost:3001/product", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     producttable: productname,
    //     productcode: product,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     var data2 = JSON.parse(JSON.stringify(data));
    //     this.setState({ productData: data2 });
    //   });
  };

  componentDidMount() {
    var featuredproductArray = [
      "mens-shirts",
      "smartphones",
      "laptops",
      "home-decoration",
      "lighting",
      "mens-watches",
    ];
    var featuredproduct = [];
    let fullProductList = [];

    for (var i = 0; i < 6; i++) {
      // var featuredproductTable =
      //   featuredproductArray[
      //     Math.floor(Math.random() * featuredproductArray.length)
      //   ];
      fetch(
        `https://dummyjson.com/products/category/${featuredproductArray[i]}?limit=20`
      )
        .then((res) => res.json())
        // fetch('http://localhost:3001/featuredproduct',{
        //     method:'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({
        //         table:featuredproductTable
        //     })
        // })
        // .then(response=>response.json())
        .then((data) => {
          // var data3 = JSON.parse(JSON.stringify(data));

          featuredproduct.push(data.products[2]);
          fullProductList.push(data.products);
        });
    }

    var newproduct = [];

    // fetch("http://localhost:3001/newproduct", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     table: "newproduct",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     newproduct = data;
    //   });

    setTimeout(() => {
      this.setState({ featuredProductData: featuredproduct });
      this.setState({ newProductData: featuredproduct });
      this.setState({ productList: fullProductList });
    }, 1000);
  }

  render() {
    return (
      <div className='fullpage'>
        <Header
          onPageRouteChange={this.onPageRouteChange}
          onSearchRouteChange={this.onSearchRouteChange}
        />
        <div className="main">
          <div className="main_left">
            <Category onCollectionRouteChange={this.onCollectionRouteChange} />
          </div>

          <div className="main_right">
            {(() => {
              switch (this.state.pageRoute) {
                case "signinPage":
                  return (
                    <div>
                      <Signin
                        onPageRouteChange={this.onPageRouteChange}
                        onheaderSigninRouteChange={
                          this.onheaderSigninRouteChange
                        }
                        onSignin={this.onSignin}
                      />
                    </div>
                  );
                case "registerPage":
                  return (
                    <div>
                      <Register
                        onPageRouteChange={this.onPageRouteChange}
                        onheaderSigninRouteChange={
                          this.onheaderSigninRouteChange
                        }
                        onSignin={this.onSignin}
                      />
                    </div>
                  );
                case "mainPage":
                  return (
                    <div>
                      <Advertise
                        onCollectionRouteChange={this.onCollectionRouteChange}
                      />
                      <Products
                        newProductData={this.state.newProductData}
                        onProductRouteChange={this.onProductRouteChange}
                        onAddToCart={this.onAddToCart}
                      />
                      <Todaydeal
                        onCollectionRouteChange={this.onCollectionRouteChange}
                      />
                      {/* <Featuredproducts
                          featuredProductData={this.state.featuredProductData}
                          onProductRouteChange={this.onProductRouteChange}
                          onAddToCart={this.onAddToCart}
                          />  */}
                    </div>
                  );
                case "aboutPage":
                  return (
                    <div>
                      <AboutUs />
                    </div>
                  );
                case "contactPage":
                  return (
                    <div>
                      <ContactUs />
                    </div>
                  );
                case "cartPage":
                  return (
                    <div>
                      <Cart
                        cartDetails={this.state.cartDetails}
                        onProductRouteChange={this.onProductRouteChange}
                        userId={this.state.userData.id}
                        onAddToCart={this.onAddToCart}
                        onDelCart={this.onDelCart}
                      />
                    </div>
                  );
                case "collectionPage":
                  return (
                    <div>
                      <Collections
                        collectionPage={this.state.collectionPage}
                        collectionData={this.state.collectionData}
                        onProductRouteChange={this.onProductRouteChange}
                        onAddToCart={this.onAddToCart}
                      />
                    </div>
                  );
                {/* case "productPage":
                  return (
                    <div>
                      <Productdisp
                        productData={this.state.productData}
                        onAddToCart={this.onAddToCart}
                      />
                    </div>
                  ); */}

                default:
                  return (
                    <div>
                      <h4>loading</h4>
                    </div>
                  );
              }
            })()}
          </div>
        </div>
        <Footer
          onPageRouteChange={this.onPageRouteChange}
          onCollectionRouteChange={this.onCollectionRouteChange}
        />
      </div>
    );
  }
}
export default App;

// render(){

//   return(
//   <div>
//   <Header/>
//   <div className='main'>

//       <div className='main_left'>
//         <Category onCollectionRouteChange={this.onCollectionRouteChange}/>
//       </div>

//       <div className='main_right'>
//       {(()=>{

//         switch(this.state.pageRoute){

//           case 'mainPage':return(
//                           <div>
//                             <Advertise/>
//                             <Products/>
//                             <Todaydeal/>
//                             {this.state.featuredProductData.length !== 0?
//                             <Featuredproducts
//                             featuredProductData={this.state.featuredProductData}
//                             />
//                             :
//                             <h3>Loading...</h3>
//                             }
//                           </div>)
//           case 'collectionPage':return(
//                           <div>
//                             <Collections
//                             collectionPage={this.state.collectionPage}
//                             collectionData={this.state.collectionData}
//                             onProductRouteChange={this.onProductRouteChange}
//                             />
//                           </div>)
//         case 'productPage':return(
//                           <div>
//                             <Productdisp
//                             productData={this.state.productData}
//                             />
//                           </div>)

//           default:return(<div><h4>loading</h4></div>)
//         }
//       })()}

//       </div>

//   </div>
//   <Footer/>
//   </div>
//   )
//   }
//   }
//   export default App;

// compenentWillMount(){

// var featuredproductArray=['dress','headphones'];
// var featuredproduct=[]

// for(var i=0;i<5;i++){
//   var featuredproductTable= featuredproductArray[Math.floor(Math.random() * featuredproductArray.length)];
//   fetch('https://stark-crag-71277.herokuapp.com/featuredproduct',{
//       method:'post',
//       headers: {'Content-Type':'application/json'},
//       body: JSON.stringify({
//           table:featuredproductTable
//       })
//   })
//   .then(response=>response.json())
//   .then(data=>{
//       var data3 = JSON.parse(JSON.stringify(data));
//       featuredproduct.push(data3);
//   })
// }
//without the setTimeOut 1.featured product data lenght is zero fand 2.render 3. featured product data lenght is five and render not occur
//with setTimeOut 1.featured product data lenght is zero fand 2.render 3. featured product data lenght is five and render occur with updated state value
//componentwillMount +setTimeOut is ggod in case of forlooped fetch;

// this.setState({featuredProductData: featuredproduct});
// }
