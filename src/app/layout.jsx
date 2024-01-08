import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Providers from "./Providers";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <NavBar />

          {/* Search */}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
};

export default layout;
