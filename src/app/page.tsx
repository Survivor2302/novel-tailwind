"use client";
import Editor from "@/components/editor/advanced-editor";
import { JSONContent } from "novel";
import { useEffect, useState } from "react";
import { defaultValue } from "./default-value";

export default function Home() {
  const [value, setValue] = useState<JSONContent>(defaultValue);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <main className="border p-4 rounded-xl">
      <Editor initialValue={value} onChange={setValue} />
    </main>
  );
}
