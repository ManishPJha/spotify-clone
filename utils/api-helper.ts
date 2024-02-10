const { NEXT_PUBLIC_API_ENDPOINT, NODE_ENV } = process.env

export const getApiURL = () => {
  //   return NODE_ENV === 'production'
  //     ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
  //     : 'http://localhost:4000'

  return `${NEXT_PUBLIC_API_ENDPOINT}`
}
