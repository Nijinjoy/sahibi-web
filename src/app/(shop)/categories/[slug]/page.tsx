import { Suspense } from "react";

export default function Page(props: PageProps<"/categories/[slug]">) {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <CategoryListings params={props.params} />
    </Suspense>
  );
}

async function CategoryListings({ params }: { params: PageProps<"/categories/[slug]">["params"] }) {
  const { slug } = await params;
  return <h1 className="text-2xl font-semibold">Category: {slug}</h1>;
}
