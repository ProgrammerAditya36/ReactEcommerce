// HomePageProductCard.jsx
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const { getAllProduct, loading } = context;
    const cartItems = useSelector((state) => state.cart) || [];
    const dispatch = useDispatch();

    const convertTimestampToSerializable = (timestamp) => ({
        seconds: timestamp.seconds,
        nanoseconds: timestamp.nanoseconds,
    });

    // Redux action
    const addCart = (item) => {
        dispatch(
            addToCart({
                title: item.title,
                price: item.price,
                productImageUrl: item.productImageUrl,
                id: item.id,
                category: item.category,
                quantity: 1,
            }),
            toast.success("Product added to cart"),
        );
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.error("Product removed from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="">
                <h1 className="mb-5 text-center text-2xl font-semibold">
                    Bestselling Products
                </h1>
            </div>
            <div className="flex justify-center">{loading && <Loader />}</div>
            {/* main */}
            <section className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-5">
                    <div className="-m-4 flex flex-wrap">
                        {getAllProduct &&
                            getAllProduct.slice(0, 8).map((item, index) => {
                                const { productImageUrl, title, price, id } =
                                    item;
                                return (
                                    <div
                                        key={index}
                                        className="w-full p-4 lg:w-1/4"
                                    >
                                        <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 p-10 shadow-md">
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
                                                    {cartItems.some(
                                                        (p) => p.id === id,
                                                    ) ? (
                                                        <button
                                                            onClick={() =>
                                                                deleteCart(item)
                                                            }
                                                            className="flex items-center rounded border-0 bg-red-500 px-3 py-1 text-white hover:bg-red-600 focus:outline-none"
                                                        >
                                                            Delete From Cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                addCart(item)
                                                            }
                                                            className="flex items-center rounded border-0 bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:outline-none"
                                                        >
                                                            Add To Cart
                                                        </button>
                                                    )}
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
