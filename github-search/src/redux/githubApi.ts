import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/search/'
    }),
    tagTypes: ['GetGithubDataResponse'],
    endpoints: build => ({
        getUser: build.query({
            query: (name) => `repositories?q=${name}`,
        })
    })
})

export const { useGetUserQuery } = githubApi;