import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/search/'
    }),
    tagTypes: ['GetGithubDataResponse'],
    endpoints: build => ({
        getUser: build.query({
            query: (fullName) => `repositories?q=${fullName}`,
        }),
        getOpenIssues: build.query({
            query: (name) => `issues?q=repo:${name}+type:issue+state:open`
        }),
        getClosedIssues: build.query({
            query: (name) => `issues?q=repo:${name}+type:issue+state:closed`
        })
    })
})

export const { useGetUserQuery, useGetOpenIssuesQuery, useGetClosedIssuesQuery } = githubApi;