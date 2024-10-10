import { AxiosAPI } from "api/AxiosAPI"
import { REQUEST_METHODS } from "api/iAPI"
import baseURL from "api/path"

import { mapToMovieDetail, mapToMovieDetailDto } from "uitl/mapper";

async function SearchTheMovie(_method: REQUEST_METHODS, querry: string): Promise<any> {
    const api = new AxiosAPI({ baseURL: baseURL, path: "", method: _method, params: { q: querry } })
    const res = await api.getClientRequest()
    return res
}

async function getMovieDetail(_method: REQUEST_METHODS, url: string): Promise<any> {
    console.log("saga " + "movieDetail: " + url)
    const api = new AxiosAPI({ baseURL: url, path: "", method: _method, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3' } })
    const res = await api.getClientRequest()
    // console.log("saga " + "HTML: " + res!!.toString())
    const htmlString = res!!.toString()
    const scriptMatch = htmlString.match(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/);
    if (scriptMatch && scriptMatch[1]) {
        const extractedContent = scriptMatch[1].trim(); // Extracted JSON content as a string

        const jsonContent = JSON.parse(extractedContent)
        const movieDetailDto = mapToMovieDetailDto(jsonContent)
        const movieDetail = mapToMovieDetail(movieDetailDto)
        return movieDetail

    } else {
        console.log("No matching <script> tag found");
    }
    return null
}

export {
    SearchTheMovie, getMovieDetail
}