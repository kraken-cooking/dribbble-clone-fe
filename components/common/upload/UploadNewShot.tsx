"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Image as ImageIcon } from "lucide-react";

interface UploadedFile {
	file: File;
	preview: string;
}

export function UploadNewShot() {
	const router = useRouter();
	const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			setUploadedFile({
				file,
				preview: URL.createObjectURL(file),
			});
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg", ".gif"],
			"video/*": [".mp4"],
		},
		maxFiles: 1,
		maxSize: 20 * 1024 * 1024, // 20MB
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!uploadedFile) return;

		setIsSubmitting(true);
		const formData = new FormData(e.currentTarget);
		formData.append("file", uploadedFile.file);

		try {
			// Add your API endpoint here
			const response = await fetch("/api/shots", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) throw new Error("Upload failed");

			router.push("/"); // Redirect to home after successful upload
		} catch (error) {
			console.error("Upload error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-semibold">
					What have you been working on?
				</h1>
				<div className="flex items-center gap-4">
					<Button variant="outline" onClick={() => router.back()}>
						Cancel
					</Button>
					{/*
					<Button variant="outline">Save as draft</Button>
					*/}
					<Button
						type="submit"
						form="shot-form"
						disabled={!uploadedFile || isSubmitting}
						className="bg-[#0D0C22] text-white hover:bg-[#0D0C22]/90"
					>
						Continue
					</Button>
				</div>
			</div>

			{/* Upload Area */}
			{!uploadedFile ? (
				<div
					{...getRootProps()}
					className={`
            border-2 border-dashed border-stone-300 rounded-lg p-12
            ${isDragActive ? "border-primary bg-primary/5" : "border-muted"}
            cursor-pointer text-center
          `}
				>
					<input {...getInputProps()} />
					<div className="max-w-md mx-auto space-y-4">
						<div className="w-20 h-20 mx-auto bg-muted/20 rounded-lg flex items-center justify-center">
							<ImageIcon className="h-10 w-10 text-muted-foreground" />
						</div>
						<div>
							<p className="text-lg">
								Drag and drop an image, or{" "}
								<span className="text-primary underline">Browse</span>
							</p>
							<p className="text-sm text-muted-foreground mt-2">
								Minimum 1600px width recommended. Max 10MB each (20MB for
								videos)
							</p>
						</div>
						<div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
							<div>
								<p>• High resolution images (png, jpg, gif)</p>
								<p>• Animated gifs</p>
							</div>
							<div>
								<p>• Videos (mp4)</p>
								<p>• Only upload media you own the rights to</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<form id="shot-form" onSubmit={handleSubmit} className="space-y-8">
					{/* Preview */}
					<div className="relative aspect-video w-full overflow-hidden rounded-lg">
						{uploadedFile.file.type.startsWith("image/") ? (
							<Image
								src={uploadedFile.preview}
								alt="Preview"
								fill
								className="object-contain"
							/>
						) : (
							<video
								src={uploadedFile.preview}
								controls
								className="w-full h-full"
							/>
						)}
					</div>

					{/* Form Fields */}
					<div className="space-y-4 max-w-2xl mx-auto">
						<div className="space-y-2">
							<Label htmlFor="title">Title</Label>
							<Input
								id="title"
								name="title"
								placeholder="Give your shot a title"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="description">Description</Label>
							<Textarea
								id="description"
								name="description"
								placeholder="Tell us about your shot"
								rows={4}
							/>
						</div>
					</div>
				</form>
			)}
		</div>
	);
}
