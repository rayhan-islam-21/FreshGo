import "../styles/globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/store/Providers";
import { ThemeProvider } from "next-themes";
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <ReduxProvider>
            <SideCart />
            {children}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
