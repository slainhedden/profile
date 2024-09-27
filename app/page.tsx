"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Carousel } from "@/components/ui/carousel";
import InteractiveBackground from "@/components/ui/interactiveBackground";

const projects = [
  { id: 1, title: "Desktop and Video Game Assistant" },
  { id: 2, title: "Fine-Tuned Problem Generator" },
  { id: 3, title: "Terrain Generator" },
];

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
        <div className="text-center mb-8">
          <Image
            src="/profile-picture.png"
            alt="Samuel Lain Hedden"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
            priority
          />
          <h1 className="text-4xl font-bold mb-2">Samuel Lain Hedden</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
        </div>
        <div className="flex space-x-4">
          <ShimmerButton>
            <Link href="/projects">View Projects</Link>
          </ShimmerButton>
          <ShimmerButton>
            <Link href="/resume">View Resume</Link>
          </ShimmerButton>
        </div>
        <div className="mt-12 w-full max-w-4xl">
          <Carousel>
            {projects.map((project) => (
              <Link key={project.id} href="/projects">
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md cursor-pointer text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </main>
    </>
  );
}
