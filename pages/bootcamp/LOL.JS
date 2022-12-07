const [listRegion, setListRegion] = useState([])    
const handleOnChange = (name) => (event) => {
        setFilter({ ...filter, [name]: event.target.value });
    };

const onSearch = (e) => {
        e.preventDefault();
        setListRegion(
            Array.isArray(regions) && regions.filter(data => (
                (data.regionName.toLowerCase().includes(filter.input.toLowerCase()))))
        )
    }

return (

						<input
                                                type="search"
                                                onChange={handleOnChange('input')}
                                                className="form-control relative w-48 block px-2 py-0.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none" placeholder="region name" aria-label="Search" aria-describedby="button-addon2" />
                                            <button
                                                type="submit"
                                                onClick={(e)=>onSearch(e)}
                                                className="btn px-3 py-1 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center" id="button-addon2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                                </svg>
                                            </button>

{Array.isArray(listRegion) && listRegion.slice((currentPage - 1) * 10, currentPage * 10).map((data) => (
))}
)