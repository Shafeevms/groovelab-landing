import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Pricing — Drumion",
};

export default function PricingPage() {
    return (
        <LegalPage title="Pricing" current="pricing">
            <p>
                Drumion is operated by <strong>GrooveLab</strong>, an Individual Entrepreneur registered in
                Georgia. Drumion is a subscription-based web application for drummers, music teachers, and
                students. Our plans are billed monthly in USD and can be cancelled at any time.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">Plans</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
                <li>
                    <strong>Basic — $9/month</strong> — Individual drummers who want to practise and improve
                    their groove skills
                </li>
                <li>
                    <strong>Pro — $19/month</strong> — Advanced users who need more features and flexibility
                </li>
                <li>
                    <strong>Teacher S — $19/month</strong> — Music teachers working with up to 5 students
                </li>
                <li>
                    <strong>Teacher M — $39/month</strong> — Music teachers working with up to 30 students
                </li>
                <li>
                    <strong>Teacher L — $79/month</strong> — Music teachers working with 30 + students
                </li>
            </ul>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">Billing</h2>
            <p>
                All plans are billed monthly in advance. By subscribing to a paid plan, you authorise our
                payment provider, Paddle, to charge your selected payment method on a recurring monthly
                basis until you cancel your subscription. Prices are listed in USD. Depending on your
                location, Paddle may apply taxes (e.g. VAT, GST, sales tax) at checkout.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                Payment Processing
            </h2>
            <p>
                Payments for Drumion are processed by Paddle, our authorised payment provider and Merchant
                of Record. Paddle is responsible for processing payments, handling applicable taxes, and
                managing payment-related compliance. Drumion never stores your full card details; card data
                is handled securely by Paddle.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">Taxes</h2>
            <p>
                Applicable taxes may be added at checkout depending on your country or region. Paddle, as
                Merchant of Record, is responsible for calculating, collecting, and remitting taxes,
                including EU VAT where required.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                Subscription Renewal
            </h2>
            <p>
                Your subscription renews automatically every month unless you cancel before the next
                billing date. If payment fails, Paddle may retry or ask you to update the payment method.
                Access to paid features may be limited or suspended until payment is completed.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                Cancellation &amp; Refunds
            </h2>
            <p>
                You can cancel your subscription at any time. After cancellation you keep access to the paid
                plan until the end of the current billing period. In line with Paddle’s policy, any user may
                request a full refund within <strong>14 calendar days</strong> of the original purchase. See
                our&nbsp;
                <Link href="/refund" className="text-[#a3e635] hover:underline">
                    Refund&nbsp;Policy
                </Link>{" "}
                for details.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">Plan Changes</h2>
            <p>
                You may upgrade or downgrade your plan where available. Changes may take effect immediately
                or at the start of the next billing period, depending on how the change is processed through
                Paddle.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                Free Trials &amp; Promotions
            </h2>
            <p>
                Drumion may offer free trials, discounts, or promotional pricing from time to time. Any such
                offer may be subject to additional terms, including eligibility requirements, duration, and
                the renewal price after the promotion ends.
            </p>

            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">Contact</h2>
            <p>
                Questions about pricing or billing? Email us at&nbsp;
                <a
                    href="mailto:support@drumion.app"
                    className="text-[#a3e635] hover:underline"
                >
                    support@drumion.app
                </a>
            </p>
        </LegalPage>
    );
}
