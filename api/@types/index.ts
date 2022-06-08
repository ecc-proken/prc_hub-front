/* eslint-disable */
export type Id = {
  id: number
}

export type Event_datetime_id = {
  event_datetime_id: number
}

export type Oauth_providers = {
  oauth_providers: 'github'
}

export type User = {
  id: number
  name: string
  email: string
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled?: boolean | undefined
  admin?: boolean | undefined
}

export type LoginBody = {
  email: string
  password: string
}

export type UserWithToken = {
  id: number
  name: string
  email: string
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled?: boolean | undefined
  admin?: boolean | undefined
  token: string
}

export type Token = {
  token: string
}

export type CreateUserBody = {
  name: string
  email: string
  password: string
  github_username?: string | undefined
  twitter_id?: string | undefined
}

export type CreateUserOverOauth2Body = {
  access_token: string
  expire_in: number
  refresh_token: string
  refresh_token_expire_in?: number | undefined
  password: string
}

export type OAuth2ConnectBody = {
  access_token: string
  expire_in: number
  refresh_token: string
  refresh_token_expire_in?: number | undefined
}

export type UpdateUserBody = {
  name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled?: boolean | undefined
  admin?: boolean | undefined
}

export type Event = {
  id: number
  title: string
  description?: string | undefined
  speakers?: User[] | undefined
  location?: string | undefined
  datetimes?: EventDatetime[] | undefined
  published: boolean
  completed: boolean
  /** `true`の場合`event`情報更新後`completed: true`かつ`documents`がある場合にLINE notifyにリクエスト */
  auto_notify_documents_enabled: boolean
  documents?: EventDocument[] | undefined
}

export type CreateEventBody = {
  title: string
  description?: string | undefined
  speakers?: number[] | undefined
  location?: string | undefined
  datetimes?: {
    start: string
    end?: string | undefined
  }[] | undefined
  published?: boolean | undefined
  completed?: boolean | undefined
  auto_notify_documents_enabled?: boolean | undefined
}

export type UpdateEventBody = {
  title?: string | undefined
  description?: string | undefined
  speakers?: number[] | undefined
  location?: string | undefined
  datetimes?: {
    start: string
    end?: string | undefined
  }[] | undefined
  published?: boolean | undefined
  completed?: boolean | undefined
  auto_notify_documents_enabled?: boolean | undefined
}

export type EventDatetime = {
  id: number
  event_id: number
  start: string
  end: string
  participate_count?: number | undefined
}

export type EventParticipate = {
  event_datetime_id: number
  user_id: number
}

export type EventDocument = {
  id: number
  name: string
  url: string
}

export type CreateEventDocumentsBody = {
  name: string
  url: string
}[]
