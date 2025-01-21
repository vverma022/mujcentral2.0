import { PastYearPapers } from "@/components/papers/filters";
import { cycles , firtyearpapers } from "@/config/papers";
export default function First_YearPage() {
    return (
        <>
         <PastYearPapers cycles={cycles} papers={firtyearpapers} />
        </>
    )
}