import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Drumion",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" current="privacy">
      <p>
        This Privacy Policy explains how Drumion collects, uses, stores, and protects personal information when you use our website and web application.
        Drumion is a subscription-based web application for drummers, music teachers, and students.
        By using Drumion, you agree to the collection and use of information as described in this Privacy Policy.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">1. Who We Are</h2>
      <p>
        Drumion is operated by an Individual Entrepreneur registered in Georgia.
        If you have any questions about this Privacy Policy or your personal data, you can contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">2. Information We Collect</h2>
      <p>We collect only the information needed to provide, maintain, and improve Drumion.</p>

      <h3 className="text-white text-xl font-semibold tracking-tight mt-6 mb-2">Account Information</h3>
      <p>When you create an account, we may collect:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>name;</li>
        <li>email address;</li>
        <li>password or authentication credentials;</li>
        <li>account settings;</li>
        <li>subscription status.</li>
      </ul>
      <p>Passwords may be managed through our authentication provider and are not stored by us in plain text.</p>

      <h3 className="text-white text-xl font-semibold tracking-tight mt-6 mb-2">Subscription and Billing Information</h3>
      <p>Paid subscriptions are processed by Paddle, our payment provider and Merchant of Record.</p>
      <p>We may receive limited billing-related information from Paddle, such as:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>subscription plan;</li>
        <li>subscription status;</li>
        <li>transaction status;</li>
        <li>renewal or cancellation status;</li>
        <li>customer email;</li>
        <li>country or region for tax and billing purposes;</li>
        <li>invoice or receipt reference.</li>
      </ul>
      <p>
        Drumion does not store your full credit card number, CVV, or full payment card details. Payment card data is handled securely by Paddle.
      </p>

      <h3 className="text-white text-xl font-semibold tracking-tight mt-6 mb-2">Usage Information</h3>
      <p>When you use Drumion, we may collect information about how the service is used, such as:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>features you access;</li>
        <li>practice or learning activity within the app;</li>
        <li>saved exercises, grooves, lessons, or similar content;</li>
        <li>teacher-student relationships created inside the app;</li>
        <li>technical logs needed for security and troubleshooting.</li>
      </ul>

      <h3 className="text-white text-xl font-semibold tracking-tight mt-6 mb-2">Teacher and Student Information</h3>
      <p>If you use Drumion as a teacher, you may add or manage student-related information.</p>
      <p>This may include:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>student name;</li>
        <li>student email address, if invited or connected through the service;</li>
        <li>lesson notes;</li>
        <li>assignments;</li>
        <li>practice materials;</li>
        <li>progress-related information.</li>
      </ul>
      <p>Teachers are responsible for ensuring they have the necessary permission to add student information to Drumion, especially when working with minors.</p>

      <h3 className="text-white text-xl font-semibold tracking-tight mt-6 mb-2">Technical Information</h3>
      <p>We may automatically collect technical information, such as:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>IP address;</li>
        <li>browser type and version;</li>
        <li>device type;</li>
        <li>operating system;</li>
        <li>approximate location based on IP address;</li>
        <li>log data;</li>
        <li>error reports;</li>
        <li>date and time of access.</li>
      </ul>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">3. How We Use Information</h2>
      <p>We use personal information to:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>create and manage user accounts;</li>
        <li>provide access to Drumion features;</li>
        <li>manage subscriptions and account status;</li>
        <li>process billing-related events through Paddle;</li>
        <li>provide customer support;</li>
        <li>improve and maintain the service;</li>
        <li>detect and prevent fraud, abuse, and security issues;</li>
        <li>comply with legal obligations;</li>
        <li>communicate important service updates.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">4. Legal Bases for Processing</h2>
      <p>Where GDPR or similar privacy laws apply, we process personal data based on one or more of the following legal bases:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>Contract — to provide Drumion and manage your subscription;</li>
        <li>Legitimate interests — to maintain, secure, and improve the service;</li>
        <li>Consent — where consent is required, for example for certain communications or optional features;</li>
        <li>Legal obligation — where we must keep records or comply with applicable laws.</li>
      </ul>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">5. Payment Processing and Paddle</h2>
      <p>Payments are processed by Paddle, which acts as Merchant of Record for Drumion subscriptions.</p>
      <p>Paddle may collect and process payment and billing information, including:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>name;</li>
        <li>email address;</li>
        <li>billing address;</li>
        <li>payment method details;</li>
        <li>tax information;</li>
        <li>transaction details.</li>
      </ul>
      <p>
        Paddle is responsible for payment processing, tax calculation, tax collection, and tax remittance where applicable.
        Drumion does not control Paddle&apos;s full payment processing environment. Paddle processes payment data according to its own privacy policy and legal obligations.
        You can review Paddle&apos;s privacy information on Paddle&apos;s website.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">6. Data Storage and Supabase</h2>
      <p>Drumion uses Supabase for authentication, database, and backend infrastructure.</p>
      <p>
        Our application data is stored using Supabase infrastructure in the European Union region.
        Supabase may process data on our behalf as a service provider, including account data, authentication data, and application data.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">7. Cookies and Similar Technologies</h2>
      <p>Drumion may use cookies or similar technologies to:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>keep users signed in;</li>
        <li>remember preferences;</li>
        <li>secure the service;</li>
        <li>understand basic usage patterns;</li>
        <li>support payment and checkout flows.</li>
      </ul>
      <p>Some cookies may be required for the service to function properly.</p>
      <p>Where required by law, we will request consent for non-essential cookies.</p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">8. Emails and Communications</h2>
      <p>We may send you emails related to:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>account creation and login;</li>
        <li>subscription and billing status;</li>
        <li>security notices;</li>
        <li>service updates;</li>
        <li>support responses;</li>
        <li>important legal or policy changes.</li>
      </ul>
      <p>
        We may also send optional product or marketing emails if you have agreed to receive them. You can unsubscribe from marketing emails at any time.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">9. Data Sharing</h2>
      <p>We may share personal information only when necessary:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>with Supabase, to provide authentication, database, and backend services;</li>
        <li>with Paddle, to process subscriptions, billing, taxes, and payments;</li>
        <li>with service providers who help us operate Drumion;</li>
        <li>when required by law or legal process;</li>
        <li>to protect the rights, safety, and security of Drumion, users, or others;</li>
        <li>in connection with a business transfer, such as a merger or acquisition.</li>
      </ul>
      <p>We do not sell personal data.</p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">10. International Data Transfers</h2>
      <p>
        Drumion is operated from Georgia and uses service providers that may process data in other countries.
        Application data is stored with Supabase in the European Union region. However, some service providers, including Paddle or support tools, may process data internationally.
        Where required, we rely on appropriate safeguards for international data transfers, such as standard contractual clauses or equivalent legal mechanisms.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">11. Data Retention</h2>
      <p>We keep personal information only as long as necessary for the purposes described in this Privacy Policy.</p>
      <p>In general:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>account data is kept while your account is active;</li>
        <li>subscription and billing records may be kept as required for tax, accounting, legal, or compliance purposes;</li>
        <li>support communications may be kept for a reasonable period;</li>
        <li>technical logs are kept for a limited period unless needed for security or legal reasons.</li>
      </ul>
      <p>
        You may request deletion of your account by contacting us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
        Some information may need to be retained where required by law or for legitimate business purposes.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">12. Your Privacy Rights</h2>
      <p>Depending on your location, including if you are in the European Economic Area, the United Kingdom, or similar jurisdictions, you may have rights to:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>access your personal data;</li>
        <li>correct inaccurate data;</li>
        <li>delete your personal data;</li>
        <li>restrict or object to processing;</li>
        <li>request data portability;</li>
        <li>withdraw consent where processing is based on consent;</li>
        <li>lodge a complaint with a data protection authority.</li>
      </ul>
      <p>
        To exercise your rights, contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
        We may need to verify your identity before responding to your request.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">13. Children&apos;s Privacy</h2>
      <p>Drumion may be used by music teachers who work with students, including minors.</p>
      <p>Drumion is not intended for children to create accounts without appropriate consent where required by law.</p>
      <p>
        If a teacher adds information about a minor student, the teacher is responsible for obtaining any required consent from a parent or legal guardian.
        If you believe that a child&apos;s personal information has been provided without appropriate consent, please contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">14. Security</h2>
      <p>We use reasonable technical and organizational measures to protect personal information.</p>
      <p>These measures may include:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>secure authentication;</li>
        <li>encrypted connections;</li>
        <li>access controls;</li>
        <li>database security measures;</li>
        <li>limited access to personal data;</li>
        <li>monitoring and logging for security purposes.</li>
      </ul>
      <p>However, no online service can be guaranteed to be completely secure.</p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">15. Third-Party Links</h2>
      <p>
        Drumion may contain links to third-party websites or services.
        We are not responsible for the privacy practices, content, or security of third-party services that we do not control.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">16. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time.
        If we make material changes, we will take reasonable steps to notify users, such as by updating the effective date, showing an in-app notice, or sending an email where appropriate.
        Your continued use of Drumion after the updated Privacy Policy becomes effective means you acknowledge the updated policy.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">17. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy or your personal data, please contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
      </p>
    </LegalPage>
  );
}
