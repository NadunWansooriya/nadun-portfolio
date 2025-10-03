export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">🛠️ Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <h3>🎬 DevSecOps Netflix Clone</h3>
          </div>
          <div className="project-content">
            <p>
              🚀 Full-stack Netflix clone with comprehensive DevSecOps implementation. Features React
              frontend, Docker containerization, Jenkins CI/CD, security scanning with SonarQube and
              Trivy, AWS EC2 deployment, and Kubernetes orchestration with ArgoCD. Includes
              real-time monitoring and alerts.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Jenkins</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">Prometheus</span>
              <span className="tech-tag">Grafana</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>🏦 Bank Cheque Printing System</h3>
          </div>
          <div className="project-content">
            <p>
              💼 Enterprise-grade Windows applications for major Sri Lankan banks including BOC,
              Sampath, Commercial Bank, and more. Features secure cheque printing, database
              integration, search functionality, comprehensive report generation, and advanced
              security protocols.
            </p>
            <div className="project-tech">
              <span className="tech-tag">C#</span>
              <span className="tech-tag">.NET</span>
              <span className="tech-tag">MS SQL</span>
              <span className="tech-tag">Crystal Reports</span>
              <span className="tech-tag">Barcode</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>🐠 IoT Smart Fish Tank</h3>
          </div>
          <div className="project-content">
            <p>
              🌊 Automated fish breeding tank with IoT sensors for pH, turbidity, and temperature
              monitoring. Features real-time web app alerts, automated cleaning systems, optimal
              condition maintenance using Arduino, and machine learning for predictive analytics.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Arduino</span>
              <span className="tech-tag">IoT</span>
              <span className="tech-tag">Sensors</span>
              <span className="tech-tag">Web App</span>
              <span className="tech-tag">ML</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>☁️ AWS Receipt Processing Tool</h3>
          </div>
          <div className="project-content">
            <p>
              🔄 Serverless solution for automated receipt text extraction and email summarization.
              Leverages AWS services including S3, Textract, Lambda, DynamoDB, and SES for seamless
              document processing workflow with 99.9% uptime.
            </p>
            <div className="project-tech">
              <span className="tech-tag">AWS Lambda</span>
              <span className="tech-tag">S3</span>
              <span className="tech-tag">Textract</span>
              <span className="tech-tag">DynamoDB</span>
              <span className="tech-tag">SES</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>🤖 AI Hand Gesture Control</h3>
          </div>
          <div className="project-content">
            <p>
              ✋ Innovative finger-gesture controlled servo automation system combining Arduino
              hardware with Python machine learning algorithms for intuitive human-computer
              interaction. Features real-time gesture recognition and responsive servo control.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Arduino</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">OpenCV</span>
              <span className="tech-tag">TensorFlow</span>
              <span className="tech-tag">Computer Vision</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>🎓 Intern Management System</h3>
          </div>
          <div className="project-content">
            <p>
              📚 Comprehensive MERN stack web application streamlining internship processes between
              students, universities, and companies. Features role-based access, application
              tracking, automated coordination workflows, and real-time notifications.
            </p>
            <div className="project-tech">
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">JWT</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>🎭 WATCH CAVE - Movie Platform</h3>
          </div>
          <div className="project-content">
            <p>
              🍿 Full-featured movie streaming platform built with MERN stack. Includes user
              authentication, movie catalog, search functionality, user reviews, watchlists, and
              responsive design for seamless viewing experience across devices.
            </p>
            <div className="project-tech">
              <span className="tech-tag">MERN Stack</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">JWT</span>
              <span className="tech-tag">Stripe API</span>
              <span className="tech-tag">Video Streaming</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>🔄 CI/CD Pipeline Automation</h3>
          </div>
          <div className="project-content">
            <p>
              ⚙️ Automated CI/CD pipeline using GitHub Actions to build and push Docker images to
              Docker Hub for Node.js applications. Features Dockerfile optimization, secured
              credentials with GitHub Secrets, and streamlined deployment with custom tagging
              strategies.
            </p>
            <div className="project-tech">
              <span className="tech-tag">GitHub Actions</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Docker Hub</span>
              <span className="tech-tag">YAML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
