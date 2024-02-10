import qs from 'qs'

import { getApiURL } from './api-helper'

const { NEXT_PUBLIC_REVALIDATE_TIME } = process.env

const fetchApi = async (
  path = '',
  urlParamsObject = {},
  options: RequestInit = {}
) => {
  try {
    // merged default and user options
    const mergedOptions: RequestInit = {
      next: { revalidate: Number(NEXT_PUBLIC_REVALIDATE_TIME) || 30 },
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    }

    const queryString = qs.stringify(urlParamsObject)

    // const requestUrl = `${NEXT_PUBLIC_API_ENDPOINT}${path}${
    //   queryString ? queryString : ''
    // }`

    const requestUrl = getApiURL().concat(
      path ? `/${path}` : '',
      queryString ? `?${queryString}` : ''
    )

    const request = await fetch(requestUrl, mergedOptions)
    const response = await request.json()

    return response
  } catch (error) {
    console.log('🚀 ~ file: fetch-api.ts:31 ~ fetchApi ~ error:', error)
    throw Error(
      'Something went wrong please check console logs for more details.'
    )
  }
}

export default fetchApi
