import ConfessionPost from './confession-post'

const confessions = [
  {
    id: 1,
    image: '/placeholder.svg?height=150&width=250',
    confession: "I secretly love pineapple on pizza.",
    username: "PizzaLover123",
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 2,
    image: '/placeholder.svg?height=150&width=250',
    confession: "I've never seen Star Wars.",
    username: "MovieBuff99",
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export default function ConfessionList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {confessions.map((confession) => (
        <ConfessionPost key={confession.id} {...confession} />
      ))}
    </div>
  )
}

