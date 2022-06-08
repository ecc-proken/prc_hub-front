import { NextPage } from 'next'
import useAspidaSWR from '@aspida/swr'
import { useApi } from '../hooks/api'

const useEventList = () => {
  const { apiClient } = useApi()
  const { data, error } = useAspidaSWR(apiClient.events, 'get')
  const loading = !data && !error

  return {
    events: data?.body ?? [],
    loading,
  }
}

const EventList: NextPage = () => {
  const { events, loading } = useEventList()
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          {events.map((event) => {
            return (
              <div key={`event-${event.id}`}>
                <h2>{event.title}</h2>
                <br />
                &nbsp;{event.description}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default EventList
