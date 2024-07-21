import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDb } from "../firebase/firebaseconfig";
function MyState({ children }) {
    const [loading, setLoading] = useState(false);
    const [getAllProduct, setAllProduct] = useState([]);
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
    useEffect(() => {
        getAllProductFn();
    }, []);
    return (
        <MyContext.Provider
            value={{
                loading,
                setLoading,
                getAllProduct,
                getAllProductFn,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
