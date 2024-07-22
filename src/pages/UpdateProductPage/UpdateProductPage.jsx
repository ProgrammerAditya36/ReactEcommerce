import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseconfig";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

const categoryList = [
    {
        name: "fashion",
    },
    {
        name: "shirt",
    },
    {
        name: "jacket",
    },
    {
        name: "mobile",
    },
    {
        name: "laptop",
    },
    {
        name: "shoes",
    },
    {
        name: "home",
    },
    {
        name: "books",
    },
];

const UpdateProductPage = () => {
    const context = useContext(MyContext);
    const { loading, setLoading, getAllProductFn } = context;
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }),
    });
    const getSingleProductFunction = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDb, "products", id));
            const product = productTemp.data();
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                time: product?.time,
                date: product?.date,
                quantity: product?.quantity,
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDb, "products", id), product);
            toast.success("Product updated successfully");
            getAllProductFn();
            setLoading(false);
            navigate("/admin-dashboard");
        } catch (err) {
            console.log(err);
            setLoading(false);
            toast.error("Error updating product");
        }
    };
    useEffect(() => {
        getSingleProductFunction();
    }, []);
    return (
        <div>
            <div className="flex h-screen items-center justify-center">
                {loading && <Loader />}
                {/* Login Form  */}
                <div className="login_Form rounded-xl border border-blue-100 bg-blue-50 px-8 py-6 shadow-md">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className="text-center text-2xl font-bold text-blue-500">
                            Update Product
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    title: e.target.value,
                                })
                            }
                            placeholder="Product Title"
                            className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-300 placeholder-blue-300 outline-none"
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    price: e.target.value,
                                })
                            }
                            placeholder="Product Price"
                            className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-300 placeholder-blue-300 outline-none"
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            placeholder="Product Image Url"
                            value={product.productImageUrl}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value,
                                })
                            }
                            className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-300 placeholder-blue-300 outline-none"
                        />
                    </div>

                    {/* Input Four  */}
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value,
                                });
                            }}
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-1 py-2 text-blue-300 outline-none"
                        >
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value;
                                return (
                                    <option
                                        className="first-letter:uppercase"
                                        key={index}
                                        value={name}
                                    >
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    {/* Input Five  */}
                    <div className="mb-3">
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    description: e.target.value,
                                })
                            }
                            placeholder="Product Description"
                            rows="5"
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-blue-300 placeholder-blue-300 outline-none"
                        ></textarea>
                    </div>

                    {/* Update Product Button  */}
                    <div className="mb-3">
                        <button
                            type="button"
                            onClick={updateProduct}
                            className="w-full rounded-md bg-blue-500 py-2 text-center font-bold text-white hover:bg-blue-600"
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductPage;
