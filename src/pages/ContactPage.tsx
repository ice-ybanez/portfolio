function ContactPage() {
  return (
    <main className="page">
      <section className="section contactSection pageTop">
        <p className="sectionLabel">Contact</p>

        <h2>Let&apos;s build something useful.</h2>

        <p>
          I&apos;m interested in graduate and junior software development
          opportunities, particularly frontend and full-stack roles.
        </p>

        <p>
          You can contact me by email or view my GitHub, LinkedIn, and CV below.
        </p>

        <div className="contactLinks">
          <a href="mailto:935ybanez@gmail.com">Email Me</a>

          <a
            href="https://github.com/ice-ybanez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ice-ybanez"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="/Ice-Ybanez-CV.pdf" target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
