"use server"

export default async function PrivacyPolicyPage() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-heading  mb-4 text-center">Privacy Policy</h1>
        <p className="text-lg text-center mb-8 text-muted-foreground">The Privacy Policy for MUJ Central 2.0.</p>
  
        <p className="italic mb-8">Effective Date: January 2025</p>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Introduction</h2>
          <p>
            Welcome to <strong>MUJ Central 2.0</strong>. This Privacy Policy outlines how we collect, use, and safeguard
            your information. By using our platform, you consent to the practices described in this policy.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Consent</h2>
          <p>
            By using MUJ Central 2.0, you consent to our Privacy Policy and agree to its terms. If you do not agree,
            please refrain from using the platform.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ol className="list-decimal pl-6 space-y-4 mt-4">
            <li>
              <strong>User-Provided Information:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Name and email address during registration.</li>
                <li>
                  Confession submissions include the user's name for administrative purposes, even though confessions are
                  posted anonymously.
                </li>
              </ul>
            </li>
            <li>
              <strong>Automatically Collected Information:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Device details, browser type, and usage analytics to improve the app.</li>
              </ul>
            </li>
            <li>
              <strong>Content-Specific Data:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Confessions posted in the app are logged with the user's name to ensure accountability for harmful or
                  offensive content.
                </li>
              </ul>
            </li>
          </ol>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Maintain and improve the functionality of the platform.</li>
            <li>
              Ensure accountability and monitor content in the <strong>Confessions</strong> section to prevent offensive
              or harmful posts.
            </li>
            <li>Communicate with you regarding updates, inquiries, or issues.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Confessions Section</h2>
          <p>
            Confessions on MUJ Central 2.0 are designed to be <strong>anonymous</strong> for users. However, for
            moderation purposes:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>We log the name of the user submitting a confession.</li>
            <li>
              If a confession contains harmful, offensive, or inappropriate content, we reserve the right to identify the
              user and take appropriate action, including content removal or reporting the user to relevant authorities if
              necessary.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Data Security</h2>
          <p>We prioritize the security of your personal information. Measures include:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Encryption of sensitive data.</li>
            <li>Restricted access to user information, limited to authorized personnel.</li>
            <li>Regular audits to ensure compliance with privacy best practices.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Data Retention</h2>
          <p>
            We retain user data only as long as necessary to fulfill the purposes outlined in this policy. Confession
            submission data is securely stored and only accessed in cases requiring moderation.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Request access to the information we store about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent for data processing (where applicable).</li>
          </ul>
          <p className="mt-4">
            To exercise your rights, contact us at <strong>[Insert Contact Email]</strong>.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-heading bold mb-4">Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices. Notifications of significant changes
            will be provided via email or app notifications.
          </p>
        </section>
      </div>
    )
  }
  
  