import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


type orderData = {
    userId: string,
    coupon_discount_amount: number,
    coupon_discount_title: string,
    payment_status: string,
    order_status: string,
    total_tax_amount: 0,
    payment_method: string,
    transaction_reference: string,
    coupon_code: string,
    order_note: string,
    order_type: string,
    callback: string,
    delivery_address: string,
    free_delivery_by: string,
    transaction_id: string,
    cancellation_reason: string,
    canceled_by: string,
    tracking_number: string,
    customer_contact: string,
    status: string,
    sales_tax: number,
    shipping_address: string,
    billing_address: string,
    logistics_provider: number,
    total: number,
    orderItems: {
        plantingLocation: string,
        treeAmount: string,
        datePlanted: string
        buyerFirstName: string,
        buyerLastName: string,
        certificateStatus: string,
    }
};

export const useCreateOrderMutation = (): UseMutationResult<AxiosResponse<any>, Error, orderData> => {
    return useMutation<AxiosResponse<any>, Error, orderData>({
        mutationFn: (data: orderData) => {
            return axios.post(`${import.meta.env.VITE_BACKEND_API_URL}order/create`, data);
        },
    });
};
