import {FC, useEffect, useRef, useState} from "react";
import {getServerBySearch} from "../../../redux/features/servers/ServerSlice";
import {useAppDispatch} from "../../../hooks";

const Search:FC= () =>{

    const dispatch = useAppDispatch()

    const [searchString, setSearchString] = useState<string>('')

    function search():void {

        console.log(searchString)
        dispatch(getServerBySearch(searchString))
    }


    return         <section>
        <div className="discover-search-container ">
            <div className={' flex flex-row xl:w-7/12 w-full '}>
                <input onChange={(e) => setSearchString(e.target.value)} type="discover-text" className={'discover-input grow  h-10  xl:h-12'} placeholder="Explore communities"/>
                <button onClick={()=>{search()}} className="flex flex-row justify-center items-center flex-nowrap bg-[#5865f2] w-10 h-10 xl:w-12 xl:h-12 rounded-md ml-4 text-white ">
                    <svg className="fill-blue-50" aria-label="Search"  fill='white' aria-hidden="false" width="20" height="20"
                         viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"/>
                    </svg>
                </button>
            </div>

            <button  className="discover-select-button ">
                categories
            </button>
        </div>
    </section>

}

export default Search