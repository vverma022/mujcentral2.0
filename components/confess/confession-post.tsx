"use server";

import { Card, CardContent,CardFooter } from "@/components/ui/card"
import ShareButton from '../shared/sharebutton'

interface ConfessionPostProps {
  confession: string
  username: string
}

export default async function ConfessionPost({ confession, username}: ConfessionPostProps) {
  return (
    <Card className="w-full max-w-[280px] mx-auto shadow-md overflow-hidden">
      <CardContent className="p-0">
      <div className="aspect-square bg-gray-100 dark:bg-zinc-600 p-4 flex flex-col items-center justify-center relative border">
          <p className="text-sm font-medium text-center mb-2 line-clamp-5 font-heading">
            {confession}
          </p>
          <span className="text-xs p-2 font-light absolute bottom-1 right-1">MUJ_CONFESS</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-2">
        <span className="font-semibold  text-xs">{username}</span>
        <ShareButton confession={confession} username={username} />
      </CardFooter>
    </Card>
  )
}

