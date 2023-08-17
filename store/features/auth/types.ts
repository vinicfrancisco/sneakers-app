export interface SignInProps {
  email: string
  password: string
}

export interface SignUpProps {
  email: string
  password: string
  username: string
  fullName: string
}

export interface GetProfileProps {
  userId?: string
}

export interface UploadAvatarProps {
  userId: string
  uri: string
  type: string
  name: string
}
