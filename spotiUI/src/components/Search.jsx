import { useEffect, useState } from "react";
import musicService from "../services/musicService";
import useToast from "../hooks/useToast";
import useDebounce from "../hooks/useDebounce";
import { FiSearch } from "react-icons/fi";
import "../styles/searchStyle.css";
import { useMusic } from "../context/MusicContext";
const Search = () => {
  // const [search, setSearch] = useState("");
  const { search, setSearch, setSearchResults } = useMusic();
  const debouncedSearch = useDebounce(search);
  const { showToaster } = useToast();

  const searchMusic = async () => {
    try {
      const res = await musicService.searchMusic(debouncedSearch);
      setSearchResults(res.data.songs);
      console.log(res.data);

      showToaster(res.data.message, "success");
    } catch (err) {
      console.log(err);
      showToaster(err.response?.data?.message || "Search failed", "error");
    }
  };

  useEffect(() => {
    // if (!debouncedSearch.trim()) return;
    if (!debouncedSearch.trim()) {
      setSearchResults([]);
      return;
    }

    searchMusic();
  }, [debouncedSearch]);
  const colorContrast = {
    padding: "6px",
    border: "none",
    marginTop: "8px",
    marginRight: "16px",
    fontSize: "17px",
  };
  return (
    <div className="search-box">
      <FiSearch className="search-icon" />
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
