import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../interfaces/Product";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCart: (newItem: ProductProps) => void;
  decreaseItemFromCart: (product: CartProps) => void;
  total: string;
  clearCart: () => void;
}

export interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState("")

  function addItemToCart(newItem: ProductProps) {
    // add to cart
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    //verify if exists on cart
    if (indexItem !== -1) {
      const cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList)
      totalResultCart(cartList)
      return;
    }

    //add item to list
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
    totalResultCart([...cart, data])
  }

  function decreaseItemFromCart(product: CartProps) {
    const indexItem = cart.findIndex(item => item.id === product.id)

    if (cart[indexItem]?.amount > 1) {
      const cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList)
      totalResultCart(cartList)
      return;
    }

    const removeItem = cart.filter(item => item.id !== product.id)
    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function totalResultCart(items: CartProps[]) {
    const myCart = items;
    const result = myCart.reduce((acc, obj) => acc + obj.total, 0);
    const resultFormatted = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(result);
    setTotal(resultFormatted);
  }

  function clearCart() {
    setCart([]);
    setTotal("");
  }



  return (
    <CartContext.Provider value={{
      cart,
      cartAmount: cart.length,
      addItemToCart,
      decreaseItemFromCart,
      total,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;