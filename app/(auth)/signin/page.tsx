import { AuthForm } from "@/components/auth/auth-form";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { Metadata } from "next";
import Link from "next/link";

export default function SignInPage() {
	return (
		<div className="container mx-auto relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
				<div className="absolute inset-0 bg-zinc-900" />
				<div className="relative z-20 flex items-center text-lg font-medium">
					<Link href="/">Dribbble</Link>
				</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&ldquo;Welcome back to the world&apos;s leading design
							community.&rdquo;
						</p>
					</blockquote>
				</div>
			</div>
			<div className="lg:p-8">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">
							Sign in to your account
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your credentials below to sign in
						</p>
					</div>
					<OAuthButtons />
					<AuthForm type="signin" />
					<p className="px-8 text-center text-sm text-muted-foreground">
						Don&apos;t have an account?{" "}
						<Link
							href="/signup"
							className="underline underline-offset-4 hover:text-primary"
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Dribbble - Sign In",
	description:
		"Sign In on Dribbble, the world’s leading community for designers to share, grow, and get hired.",
};
