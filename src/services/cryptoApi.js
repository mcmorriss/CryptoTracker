
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const cryptoHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4748740ac5msh5e347fb4faf6b53p105410jsn40251a08819a'
};

const createRequest = (url) => ({ url, headers: cryptoHeaders});


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins`),
        })

    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
