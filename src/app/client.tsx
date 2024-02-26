"use client";

// hooks
import { useState, useEffect } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

//
// client components
//

export function AnimatedItem({
  children,
  delay,
  fromDirection,
}: {
  children: React.ReactNode;
  delay: 0 | 2 | 3 | 4;
  fromDirection: "left" | "top";
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${delay === 2 ? "delay-100" : ""} ${delay === 3 ? "delay-150" : ""} ${delay === 4 ? "delay-200" : ""} ${isLoaded ? "opacity-100" : "opacity-0"} ${!isLoaded && fromDirection === "left" ? "-translate-x-4" : ""} ${!isLoaded && fromDirection === "top" ? "-translate-y-2" : ""}`}
    >
      {children}
    </div>
  );
}

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
    <>
      <span className="cursor-pointer underline" onClick={() => handleClick()}>
        {children}
      </span>
      <span
        className={`cursor-default text-muted-foreground transition-opacity duration-200 ease-in-out ${feedbackIsVisible ? "opacity-100" : "opacity-0"}`}
      >
        {" "}
        copied
      </span>
    </>
  );
}

//
// helper functions
//

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
