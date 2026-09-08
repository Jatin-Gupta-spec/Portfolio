import { Container } from "../components/ui/container";
export default function NotFound() {
  return (
    <Container>
      <div className="page-intro">
        <p className="eyebrow">404 / Not found</p>
        <h1>No page here.</h1>
        <p className="lead">
          This address does not match a published page or project.
        </p>
        <a className="button-link" href="/work">
          Return to work →
        </a>
      </div>
    </Container>
  );
}
