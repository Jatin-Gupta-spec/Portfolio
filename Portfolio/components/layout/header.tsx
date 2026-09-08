import { Container } from "../ui/container";
import { profile } from "../../content/about";
export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <a className="wordmark" href="/" aria-label={`${profile.name} — home`}>
          {profile.name}
          <span aria-hidden="true"> / SE</span>
        </a>
        <nav aria-label="Primary">
          <ul className="navigation">
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/#contact">
                Contact <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
