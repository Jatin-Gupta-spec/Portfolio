import { Container } from "../ui/container";
import { profile } from "../../content/about";
export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>{profile.name} · Engineering portfolio</p>
        <p>Content first. Systems underneath.</p>
        <a href="#main-content">Back to top ↑</a>
      </Container>
    </footer>
  );
}
