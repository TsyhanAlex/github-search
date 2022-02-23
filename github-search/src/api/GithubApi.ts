import {GetGithubDataResponse} from "./GetGithubDataResponse";

export class GithubApi {
    /**
     * Method to get main data
     * @returns an object with the main info of a repository
     */
    static async getGithubData(searchParam: string): Promise<GetGithubDataResponse[]> {
        const url = `https://api.github.com/search/repositories?q=${searchParam}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Error getting data, type = ${response?.type}, status = ${response?.status}`);
    }
}