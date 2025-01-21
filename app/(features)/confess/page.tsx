import Image from 'next/image'
import ConfessionList from '@/components/confess/confession-list'
import AddConfessionButton from '@/components/confess/add-confession'
import Poster from '@/public/_static/avatars/podcast-man.svg'
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";




export default function ConfessionsPage() {
  return (
    <>
<div className='py-8'>
</div>
    <ConfessionList />
    </>
  )
}

