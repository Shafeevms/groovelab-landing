import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Refund Policy — Drumion",
};

/**
 * Refund Policy
 * Updated to meet Paddle’s domain-review requirements:
 * • mentions legal entity “GrooveLab”;
 * • grants an unconditional 14-day refund window;
 * • removes all extra qualifiers / case-by-case wording.
 */
export default function RefundPage() {
    return (
        <LegalPage title="Refund Policy" current="refund">
            <p>
                This Refund Policy explains how cancellations and refund requests are handled for Drumion
                subscriptions. Drumion is operated by <strong>GrooveLab</strong>, an Individual
                Entrepreneur registered in Georgia. Payments are processed by Paddle, our payment provider
                and Merchant of Record.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 1. 14-Day Refund Window                                         */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                1. 14-Day Refund Window
            </h2>
            <p>
                In accordance with Paddle’s refund policy, you may request a full refund{" "}
                <strong>within 14&nbsp;calendar&nbsp;days of the original purchase</strong>. No questions
                asked.
            </p>
            <p>
                After the 14-day period has elapsed, payments become non-refundable except where a refund is
                required by applicable law.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 2. Monthly Subscriptions                                        */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                2. Monthly Subscriptions
            </h2>
            <p>
                All Drumion plans are billed monthly in advance. Your subscription automatically renews each
                month unless you cancel before the next billing date. Prices are listed in USD. Applicable
                taxes may be added by Paddle at checkout depending on your location.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 3. Cancellation                                                 */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                3. Cancellation
            </h2>
            <p>
                You can cancel your subscription at any time. After cancellation you retain access to paid
                features until the end of the current billing period, and the subscription will not renew.
                Cancel via your account settings or by emailing:&nbsp;
                <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">
                    support@drumion.app
                </a>
                .
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 4. How to Request a Refund                                      */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                4. How to Request a Refund
            </h2>
            <p>
                Send an email to&nbsp;
                <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">
                    support@drumion.app
                </a>{" "}
                with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
                <li>the email used for the purchase;</li>
                <li>payment reference / receipt number;</li>
                <li>purchase date.</li>
            </ul>
            <p>We may request additional information to verify the payment.</p>

            {/* ---------------------------------------------------------------- */}
            {/* 5. Paddle as Merchant of Record                                 */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                5. Paddle as Merchant of Record
            </h2>
            <p>
                Payments and refunds are processed by Paddle. Refunds may appear on your statement as a
                credit from Paddle or a related billing descriptor.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 6. Processing Time                                              */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                6. Processing Time
            </h2>
            <p>
                Once approved, refunds are issued through Paddle. The time it takes for funds to reach your
                account depends on your bank, card issuer, or payment-method provider (typically a few
                business days).
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 7. Taxes and Fees                                               */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                7. Taxes and Fees
            </h2>
            <p>
                If taxes were charged on your purchase, the refunded amount will include the relevant tax
                portion according to Paddle’s processing rules and applicable law. Any currency-conversion
                differences or bank fees are outside our control.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 8. Failed Payments                                              */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                8. Failed Payments
            </h2>
            <p>
                If a subscription payment fails, Paddle may retry or ask you to update the payment method.
                Access to paid features may be limited or suspended until payment is completed. Failed
                payment attempts do not create an active paid subscription unless payment eventually
                succeeds.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 9. Changes to This Policy                                       */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                9. Changes to This Policy
            </h2>
            <p>
                We may update this Refund Policy from time to time. If we make material changes, we will
                notify users by updating the effective date, showing an in-app notice, or sending an email
                where appropriate.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* 10. Contact                                                     */}
            {/* ---------------------------------------------------------------- */}
            <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">
                10. Contact
            </h2>
            <p>
                Questions about cancellations or refunds? Email&nbsp;
                <a href="mailto:support@drumion.app" className="text-[#a3e635] hover:underline">
                    support@drumion.app
                </a>
                .
            </p>

            {/* Link back to pricing / other legal pages if needed */}
            <p className="mt-6">
                See also our{" "}
                <Link href="/pricing" className="text-[#a3e635] hover:underline">
                    Pricing&nbsp;page
                </Link>{" "}
                for subscription information.
            </p>
        </LegalPage>
    );
}
