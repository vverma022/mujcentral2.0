"use server";

import { Card, CardContent,CardFooter } from "@/components/ui/card"
import ShareButton from '../shared/sharebutton'

interface ConfessionPostProps {
  confession: string
  username: string
}

export default async function ConfessionPost({ confession, username}: ConfessionPostProps) {
  return (
    <Card className="mx-auto w-full max-w-[280px] overflow-hidden shadow-md">
      <CardContent className="p-0">
      <div className="relative flex aspect-square flex-col items-center justify-center border bg-gray-100 p-4 dark:bg-zinc-600">
          <p className="mb-2 line-clamp-5 text-center font-heading text-sm font-medium">
            {confession}
          </p>
          <span className="absolute bottom-1 right-1 p-2 text-xs font-light">MUJ_CONFESS</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-2">
        <span className="text-xs  font-semibold">{username}</span>
        <ShareButton confession={confession} username={username} />
      </CardFooter>
    </Card>
  )
}

