import axios, { AxiosResponse } from 'axios';

export const getOrderDetails = async (id: string): Promise<AxiosResponse<any> | 'Failed'> => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}order/${id}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response;
    } catch (error) {

        return 'Failed';
    }
}