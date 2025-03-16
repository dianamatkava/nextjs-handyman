import React from "react";

export default function Privacy() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16" id="privacy">
      <h1 className="text-3xl font-bold mb-8 font-['Plus Jakarta Sans']">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            1. Information We Collect
          </h2>
          <p className="leading-relaxed">
            We collect information that you provide directly to us, including
            your name, email address, phone number, and any other information
            you choose to provide when using our services or contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            2. How We Use Your Information
          </h2>
          <p className="leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about our services</li>
            <li>Respond to your requests and inquiries</li>
            <li>Send you technical notices and support messages</li>
            <li>Protect against fraudulent or illegal activity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            3. Information Sharing
          </h2>
          <p className="leading-relaxed">
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to third parties. This does not include
            trusted third parties who assist us in operating our website or
            servicing you, as long as these parties agree to keep this
            information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            4. Data Security
          </h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            5. Cookies and Tracking
          </h2>
          <p className="leading-relaxed">
            Our website may use cookies and similar tracking technologies to
            track activity on our website and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            6. Your Rights
          </h2>
          <p className="leading-relaxed">
            You have the right to access, update, or delete your personal
            information. You can also object to or restrict certain processing
            of your data. To exercise these rights, please contact us using the
            information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            7. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 font-['Plus Jakarta Sans']">
            8. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us through the contact information provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
}
