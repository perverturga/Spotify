import { Menu } from '@headlessui/react'
import {Icon} from "icons"


export default function Auth() {

  const user ={
    name: "Perver Turga",
    avatar: 'https://lh3.googleusercontent.com/ogw/AKPQZvyibc0c4JseVhrCaBmFfEPqm54fHZV4EgHwjs-V=s32-c-mo'
  }

  return (
      <Menu as="nav" className={"relative right-2 mt-2"}>

        {( {open})=> (
          <>
            <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2
            ${ open ? "bg-active" : "bg-black"}
          hover:bg-active`} >
              <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"}/>
              <span className='text-sm font-semibold mr-2'>{user.name}</span>
              <span className={ open  && "rotate-180"}>
               <Icon size={16} name="downDir"/>
              </span>
            </Menu.Button>
            <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                    href="#"
                  >
                    Account
                    <Icon size={16} name="external" />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                    href="#"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                    href="#"
                  >
                    Log out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
    </Menu>
  )
}
