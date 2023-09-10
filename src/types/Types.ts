
export interface User {
  name: string;
  email: string;
  contactInfo?: string;
  address?: string;
  profilePicture?: string;
}

export interface UserRegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  message?: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  user: User,
  success: boolean;
  message?: string;
  token: string;
  isAdmin: boolean;
}

export interface UserProfileRequest {
  token: string;
}

export interface UserProfileResponse {
  user: User;
  success: boolean;
  message?: string;
}

export interface UserProfileUpdateRequest {
  token: string;
  name?: string;
  contactInfo?: string;
  address?: string;
  profilePicture?: string;
}

export interface UserProfileUpdateResponse {
  success: boolean;
  message?: string;
}

export interface AdminUserDetailsRequest {
  token: string;
}

export interface AdminUserDetailsResponse {
  users: User[];
  success: boolean;
  message?: string;
}
