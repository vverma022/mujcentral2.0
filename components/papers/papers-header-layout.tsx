export default function PapersHeaderLayout({year}: {year: string}) {
    return(
    <div className="mt-4 max-w-screen-sm">
          <h1 className="font-heading text-3xl md:text-4xl">
            Past Year Papers for <span className="text-gradient_indigo-purple">{year}</span>
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
             Help your preparation with past year papers sourced from the community.
          </p>
        </div>
    )

}