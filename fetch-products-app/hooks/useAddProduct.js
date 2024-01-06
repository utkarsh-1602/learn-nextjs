import axios from "axios";
import useSWR from "swr";

const useAddProduct = (path) => {

    const { mutate } = useSWR(path);

    const addProduct = async (data) => {

        const res = await axios.post(path, data)

        if (!res.ok) {
            throw new Error(res.data.message, "Couldn't add product")
        }

        mutate();

    }

    return addProduct;
}

export default useAddProduct;   