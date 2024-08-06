import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


type LoginData = {
    email: string;
};

export const useLoginMutation = (): UseMutationResult<AxiosResponse<any>, Error, LoginData> => {
    return useMutation<AxiosResponse<any>, Error, LoginData>({
        mutationFn: (data: LoginData) => {
            return axios.post(`${import.meta.env.VITE_BACKEND_API_URL}auth/login`, data);
        },
    });
};



type verifyOTPData = {
    email: string;
    otp: string;
};

export const useVerifyOTP = (): UseMutationResult<AxiosResponse<any>, Error, verifyOTPData> => {
    return useMutation<AxiosResponse<any>, Error, verifyOTPData>({
        mutationFn: (data: verifyOTPData) => {
            return axios.post(`${import.meta.env.VITE_BACKEND_API_URL}auth/verifyOtp`, data);
        },
    });
};