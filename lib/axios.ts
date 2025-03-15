import { useAuthStore } from "@/stores/auth-store";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/api", // adjust this to your API base URL
});

// Request interceptor to add token to requests
axiosInstance.interceptors.request.use((config) => {
	const token = useAuthStore.getState().token;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// Response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			// Token is invalid or expired
			useAuthStore.getState().logout();
		}
		return Promise.reject(error);
	},
);

export const apiInstance = axiosInstance;
