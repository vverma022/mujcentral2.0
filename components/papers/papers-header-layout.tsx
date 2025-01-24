export default function PapersHeaderLayout({year}: {year: string}) {
    return(
    <div className="max-w-screen-sm mt-4">
          <h1 className="font-heading text-3xl md:text-4xl">
            Past Year Papers for {year}
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
             Help your preparation with past year papers sourced from the community.
          </p>
        </div>
    )

}