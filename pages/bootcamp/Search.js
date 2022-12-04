import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doGetBootcampIdRequest } from "../redux-saga/Action/BootcampAction";
import MainItems from "./MainItems";

function Search() {
  const dispatch = useDispatch();
  const { ListBootcamp } = useSelector((state) => state.bootcampStated);

  const [keyword, setKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const Search = () => {
    setSearchValue(keyword);
  };
  const handleSearch = useMemo(() => {
    if (searchTerm.length > 0) {
      return ListBootcamp.filter(({ entity }) => entity === searchTerm);
    }
    return ListBootcamp;
  }, [searchTerm, ListBootcamp]);

  // useEffect(() => {
  //   dispatch(doGetBootcampIdRequest());
  // }, []);

  return (
    <div className="border-4 border-black p-1 mb-2 flex justify-center gap-1 items-center mt-2 w-[90%] ml-[5%]">
      <label className="">Search</label>
      <input
        className="p-1 border-1 border-black"
        type="text"
        placeholder="java, nodejs, golang,.net"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={() => setSearchTerm(searchValue)}
        className="border-2 border-black p-1"
      >
        Search
      </button>
      {/* {handleSearch.map((bc) => (
        // eslint-disable-next-line react/jsx-key
        <MainItems />
      ))} */}
    </div>
  );
}

export default Search;
