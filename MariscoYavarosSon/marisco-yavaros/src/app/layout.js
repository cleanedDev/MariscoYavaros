import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/Context/CartContext";



export const metadata = {
  title: "Marisco Yavaros",
  description: "The best sea food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <CartProvider>
          <Header/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
