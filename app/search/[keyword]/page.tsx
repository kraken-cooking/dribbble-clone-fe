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
      <div className="pt-16 pb-4 px-16">
        <div className="text-center">
          <h1 className="font-bold text-3xl">{keyword}</h1>
          <p className="mt-4 text-lg text-stone-400">
            Browse {keyword} work, designs, illustrations, and graphic elements
          </p>
        </div>
      </div>

      <ShotsSection keyword={keyword} />
    </DefaultLayout>
  );
}
