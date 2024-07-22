import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
const CategoryPage = () => {
    const { categoryname } = useParams();
    const context = useContext(MyContext);
    const { getAllProduct, loading } = context;

    const navigate = useNavigate();

    const filterProduct = getAllProduct.filter((obj) =>
        obj.category.includes(categoryname),
    );

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(
            addToCart({
                title: item.title,
                price: item.price,
                productImageUrl: item.productImageUrl,
                id: item.id,
                category: item.category,
                quantity: 1,
            }),
        );
        toast.success("Add to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart");
    };

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    return (
        <Layout>
            <div className="mt-10">
                {/* Heading  */}
                <div className="">
                    <h1 className="mb-5 text-center text-2xl font-semibold first-letter:uppercase">
                        {categoryname}
                    </h1>
                </div>
                {/* main  */}
                {loading ? (
                    <>
                        <div className="flex justify-center">
                            <Loader />
                        </div>
                    </>
                ) : (
                    <>
                        <section className="body-font text-gray-600">
                            <div className="container mx-auto px-5 py-5">
                                <div className="-m-4 flex flex-wrap justify-center">
                                    {filterProduct.length > 0 ? (
                                        <>
                                            {filterProduct.map(
                                                (item, index) => {
                                                    const {
                                                        id,
                                                        title,
                                                        price,
                                                        productImageUrl,
                                                        quantity,
                                                    } = item;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="w-full p-4 md:w-1/4"
                                                        >
                                                            <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 p-10 shadow-md">
                                                                <img
                                                                    onClick={() =>
                                                                        navigate(
                                                                            `/productinfo/${id}`,
                                                                        )
                                                                    }
                                                                    className="h-96 w-full lg:h-80"
                                                                    src={
                                                                        productImageUrl
                                                                    }
                                                                    alt="blog"
                                                                />
                                                                <div className="p-6">
                                                                    <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400"></h2>
                                                                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                                                        {title.substring(
                                                                            0,
                                                                            25,
                                                                        )}
                                                                    </h1>
                                                                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                                                        ₹{price}
                                                                    </h1>
                                                                    <div className="flex justify-center">
                                                                        {cartItems.some(
                                                                            (
                                                                                p,
                                                                            ) =>
                                                                                p.id ===
                                                                                item.id,
                                                                        ) ? (
                                                                            <button
                                                                                onClick={() =>
                                                                                    deleteCart(
                                                                                        item,
                                                                                    )
                                                                                }
                                                                                className="w-full rounded-lg bg-red-700 py-[4px] font-bold text-white hover:bg-blue-600"
                                                                            >
                                                                                Delete
                                                                                From
                                                                                cart
                                                                            </button>
                                                                        ) : (
                                                                            <button
                                                                                onClick={() =>
                                                                                    addCart(
                                                                                        item,
                                                                                    )
                                                                                }
                                                                                className="w-full rounded-lg bg-blue-500 py-[4px] font-bold text-white hover:bg-blue-600"
                                                                            >
                                                                                Add
                                                                                to
                                                                                Cart
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </>
                                    ) : (
                                        <div>
                                            <div className="flex justify-center">
                                                <img
                                                    className="mb-2"
                                                    src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                                                    alt=""
                                                />
                                            </div>
                                            <h1 className="text-xl text-black">
                                                No {categoryname} product found
                                            </h1>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default CategoryPage;
