export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">🌟 Let's Connect & Collaborate</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>nnnnnnn@gmail.com</p>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <h3>Phone</h3>
          <p>
            +94 78 3824 140
            <br />
            +94 75 2300 637
          </p>
        </div>

        <div className="contact-item">
          <div className="contact-icon">🔗</div>
          <h3>LinkedIn</h3>
          <p>
            <a href="https://linkedin.com/" style={{ color: "var(--primary)", textDecoration: "none" }}>
              Connect with me
            </a>
          </p>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <h3>Location</h3>
          <p>
            Nugegoda, Western Province
            <br />
            Sri Lanka
          </p>
        </div>
      </div>
    </section>
  );
}
