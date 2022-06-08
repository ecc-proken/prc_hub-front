import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@number'
import type { Methods as Methods2 } from './_id@number/_event_datetime_id@number/join'
import type { Methods as Methods3 } from './_id@number/documents'
import type { Methods as Methods4 } from './_id@number/documents/webhook/line_notify'
import type { Methods as Methods5 } from './_id@number/webhook/line_notify'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/events'
  const PATH1 = '/join'
  const PATH2 = '/documents'
  const PATH3 = '/documents/webhook/line_notify'
  const PATH4 = '/webhook/line_notify'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        _event_datetime_id: (val1: number) => {
          const prefix1 = `${prefix0}/${val1}`

          return {
            join: {
              /**
               * @returns Success
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json(),
              /**
               * @returns Success
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH1}`
            }
          }
        },
        documents: {
          webhook: {
            line_notify: {
              /**
               * 資料URLの送信。
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).send(),
              /**
               * 資料URLの送信。
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH3}`
            }
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          /**
           * @returns Replaced
           */
          put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).json(),
          /**
           * @returns Replaced
           */
          $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        webhook: {
          line_notify: {
            /**
             * アンケートURL・資料URLの送信。
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).send(),
            /**
             * アンケートURL・資料URLの送信。
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH4}`
          }
        },
        /**
         * @returns Success
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Success
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns Success
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * @returns Success
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * @returns Success
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Success
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * @returns Created
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns Created
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
