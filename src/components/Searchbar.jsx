import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Searchbar() {

  const [text, setText] = useState("")
  const navigate = useNavigate();

  const handleSearch = () => {
    if(!text.trim()) return;

    navigate(`/search/${text}`)
  }

  return (
    <>
      <div className="search-section
      mx-auto 
      border
      shadow-sm p-1 
      rounded-3 d-inline-block 
      mt-3
      mb-3">
        <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
          className="search-bar
          bg-transparent p-2 rounded-3 border-0"
          type="text"
          placeholder="🔍︎ Search username..."
        />
        <button 
        onClick={handleSearch}
        to="/Searchresult"
        className="p-2 
        rounded-2 
        border-0 
        bg-primary 
        px-3 
        text-white
        search-btn">
          Search
        </button>
      </div>
    </>
  );
}

export default Searchbar;
