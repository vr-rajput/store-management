import { useContext, useEffect, useMemo, useState } from "react";
import { listMedicine } from "../services/productService";
import { AdminContext } from "../context/AdminContext";
import { checkout, checkoutVerify } from "../services/checkoutService";

export const useCreateOrder = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    // const [totalItems, setTotalItems] = useState(0);
    // const [subtotalPrice, setSubtotalPrice] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null); // Controls the anchor position for the Popper dropdown

    console.log("searchTerm: hooks", searchTerm);
    const { adminDetail } = useContext(AdminContext);
    const [hasMore, setHasMore] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        if (searchTerm.trim() === "") {
            console.log("emtpy");
            setResults([])
            return
        }
        fetchProdcuts();
    }, [searchTerm, page])

    const fetchProdcuts = async () => {
        try {
            console.log("calling api");
            const query = {
                storeName: adminDetail?.storeName,
                // searchTerm: searchTerm,
                page: page,//table pagination start from 0
                limit: 5//limit
            }
            console.log("query: ", query);
            if (searchTerm !== "") {
                query.searchTerm = searchTerm;
            }
            const authToken = adminDetail?.authToken;
            const res = await listMedicine(query, authToken);
            console.log("res: ", res);
            // setResults(res?.data?.data?.docs)
            setResults((prev) => [ ...prev, ...res.data.data.docs ])
            setHasMore(res?.data?.data?.hasNextPage);
        } catch (error) {
            console.log("error: ", error);

        }
    }
    
    const handleClick = (e) => {
        console.log("MMMMMMMMMMMMMMMMMMMM", e.currentTarget);
        setAnchorEl(e.currentTarget);
        fetchProdcuts();
    }
      // Handle scrolling to bottom of the dropdown
  const handleScroll = (event) => {
    console.log("hanle scroll");
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    console.log("bottom && hasMore: ", hasMore);
    if (bottom && hasMore) {
        setPage((prevPage) => prevPage + 1);
    }
  };

    // Handle checkbox selection
    const handleToggle = (item) => {
        console.log("handle toggle", item);
        setSelectedItems(
            (prevSelected) =>
                prevSelected.some((selectedItem) => selectedItem.id === item.id)
                    ? prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
                    : [...prevSelected, { ...item, qty: 1, stock: item?.inventory }] // Reset qty to 1 when adding
        );
        console.log(selectedItems);
    };

    // Handle quantity increase/decrease
    const handleQuantityChange = (item, increase) => {
        setSelectedItems((prevSelected) =>
            prevSelected.map((selectedItem) =>
                selectedItem.id === item.id
                    ? {
                        ...selectedItem,
                        qty: increase
                            ? Math.min(selectedItem.qty + 1, 100) // Max to available stock
                            : Math.max(selectedItem.qty - 1, 1), // Min quantity of 1
                    }
                    : selectedItem
            )
        );
    };

    // Calculate total price
    // const calculateTotalPrice = () => {
    //     const subtotal = selectedItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
    //     // setSubtotalPrice(100);
    //     console.log("subtotal: <><>", subtotal);
    //     return subtotal;
    // };

    // // Calculate total number of items
    // const calculateTotalItems = () => {
    //     const totalItems = selectedItems.reduce((total, item) => total + item.qty, 0);
    //     // setTotalItems(totalItems);
    //     return totalItems;
    // };

    const totalPrice = useMemo(() => {
        return selectedItems
            .reduce((total, item) => total + item.price * item.qty, 0)
            .toFixed(2);
    }, [selectedItems]); // Runs only when selectedItems changes

    // Memoized calculation for total number of items
    const totalItems = useMemo(() => {
        return selectedItems.reduce((total, item) => total + item.qty, 0);
    }, [selectedItems]); // Runs only when selectedItems changes

    // Handle item removal
    const handleRemoveItem = (item) => {
        setSelectedItems((prevSelected) =>
            prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
        );
    };

    // Clear search input
    const handleClearSearch = () => {
        setSearchTerm("");
        setResults([]);
    };

    // Handle checkout process
    const handleCheckout = async () => { 
        const authToken = adminDetail?.authToken;
        const prepareOrder = {
            customerName: "",
            customerEmail: "",
            subtotal: totalPrice,
            Items: totalItems,
            products: selectedItems,
            amount: 500
        }
        const resp = await checkout( prepareOrder, authToken);
        console.log("Checkout response:", resp);

        const options = {
            key: "rzp_test_P0RYEAWm7FQJJi",
            amount: 500,
            currency: "INR",
            name: "para",
            description: "medicine",
            order_id: resp?.data?.data?.id,
            handler: async (response) => {
                try {
                    console.log("Payment response:", response);
                    let res = await checkoutVerify(response, authToken);
                    console.log("Verification response:", res);
                } catch (error) {
                    console.error("Payment verification error:", error);
                }
            },
            theme: { color: "red" },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return {
        searchTerm,
        setSearchTerm,
        results,
        setResults,
        handleToggle,
        selectedItems,
        setSelectedItems,
        handleQuantityChange,
        // calculateTotalPrice,
        // calculateTotalItems,
        handleRemoveItem,
        handleClearSearch,
        anchorEl,
        setAnchorEl,
        handleCheckout,
        totalItems,
        totalPrice,
        handleScroll,
        handleClick
    }
}