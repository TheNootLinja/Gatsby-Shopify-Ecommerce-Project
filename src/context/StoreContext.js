import { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import Client from 'shopify-buy';

const cleint = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
}, fetch)

const defaultValues = {
  cart: [],
  loading: false,
  addVariantToCart: () => {},
  removeLineItem: () => {},
  client,
  checkout: {
    id: '',
    lineItems: [],
    webUrl: ''
  }
}


const StoreContext = createContext(defaultValues);

const isBrowser = typeof window != 'undefined';
const localStorageKey = 'shopify_checkout_id';

export const StoreProvider = ({ children }) => {
  // Defining cart, checkout, and loading states and their setter functions
  const [ cart, setCart ] = useState(defaultValues.cart);
  const [ checkout, setCheckout ] = useState(defaultValues.checkout);
  const [ loading, setLoading ] = useState(defaultValues.loading);

  // Passing in checkout state
  const setCheckoutItem = (checkout) => {
    // If isBrowser is true, set item in local storage with
    // localStorageKey as the key and the checkout id as the value
    if(isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id)
    }
    setCheckout(checkout);
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      // Checking if isBrowser is true
      const existingCheckoutID = isBrowser
        // If it is then get item from local storage using localStorageKey variable
        ? localStorage.getItem(localStorageKey)
        // If not then set to null
        : null

      if(existingCheckoutID && existingCheckoutID !== 'null') {
        try {
          const existingCheckout = await cleint.checkout.fetch(
            existingCheckoutID
          )
          if(!existingCheckoutID.completedAt) {
            setCheckoutItem(existingCheckout)
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null)
        }
      }

      const newCheckout = await client.checkout.create()
      setCheckoutItem(newCheckout);
    }

    initializeCheckout()

  }, [])

}