"use client";
import { BrandName, Navbar } from "@/components/NavbarElements";
import styles from "./page.module.css";
import { useState } from "react";
import { EditorWrapper } from "@/components/EditorElements";
import { EditorComponent } from "@/components/Tiptap";
import AuthForm, { StyledAuthForm } from "@/components/auth-form";

export default function Home() {
  const [editorState, setEditorState] = useState(null);
  const handleScroll = (editor) => {
    return editor;
  };
  return (
    <>
      <AuthForm />
      {/* <Navbar>
        <BrandName> Vertex </BrandName>
      </Navbar>
      <EditorWrapper>
        <EditorComponent></EditorComponent>
      </EditorWrapper> */}
    </>
  );
}
