import { PastYearPapers } from "@/components/papers/filters";
import { cycles , papers } from "@/config/papers";
export default function First_YearPage() {
    return (
        <>
         <PastYearPapers cycles={cycles} papers={papers} />
        </>
    )
}