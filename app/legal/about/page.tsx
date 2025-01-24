"use server"

import Image from "next/image"
import logo from "@/public/_static/avatars/logo1.png"

export default async function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-center  font-heading text-4xl">About Us</h1>
      <p className="mb-8 text-center text-lg text-muted-foreground">About MUJ Central and its mission.</p>

      <section className="mb-8">
        <h2 className="bold mb-4 font-heading text-2xl">Our Vision</h2>
        <p className="mb-4">
          We strive to inspire, innovate, and make a lasting impact. <strong>MUJ Central</strong> is built to help
          students succeed, connect, and grow within the vibrant MUJ community.
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="bold mb-4 font-heading text-2xl">About MUJ Central</h2>
        <p className="mb-4">
          <strong>MUJ Central</strong> is a platform built by a passionate developer from MUJ with the sole purpose of
          helping students. Our mission is to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>Assist students in preparing for exams with useful resources.</li>
          <li>Provide a safe, anonymous space for confessions and sharing experiences.</li>
          <li>Help new students find batchmates from their city, making the transition to college life smoother.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="bold mb-4 font-heading text-2xl">Why We Built This</h2>
        <p className="mb-4">
          MUJ Central was created to leave a meaningful impact on the student community and to foster a sense of
          connection and support. It&apos;s a platform for students, by students, designed to make college life a little
          easier and a lot more engaging.
        </p>
        <p>
          Thank you for being part of this journey and for trusting MUJ Central as your go-to resource during your time
          at MUJ.
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      <div className="flex justify-center">
  <figure className="mt-8">
    <Image
      src={logo}
      alt="The Legend of MUJ Central"
      width={200}
      height={100}
      className="rounded-full border"
    />
    <figcaption className="mt-2 text-center text-sm italic">
      The man, the myth, the legend
    </figcaption>
  </figure>
</div>
    </div>
  )
}

