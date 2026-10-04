"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Search, X, ArrowUpRight } from "lucide-react";
import { searchPortfolio } from "../../utils/portfolioSearch";
import { UI_CONTENT } from "../../constants";
import styles from "./search.module.css";

export default function PortfolioSearch({ onOpen }: { onOpen: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const matches = searchPortfolio(deferred);
  const content = UI_CONTENT.search;
  const overflow = useRef("");
  const locked = useRef(false);
  const unlock = () => {
    if (!locked.current) return;
    document.body.style.overflow = overflow.current;
    locked.current = false;
  };
  const close = () => {
    unlock();
    dialog.current?.close();
  };
  useEffect(
    () => () => {
      unlock();
    },
    [],
  );

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-label={content.open}
        title={content.open}
        onClick={() => {
          flushSync(onOpen);
          setQuery("");
          dialog.current?.showModal();
          overflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          locked.current = true;
          input.current?.focus();
        }}
      >
        <Search size={20} aria-hidden="true" />
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={content.open}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            close();
          }
        }}
        onCancel={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => {
          unlock();
          trigger.current?.focus();
        }}
      >
        <div className={styles.bar}>
          <Search size={20} aria-hidden="true" />
          <input
            ref={input}
            type="search"
            value={query}
            maxLength={200}
            aria-label={content.open}
            placeholder={content.placeholder}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="button" onClick={close} aria-label={content.close}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <p className={styles.status} aria-live="polite">
          {deferred.trim().length < 2
            ? content.browse
            : matches.suggested
              ? content.suggestions
              : content.results}
        </p>
        <ul className={styles.results}>
          {matches.results.map((result) => (
            <li key={result.id}>
              <a
                href={result.href}
                onClick={() => {
                  close();
                  if (result.href.startsWith("/#")) {
                    const hash = result.href.slice(1);
                    window.dispatchEvent(
                      new CustomEvent("portfolio-search-target", {
                        detail: hash,
                      }),
                    );
                  }
                }}
              >
                <span>
                  <small>{result.category}</small>
                  <strong>{result.title}</strong>
                  <span className={styles.excerpt}>{result.text}</span>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
