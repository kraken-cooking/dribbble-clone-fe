import Link from "next/link";

import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const FooterLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<Link
		href={href}
		className="text-muted-foreground hover:text-foreground transition-colors"
	>
		{children}
	</Link>
);

export function CommonFooter() {
	return (
		<footer className="w-full border-t border-border/40 py-6 px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
				{/* Left section */}
				<div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
					<div className="flex items-center gap-4">
						<span className="text-sm text-muted-foreground">
							© 2025 Dribbble
						</span>
						<FooterLink href="/terms">Terms</FooterLink>
						<FooterLink href="/privacy">Privacy</FooterLink>
						<FooterLink href="/cookies">Cookies</FooterLink>
					</div>
				</div>

				{/* Right section */}
				<div className="flex flex-col md:flex-row items-center gap-6">
					<div className="flex items-center gap-6">
						<FooterLink href="/jobs">Jobs</FooterLink>
						<FooterLink href="/designers">Designers</FooterLink>
						<FooterLink href="/freelancers">Freelancers</FooterLink>
						<FooterLink href="/tags">Tags</FooterLink>
						<FooterLink href="/places">Places</FooterLink>
						<FooterLink href="/resources">Resources</FooterLink>
					</div>

					{/* Social links */}
					<div className="flex items-center gap-4">
						<Link
							href="https://twitter.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Twitter className="h-5 w-5" />
						</Link>
						<Link
							href="https://facebook.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Facebook className="h-5 w-5" />
						</Link>
						<Link
							href="https://instagram.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Instagram className="h-5 w-5" />
						</Link>
						<Link
							href="https://pinterest.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Github className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
