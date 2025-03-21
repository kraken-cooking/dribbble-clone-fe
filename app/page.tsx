import { SearchHeader } from "@/components/common/SearchHeader";
import { ShotsSection } from "@/components/common/ShotsSection";
import { DefaultLayout } from "@/components/layout/DefaultLayout";

export default function Page() {
	return (
		<DefaultLayout>
			<SearchHeader />

			<ShotsSection />
		</DefaultLayout>
	);
}
