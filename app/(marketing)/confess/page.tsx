import Image from 'next/image'
import ConfessionList from '@/components/content/confession-list'
import AddConfessionButton from '@/components/content/add-confession'

export default function ConfessionsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center">
            <Image src="/placeholder.svg?height=50&width=50" alt="MUJ CONFESS Logo" width={50} height={50} />
            <h1 className="font-bold ml-2 font-heading text-3xl md:text-4xl">MUJ CONFESS</h1>
          </div>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
            Share your secrets, stories, and confessions anonymously.
          </p>
        </div>
        <AddConfessionButton />
      </div>
      <ConfessionList />
    </div>
  )
}

