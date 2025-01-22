"use server";
import { PastYearPapers } from "@/components/papers/filters";
import { cycles , firstYearPapers } from "@/config/papers";


export default async function First_YearPage() {
    return (
        <PastYearPapers cycles={cycles} papers={firstYearPapers} />
    );
}