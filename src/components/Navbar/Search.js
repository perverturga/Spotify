import  {Icon} from "icons"



export default function Search() {
  return (
    <div className="mr-auto ml-4 relative">
        <label htmlFor="search-input" 
        className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
            <Icon size={24} name="search"/>
        </label>
        <input autoFocus={true} type="text" id="search-input"
        placeholder="Sanatçılar, şarkılar veya podcastler"
        className="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl placeholder-black/60 
        max-w-full w-[22.75rem] text-sm"/>
    </div>
  )
}
