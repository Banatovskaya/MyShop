import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:3001'
        baseUrl: 'https://shopapptest.herokuapp.com/api'

    }),
    endpoints: builder => ({
        getData: builder.query({  
            query: (data) => `/${data}`
        })
    })
});



