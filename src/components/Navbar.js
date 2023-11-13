import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import { useMatch } from "react-router-dom"
import Search from "./Navbar/Search"
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom"; 
// import Home from "views/Home";
// import Search from "views/Search";
// import Collection from "views/Collection";



export default function Navbar() {

  const searchRoute = useMatch ("/search")

  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation/>

    {searchRoute && <Search />}

      {/* <Routes>
          <Route exact path="/" element={<Home/>}>Home</Route>
          <Route path="/search" element={<Search/>}>Search</Route>
          <Route path="/collection" element={<Collection/>}>Collection</Route>
      </Routes> */}
      <Auth/>
    </div>
  )
}
