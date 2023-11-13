import logo from "../image/logo.svg"
import Menu from "../components/Sidebar/Menu"
import Playlist from "../components/Sidebar/Playlist"
import Download from "../components/Sidebar/Download"
import {Icon} from "icons"
import { useSelector } from "react-redux"
import SidebarCover from "./Sidebar/SidebarCover"

export default function Sidebar() {
  
  const sidebar = useSelector(state => state.player.sidebar)
  
  return (
  
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="#" className="mb-7 px-6 ">
         <img src={logo} alt="" className="h-10"></img>
      </a>

    <Menu/>

    <nav className="mt-6">
      <ul>
        <li>
          <a href="#"  className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
              <Icon name="plus" size={12}/>
            </span>
            Çalma Listesi Oluştur
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm
            opacity-80 group-hover:opacity-100">
              <Icon  name="heartfilled" size={12}/>
            </span>
            Beğenilen Şarkılar
          </a>
        </li>
      </ul>
    </nav>
    
    <Playlist/>

    <Download/>
    {sidebar && <SidebarCover/>}
    
    </aside>
  )
}
