function About() {
  return (
    <div className="page">
      <h1>About Our Company</h1>

      <p>
        We are a software company specializing in building modern web
        applications and digital solutions.
      </p>

      <div className="row g-4 mt-4">
        <div className="col-md-6">
          <div className="card-custom">
            <h3>Our Mission</h3>
            <p>
              To help businesses succeed by delivering high-quality software
              solutions.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-custom">
            <h3>Our Vision</h3>
            <p>
              To become a trusted technology partner for companies worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
