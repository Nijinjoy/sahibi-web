import { Suspense } from "react";

export default function Page(props: PageProps<"/listings/[id]">) {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <ListingDetails params={props.params} />
    </Suspense>
  );
}

async function ListingDetails({ params }: { params: PageProps<"/listings/[id]">["params"] }) {
  const { id } = await params;
  return <h1 className="text-2xl font-semibold">Listing: {id}</h1>;
}
