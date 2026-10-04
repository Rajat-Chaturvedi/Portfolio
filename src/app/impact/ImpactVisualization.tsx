"use client";

import { useEffect, useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { UI_CONTENT } from "../constants";
import type { ImpactVisualization as Visualization } from "../types/impactMetric";
import styles from "./impact.module.css";

interface Props {
  slug: string;
  visualization: Visualization;
}

export default function ImpactVisualization({ slug, visualization }: Props) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  useEffect(() => {
    const syncHash = () => setExpanded(window.location.hash === `#${slug}`);
    syncHash();
    const frame = window.requestAnimationFrame(syncHash);
    window.addEventListener("hashchange", syncHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHash);
    };
  }, [slug]);

  return (
    <div className={styles.visualization}>
      <button
        className={styles.visualizationToggle}
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((current) => !current)}
      >
        <span>
          {expanded
            ? UI_CONTENT.impact.hideVisualization
            : UI_CONTENT.impact.showVisualization}
        </span>
        {expanded ? (
          <ChevronUp size={18} aria-hidden="true" />
        ) : (
          <ChevronDown size={18} aria-hidden="true" />
        )}
      </button>
      {expanded && (
        <div id={contentId} className={styles.visualizationContent}>
          {visualization.kind === "indexed-reduction" && (
            <figure className={styles.chart}>
              <figcaption>{UI_CONTENT.impact.relativeIndexTitle}</figcaption>
              <div
                className={styles.barChart}
                role="img"
                aria-label={`${visualization.baselineLabel}: index ${visualization.baseline}; ${visualization.resultLabel}: index ${visualization.result}`}
              >
                {[
                  {
                    label: visualization.baselineLabel,
                    value: visualization.baseline,
                  },
                  {
                    label: visualization.resultLabel,
                    value: visualization.result,
                  },
                ].map((point) => (
                  <div className={styles.barRow} key={point.label}>
                    <span>{point.label}</span>
                    <div className={styles.barTrack}>
                      <span
                        className={styles.bar}
                        style={{ width: `${Math.min(point.value, 100)}%` }}
                      />
                    </div>
                    <strong>{point.value}</strong>
                  </div>
                ))}
              </div>
              <p className={styles.chartNote}>{visualization.explanation}</p>
            </figure>
          )}
          {visualization.kind === "metric-pair" && (
            <figure className={styles.chart}>
              <figcaption>{visualization.title}</figcaption>
              <div className={styles.metricPair}>
                {visualization.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metricValue}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
              {visualization.note && (
                <p className={styles.chartNote}>{visualization.note}</p>
              )}
            </figure>
          )}
          {visualization.kind === "before-after" && (
            <figure className={styles.chart}>
              <figcaption>{visualization.title}</figcaption>
              <div className={styles.beforeAfterGrid}>
                {visualization.metrics.map((metric) => (
                  <div className={styles.beforeAfterRow} key={metric.label}>
                    <strong>{metric.label}</strong>
                    <span>{metric.before}</span>
                    <span aria-hidden="true">{UI_CONTENT.impact.beforeAfter}</span>
                    <strong>{metric.after}</strong>
                  </div>
                ))}
              </div>
              {visualization.note && (
                <p className={styles.chartNote}>{visualization.note}</p>
              )}
            </figure>
          )}
          {visualization.kind === "metric-set" && (
            <figure className={styles.chart}>
              <figcaption>{visualization.title}</figcaption>
              <div className={styles.metricPair}>
                {visualization.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metricValue}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
              {visualization.note && (
                <p className={styles.chartNote}>{visualization.note}</p>
              )}
            </figure>
          )}
          {visualization.kind === "provider-list" && (
            <figure className={styles.chart}>
              <figcaption>{UI_CONTENT.impact.providerListTitle}</figcaption>
              <ol className={styles.providerList}>
                {visualization.providers.map((provider) => (
                  <li key={provider}>{provider}</li>
                ))}
              </ol>
            </figure>
          )}
        </div>
      )}
    </div>
  );
}
