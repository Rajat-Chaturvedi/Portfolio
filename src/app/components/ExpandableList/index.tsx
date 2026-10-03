"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { UI_CONTENT } from "../../constants";
import styles from "./expandableList.module.css";

interface Props {
  children: ReactNode[];
  initialCount: number;
  rows?: number;
  as?: "ul" | "ol" | "div";
  className?: string;
}

export default function ExpandableList({ children, initialCount, rows, as: Container = "ul", className }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [limit, setLimit] = useState(initialCount);
  const list = useRef<HTMLOListElement & HTMLUListElement & HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!rows || !list.current) return;
    const element = list.current;
    const measure = () => {
      const tracks = getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean);
      setLimit(Math.max(1, tracks.length) * rows);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [rows]);

  return (
    <>
      <Container id={id} ref={list} className={className}>
        {expanded ? children : children.slice(0, limit)}
      </Container>
      {children.length > limit && (
        <div className={styles.controls}>
          <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>
            {expanded ? UI_CONTENT.lists.showLess : `${UI_CONTENT.lists.showMore} (${children.length - limit})`}
            {expanded ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
          </button>
        </div>
      )}
    </>
  );
}