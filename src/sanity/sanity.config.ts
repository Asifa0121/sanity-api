'use client'
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";


export const SanityConfig = defineConfig({
    name: "default",
    title: "studio",
    projectId: "qcke9tac",
    dataset: "production",
    plugins: [structureTool(), visionTool()],
    basePath: "/studio",
    schema: {
        types: []
    }
})