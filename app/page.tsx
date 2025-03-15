import { SearchHeader } from "@/components/common/SearchHeader";
import { ShotCard } from "@/components/common/ShotCard";
import { Button } from "@/components/ui/button";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MOCK_SHOTS = [
	{
		imageUrl: "/test.png",
		title: "Mobile App Design",
		author: {
			name: "John Designer",
			avatar: "/avatars/john.jpg",
		},
		stats: {
			likes: 124,
			views: 1200,
			comments: 8,
		},
	},
	// Add more mock data as needed
];

const CATEGORIES = [
	"Product Design",
	"Web Design",
	"Animation",
	"Branding",
	"Illustration",
	"Mobile",
	"Typography",
	"Browse",
	"Print",
];

export default function Page() {
	return (
		<main className="min-h-screen bg-background">
			<header className="border-b">
				<div className="container flex items-center justify-between h-16 px-8">
					<div className="flex items-center gap-8">
						<h1 className="text-xl font-bold">Dribbble</h1>
						<nav>
							<Menubar>
								<MenubarMenu>
									<MenubarTrigger>Explore</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>Following</MenubarItem>
										<MenubarItem>Popular</MenubarItem>
										<MenubarSeparator />
										{CATEGORIES.map((category) => (
											<MenubarItem key={category}>{category}</MenubarItem>
										))}
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
						</nav>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="ghost">Sign up</Button>
						<Button>Login</Button>
					</div>
				</div>
			</header>

			<SearchHeader />

			<section className="container py-8 px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{MOCK_SHOTS.map((shot, index) => (
						<ShotCard key={index} {...shot} />
					))}
				</div>
			</section>
		</main>
	);
}
