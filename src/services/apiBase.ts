import { isServer } from '@/shared/constants';
import axios from 'axios';

const api = axios.create({
  baseURL:
    (isServer ? process.env.NEXT_PUBLIC_API_URL : '') +
    (process.env.NEXT_PUBLIC_API_BASE as string),
  headers: {
    'X-Subscription-Token': process.env.NEXT_PUBLIC_API_SUBSCRIPTION_TOKEN,
  },
});

export default api;
