"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { semesters } from "@/data/coursework";
import type { Course } from "@/data/coursework";
import FadeIn from "@/components/FadeIn";
import CursorGlow from "@/components/CursorGlow";

function StatusBadge({ status }: { status: Course["status"] }) {
  const isRunning = status === "RUNNING";
  return (
    <span
      className={`font-mono text-[10px] font-medium px-2.5 py-1 rounded border tracking-widest ${
        isRunning
          ? "text-accent border-accent/40 bg-accent/5"
          : "text-emerald-600 border-emerald-200 bg-emerald-50"
      }`}
    >
      {status}
    </span>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.05}>
      <div
        className="relative bg-surface rounded-lg p-5 overflow-hidden transition-all duration-200 hover:-translate-y-1"
        style={{ border: `1px solid ${hovered ? course.color : "#E4E0DA"}` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="absolute left-0 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: course.color }}
        />
        <div className="flex items-start justify-between gap-3 mb-2">
          <span className="font-serif text-lg text-text-primary">
            {course.id}
          </span>
          <StatusBadge status={course.status} />
        </div>
        <p className="font-sans text-sm text-text-secondary leading-snug mb-3">
          {course.name}
        </p>
      </div>
    </FadeIn>
  );
}

export default function CourseworkPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased">
      <CursorGlow />

      <main className="max-w-content mx-auto px-6 pt-16 pb-24">
        {/* Back link */}
        <FadeIn delay={0}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 mb-12"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <div className="mb-16">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">Academic</p>
            <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">Coursework</h1>
            <p className="font-sans text-base text-text-secondary max-w-xl">
              Academic coursework and technical foundations — B.S. EECS at UC Berkeley, expected May 2028.
            </p>
          </div>
        </FadeIn>

        {/* Semesters */}
        <div className="flex flex-col gap-14">
          {semesters.map((semester, si) => (
            <FadeIn key={semester.label} delay={si * 0.08}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${semester.current ? "bg-emerald-500" : "bg-accent"}`} />
                  <span className={`font-mono text-sm border rounded-full px-4 py-1 ${semester.current ? "text-emerald-600 border-emerald-300 bg-emerald-50" : "text-text-secondary border-border"}`}>
                    {semester.label}
                  </span>
                  {semester.current && (
                    <span className="font-mono text-[10px] text-emerald-600 border border-emerald-300 bg-emerald-50 rounded-full px-2.5 py-0.5 tracking-widest">
                      CURRENT
                    </span>
                  )}
                </div>
                <div className="ml-3 pl-6 border-l border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {semester.courses.map((course, ci) => (
                      <CourseCard key={course.id} course={course} index={ci} />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </main>
    </div>
  );
}
