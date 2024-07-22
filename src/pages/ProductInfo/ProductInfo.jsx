import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MyContext from "../../context/MyContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseconfig";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
const ProductInfo = () => {
    const context = useContext(MyContext);
    const { loading, getAllProduct, setLoading, getAllProductFn } = context;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const id = useParams().id;
    const getSingleProductFunction = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDb, "products", id));
            const product = productTemp.data();
            setProduct({
                ...productTemp.data(),
                id: productTemp.id,
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
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
        );
        toast.success("Product added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.error("Product removed from cart");
    };
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    useEffect(() => {
        getSingleProductFunction();
    }, []);
    return (
        <Layout>
            <section className="font-poppins py-5 dark:bg-gray-800 lg:py-16">
                {loading ? (
                    <>
                        <div className="flex items-center justify-center">
                            <Loader />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mx-auto max-w-6xl px-4">
                            <div className="-mx-4 mb-24 flex flex-wrap">
                                <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
                                    <div className="">
                                        <div className="">
                                            <img
                                                className="w-full rounded-lg lg:h-[39em]"
                                                src={product?.productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6">
                                            <h2 className="mb-6 max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 dark:text-gray-300 md:text-2xl">
                                                {product?.title}
                                            </h2>
                                            <div className="mb-6 flex flex-wrap items-center">
                                                <ul className="mb-4 mr-2 flex lg:mb-0">
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-star mr-1 w-4 text-red-500 dark:text-gray-400"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-star mr-1 w-4 text-red-500 dark:text-gray-400"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-star mr-1 w-4 text-red-500 dark:text-gray-400"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-star mr-1 w-4 text-red-500 dark:text-gray-400"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                                <span>₹ {product?.price}</span>
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400"></h2>
                                            <p>{product?.description}</p>
                                        </div>
                                        <div className="mb-6" />
                                        <div className="mb-6 flex flex-wrap items-center">
                                            {cartItems.some(
                                                (p) => p.id === product.id,
                                            ) ? (
                                                <button
                                                    onClick={() =>
                                                        deleteCart(product)
                                                    }
                                                    className="border--600 w-full rounded-xl border bg-red-500 px-4 py-3 text-center text-white hover:bg-red-600 hover:text-gray-100"
                                                >
                                                    Delete From Cart
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        addCart(product)
                                                    }
                                                    className="w-full rounded-xl border border-blue-600 bg-blue-100 px-4 py-3 text-center text-blue-600 hover:bg-blue-600 hover:text-gray-100"
                                                >
                                                    Add To Cart
                                                </button>
                                            )}
                                        </div>
                                        <div className="mb-6 flex gap-4">
                                            <button
                                                className="w-full rounded-xl border border-transparent bg-blue-600 px-4 py-3 text-center text-gray-100 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700"
                                                onClick={() => {
                                                    navigate("/cart");
                                                }}
                                            >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </Layout>
    );
};

export default ProductInfo;
