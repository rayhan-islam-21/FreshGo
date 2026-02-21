import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/app/provider/Provider";
import SideCart from "@/components/cart/SideCart";

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-popins",
});

export const metadata = {
  title: "Grocery E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppinsFont.className}`}>
        <Providers>
          <SideCart />
          {children}
        </Providers>
      </body>
    </html>
  );
}