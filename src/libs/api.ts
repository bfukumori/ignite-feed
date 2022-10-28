import axios from 'axios';

const environment =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5173'
    : 'https://ignite-feed-eta.vercel.app/';

export const api = axios.create({
  baseURL: environment,
});
