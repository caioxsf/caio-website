import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>Terms of Service</h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>1. Overview</h2>
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          auto-clipper web application and services (the “Service”), operated by
          Caio Nobile (“we”, “us”, or “our”). By accessing or using the Service,
          you agree to be bound by these Terms.
        </p>
      </section>

      <section>
        <h2>2. Description of the Service</h2>
        <p>
          auto-clipper is a tool that helps you transform long-form video content
          into short clips optimized for social platforms. Features may include:
        </p>
        <ul>
          <li>Importing or uploading video content.</li>
          <li>Automatically detecting and generating short clips.</li>
          <li>Adding subtitles, overlays, and formatting.</li>
          <li>Connecting to third-party platforms (such as TikTok) to publish clips.</li>
        </ul>
        <p>
          We may update or modify the Service over time, including adding or
          removing features.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          You may use the Service only if you are at least 18 years old (or the
          age of majority in your jurisdiction) and are legally able to enter into
          a binding contract. By using the Service, you represent and warrant that
          you meet these requirements.
        </p>
      </section>

      <section>
        <h2>4. Accounts and Security</h2>
        <p>
          To use certain features of the Service, you may need to create an
          account and provide accurate and complete information. You are
          responsible for maintaining the confidentiality of your account
          credentials and for all activity that occurs under your account.
        </p>
        <p>
          You agree to notify us immediately of any unauthorized use of your
          account or any other breach of security.
        </p>
      </section>

      <section>
        <h2>5. Content and Intellectual Property</h2>
        <p>
          You retain all rights to the video content and other materials that you
          upload or import into the Service (“User Content”). You grant us a
          non-exclusive, worldwide, royalty-free license to process, transform,
          and temporarily store your User Content solely for the purpose of
          providing the Service.
        </p>
        <p>
          The Service, including the underlying software, design, and branding, is
          owned by us or our licensors and is protected by intellectual property
          laws. You may not copy, modify, distribute, sell, or lease any part of
          the Service unless we give you written permission.
        </p>
      </section>

      <section>
        <h2>6. Use of Third-Party Platforms (e.g., TikTok)</h2>
        <p>
          The Service may allow you to connect your accounts on third-party
          platforms, such as TikTok, in order to publish clips directly. When you
          connect a third-party account, you authorize us to act on your behalf
          only to the extent necessary to provide the Service (for example,
          uploading videos you select).
        </p>
        <p>
          Your use of any third-party platform is also governed by that
          platform&apos;s own terms and policies. We are not responsible for the
          behavior, availability, or terms of those third-party services.
        </p>
      </section>

      <section>
        <h2>7. Prohibited Use</h2>
        <p>You agree not to use the Service to:</p>
        <ul>
          <li>Violate any applicable law or regulation.</li>
          <li>Infringe the rights of others, including copyrights and privacy rights.</li>
          <li>Upload or distribute harmful, abusive, or illegal content.</li>
          <li>Interfere with or disrupt the Service or its infrastructure.</li>
        </ul>
      </section>

      <section>
        <h2>8. Disclaimer of Warranties</h2>
        <p>
          The Service is provided “as is” and “as available” without warranties of
          any kind, whether express or implied, including but not limited to
          implied warranties of merchantability, fitness for a particular purpose,
          or non-infringement.
        </p>
      </section>

      <section>
        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible
          losses resulting from:
        </p>
        <ul>
          <li>Your use of or inability to use the Service.</li>
          <li>Any unauthorized access to or use of our servers or your data.</li>
          <li>Any interruption or cessation of the Service.</li>
        </ul>
      </section>

      <section>
        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will update
          the &quot;Last updated&quot; date at the top of this page. By continuing
          to use the Service after changes become effective, you agree to be bound
          by the revised Terms.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us via the
          contact information provided on{" "}
          <a href="https://caionobile.com" target="_blank" rel="noreferrer">
            https://caionobile.com
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default TermsOfService;
