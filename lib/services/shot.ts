import { apiInstance as api } from "../axios";
import { ApiResponse } from "@/types/api";
import { IShot, CreateShotDto } from "@/types";

export class ShotsService {
	static async getShots() {
		const response = await api.get<
			ApiResponse<{
				current_page: number;
				page_size: number;
				total: number;
				total_pages: number;
				data: {
					title: string;
					description: string;
					image_url: string;
				}[];
			}>
		>("/shots");
		return response.data.data;
	}

	static async getShot(id: string): Promise<IShot> {
		const response = await api.get<ApiResponse<IShot>>(`/shots/${id}`);
		return response.data.data;
	}

	static async uploadShot(file: File) {
		const formData = new FormData();
		formData.append("image", file);

		const response = await api.post<
			ApiResponse<{
				filename: string;
				url: string;
			}>
		>("/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data.data;
	}

	static async createShot(data: CreateShotDto) {
		const response = await api.post<ApiResponse<IShot>>("/shots", data);
		return response.data.data;
	}

	static async updateShot(
		id: string,
		data: Partial<CreateShotDto>,
	): Promise<IShot> {
		const formData = new FormData();
		if (data.file) formData.append("file", data.file);
		if (data.title) formData.append("title", data.title);
		if (data.description) formData.append("description", data.description);

		const response = await api.patch<ApiResponse<IShot>>(
			`/shots/${id}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			},
		);
		return response.data.data;
	}

	static async deleteShot(id: string): Promise<void> {
		await api.delete(`/shots/${id}`);
	}

	static async likeShot(id: string): Promise<void> {
		await api.post(`/shots/${id}/like`);
	}

	static async unlikeShot(id: string): Promise<void> {
		await api.delete(`/shots/${id}/like`);
	}
}
