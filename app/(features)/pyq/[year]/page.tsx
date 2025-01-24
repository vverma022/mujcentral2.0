import { PastYearPapers } from "@/components/papers/filters";
import Nothingyet from "@/components/shared/nothingyet";
import { cycles, majors } from "@/config/papers";
import { firstYearPapers , secondYearPapers} from "@/config/papers";

const yearToDataMap: Record<string, any> = {
    "first-year": { categories: cycles , papers: firstYearPapers , year: "First Year" },
    "second-year": { categories: majors, papers: secondYearPapers, year: "Second Year" },
    "third-year": { categories: cycles, papers: firstYearPapers , year: "Third Year" },
  };
  
  export default function YearPage({ params }: { params: { year: string } }) {
    const data = yearToDataMap[params.year];
  
    if (!data) {
      return <div>Page Not Found</div>; 
    }

    if (params.year === "third-year") {
      return <Nothingyet/>  ;
    }
  
    return (
      <>
      <PastYearPapers {...data} />
      </>
    ) ;
  }