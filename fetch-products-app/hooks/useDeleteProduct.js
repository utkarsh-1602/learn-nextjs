import axios from "axios";
import useSWR from "swr";

const useDeleteProduct = (path) => {

    const { mutate } = useSWR(path);

    const deleteProduct = async (id) => {

        const res = await axios.delete(`${path}?id=${id}`)

        if (res.status !== 200) {
            throw new Error(res.data.message)
        }

        mutate();

    }

    return deleteProduct;
}

export default useDeleteProduct;   