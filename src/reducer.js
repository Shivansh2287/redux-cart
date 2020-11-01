import { DECREASE, INCREASE ,CLEAR_CART, REMOVE, GET_TOTALS} from "./actions";

export default function reducer(state,action){
  if(action.type===CLEAR_CART){
      return {...state,cart:[]}
  }
  if(action.type===INCREASE){
      console.log('working')
      let tempCart= state.cart.map((cartItem)=>{
        if(cartItem.id===action.payload.id){
            cartItem={...cartItem,amount:cartItem.amount+1}
        }
        return cartItem
      })
      return {...state,cart:tempCart}
  }
  if(action.type===DECREASE){
      console.log('working')
      let tempCart=[];
      if(action.payload.amount===1){
       tempCart= state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
      }
      else{
          
      let tempCart= state.cart.map((cartItem)=>{
        if(cartItem.id===action.payload.id){
            cartItem={...cartItem,amount:cartItem.amount-1}
        }
        return cartItem
      })
      return {...state,cart:tempCart}

      }
      return {...state,cart:tempCart}
  }
  if(action.type===REMOVE){
      console.log(action.payload.id)
     return  {
         ...state,cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
        }
  }
  if(action.type===GET_TOTALS){
      console.log('working')
      let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
        const {price,amount}=cartItem
        const itemTotal = price*amount
        
        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal;
      },{
          total:0,
          amount:0
        })
        total = parseFloat(total.toFixed(2));
        return {...state,total,amount}
  }
  return state
}
