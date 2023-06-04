"use client";
import { BrandName, Navbar } from "@/components/NavbarElements";
import styles from "./page.module.css";
import { EditorWrapper } from "@/components/EditorElements";
import { EditorComponent } from "@/components/Tiptap";

export default function Home() {
  return (
    <>
      <Navbar>
        <BrandName> Vertex </BrandName>
      </Navbar>
      <EditorWrapper>
        <EditorComponent></EditorComponent>
      </EditorWrapper>
    </>
  );
}
