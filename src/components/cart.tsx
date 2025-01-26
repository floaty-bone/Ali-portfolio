import { useState} from "react";

import { Menu, User, Search, ShoppingBag } from 'lucide-react';


function Cart(){
    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartItems = [
        { id: 1, name: "T-Shirt", price: 29.99, quantity: 1 },
        { id: 2, name: "Jeans", price: 59.99, quantity: 1 }
      ];
    return(
        <div className="relative">
            <ShoppingBag 
              className="h-5 w-5 text-zinc-800 hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-50 border">
                <div className="space-y-4">
                  <h3 className="font-medium">Shopping Cart</h3>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm">${item.price}</p>
                    </div>
                  ))}
                  <div className="border-t pt-2">
                    <p className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                    </p>
                  </div>
                  <button 
                    className="w-full bg-zinc-800 text-white py-2 rounded hover:bg-zinc-700 transition-colors"
                    onClick={() => window.location.href = '/cart'}
                  >
                    View Full Cart
                  </button>
                </div>
              </div>
            )}
          </div>
    )
}

export default Cart

