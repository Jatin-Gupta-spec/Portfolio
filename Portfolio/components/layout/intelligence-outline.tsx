/** DOM source of truth. A later, isolated client canvas may enhance this section,
 * but must not replace these headings, explanations or keyboard interactions. */
export function IntelligenceOutline() {
  return (
    <div className="intelligence-outline">
      <div className="core-heading">
        <p className="eyebrow">System / Intelligence Core</p>
        <p className="status">Concept only · no WebGL</p>
      </div>
      <h3>
        From information
        <br />
        to understanding.
      </h3>
      <ol className="system-steps">
        <li>
          <span>01 / Information</span>
          <p>What is the input?</p>
        </li>
        <li>
          <span>02 / Evidence</span>
          <p>What can be verified?</p>
        </li>
        <li>
          <span>03 / Relationships</span>
          <p>How does it connect?</p>
        </li>
        <li>
          <span>04 / Analysis</span>
          <p>What does it mean?</p>
        </li>
      </ol>
      <details>
        <summary>Read the progressive-enhancement approach</summary>
        <p>
          The future interactive layer will help explain relationships and
          investigation. This reading map is conceptual, not SOC-IQ’s verified
          runtime architecture. All essential information stays in HTML, with or
          without JavaScript or WebGL.
        </p>
      </details>
    </div>
  );
}
