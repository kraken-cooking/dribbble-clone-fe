import { SearchHeader } from "@/components/common/SearchHeader";
import { ShotCard } from "@/components/common/ShotCard";
import { DefaultLayout } from "@/components/layout/DefaltLayout";

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

export default function Page() {
  return (
    <DefaultLayout>
      <SearchHeader />

      <section className="container py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_SHOTS.map((shot, index) => (
            <ShotCard key={index} {...shot} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
