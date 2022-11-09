import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const plantsApi = createApi({
    reducerPath: "plantsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/",
    }),
    endpoints: (builder) => ({

        getPlants: builder.query({

            query: (type) => `${type}`,

        })
    })
})


export const { useGetAllPlantsQuery } = plantsApi;