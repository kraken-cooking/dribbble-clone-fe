import { SearchHeader } from "@/components/common/SearchHeader";
import { ShotsSection } from "@/components/common/ShotsSection";
import { DefaultLayout } from "@/components/layout/DefaultLayout";

export default async function Page({
	params,
}: {
	params: Promise<{ keyword: string }>;
}) {
	const { keyword } = await params;

	return (
		<DefaultLayout>
			<SearchHeader />
			<ShotsSection keyword={keyword} />
		</DefaultLayout>
	);
}
