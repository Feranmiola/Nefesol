import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


type verifyData = {
    orderID: string,
    userID: string,
    amount: string
};

export const useVerifyPaymentMutation = (): UseMutationResult<AxiosResponse<any>, Error, verifyData> => {
    return useMutation<AxiosResponse<any>, Error, verifyData>({
        mutationFn: (data: verifyData) => {
            return axios.post(`${import.meta.env.VITE_BACKEND_API_URL}payment/verify-payment`, data);
        },
    });
};
