import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Drumion",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" current="terms">
      <p>
        These Terms of Service govern your access to and use of Drumion, a web application for drummers, music teachers, and students.
        By creating an account, subscribing to a paid plan, or using Drumion, you agree to these Terms. If you do not agree, please do not use the service.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">1. About Drumion</h2>
      <p>
        Drumion is a subscription-based web application designed to help drummers, music teachers, and students practice, learn, organize, and improve their musical skills.
        Drumion may include features such as practice tools, educational content, rhythm exercises, student management tools, and other music-related functionality.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">2. Business Information</h2>
      <p>
        Drumion is operated by an Individual Entrepreneur registered in Georgia.
        For questions about these Terms or the service, you can contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">3. Eligibility</h2>
      <p>
        You may use Drumion only if you are legally able to enter into a binding agreement.
        If you use Drumion on behalf of a school, studio, company, or other organization, you confirm that you have authority to accept these Terms on behalf of that organization.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">4. Account Registration</h2>
      <p>To use some or all features of Drumion, you may need to create an account.</p>
      <p>You agree to:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>provide accurate and up-to-date information;</li>
        <li>keep your login credentials secure;</li>
        <li>not share your account with unauthorized users;</li>
        <li>notify us if you believe your account has been accessed without permission.</li>
      </ul>
      <p>You are responsible for all activity that occurs under your account.</p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">5. Subscriptions and Billing</h2>
      <p>
        Drumion offers monthly subscription plans.
        Available plans and prices are described on our <Link href="/pricing" className="text-[#a3e635] hover:underline">Pricing page</Link>. All prices are listed in USD, unless stated otherwise.
        All plans are billed monthly. You can cancel at any time.
        By subscribing to a paid plan, you authorize our payment provider, Paddle, to charge your selected payment method on a recurring basis until you cancel your subscription.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">6. Payment Provider and Merchant of Record</h2>
      <p>Payments for Drumion are processed by Paddle, our authorized payment provider and Merchant of Record.</p>
      <p>This means Paddle is responsible for:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>processing payments;</li>
        <li>calculating, collecting, and remitting applicable taxes;</li>
        <li>handling payment-related compliance;</li>
        <li>providing payment checkout and billing-related services.</li>
      </ul>
      <p>
        Drumion does not store your full credit card details. Payment information is handled securely by Paddle.
        Depending on your location, Paddle may add applicable taxes, such as VAT, GST, or sales tax, at checkout.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">7. Automatic Renewal</h2>
      <p>
        Your subscription automatically renews every month unless you cancel it before the next billing date.
        If payment fails, Paddle may retry the payment or ask you to update your payment method. If payment is not completed, we may suspend or limit access to paid features.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">8. Cancellation</h2>
      <p>
        You may cancel your subscription at any time.
        After cancellation, you will continue to have access to your paid plan until the end of the current billing period. After that, your subscription will not renew.
        To cancel, you may use the available account or billing settings, or contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">9. Refunds</h2>
      <p>
        Refunds are handled according to our <Link href="/refund" className="text-[#a3e635] hover:underline">Refund Policy</Link> and applicable law.
        Unless required by law or stated in our <Link href="/refund" className="text-[#a3e635] hover:underline">Refund Policy</Link>, subscription fees for the current billing period are generally non-refundable.
        Because Paddle acts as Merchant of Record, some refund processing may be handled through Paddle.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">10. Acceptable Use</h2>
      <p>You agree not to use Drumion in a way that:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>violates any law or regulation;</li>
        <li>infringes the rights of others;</li>
        <li>attempts to gain unauthorized access to Drumion, user accounts, or related systems;</li>
        <li>disrupts or damages the service;</li>
        <li>uploads malware, harmful code, or abusive content;</li>
        <li>copies, resells, sublicenses, or exploits Drumion without permission;</li>
        <li>uses automated tools to scrape, overload, or reverse engineer the service.</li>
      </ul>
      <p>We may suspend or terminate access if we believe these Terms have been violated.</p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">11. User Content</h2>
      <p>
        You may be able to create, upload, store, or share content through Drumion, such as exercises, lesson materials, notes, student-related information, or other materials.
        You retain ownership of content you create or upload.
        By using Drumion, you grant us a limited permission to store, process, display, and transmit your content only as needed to provide and improve the service.
        You are responsible for ensuring that you have the necessary rights to any content you upload or share.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">12. Teacher and Student Use</h2>
      <p>
        If you use Drumion as a teacher, you are responsible for how you manage student information and how you invite or communicate with students through the service.
        You agree not to upload sensitive student information unless it is necessary for your use of Drumion.
        If you work with minors, you are responsible for obtaining any required consent from parents or legal guardians, where applicable.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">13. Intellectual Property</h2>
      <p>
        Drumion, including its software, design, features, branding, and content, is owned by Drumion or its licensors and is protected by intellectual property laws.
        These Terms do not transfer ownership of Drumion or its intellectual property to you.
        You may use Drumion only as permitted under these Terms.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">14. Service Availability</h2>
      <p>
        We aim to keep Drumion available and reliable, but we do not guarantee that the service will always be uninterrupted, secure, or error-free.
        We may modify, suspend, or discontinue parts of the service at any time, including for maintenance, updates, security reasons, or business reasons.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">15. Changes to the Service</h2>
      <p>
        We may add, change, or remove features from Drumion over time.
        If a change materially affects your paid subscription, we will try to provide reasonable notice where practical.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">16. Termination</h2>
      <p>You may stop using Drumion at any time.</p>
      <p>We may suspend or terminate your access if:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>you violate these Terms;</li>
        <li>payment cannot be completed;</li>
        <li>your use creates risk or harm to Drumion, other users, or third parties;</li>
        <li>we are required to do so by law.</li>
      </ul>
      <p>
        After termination, your access to paid features may end. Certain sections of these Terms will continue to apply where necessary, including sections about payments, intellectual property, disclaimers, limitation of liability, and dispute-related provisions.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">17. Disclaimer</h2>
      <p>Drumion is provided on an &quot;as is&quot; and &quot;as available&quot; basis.</p>
      <p>
        We do not guarantee that Drumion will meet your specific needs, improve your musical performance, or produce any particular educational result.
        To the maximum extent permitted by law, we disclaim all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">18. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Drumion and its operators will not be liable for:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>indirect, incidental, special, consequential, or punitive damages;</li>
        <li>loss of profits, revenue, data, goodwill, or business opportunities;</li>
        <li>service interruptions, data loss, or unauthorized access beyond our reasonable control.</li>
      </ul>
      <p>
        To the maximum extent permitted by law, our total liability for any claim related to Drumion will not exceed the amount you paid for the service during the three months before the claim arose.
        Nothing in these Terms limits liability where it cannot legally be limited.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">19. Third-Party Services</h2>
      <p>Drumion relies on third-party services, including:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>Supabase for authentication, database, and backend infrastructure;</li>
        <li>Paddle for payment processing, billing, and tax handling.</li>
      </ul>
      <p>
        Your use of these third-party services may be subject to their own terms and policies.
        We are not responsible for third-party services outside our reasonable control.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">20. Privacy</h2>
      <p>
        Your use of Drumion is also subject to our <Link href="/privacy" className="text-[#a3e635] hover:underline">Privacy Policy</Link>, which explains how we collect, use, store, and protect personal data.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">21. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time.
        If we make material changes, we will take reasonable steps to notify users, such as by updating the effective date, showing an in-app notice, or sending an email where appropriate.
        Your continued use of Drumion after the updated Terms become effective means you accept the updated Terms.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">22. Governing Law</h2>
      <p>
        These Terms are governed by the laws applicable to the business operator registered in Georgia, unless mandatory consumer protection laws in your country provide otherwise.
        If you are a consumer, you may have mandatory legal rights under the laws of your country of residence that cannot be excluded by these Terms.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">23. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at: <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">support@drumion.app</a>
      </p>
    </LegalPage>
  );
}
