import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchIc = () => {
    return (
        <div>
            <button className="border hover:border-yellow-500 text-white hover:text-yellow-500 w-10 transition-colors ease-linear h-10 rounded-full"><SearchIcon fontSize="small" /></button>
        </div>
    )
}

export default SearchIc