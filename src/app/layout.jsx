import "../styles/globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/store/Providers";
import ThemeInitializer from "@/components/themes/ThemeInitializer";
import ThemeSync from "@/components/themes/ThemeSync";

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
    <html lang="en">
<body className={`${poppinsFont.className} transition-colors duration-300`}>
        <ReduxProvider>
          {/* Initialize theme first */}
          <ThemeInitializer />
          <ThemeSync />

          {/* Then render pages */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
