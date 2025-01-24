import { PastYearPapers } from "@/components/papers/filters";
import Nothingyet from "@/components/shared/nothingyet";
import { cycles, majors } from "@/config/papers";
import { firstYearPapers , secondYearPapers} from "@/config/papers";

// Map data for each year
const yearToDataMap: Record<string, any> = {
  "first-year": { categories: cycles, papers: firstYearPapers, year: "First Year" },
  "second-year": { categories: majors, papers: secondYearPapers, year: "Second Year" },
  "third-year": { categories: cycles, papers: firstYearPapers, year: "Third Year" },
};

// Define the Params type as a promise
type Params = Promise<{ year: string }>;

// Handle the dynamic route page
export default async function YearPage({ params }: { params: Params }) {
  // Await the params to resolve
  const { year } = await params;

  const data = yearToDataMap[year];

  if (!data) {
    return <div>Page Not Found</div>; // Handle invalid routes
  }

  if (year === "third-year") {
    return <Nothingyet />;
  }

  return <PastYearPapers {...data} />;
}