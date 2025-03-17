import { User } from "@/types";
import { apiInstance as api } from "../axios";
import { ApiResponse } from "@/types/api";

export class AuthService {
  static async getUserProfile(id: string): Promise<User> {
    const response = await api.get<ApiResponse<User>>(`/user/${id}`);
    return response.data.data;
  }

  static async signUp(data: {
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    const response = await api.post<ApiResponse<User>>(`/auth/signup`, data);
    return response.data.data;
  }

  static async signIn(data: { email: string; password: string }): Promise<{
    user: User;
    token: string;
  }> {
    const response = await api.post<
      ApiResponse<{
        user: User;
        token: string;
      }>
    >(`/auth/login`, data);
    return response.data.data;
  }
}
