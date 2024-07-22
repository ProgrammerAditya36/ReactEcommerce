import { useNavigate } from "react-router";
import Layout from "../../components/Layout/Layout";
import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";
import Loader from "../../components/Loader/Loader";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// productData
const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(MyContext);
    const { getAllProduct, loading } = context;

    const cartItems = useSelector((state) => state.cart) || [];
    const dispatch = useDispatch();

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
        <Layout>
            <div className="py-8">
                {/* Heading  */}
                <div className="">
                    <h1 className="mb-5 text-center text-2xl font-semibold">
                        All Products
                    </h1>
                </div>
                <div className="flex justify-center">
                    {loading && <Loader />}
                </div>
                {/* main  */}
                <section className="body-font text-gray-600">
                    <div className="container mx-auto px-5 py-5 lg:px-0">
                        <div className="-m-4 flex flex-wrap">
                            {getAllProduct.map((item, index) => {
                                const { productImageUrl, title, price, id } =
                                    item;
                                return (
                                    <div
                                        key={index}
                                        className="w-full p-4 lg:w-1/4"
                                    >
                                        <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 shadow-md">
                                            <img
                                                onClick={() =>
                                                    navigate(
                                                        `/productInfo/${id}`,
                                                    )
                                                }
                                                className="h-96 w-full object-contain lg:h-80"
                                                src={productImageUrl}
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
                                                        (p) => p.id === item.id,
                                                    ) ? (
                                                        <button
                                                            onClick={() =>
                                                                deleteCart(item)
                                                            }
                                                            className="w-full rounded-lg bg-red-700 py-[4px] font-bold text-white hover:bg-blue-600"
                                                        >
                                                            Delete from cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                addCart(item)
                                                            }
                                                            className="w-full rounded-lg bg-blue-500 py-[4px] font-bold text-white hover:bg-blue-600"
                                                        >
                                                            Add To cart
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
        </Layout>
    );
};

export default AllProduct;
