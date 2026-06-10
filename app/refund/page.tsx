import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy — GrooveLab",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" current="refund">
      <p>
        This Refund Policy explains how cancellations and refund requests are handled for GrooveLab subscriptions.
        GrooveLab is a subscription-based web application for drummers, music teachers, and students. Payments are processed by Paddle, our payment provider and Merchant of Record.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">1. Monthly Subscriptions</h2>
      <p>
        All GrooveLab plans are billed monthly in advance.
        Your subscription automatically renews each month unless you cancel it before the next billing date.
        Prices are listed in USD. Applicable taxes may be added by Paddle at checkout depending on your location.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">2. Cancellation</h2>
      <p>
        You can cancel your subscription at any time.
        After cancellation, you will continue to have access to your paid plan until the end of the current billing period. Your subscription will not renew after that period ends.
        You can cancel your subscription through the available account or billing settings, or by contacting us at: <a href="mailto:support@groovelab.app" className="text-[#a3e635] hover:underline">support@groovelab.app</a>
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">3. Refunds</h2>
      <p>
        Subscription payments are generally non-refundable once a billing period has started.
        This means that if you cancel your subscription, you will usually keep access to the paid features until the end of the current billing period, but you will not automatically receive a refund for the unused part of that period.
        However, we may consider refund requests on a case-by-case basis, especially where:
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>you were charged due to a technical error;</li>
        <li>you were charged after a confirmed cancellation;</li>
        <li>duplicate payments were made;</li>
        <li>you were unable to access the service due to a problem caused by GrooveLab;</li>
        <li>a refund is required by applicable law.</li>
      </ul>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">4. How to Request a Refund</h2>
      <p>
        To request a refund, please contact us at: <a href="mailto:support@groovelab.app" className="text-[#a3e635] hover:underline">support@groovelab.app</a>
      </p>
      <p>Please include:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[#a1a1aa]">
        <li>the email address used for your GrooveLab account;</li>
        <li>the email address used for payment, if different;</li>
        <li>the subscription plan;</li>
        <li>the date of the charge;</li>
        <li>a short explanation of the refund request.</li>
      </ul>
      <p>
        We may ask for additional information to verify the payment and review your request.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">5. Paddle as Merchant of Record</h2>
      <p>
        Payments for GrooveLab are processed by Paddle, which acts as Merchant of Record.
        This means Paddle is responsible for payment processing, tax calculation, tax collection, and tax remittance where applicable.
        Refunds may be processed through Paddle and may appear on your bank or card statement as a refund from Paddle or a related Paddle billing descriptor.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">6. Processing Time</h2>
      <p>
        If a refund is approved, it will be processed through Paddle.
        The time it takes for the refunded amount to appear in your account depends on your bank, card issuer, or payment method provider.
        Refunds may take several business days to appear after they are processed.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">7. Taxes and Fees</h2>
      <p>
        If applicable taxes were charged on your purchase, the refunded amount may include the relevant tax amount, depending on Paddle&apos;s processing rules and applicable law.
        Currency conversion differences, bank fees, or payment provider fees may be outside our control.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">8. Failed Payments</h2>
      <p>
        If a subscription payment fails, Paddle may retry the payment or ask you to update your payment method.
        If payment is not completed, access to paid features may be limited, suspended, or canceled.
        Failed payment attempts do not create an active paid subscription unless the payment is successfully completed.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">9. Changes to This Policy</h2>
      <p>
        We may update this Refund Policy from time to time.
        If we make material changes, we will take reasonable steps to notify users, such as by updating the effective date, showing an in-app notice, or sending an email where appropriate.
      </p>

      <h2 className="text-white text-2xl font-semibold tracking-[-0.5px] mt-8 mb-3">10. Contact</h2>
      <p>
        If you have any questions about cancellations or refunds, please contact us at: <a href="mailto:support@groovelab.app" className="text-[#a3e635] hover:underline">support@groovelab.app</a>
      </p>
    </LegalPage>
  );
}
