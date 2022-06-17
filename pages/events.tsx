import { NextPage } from 'next'
import useAspidaSWR from '@aspida/swr'
import { useApi } from '../hooks/api'
import Image from 'next/image'

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
    <div className="bg-noble-white">
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <div>
            <div className="flex relative justify-center items-center w-screen h-screen">
              <Image
                src="/svg/bg_image.png"
                width={640}
                height={642.2}
                alt="bg_main"
              />
              <div className="flex absolute top-1/2 left-1/2 z-10 justify-center items-center w-2/6 h-14 -translate-x-1/2 -translate-y-1/2 ">
                {/* タイトルの黒枠 */}
                <div className="flex relative justify-center items-center h-full font-serif text-4xl font-black text-white whitespace-nowrap bg-black an1-fadeup typing-study-group" />
              </div>
            </div>
            <div className="w-screen h-max">
              <div className="flex z-10 my-20 w-2/4 h-14">
                <div className="flex items-center place-content-end pr-4 h-full font-serif text-3xl font-normal text-white whitespace-nowrap bg-black shadow-md an1-fadeup">
                  予定されている勉強会
                </div>
              </div>
              <div className="divide-y">
                <div className="flex flex-col justify-center">
                  {/* .mapで配列内の要素を全て回している。 */}
                  {events.map((event) => {
                    return (
                      <div key={`event-${event.id}`}>
                        <div className="my-7 mx-auto w-full max-w-[800px] h-0.5 bg-black opacity-20"></div>
                        <div className="flex justify-center mx-auto max-w-[800px]">
                          <div className="w-1/4 min-w-[200px] max-w-[540px]">
                            <Image
                              src="/svg/human_sample1.png"
                              width={538}
                              height={380}
                              alt="bg_main"
                            />
                          </div>
                          <div className="pl-5 w-full">
                            <div>
                              <div className="inset-x-0 top-0 text-3xl font-bold">
                                {event.title}
                              </div>
                              <div className="mt-1 text-lg">藤島 拓人</div>
                              {/* mapで回す */}
                              <div className="flex mt-1">
                                {event.datetimes?.map((datetime) => {
                                  const date = new Date(datetime.start)
                                  return (
                                    <div
                                      key={`dt-${datetime.id}`}
                                      className="py-0.5 px-3 mr-2 w-max text-sm text-white whitespace-nowrap bg-primary-blue"
                                    >
                                      {`${
                                        date.getMonth() + 1
                                      }月${date.getDate()}日`}
                                    </div>
                                  )
                                })}
                              </div>
                              <div className="mt-3 text-sm">
                                &nbsp;{event.description}
                              </div>
                            </div>
                            <div className="flex mt-2">
                              <div className="flex py-1 px-5 border-2 border-primary-blue">
                                <div className=" text-base font-bold text-primary-blue whitespace-nowrap">
                                  参加する
                                </div>
                                <div className="content-end">
                                  <Image
                                    src="/svg/next.svg"
                                    width={15}
                                    height={12}
                                    alt="next"
                                  />
                                </div>
                              </div>
                              <div className="mx-3"></div>
                              <div className="flex py-1 px-5 border-2 border-primary-blue">
                                <div className="text-base font-bold text-primary-blue whitespace-nowrap">
                                  詳細を見る
                                </div>
                                <div className="content-end">
                                  <Image
                                    src="/svg/next.svg"
                                    width={15}
                                    height={12}
                                    alt="next"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-screen h-screen"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventList
