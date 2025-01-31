import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { BookmarkProvider } from "./contexts/BookmarkContext.js"; // Adjust path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lower Manhattan Cultural Council",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BookmarkProvider>
         
          {children} {}
        </BookmarkProvider>
      </body>
    </html>
  );
}
