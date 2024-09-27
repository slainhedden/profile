"use client";

import { Card } from "@/components/ui/card";
import InteractiveBackground from "@/components/ui/interactiveBackground";

const projects = [
  {
    id: 1,
    title: "Desktop & Video Game Assistant - Python",
    description: `
      Built a cross-platform AI assistant using Electron, Node.js, FastAPI, and Python. Integrated Gemini AI with RAG for personalized support in video games and coding, featuring real-time screen capture and analysis.
    `,
    icon: "🎮",
    link: "https://github.com/slainhedden/atlas",
  },
  {
    id: 2,
    title: "Fine-Tuned Problem Generator – Python",
    description: `
      Fine-tuned LLaMA 3 - 8B to generate C++ practice exam questions, focusing on improving model accuracy for C++ exams by curating a dataset with specific problem types and difficulty levels.
    `,
    icon: "📊",
  },
  {
    id: 3,
    title: "Terrain Generator – C",
    description: `
      Implemented a 2D terrain generator in C using Perlin noise, featuring an OpenGL-based rendering pipeline for real-time visualization and adjustments to terrain features.
    `,
    icon: "🌄",
    link: "https://github.com/slainhedden/terrainor",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <InteractiveBackground />
      <div className="container mx-auto p-8 relative z-10">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-white">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gradient-to-br from-white via-gray-100 to-gray-200 bg-opacity-90 text-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between min-h-[400px]"
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-center">{project.title}</h2>
                <p className="text-base text-center mb-4 h-32 flex items-center">
                  {project.description}
                </p>
              </div>
              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    Source Code
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

