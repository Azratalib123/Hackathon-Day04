import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
import { WishlistProvider } from "@/components/WishlistContext"; // Ensure the path is correct for WishlistContext

import "./globals.css";
import { ComparisonProvider } from "@/components/ComparisonContext"; // Add ComparisonContext

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider> 
          <ComparisonProvider>
            <main>{children}</main>   
                  </ComparisonProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

