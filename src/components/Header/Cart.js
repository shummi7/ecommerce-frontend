import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart=(props)=>{
  
  let [cost,setCost] = useState(0);

  // loadCart=()=>{

  //     if(this.state.cartArray[0]===undefined){

  //    var cartDetailsArray=props.cartDetails.split(",");
  //    var cartArray=[];
  //    var cartArrayNumber=[];
  //    for(var j=0;j<cartDetailsArray.length-1;j++){
  //        var cartstring=cartDetailsArray[j].split(":")[0];
  //        var cartstringname=cartstring.replace(/[0-9]/g,'');
  //        var cartnumber=cartDetailsArray[j].split(":")[1];
  //        cartArrayNumber.push(cartnumber);

  //        fetch('https://stark-crag-71277.herokuapp.com/product',{
  //           method:'post',
  //           headers: {'Content-Type':'application/json'},
  //           body: JSON.stringify({
  //               productcode:cartstring,
  //               producttable:cartstringname
  //           })
  //        })
  //         .then(response=>response.json())
  //         .then(data=>{
  //             var arr=[];
  //             arr.push(data[0].productimg,data[0].productname,data[0].productcode)
  //             cartArray.push(arr);
  //         })

  //    }
  //    setTimeout(() => {
  //     this.setState({cartArray:cartArray});
  //     this.setState({cartArrayNumber:cartArrayNumber});
  //   }, 400)
  // }
  // }

  let onProductClick = (code) => {
    props.onProductRouteChange(code);
  };
  let onDelClick = (key) => {
    props.onDelCart(key);
    totalCost();
  };

  let createCartList = (i) => {
    return (
      <div className="cartlist" key={i}>
        <p className="p2">{props.cartDetails[i].count}
        </p>

        <img src={`${props.cartDetails[i].image}`} alt="pic"></img>
        <p
          className="p1"
          onClick={() => {
            onProductClick(props.cartDetails[i][2]);
          }}
        >
          {props.cartDetails[i].title}
        </p>
        <p className="p2">${props.cartDetails[i].price*props.cartDetails[i].count}</p>
        <button
          onClick={() => {
            onDelClick(i);
          }}
        >
          Del
        </button>
      </div>
    );
  };
  let cartList = () => {
    var clist = [];
    if (Object.keys(props.cartDetails).length === 0) {
      return <h4>Cart is empty</h4>;
    } else {
      for (let key in props.cartDetails){
        clist.push(
          <div className="cartlisthead" key={key}>
            {createCartList(key)}
          </div>
        );
      }
      return clist;
    }
  };

  let totalCost=()=>{
    let currentCost=0;
    for (let key in props.cartDetails){
      currentCost += props.cartDetails[key].price*props.cartDetails[key].count;
    }
    setCost(currentCost);
  }

  useEffect(() => {

    if(Object.keys(props.cartDetails).length){
    totalCost()
    
  }
  }, [props.cartDetails])


  let onCheckingOut = () => {
    let text = "Confirm CheckOut";
  if (window.confirm(text) === true) {
    // text = "You pressed OK!";
    alert("Thanks for Shopping");
    onDelClick(0)
  } else {
    // text = "You canceled!";
    alert("Continue Shopping");
  }
  };

    return !Object.keys(props.cartDetails).length ? (
      <div>
        <h1>No items in the Cart</h1>
      </div>
    ) : (
      <div className="cart">
        <h1>CART</h1>
        {/* {this.loadCart()} */}
        {cartList()}   
        <p>
          Total Cost <span> ${cost} </span>
        </p>
        <button onClick={onCheckingOut}>CheckOut</button>
      </div>
    );
}

export default Cart;
