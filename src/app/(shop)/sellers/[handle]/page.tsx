import { Suspense } from "react";

export default function Page(props: PageProps<"/sellers/[handle]">) {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <SellerProfile params={props.params} />
    </Suspense>
  );
}

async function SellerProfile({ params }: { params: PageProps<"/sellers/[handle]">["params"] }) {
  const { handle } = await params;
  return <h1 className="text-2xl font-semibold">Seller: {handle}</h1>;
}
