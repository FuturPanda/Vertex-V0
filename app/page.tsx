"use client";
import { BrandName, Navbar } from "@/components/NavbarElements";
import styles from "./page.module.css";
import { useState } from "react";
import { EditorWrapper } from "@/components/EditorElements";
import { EditorComponent } from "@/components/Tiptap";

export default function Home() {
  const [editorState, setEditorState] = useState(null);
  const handleScroll = (editor) => {
    return editor;
  };
  return (
    <>
      <Navbar>
        <BrandName> Vertex </BrandName>
        <button onClick={handleScroll}> scroll to view </button>
      </Navbar>
      <EditorWrapper>
        <EditorComponent
          setEditorState={setEditorState}
          editorState={editorState}
        ></EditorComponent>
      </EditorWrapper>
    </>
  );
}
