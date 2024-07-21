// productData\
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Loader from "../Loader/Loader";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const { getAllProduct, loading } = context;
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className="mb-5 text-center text-2xl font-semibold">
                    Bestselling Products
                </h1>
            </div>
            <div className="flex justify-center">{loading && <Loader />}</div>
            {/* main  */}
            <section className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-5">
                    <div className="-m-4 flex flex-wrap">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { productImageUrl, title, price, id } = item;
                            return (
                                <div
                                    key={index}
                                    className="w-full p-4 lg:w-1/4"
                                >
                                    <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 shadow-md">
                                        <img
                                            className="h-64 w-full object-contain object-center"
                                            src={productImageUrl}
                                            onClick={() =>
                                                navigate("/productInfo")
                                            }
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center">
                                                <button className="w-full rounded-lg bg-blue-500 py-[4px] font-bold text-white hover:bg-blue-600">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProductCard;
