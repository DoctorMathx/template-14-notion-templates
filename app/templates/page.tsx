import type { Metadata } from "next";
import { Suspense } from "react";
import { TemplatesIndex } from "./templates-index";
export const metadata: Metadata = { title: "All templates" };
export default function TemplatesPage() { return <Suspense fallback={null}><TemplatesIndex /></Suspense>; }
