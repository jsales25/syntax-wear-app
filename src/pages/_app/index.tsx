import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../../components/Hero";
import { Categories } from "../../components/Categories";
import { Gallery } from "../../components/Gallery";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="py-6">
      <Hero />

      <Categories />

      <Gallery />
    </main>
  );
}
