import { useRouter } from 'vue-router';
import type { LoginCredentials, ResetPasswordData } from '../types/auth';

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<void> {
    console.log('Login submitted:', credentials);
    window.location.href = '/cards';
  }

  static async resetPassword(data: ResetPasswordData): Promise<void> {
    // Implement actual password reset logic here
    console.log('Password reset requested for:', data.email);
  }
}