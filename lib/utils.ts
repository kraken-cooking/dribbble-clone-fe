import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Convert string to URL path (remove special characters, replace spaces with hyphens)
export const convertToUrlPath = (inputString: string) => {
	// Remove special characters and replace spaces with hyphens
	let outputString = inputString.replace(/[^a-zA-Z0-9\s]/g, " "); // Remove special characters
	outputString = outputString.trim();
	outputString = outputString.replace(/\s+/g, "-"); // Replace spaces with hyphens
	return outputString.toLowerCase(); // Convert to lowercase
};

// Reverse URL path back to string (replace hyphens with spaces)
export const reverseUrlToString = (urlString: string) => {
	return urlString.replace(/-/g, " "); // Replace hyphens back to spaces
};
