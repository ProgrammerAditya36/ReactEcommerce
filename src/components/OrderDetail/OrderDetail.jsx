const OrderDetail = () => {
    return (
        <div>
            <div>
                <div className="py-5">
                    {/* text  */}
                    <h1 className="text-xl font-bold text-pink-300">
                        All Order
                    </h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse border border-pink-100 text-left text-pink-400 sm:border-separate">
                        <tbody>
                            <tr>
                                <th
                                    scope="col"
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
                                >
                                    S.No.
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
                                >
                                    Location Name
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
                                >
                                    Action
                                </th>
                                <th
                                    scope="col"
                                    className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
                                >
                                    Action
                                </th>
                            </tr>
                            <tr className="text-pink-300">
                                <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-pink-100 px-6 transition duration-300 first:border-l-0">
                                    1.
                                </td>
                                <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-pink-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                    {"name"}
                                </td>
                                <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-pink-100 px-6 text-green-500 transition duration-300 first:border-l-0">
                                    Edit
                                </td>
                                <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-pink-100 px-6 text-red-500 transition duration-300 first:border-l-0">
                                    Delete
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
