"use client";

import React, { useContext, useState } from "react";
import { CartContext, CartContextType } from "@/components/CartContext"; 
import Image from "next/image";

// Define the type of items in your cart
type CartItem = {
  image: string;
  name: string;
  price: string; // Assuming price is a string that needs to be parsed to a number
  quantity: number;
};

export default function Checkout() {
  const cartContext = useContext<CartContextType | undefined>(CartContext);
  const cart = cartContext?.cart ?? []; // Ensure cart is never undefined
  const clearCart = cartContext?.clearCart ?? (() => {}); // Provide a fallback function

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Check if the form is valid (all required fields filled)
  const validateForm = () => {
    const { firstName, streetAddress, city, phoneNumber, emailAddress } = formData;
    setIsFormValid(!!(firstName && streetAddress && city && phoneNumber && emailAddress));
  };

  React.useEffect(() => {
    validateForm();
  }, [formData]);

  if (cart.length === 0) {
    return <p className="text-black text-3xl font-bold text-center justify-center p-16">Your cart is empty.</p>;
  }

  // Calculate the total price from the cart items
  const totalPrice = cart.reduce((acc: number, item: CartItem) => acc + parseFloat(item.price) * item.quantity, 0);

  // Handle order placement
  const handlePlaceOrder = () => {
    if (isFormValid) {
      clearCart();
      alert("Your order has been placed!");
    } else {
      alert("Please fill all the required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="bg-[url('/pic1.png')] bg-cover bg-center h-60 flex items-center justify-center"></div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Section - Billing Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Billing Details</h2>
            <form className="space-y-4">
              {["firstName", "companyName", "streetAddress", "apartment", "city", "phoneNumber", "emailAddress"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field === "firstName" || field === "streetAddress" || field === "city" || field === "phoneNumber" || field === "emailAddress"
                      ? `${field.replace(/([A-Z])/g, " $1")}*`
                      : field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={field === "emailAddress" ? "email" : "text"}
                    id={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleInputChange}
                    onBlur={validateForm}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-gray-50 p-8 rounded-lg border shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>

            {cart.length > 0 ? (
              <div className="mb-6">
                {cart.map((item: CartItem, index: number) => (
                  <div key={index} className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="object-cover rounded-md" />
                      <span className="ml-2 text-gray-700 font-medium">{item.name}</span>
                    </div>
                    <div className="flex justify-between w-48">
                      <span className="text-gray-500">Qty: {item.quantity}</span>
                      <span className="text-gray-500">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}

            <hr className="border-gray-300 mb-6" />

            <div className="flex justify-between font-semibold text-lg mb-4 text-black">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <div className="space-y-3">
                {["Bank Transfer", "Cash on Delivery"].map((method, i) => (
                  <div key={i} className="flex items-center">
                    <input id={`method-${i}`} type="radio" name="paymentMethod" className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-500" />
                    <label htmlFor={`method-${i}`} className="ml-2 text-md text-gray-700">{method}</label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mb-6 font-bold text-md">
              Your personal data will be used to support your experience throughout this website.
            </p>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none"
              disabled={!isFormValid}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
