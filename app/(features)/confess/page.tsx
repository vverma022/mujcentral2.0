import ConfessionList from "@/components/confess/confession-list";

export default async function ConfessionsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/confess/fetch`, {
    cache: 'no-store', // Use 'no-store' if the data changes frequently; use 'force-cache' or revalidate otherwise
  });

  if (!response.ok) {
    console.error('Failed to fetch confessions');
    return (
      <div className="py-8">
        <p className="text-center">Failed to load confessions. Please try again later.</p>
      </div>
    );
  }

  const confessions = await response.json();

  return (
    <>
      <div className="py-8"></div>
      <ConfessionList initialData={confessions} />
    </>
  );
}