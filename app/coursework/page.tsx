"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { semesters } from "@/data/coursework";
import type { Course } from "@/data/coursework";
import FadeIn from "@/components/FadeIn";

function StatusBadge({ status }: { status: Course["status"] }) {
  const isRunning = status === "RUNNING";
  return (
    <span
      className={`font-mono text-[10px] px-2.5 py-1 rounded-full tracking-widest ${
        isRunning
          ? "text-accent bg-accent/5"
          : "text-emerald-600 bg-emerald-50"
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
        className="group flex gap-4 py-5 border-b border-border last:border-0 hover:bg-surface/60 rounded-xl px-4 -mx-4 transition-all duration-200"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Color dot */}
        <div className="flex-shrink-0 mt-1.5">
          <div
            className="w-2 h-2 rounded-full transition-transform duration-200"
            style={{
              backgroundColor: course.color,
              transform: hovered ? "scale(1.4)" : "scale(1)",
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1">
            <span className="font-serif text-base text-text-primary leading-snug">
              {course.id}
            </span>
            <StatusBadge status={course.status} />
          </div>
          <p className="font-sans text-sm text-text-secondary leading-snug">
            {course.name}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function CourseworkPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased">
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
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Academic</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-4">Coursework</h1>
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
                {/* Semester header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${semester.current ? "bg-emerald-500" : "bg-accent"}`} />
                  <span className={`font-mono text-sm ${semester.current ? "text-emerald-600" : "text-text-secondary"}`}>
                    {semester.label}
                  </span>
                  {semester.current && (
                    <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-0.5 tracking-widest">
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Courses */}
                <div className="ml-4 pl-5 border-l border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
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
