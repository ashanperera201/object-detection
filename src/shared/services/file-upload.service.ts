import type { AxiosResponse } from 'axios';
import axiosInstance from './base.service'
import type { IResponse } from '../interfaces/response.interface';

export const sendFileToThreatDetect = (payload: any): Promise<AxiosResponse<IResponse<any>, any>> => {
    const url = 'sendToThreatDetect';
    return axiosInstance.post(url, payload)
}