import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components for better performance
const Profile = lazy(() => import("@/components/Profile"));
const Experience = lazy(() => import("@/components/Experience"));
const Education = lazy(() => import("@/components/Education"));
const Skills = lazy(() => import("@/components/Skills"));
const Publications = lazy(() => import("@/components/Publications"));
const Projects = lazy(() => import("@/components/Projects"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingSkeleton = () => (
  <div className="py-16 px-6">
    <div className="max-w-6xl mx-auto space-y-4">
      <Skeleton className="h-12 w-64 mx-auto" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Suspense fallback={<LoadingSkeleton />}>
        <Profile />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Education />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Publications />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
