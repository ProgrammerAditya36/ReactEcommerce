import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import UserDetail from "../../components/UserDetail/UserDetail";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem("users"));
    const context = useContext(MyContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;

    return (
        <Layout>
            <div>
                {/* Top */}
                <div className="top mb-5 mt-5 px-5">
                    <div className="rounded-lg border border-blue-100 bg-blue-50 py-5">
                        <h1 className="text-center text-2xl font-bold text-blue-500">
                            Admin Dashboard
                        </h1>
                    </div>
                </div>

                <div className="px-5">
                    {/* Mid  */}
                    <div className="mid mb-5">
                        {/* main  */}
                        <div className="rounded-xl border border-blue-100 bg-blue-50 py-5">
                            {/* image  */}
                            <div className="flex justify-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                                    alt=""
                                />
                            </div>
                            {/* text  */}
                            <div className="">
                                <h1 className="text-center text-lg text-blue-500">
                                    <span className="font-bold">Name :</span>{" "}
                                    {user.name}
                                </h1>
                                <h1 className="text-center text-lg text-blue-500">
                                    <span className="font-bold">Email :</span>{" "}
                                    {user.email}
                                </h1>
                                <h1 className="text-center text-lg text-blue-500">
                                    <span className="font-bold">Date :</span>{" "}
                                    {user.date}
                                </h1>
                                <h1 className="text-center text-lg text-blue-500">
                                    <span className="font-bold">Role :</span>{" "}
                                    {user.role}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="">
                        <Tabs>
                            <TabList className="-m-4 flex flex-wrap justify-center text-center">
                                {/* Total Products */}
                                <Tab className="w-full cursor-pointer p-4 sm:w-1/2 md:w-1/3">
                                    <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 hover:bg-blue-100">
                                        <div className="mb-3 inline-block h-12 w-12 text-blue-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={50}
                                                height={50}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-shopping-basket"
                                            >
                                                <path d="m5 11 4-7" />
                                                <path d="m19 11-4-7" />
                                                <path d="M2 11h20" />
                                                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                                <path d="m9 11 1 9" />
                                                <path d="M4.5 15.5h15" />
                                                <path d="m15 11-1 9" />
                                            </svg>
                                        </div>
                                        <h2 className="title-font fonts1 text-3xl font-medium text-blue-400">
                                            {getAllProduct.length}
                                        </h2>
                                        <p className="font-bold text-blue-500">
                                            Total Products
                                        </p>
                                    </div>
                                </Tab>

                                {/* Total Order  */}
                                <Tab className="w-full cursor-pointer p-4 sm:w-1/2 md:w-1/4">
                                    <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 hover:bg-blue-100">
                                        <div className="mb-3 inline-block h-12 w-12 text-blue-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={50}
                                                height={50}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-list-ordered"
                                            >
                                                <line
                                                    x1={10}
                                                    x2={21}
                                                    y1={6}
                                                    y2={6}
                                                />
                                                <line
                                                    x1={10}
                                                    x2={21}
                                                    y1={12}
                                                    y2={12}
                                                />
                                                <line
                                                    x1={10}
                                                    x2={21}
                                                    y1={18}
                                                    y2={18}
                                                />
                                                <path d="M4 6h1v4" />
                                                <path d="M4 10h2" />
                                                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                            </svg>
                                        </div>
                                        <h2 className="title-font fonts1 text-3xl font-medium text-blue-400">
                                            {getAllOrder.length}
                                        </h2>
                                        <p className="font-bold text-blue-500">
                                            Total Order
                                        </p>
                                    </div>
                                </Tab>

                                {/* Total User  */}
                                <Tab className="w-full cursor-pointer p-4 sm:w-1/2 md:w-1/3">
                                    <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 hover:bg-blue-100">
                                        <div className="mb-3 inline-block h-12 w-12 text-blue-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={50}
                                                height={50}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-users"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        </div>
                                        <h2 className="title-font fonts1 text-3xl font-medium text-blue-400">
                                            {context.getAllUser.length}
                                        </h2>
                                        <p className="font-bold text-blue-500">
                                            Total Users
                                        </p>
                                    </div>
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <ProductDetail />
                            </TabPanel>

                            <TabPanel>
                                <OrderDetail />
                            </TabPanel>

                            <TabPanel>
                                <UserDetail />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
