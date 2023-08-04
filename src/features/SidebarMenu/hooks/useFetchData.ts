import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const useAxiosFetchData = <T>(
  url: string,
  config?: AxiosRequestConfig
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url, config)
        setData(response.data)
      } catch (error) {
        setError('An error occurred while fetching data.')
      } finally {
        setLoading(false)
      }
    }

    url && fetchData()
  }, [url, config])

  return { data, loading, error }
}

export default useAxiosFetchData
