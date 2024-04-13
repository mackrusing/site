"use client";

// lib
import { sleep } from "@/lib/utils";
// hooks
import { useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

export function CopyLink({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [feedbackIsVisible, setFeedbackIsVisible] = useState(false);
  const [_copiedText, copyToClipboard] = useCopyToClipboard();

  async function handleClick() {
    copyToClipboard(text);
    setFeedbackIsVisible(true);
    await sleep(2000);
    setFeedbackIsVisible(false);
  }

  return (
    <span>
      <button className="underline" onClick={handleClick}>
        {children}
      </button>
      <span
        className={`text-muted-foreground transition-opacity duration-200 ease-in-out ${feedbackIsVisible ? "opacity-100" : "opacity-0"}`}
      >
        {" "}
        copied
      </span>
    </span>
  );
}
