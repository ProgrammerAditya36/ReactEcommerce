import { useContext } from "react";
import MyContext from "../../context/MyContext";

const UserDetail = () => {
    const context = useContext(MyContext);
    const { getAllUser } = context;
    return (
        <div>
            <div>
                <div className="flex items-center justify-between py-5">
                    {/* text  */}
                    <h1 className="text-xl font-bold text-blue-300">
                        All User
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
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Uid
                                </th>
                                <th
                                    scope="col"
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Role
                                </th>
                                <th
                                    scope="col"
                                    className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-blue-100 px-6 font-bold first:border-l-0"
                                >
                                    Date
                                </th>
                            </tr>
                            {getAllUser.map((value, index) => {
                                return (
                                    <tr key={index} className="text-blue-300">
                                        <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                            {index + 1}
                                        </td>
                                        <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-blue-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                                            {value.name}
                                        </td>
                                        <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                            {value.email}
                                        </td>
                                        <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                            {value.uid}
                                        </td>
                                        <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                            {value.role}
                                        </td>
                                        <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-blue-100 px-6 transition duration-300 first:border-l-0">
                                            {value.date}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
