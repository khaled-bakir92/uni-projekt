export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface ResetPasswordData {
    email: string;
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    email: string | null;
  }