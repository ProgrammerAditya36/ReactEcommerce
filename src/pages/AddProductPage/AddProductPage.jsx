import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb } from "../../firebase/firebaseconfig";
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
const AddProductPage = () => {
    const context = useContext(MyContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }),
    });
    const addProduct = async () => {
        if (
            product.title === "" ||
            product.price === "" ||
            product.productImageUrl === "" ||
            product.category === "" ||
            product.description === ""
        ) {
            toast.error("Please fill all the fields");
            return;
        }
        setLoading(true);
        try {
            const productRef = collection(fireDb, "products");
            await addDoc(productRef, product);
            toast.success("Product added successfully");
            navigate("/admin-dashboard");
            setLoading(false);
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("Error adding product");
            setLoading(false);
        }
    };
    return (
        <div>
            {loading && <Loader />}
            <div className="flex h-screen items-center justify-center">
                {/* Login Form  */}
                <div className="login_Form rounded-xl border border-blue-100 bg-blue-50 px-8 py-6 shadow-md">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className="text-center text-2xl font-bold text-blue-500">
                            Add Product
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            placeholder="Product Title"
                            value={product.title}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    title: e.target.value,
                                })
                            }
                            className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-300 placeholder-blue-300 outline-none"
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Product Price"
                            value={product.price}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    price: e.target.value,
                                })
                            }
                            className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-300 placeholder-blue-300 outline-none"
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value,
                                })
                            }
                            placeholder="Product Image Url"
                            className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-300 placeholder-blue-300 outline-none"
                        />
                    </div>

                    {/* Input Four  */}
                    <div className="mb-3">
                        <select
                            name="category"
                            value={product.category}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    category: e.target.value,
                                })
                            }
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
                            placeholder="Product Description"
                            rows="5"
                            value={product.description}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    description: e.target.value,
                                })
                            }
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-blue-300 placeholder-blue-300 outline-none"
                        ></textarea>
                    </div>

                    {/* Add Product Button  */}
                    <div className="mb-3">
                        <button
                            type="button"
                            onClick={addProduct}
                            className="w-full rounded-md bg-blue-500 py-2 text-center font-bold text-white hover:bg-blue-600"
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
