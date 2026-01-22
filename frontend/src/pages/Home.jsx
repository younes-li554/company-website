function Home() {
  return (
    <div className="page">

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our Company</h1>
        <p>We build modern digital solutions to help your business grow.</p>
        <button className="btn btn-light mt-3">Get Started</button>
      </div>

      {/* Services */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card-custom">
              <h3>Web Development</h3>
              <p>High-quality websites built with modern technologies.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-custom">
              <h3>UI / UX Design</h3>
              <p>Beautiful and user-friendly designs for better experience.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-custom">
              <h3>Consulting</h3>
              <p>Expert guidance to scale your business digitally.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div>
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card-custom">
              <h3>Experienced Team</h3>
              <p>Our team has years of experience in software development.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-custom">
              <h3>Client Focused</h3>
              <p>We focus on delivering solutions that bring real value.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
