import React, { createContext, useState, useEffect, useContext } from 'react';
import fetch from 'isomorphic-fetch';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
}, fetch)

// Defining the default value used in context
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
          const existingCheckout = await client.checkout.fetch(
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

  // Defining function for adding item to cart and passing in product and quantity
  const addVariantToCart = async (product, quantity) => {
    // Setting loading to true
    setLoading(true);
    // Checking if the checkout id is blank
    if(checkout.id === '') {
      // Logging error and then returning from function
      console.error('No checkout ID has been assigned!');
      return;
    }
    // If checkout id isn't blank:
    // Store value in a variable
    const checkoutID = checkout.id;
    // Storing varaints shopify id in a variable
    const variantId = product.variants[0]?.shopifyId;
    // Storing value of parseInt function with quantity and base 10 as arguments passed
    const parsedQuantity = parseInt(quantity, 10);
    // Add object for item to lineItemsToUpdate array
    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parsedQuantity,
      },
    ]

    // Start a try block
    try {
      // Using the addLineItems shopify function with checkoutID and lineItemsToUpdate as arguments
      const res = await client.checkout.addLineItems(checkoutID, lineItemsToUpdate);
      // Setting the checkout to the response from addLineItems function
      setCheckout(res);
      // Initializing empty array for updatedCart variable
      let updatedCart = [];
      // Checking if there are any items in the cart
      if(cart.length > 0) {
        // If there is, check if the item we are trying to add is already in the array
        const itemIsInCart = cart.find((item) => item.product.variants[0]?.shopifyId === variantId);
        // Check if item was found to already be in the array
        if(itemIsInCart) {
          // If it is initialize newProduct variable which will be an object where the
          // product is xxx and the quantity is the previous quantity + the newly added quantity
          const newProduct = {
            product: { ...itemIsInCart.product },
            quantity: (itemIsInCart.quantity + parsedQuantity)
          }
          // Filtering the current item out of the cart so we can get all of the other items
          const otherItems = cart.filter((item) => item.product.variants[0]?.shopifyId !== variantId);
          // Spreading the previous items of the cart along with the new product into the
          // updatedCart variable
          updatedCart = [...otherItems, newProduct];
          // If item was found to not be in the cart already
        } else {
          // Set updatedCart to the contents of cart with the new item added as the quantity
          // won't need to be updated for said product
          updatedCart = cart.concat([{ product, quantity: parsedQuantity }])
        }
      }
      // If there is nothing currently in the cart
      else {
        // Set updatedCart to be the new product we want to add
        updatedCart = [{ product, quantity: parsedQuantity }]
      }
      // Use the setCart function with the updatedCart variable as an argument to update the cart state
      setCart(updatedCart);
      // Set loading state to false
      setLoading(false);
      // Throw up an alert to let user know item has been added to the cart
      alert('Item added to cart!');
      // If there is an error
    } catch(error) {
      // Set loading state to false
      setLoading(false);
      // Log the error to the console with the error object
      console.error(`Error in addVariantToCart: ${error}`)
    }

  };

  // Defining function for removing item from cart and passing in the variantId as argument
  const removeLineItem = async (variantId) => {
    // Set loading state to false
    setLoading(true);
    // Enter try block
    try {
      // Initializing lineItemID variable as empty string
      let lineItemID = '';
      // Going through each item in the checkout looking for the item the user
      // wants to remove
      checkout.lineItems?.forEach((item) => {
        // If the item is found set lineItemID to the items id
        if(item.variableValues.lineItems[0]?.variantId === variantId) {
          lineItemID = item.id
        };
      });
      // If the item is not found log message indicating this to the console and return
      if(!lineItemID) {
        console.log('Product not in cart')
        return
      };
      // Use the removeLineItems shopify function with checkout id and an array with
      // the id of the line item to remove
      const res = await client.checkout.removeLineItems(checkout.id, [lineItemID])
      // Setting the checkout state to the response from shopify function
      setCheckout(res)
      // Setting updatedCart variable to contents of cart with desired item removed
      const updatedCart = cart.filter((item) => item.product.variants[0]?.shopifyId !== variantId)
      // Setting cart state to the updateCart variable
      setCart(updatedCart)
      // Set loading state to false
      setLoading(false)
      // Catching if there is an error
    } catch (error) {
      // Set loading state to false
      setLoading(false)
      // Log error to console with error object
      console.error(`Error in removeLineItem: ${error}`)
    }
  }

  return (
    <StoreContext.Provider
    value={{
      ...defaultValues,
      addVariantToCart,
      removeLineItem,
      cart,
      checkout,
      loading
    }}
    >
      {children}
    </StoreContext.Provider>
  )

}

const useStore = () => {
  const context = useContext(StoreContext)

  if(context === undefined){
    throw new Error('useStore must be used within StoreContext Provider')
  }
  return context;
}

export default useStore;