function ContactPage() {
  return (
    <main className="page">
      <section className="section contactSection pageTop">
        <p className="sectionLabel">Contact</p>

        <h2>Get in touch</h2>

        <p>
          Thanks for visiting my portfolio. I’m open to software development
          opportunities, placement experience, graduate roles, and project
          collaborations.
        </p>

        <p>
          The best way to reach me is by email, but you can also view my GitHub,
          LinkedIn, or CV below.
        </p>

        <div className="contactLinks">
          <a href="mailto:935ybanez@gmail.com">Email Me</a>

          <a href="https://github.com/ice-ybanez" target="_blank" rel="noreferrer">
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