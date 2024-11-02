import React from "react";

const HelpPage = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: '#222' }}>Help & Support</h1>
      <p style={{ fontSize: '1.2em' }}>
        Welcome to the Help & Support page! Here you can find answers to frequently asked questions and resources to assist you with any issues you may encounter.
      </p>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2em', color: '#444' }}>Frequently Asked Questions</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '20px' }}>
          <li style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '1.5em', marginBottom: '10px' }}>How do I reset my password?</strong>
            <p>To reset your password, go to the login page and click on "Forgot password?" Follow the instructions to reset your password.</p>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '1.5em', marginBottom: '10px' }}>How do I update my profile information?</strong>
            <p>Navigate to your profile page and click on the "Edit Profile" button to update your details.</p>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '1.5em', marginBottom: '10px' }}>How do I contact support?</strong>
            <p>If you need further assistance, please email us at <a href="mailto:support@example.com" style={{ color: '#0066cc' }}>info@lmcc.net</a> or call us at (212) 219-9401.</p>
          </li>
        </ul>
      </section>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2em', color: '#444' }}>Contact Us</h2>
        <p style={{ fontSize: '1.2em' }}>For any other inquiries, feel free to reach out via our <a href="/contact" style={{ color: '#0066cc' }}>contact page</a>.</p>
      </section>
    </div>
  );
};

export default HelpPage;
