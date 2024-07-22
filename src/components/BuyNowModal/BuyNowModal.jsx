/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full rounded-xl border border-transparent bg-blue-600 px-4 py-3 text-center text-gray-100 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-blue-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value,
                                });
                            }}
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-600 placeholder-blue-300 outline-none"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value,
                                });
                            }}
                            placeholder="Enter your address"
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-600 placeholder-blue-300 outline-none"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value,
                                });
                            }}
                            placeholder="Enter your pincode"
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-600 placeholder-blue-300 outline-none"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value,
                                });
                            }}
                            placeholder="Enter your mobileNumber"
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-2 py-2 text-blue-600 placeholder-blue-300 outline-none"
                        />
                    </div>

                    <div className="">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-center text-gray-100 dark:border-gray-700"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
