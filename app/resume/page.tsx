"use client";

import InteractiveBackground from "@/components/ui/interactiveBackground";

export default function ResumePage() {
  return (
    <>
      <InteractiveBackground />
      <div className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">My Resume</h1>
      <iframe
        src="/Samuel_LainHedden.pdf"
        className="w-full h-screen"
        title="Resume"
      />
      <a href="/old_resume.pdf" download className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Download Resume
      </a>
    </div>
    </>
  );
}
