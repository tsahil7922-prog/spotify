import { useEffect, useState } from "react";
import musicService from "../services/musicService";
import useToast from "../hooks/useToast";
import useDebounce from "../hooks/useDebounce";
const Search = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const { showToaster } = useToast();

  const searchMusic = async () => {
    try {
      const res = await musicService.searchMusic(debouncedSearch);

      console.log(res.data);

      showToaster(res.data.message, "success");
    } catch (err) {
      console.log(err);
      showToaster(err.response?.data?.message || "Search failed", "error");
    }
  };

  useEffect(() => {
    if (!debouncedSearch.trim()) return;

    searchMusic();
  }, [debouncedSearch]);
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
