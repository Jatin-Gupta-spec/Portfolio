import type { ReactNode } from "react";
export function Section({
  id,
  number,
  title,
  children,
  className = "",
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${className}`}
    >
      <div className="section-heading">
        <span className="eyebrow" aria-hidden="true">
          {number}
        </span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
