import { useContext } from "react";
import MyContext from "../../context/MyContext";

const OrderDetail = () => {
    const context = useContext(MyContext);
    const { getAllOrder, deleteOrder } = context;
    return (
        <div>
            <div>
                <div className="py-5">
                    {/* text  */}
                    <h1 className="text-xl font-bold text-blue-300">
                        All Order
                    </h1>
                </div>
                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-100 text-left text-blue-400 sm:border-separate">
                        <tbody>
                            <tr>
                                <th
                                    scope="col"
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    S.No
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Order Id`
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
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
                                    Category
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
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Total Price
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Address
                                </th>

                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Pincode
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Phone Number
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                ></th>
                            </tr>
                            {getAllOrder.map((order) => {
                                console.log(order);
                                return (
                                    <>
                                        {order.cartItems.map((item, index) => {
                                            const {
                                                id,
                                                productImageUrl,
                                                title,
                                                category,
                                                price,
                                                quantity,
                                            } = item;
                                            return (
                                                <tr
                                                    key={index}
                                                    className="text-blue-300"
                                                >
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                                        {index + 1}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                                        {id}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        <img
                                                            src={
                                                                productImageUrl
                                                            }
                                                            alt="img"
                                                        />
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {title}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {category}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        ₹{price}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {quantity}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        ₹{price * quantity}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 text-green-600 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {order.status}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {order.addressInfo.name}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {
                                                            order.addressInfo
                                                                .address
                                                        }
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {
                                                            order.addressInfo
                                                                .pincode
                                                        }
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {
                                                            order.addressInfo
                                                                .mobileNumber
                                                        }
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                                        {order.email}
                                                    </td>
                                                    <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                                        {order.date}
                                                    </td>
                                                    <td
                                                        className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 text-red-500 transition duration-300 first:border-l-0"
                                                        onClick={() =>
                                                            deleteOrder(
                                                                order.id,
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
