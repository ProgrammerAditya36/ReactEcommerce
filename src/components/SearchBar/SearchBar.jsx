import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const context = useContext(MyContext);
    const { getAllProduct } = context;
    // Search State
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct
        .filter((obj) => obj.title.toLowerCase().includes(search))
        .slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="">
            {/* search input  */}
            <div className="input flex justify-center">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-96 rounded-lg bg-gray-200 px-2 py-2 text-black placeholder-gray-400 outline-none md:w-96 lg:w-96"
                />
            </div>

            {/* search drop-down  */}
            <div className="flex justify-center">
                {search && (
                    <div className="absolute z-50 my-1 block w-96 rounded-lg bg-gray-200 px-2 py-2 md:w-96 lg:w-96">
                        {filterSearchData.length > 0 ? (
                            <>
                                {filterSearchData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="cursor-pointer px-2 py-2"
                                            onClick={() =>
                                                navigate(
                                                    `/productinfo/${item.id}`,
                                                )
                                            }
                                        >
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-10"
                                                    src={item.productImageUrl}
                                                    alt=""
                                                />
                                                {item.title}
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <img
                                        className="w-20"
                                        src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                                        alt="img"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
