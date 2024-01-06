import fetcher from "@/lib/axiosInstance";
import axios from "axios";
import useSWR from "swr";

const useGetProducts = () => {

    const { data, isLoading, error } = useSWR('/api/products', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data,
        isLoading,
        error
    }

}

export default useGetProducts;   