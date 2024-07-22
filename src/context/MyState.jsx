import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import { fireDb } from "../firebase/firebaseconfig";
function MyState({ children }) {
    const [loading, setLoading] = useState(false);
    const [getAllProduct, setAllProduct] = useState([]);
    const [getAllOrder, setAllOrder] = useState([]);
    const getAllProductFn = async () => {
        setLoading(true);
        try {
            const q = query(collection(fireDb, "products"), orderBy("time"));
            const data = onSnapshot(q, (querySnapshot) => {
                let productArray = [];
                querySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setAllProduct(productArray);
                setLoading(false);
            });
            return () => data;
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const getAllOrderFn = async () => {
        setLoading(true);
        try {
            const q = query(collection(fireDb, "order"), orderBy("time"));
            const data = onSnapshot(q, (querySnapshot) => {
                let orderArray = [];
                querySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setAllOrder(orderArray);
                setLoading(false);
            });
            return () => data;
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const deleteOrder = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDb, "order", id));
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const [getAllUser, setAllUser] = useState([]);
    const getAllUserFn = async () => {
        setLoading(true);
        try {
            const q = query(collection(fireDb, "user"), orderBy("time"));
            const data = onSnapshot(q, (querySnapshot) => {
                let userArray = [];
                querySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setAllUser(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProductFn();
        getAllOrderFn();
        getAllUserFn();
    }, []);
    return (
        <MyContext.Provider
            value={{
                loading,
                setLoading,
                getAllProduct,
                getAllProductFn,
                getAllOrder,
                deleteOrder,
                getAllUser,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
