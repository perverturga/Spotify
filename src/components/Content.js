import { Routes } from "react-router-dom";
import { Route } from "react-router-dom"; 
import Home from "views/Home";
import Navbar from "./Navbar";
import Search from "views/Search";
import Collection from "views/Collection";




export default function Content() {
  return (
    <main className="flex-auto overflow-auto">
        <Navbar />
        <div className="px-8  py-5">
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/collection" element={<Collection/>}></Route>
            </Routes>
        </div>
    </main>
  )
}
