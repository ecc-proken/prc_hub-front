import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './events'
import type { Methods as Methods1 } from './events/_id@number'
import type { Methods as Methods2 } from './events/_id@number/_event_datetime_id@number/join'
import type { Methods as Methods3 } from './events/_id@number/documents'
import type { Methods as Methods4 } from './events/_id@number/documents/webhook/line_notify'
import type { Methods as Methods5 } from './events/_id@number/webhook/line_notify'
import type { Methods as Methods6 } from './users'
import type { Methods as Methods7 } from './users/_id@number'
import type { Methods as Methods8 } from './users/oauth2/_oauth_providers'
import type { Methods as Methods9 } from './users/oauth2/_oauth_providers/register'
import type { Methods as Methods10 } from './users/sign_in'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/events'
  const PATH1 = '/join'
  const PATH2 = '/documents'
  const PATH3 = '/documents/webhook/line_notify'
  const PATH4 = '/webhook/line_notify'
  const PATH5 = '/users'
  const PATH6 = '/users/oauth2'
  const PATH7 = '/register'
  const PATH8 = '/users/sign_in'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    events: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          _event_datetime_id: (val2: number) => {
            const prefix2 = `${prefix1}/${val2}`

            return {
              join: {
                /**
                 * @returns Success
                 */
                post: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix2}${PATH1}`, POST, option).json(),
                /**
                 * @returns Success
                 */
                $post: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix2}${PATH1}`, POST, option).json().then(r => r.body),
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, `${prefix2}${PATH1}`, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, `${prefix2}${PATH1}`, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH1}`
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
                  fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send(),
                /**
                 * 資料URLの送信。
                 */
                $post: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix1}${PATH3}`
              }
            },
            /**
             * @returns Success
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * @returns Success
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            /**
             * @returns Replaced
             */
            put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).json(),
            /**
             * @returns Replaced
             */
            $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          webhook: {
            line_notify: {
              /**
               * アンケートURL・資料URLの送信。
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option).send(),
              /**
               * アンケートURL・資料URLの送信。
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH4}`
            }
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns Success
           */
          $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
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
    },
    users: {
      _id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns Success
           */
          $patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * `user.name: admin`は削除不可
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * `user.name: admin`は削除不可
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      oauth2: {
        _oauth_providers: (val2: number | string) => {
          const prefix2 = `${PATH6}/${val2}`

          return {
            register: {
              /**
               * @returns Created
               */
              post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH7}`, POST, option).json(),
              /**
               * @returns Created
               */
              $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH7}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH7}`
            },
            post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods8['post']['status']>(prefix, prefix2, POST, option).send(),
            $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods8['post']['status']>(prefix, prefix2, POST, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      sign_in: {
        /**
         * @returns Success
         */
        post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH8, POST, option).json(),
        /**
         * @returns Success
         */
        $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH8}`
      },
      /**
       * Admin only
       * @returns Success
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Admin only
       * @returns Success
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      /**
       * `user.name: admin`は削除不可
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, PATH5, DELETE, option).send(),
      /**
       * `user.name: admin`は削除不可
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, PATH5, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
