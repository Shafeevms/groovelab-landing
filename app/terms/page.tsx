import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Terms of Service — Drumion",
};

/**
 * Terms of Service
 * Updated for Paddle domain-review:
 * • section “Business Information” now names the legal entity “GrooveLab”;
 * • Refunds section aligned with the unconditional 14-day window.
 */
export default function TermsPage() {
    return (
        <LegalPage title="Terms of Service" current="terms">
            <p>
                These Terms of Service (“Terms”) govern your access to and use of Drumion, a web application
                for drummers, music teachers, and students. By creating an account, subscribing to a paid
                plan, or using Drumion, you agree to these Terms. If you do not agree, please do not use the
                service.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 1. About Drumion                                               */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                1. About Drumion
            </h2>
            <p>
                Drumion is a subscription-based web application designed to help drummers, music teachers,
                and students practise, learn, and improve their musical skills. Features may include rhythm
                exercises, practice tools, educational content, student-management tools, and other
                music-related functionality.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 2. Business Information                                         */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                2. Business Information
            </h2>
            <p>
                Drumion is operated by <strong>GrooveLab</strong>, an Individual Entrepreneur registered in
                Georgia (“we”, “our”, “us”). For questions about these Terms or the service, email&nbsp;
                <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">
                    support@drumion.app
                </a>
                .
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 3. Eligibility                                                 */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">3. Eligibility</h2>
            <p>
                You may use Drumion only if you are legally able to enter into a binding contract. If you
                use Drumion on behalf of an organisation, you represent that you have authority to accept
                these Terms on its behalf.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 4. Account Registration                                         */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                4. Account Registration
            </h2>
            <p>To use certain features you must create an account and you agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
                <li>provide accurate and up-to-date information;</li>
                <li>keep your credentials secure and confidential;</li>
                <li>notify us of any unauthorised access to your account;</li>
                <li>be responsible for all activity that occurs under your account.</li>
            </ul>

            {/* ---------------------------------------------------------------- */}
            {/* 5. Subscriptions and Billing                                    */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                5. Subscriptions and Billing
            </h2>
            <p>
                Drumion offers monthly subscription plans. Current plans and prices are shown on our&nbsp;
                <Link href="/pricing" className="text-[#a3e635] hover:underline">
                    Pricing&nbsp;page
                </Link>
                . Prices are listed in USD unless stated otherwise. By subscribing, you authorise Paddle
                (our payment provider and Merchant of Record) to charge your chosen payment method
                automatically each month until you cancel.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 6. Payment Provider (Paddle)                                    */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                6. Payment Provider and Merchant of Record
            </h2>
            <p>
                Payments are processed by Paddle, which is responsible for payment processing, tax
                calculation, collection, remittance, and payment-related compliance. Drumion never stores
                your full card details. Depending on your location, Paddle may add taxes (e.g. VAT, GST) at
                checkout.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 7. Automatic Renewal                                            */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                7. Automatic Renewal
            </h2>
            <p>
                Subscriptions renew automatically each month unless you cancel before the next billing
                date. If payment fails, Paddle may retry or ask you to update the payment method. We may
                suspend access to paid features until payment succeeds.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 8. Cancellation                                                 */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                8. Cancellation
            </h2>
            <p>
                You may cancel at any time via account settings or by emailing&nbsp;
                <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">
                    support@drumion.app
                </a>
                . You retain access until the end of the current billing period and the subscription will
                not renew.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 9. Refunds                                                      */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">9. Refunds</h2>
            <p>
                You may request a full refund within <strong>14&nbsp;calendar&nbsp;days</strong> of the
                original purchase, as described in our&nbsp;
                <Link href="/refund" className="text-[#a3e635] hover:underline">
                    Refund&nbsp;Policy
                </Link>
                . After that window, fees are non-refundable unless required by law.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 10. Acceptable Use                                              */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                10. Acceptable Use
            </h2>
            <p>You agree not to use Drumion in a way that:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
                <li>violates any law or regulation;</li>
                <li>infringes the rights of others;</li>
                <li>attempts to gain unauthorised access to Drumion or its systems;</li>
                <li>uploads malware or abusive content;</li>
                <li>copies, resells, or exploits the service without permission;</li>
                <li>uses automated tools to scrape or overload the service.</li>
            </ul>
            <p>We may suspend or terminate access if these Terms are breached.</p>

            {/* ---------------------------------------------------------------- */}
            {/* 11. User Content                                                */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                11. User Content
            </h2>
            <p>
                You retain ownership of content you create or upload. You grant us a limited licence to
                store, process, and display your content only as needed to provide and improve Drumion. You
                are responsible for ensuring you have rights to any content you upload.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 12. Teacher and Student Use                                     */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                12. Teacher and Student Use
            </h2>
            <p>
                Teachers are responsible for managing student information and obtaining any required consent
                from parents or legal guardians when working with minors.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 13. Intellectual Property                                       */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                13. Intellectual Property
            </h2>
            <p>
                Drumion, including its software, design, and content, is owned by GrooveLab or its licensors
                and protected by intellectual-property laws. These Terms do not transfer any ownership.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 14. Service Availability                                        */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                14. Service Availability
            </h2>
            <p>
                We aim to keep Drumion available but do not guarantee uninterrupted or error-free service.
                We may modify, suspend, or discontinue parts of the service at any time.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 15. Changes to the Service                                      */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                15. Changes to the Service
            </h2>
            <p>
                We may add, change, or remove features from time to time. If a change materially affects
                your paid subscription, we will endeavour to give reasonable notice.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 16. Termination                                                 */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                16. Termination
            </h2>
            <p>
                You may stop using Drumion at any time. We may suspend or terminate your access if you
                breach these Terms, payment fails, or as required by law.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 17. Disclaimer                                                  */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">17. Disclaimer</h2>
            <p>
                Drumion is provided “as is” and “as available”. To the maximum extent permitted by law, we
                disclaim all warranties, including merchantability, fitness for a particular purpose, and
                non-infringement.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 18. Limitation of Liability                                     */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                18. Limitation of Liability
            </h2>
            <p>To the fullest extent permitted by law, we will not be liable for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
                <li>indirect, incidental, or consequential damages;</li>
                <li>loss of profits, revenue, data, or goodwill;</li>
                <li>
                    total damages exceeding the fees you paid for Drumion in the three months preceding the
                    claim.
                </li>
            </ul>

            {/* ---------------------------------------------------------------- */}
            {/* 19. Third-Party Services                                        */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                19. Third-Party Services
            </h2>
            <p>
                Drumion relies on third-party services such as Supabase (infrastructure) and Paddle
                (payments). Their terms and policies may apply to you.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 20. Privacy                                                     */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">20. Privacy</h2>
            <p>
                Your use of Drumion is also governed by our&nbsp;
                <Link href="/privacy" className="text-[#a3e635] hover:underline">
                    Privacy&nbsp;Policy
                </Link>
                .
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 21. Changes to These Terms                                      */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                21. Changes to These Terms
            </h2>
            <p>
                We may update these Terms from time to time. If changes are material, we will provide
                reasonable notice (e.g. update the effective date, show an in-app notice, or email you).
                Continued use of Drumion after the effective date constitutes acceptance of the updated
                Terms.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 22. Governing Law                                              */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                22. Governing Law
            </h2>
            <p>
                These Terms are governed by the laws of Georgia, unless mandatory consumer-protection laws
                in your country provide otherwise.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 23. Contact                                                    */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">23. Contact</h2>
            <p>
                Questions about these Terms? Email&nbsp;
                <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">
                    support@drumion.app
                </a>
                .
            </p>
        </LegalPage>
    );
}
