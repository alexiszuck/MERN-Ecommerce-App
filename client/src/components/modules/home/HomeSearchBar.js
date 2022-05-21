import { useRef } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function HomeSearchBar() {
  const searchRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchRef.current.value) return


    console.log(`search => ${searchRef.current.value}`)
    searchRef.current.value = ''
  }

  return (
    <form className='flex items-center bg-gray-100 rounded-full my-8 md:w-[40%]'>
      <input ref={searchRef} className="bg-transparent h-12 px-5 focus:outline-none font-poppins sm:w-full" type="text" placeholder="Search..." />
      <div className="mr-2 p-1 text-white bg-mern-gray rounded-full cursor-pointer" onClick={handleSearch}>
        <SearchOutlinedIcon sx={{ fontSize: 24 }} />
      </div>
      <button hidden type='submit' onClick={handleSearch}>Submit</button>
    </form>
  )
}

export default HomeSearchBar