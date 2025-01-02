import ConfessionPost from './confession-post'
import MaxWidthWrapper from '../shared/max-width-wrapper'

const confessions = [
  {
    id: 1,
    image: '/placeholder.svg?height=150&width=250',
    confession: "I secretly love pineapple on pizza.",
    username: "PizzaLover123",
  },
  {
    id: 2,
    image: '/placeholder.svg?height=150&width=250',
    confession: "I've never seen Star Wars.",
    username: "MovieBuff99",
  },
]

export default function ConfessionList() {
  return (
    <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
  <div className="max-w-screen-sm">
    <h1 className="font-heading text-3xl md:text-4xl pb-2">
      Confessions
    </h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    {confessions.map((confession) => (
      <ConfessionPost key={confession.id} {...confession} />
    ))}
  </div>
</MaxWidthWrapper>
  )
}

