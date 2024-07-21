import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Loader from "../Loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseconfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(MyContext);
    const { loading, getAllProduct, setLoading, getAllProductFn } = context;
    const navigate = useNavigate();
    // console.log(getAllProduct)
    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDb, "products", id));
            toast.success("Product Deleted Successfully");
            await getAllProductFn();
            setLoading(false);
        } catch (error) {
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    return (
        <div>
            <div className="flex items-center justify-between py-5">
                {/* text  */}
                <h1 className="text-xl font-bold text-blue-300">All Product</h1>
                {/* Add Product Button  */}
                <Link to={"/addproduct"}>
                    <button className="rounded-lg border border-blue-100 bg-blue-50 px-5 py-2">
                        Add Product
                    </button>
                </Link>
            </div>

            {/* Loading  */}
            <div className="relative top-20 flex justify-center">
                {loading && <Loader />}
            </div>

            {/* table  */}
            <div className="mb-5 w-full overflow-x-auto">
                <table className="w-full border-collapse border border-blue-100 text-left text-blue-400 sm:border-separate">
                    <tbody>
                        <tr>
                            <th
                                scope="col"
                                className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                S.No.
                            </th>
                            <th
                                scope="col"
                                className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                Image
                            </th>
                            <th
                                scope="col"
                                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                Price
                            </th>
                            <th
                                scope="col"
                                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                Category
                            </th>
                            <th
                                scope="col"
                                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                {" "}
                                Date
                            </th>
                            <th
                                scope="col"
                                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                Action
                            </th>
                            <th
                                scope="col"
                                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                            >
                                Action
                            </th>
                        </tr>
                        {getAllProduct.map((item, index) => {
                            const {
                                id,
                                title,
                                price,
                                category,
                                date,
                                productImageUrl,
                            } = item;
                            return (
                                <tr key={index} className="text-blue-300">
                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                        {index + 1}.
                                    </td>
                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                        <div className="flex justify-center">
                                            <img
                                                className="w-20"
                                                src={productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                        {title}
                                    </td>
                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                        ₹{price}
                                    </td>
                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                        {category}
                                    </td>
                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                        {date}
                                    </td>
                                    <td
                                        onClick={() => {
                                            navigate(`/updateproduct/${id}`);
                                        }}
                                        className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 text-green-500 transition duration-300 first:border-l-0"
                                    >
                                        Edit
                                    </td>
                                    <td
                                        className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 text-red-500 transition duration-300 first:border-l-0"
                                        onClick={() => {
                                            deleteProduct(id);
                                        }}
                                    >
                                        Delete
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetail;
