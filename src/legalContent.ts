// The approved legal documents, copied verbatim from the previous
// sonitransfer.com pages (terms-uk, privacy, cookie, refund, complaints and
// tc-belmoney). Only markup was normalised; the wording must not be edited
// without compliance review. Each document is English; a certified
// translation can be added later as another entry keyed by locale.

export type LegalTocEntry = { id: string; title: string };

export type LegalPageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  lastUpdated: string;
  version: string;
  /** Previous sonitransfer.com URL this document was published at. */
  legacyPath: string;
  toc: LegalTocEntry[];
  /** Approved document body as trusted, static HTML. */
  html: string;
};

export const legalPages: LegalPageContent[] = [
  {
    "slug": "terms-conditions",
    "title": "Terms & Conditions",
    "eyebrow": "Service terms",
    "description": "Read the Soni Transfer Terms & Conditions, version 2.1, last updated 25/11/2025.",
    "lastUpdated": "25/11/2025",
    "version": "2.1",
    "legacyPath": "/terms-uk.html",
    "toc": [
      {
        "id": "1-legal-compliance",
        "title": "1. Legal Compliance"
      },
      {
        "id": "2-pricing-exchange-rates-and-central-bank-guidance",
        "title": "2. Pricing, Exchange Rates & Central Bank Guidance"
      },
      {
        "id": "3-delivery-times",
        "title": "3. Delivery Times"
      },
      {
        "id": "4-security-of-funds",
        "title": "4. Security of Funds"
      },
      {
        "id": "5-contact-us",
        "title": "5. Contact Us"
      },
      {
        "id": "6-payment-transactions",
        "title": "6. Payment Transactions"
      },
      {
        "id": "7-liability-and-refunds",
        "title": "7. Liability and Refunds"
      },
      {
        "id": "8-changes-and-termination",
        "title": "8. Changes and Termination"
      },
      {
        "id": "9-general-provisions",
        "title": "9. General Provisions"
      },
      {
        "id": "10-governing-law-and-jurisdiction",
        "title": "10. Governing Law and Jurisdiction"
      },
      {
        "id": "11-acceptance-of-terms-and-related-policies",
        "title": "11. Acceptance of Terms and Related Policies"
      }
    ],
    "html": "<h2 id=\"1-legal-compliance\">1. Legal Compliance</h2><p><strong>Regulatory Status:</strong> Soni Transfer Ltd is registered as a Small Payment Institution (SPI) with the UK Financial Conduct Authority (FCA) under the Payment Services Regulations 2017 (FRN 798474) and is supervised by HMRC for AML compliance (Registration No. XWML00000122633).</p><p><strong>Our Obligations:</strong> As a regulated SPI, Soni Transfer is required to:</p><ul><li>Verify customer identity and address (KYC).</li><li>Record and retain details of all transactions.</li><li>Monitor for unusual or suspicious activity.</li><li>Comply with UK and international sanctions laws.</li><li>Report certain transactions to the relevant authorities where required by law.</li></ul><p><strong>Safeguards:</strong> Customer funds are segregated but are not covered by the FSCS.</p><p><strong>Customer Responsibility:</strong> Users must provide valid ID, proof of address, and source of funds when requested.</p><h2 id=\"2-pricing-exchange-rates-and-central-bank-guidance\">2. Pricing, Exchange Rates &amp; Central Bank Guidance</h2><ul><li><strong>Flat Fee:</strong> £1 per transfer, disclosed upfront.</li><li><strong>Exchange Rates:</strong> Displayed before confirmation and based on CBG guidance for Gambia.</li><li><strong>Mid-Market Rate Disclaimer:</strong> Rate may differ from Google/Reuters rates.</li><li><strong>Transparency:</strong> Total cost shown before transfer confirmation.</li><li><strong>Other Third-Party Charges:</strong> Bank or card fees may apply, outside our control.</li></ul><h2 id=\"3-delivery-times\">3. Delivery Times</h2><ul><li>Immediate transfers: Usually within 5 minutes.</li><li>Bank transfers: Depends on recipient bank, often same business day if funds received before 12:00 pm UK time.</li><li>Additional checks may delay transfers.</li><li>Maximum: Up to 3 business days in some cases.</li></ul><h2 id=\"4-security-of-funds\">4. Security of Funds</h2><ul><li>Client funds held in segregated accounts.</li><li>No FSCS coverage.</li><li>Good practice followed with reputable UK banking partners.</li></ul><h2 id=\"5-contact-us\">5. Contact Us</h2><ul><li>Website: <a href=\"https://www.sonitransfer.com\" target=\"_blank\" rel=\"noreferrer\">www.sonitransfer.com</a></li><li>Email: <a href=\"mailto:support@sonitransfer.com\">support@sonitransfer.com</a></li><li>Phone: +44 (0)121 532 0769</li><li>WhatsApp / in-app messaging (where available)</li><li>Head Office: 9 Waterloo Road, Smethwick, Birmingham, UK, B66 4JX</li></ul><h2 id=\"6-payment-transactions\">6. Payment Transactions</h2><ul><li>Provide accurate beneficiary details.</li><li>Consent required before execution.</li><li>Right to refuse transactions in cases of incorrect info, fraud suspicion, or regulatory breach.</li><li>Compliance checks may require extra documentation.</li><li>Execution times vary; cut-off at 12:00 pm UK time.</li><li>Once credited to beneficiary, transfers cannot normally be reversed.</li></ul><h2 id=\"7-liability-and-refunds\">7. Liability and Refunds</h2><ul><li>Customer liability limited to £35 unless fraud or gross negligence.</li><li>Soni Transfer refunds unauthorised or incorrect transactions unless customer at fault.</li><li>Refunds issued to original payment method within 10 business days.</li></ul><h2 id=\"8-changes-and-termination\">8. Changes and Termination</h2><ul><li>Terms may be amended; material changes notified 2 months in advance.</li><li>Users may terminate agreement if they do not accept changes.</li><li>Services may be suspended for legal reasons, fraud, or breach of terms.</li></ul><h2 id=\"9-general-provisions\">9. General Provisions</h2><ul><li>Failure or delay does not waive rights.</li><li>Invalid provisions do not affect remaining terms.</li><li>Rights/obligations cannot be transferred without consent.</li><li>No third-party rights created.</li></ul><h2 id=\"10-governing-law-and-jurisdiction\">10. Governing Law and Jurisdiction</h2><p>Terms governed by laws of England and Wales. Exclusive jurisdiction of England and Wales courts. Complaints may be referred to the Financial Ombudsman Service (<a href=\"https://www.financial-ombudsman.org.uk\" target=\"_blank\" rel=\"noreferrer\">www.financial-ombudsman.org.uk</a>).</p><h2 id=\"11-acceptance-of-terms-and-related-policies\">11. Acceptance of Terms and Related Policies</h2><p>By using Soni Transfer services, you accept these Terms and related policies, including Privacy Policy, Cookie Policy, Refunds &amp; Cancellations Policy, and Marketing &amp; Communications Policy.</p>"
  },
  {
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "eyebrow": "Data protection",
    "description": "Read the Soni Transfer Privacy Policy, version 2.1, last updated 25/11/2025.",
    "lastUpdated": "25/11/2025",
    "version": "2.1",
    "legacyPath": "/privacy.html",
    "toc": [
      {
        "id": "1-who-we-are",
        "title": "1. Who we are"
      },
      {
        "id": "2-what-data-we-collect",
        "title": "2. What data we collect"
      },
      {
        "id": "3-why-we-use-your-data-and-lawful-bases",
        "title": "3. Why we use your data and lawful bases"
      },
      {
        "id": "4-automated-decisions-and-manual-review",
        "title": "4. Automated decisions and manual review"
      },
      {
        "id": "5-how-we-share-your-data",
        "title": "5. How we share your data"
      },
      {
        "id": "6-international-transfers",
        "title": "6. International transfers"
      },
      {
        "id": "7-vulnerable-customers",
        "title": "7. Vulnerable customers"
      },
      {
        "id": "8-how-we-protect-your-data",
        "title": "8. How we protect your data"
      },
      {
        "id": "9-how-long-we-keep-your-data",
        "title": "9. How long we keep your data"
      },
      {
        "id": "10-your-rights",
        "title": "10. Your rights"
      },
      {
        "id": "11-cookies-and-tracking",
        "title": "11. Cookies and tracking"
      },
      {
        "id": "12-changes-to-this-policy",
        "title": "12. Changes to this policy"
      },
      {
        "id": "13-contact-us",
        "title": "13. Contact us"
      }
    ],
    "html": "<h2 id=\"1-who-we-are\">1. Who we are</h2><p>This Privacy &amp; Cookie Policy explains how Soni Transfer Ltd (“Soni Transfer”, “we”, “us”, “our”) collects, uses, and protects your personal data.</p><ul><li>Company number: 10832378</li><li>Registered office: 9 Waterloo Road, Birmingham, B66 4JX, United Kingdom</li><li>ICO registration: ZA499115</li><li>FCA registration: Small Payment Institution, ref. 798474</li></ul><p>Soni Transfer acts as a data controller under UK and EU data protection law. Our services are intended for customers aged 18 and over.</p><h2 id=\"2-what-data-we-collect\">2. What data we collect</h2><ul><li>Identity data: full name, date of birth, nationality, ID documents, proof of address.</li><li>Contact data: residential address, email, telephone number.</li><li>Financial data: payment card details, bank account information, source of funds.</li><li>Recipient data: beneficiary name, address, phone number (with their consent).</li><li>Technical data: IP address, browser type/version, device type, login timestamps.</li><li>Behavioural data: pages visited, clicks, drop-offs on our website or app.</li><li>Support data: enquiries, complaints, correspondence.</li><li>Marketing data: preferences, opt-in/opt-out status.</li></ul><p>We may receive data from third parties, including your bank, KYC/AML providers, credit/fraud-prevention agencies, and public sources. We do not knowingly collect data from children.</p><h2 id=\"3-why-we-use-your-data-and-lawful-bases\">3. Why we use your data and lawful bases</h2><h3>We will only process your personal data where we have a lawful basis <br>under UK GDPR or EU GDPR:</h3><ul><li>Contract: to provide our remittance service and manage your account.</li><li>Legal obligation: to comply with AML/CTF, tax, and record-keeping laws.</li><li>Legitimate interests: to prevent fraud, keep systems secure, improve services.</li><li>Consent: for marketing communications and non-essential cookies.</li></ul><p>We do not sell your data to third parties.</p><h2 id=\"4-automated-decisions-and-manual-review\">4. Automated decisions and manual review</h2><p>We use automated checks to help verify identity, prevent fraud and financial crime, and protect our services. These processes may automatically decline or pause an application or transaction.<br><br>If this happens, you will be notified, and you can request an explanation and a manual review</p><h2 id=\"5-how-we-share-your-data\">5. How we share your data</h2><ul><li>Payment providers (banks, card processors)</li><li>Payout partners in Gambia</li><li>KYC/AML and fraud-prevention agencies</li><li>Regulators and law enforcement where legally required</li><li>Credit reference agencies (if applicable)</li><br><p>All third parties are required by contract to use personal data only for specified purposes <br>and to apply appropriate security measures.</p></ul><h2 id=\"6-international-transfers\">6. International transfers</h2><p>Some data may be transferred outside the UK/EU. We ensure safeguards like UK IDTA, EU SCC addendums, and transfer impact assessments.</p><h2 id=\"7-vulnerable-customers\">7. Vulnerable customers</h2><p>We record limited info to tailor our services for customers needing additional support (health or financial difficulties).</p><h2 id=\"8-how-we-protect-your-data\">8. How we protect your data</h2><ul><li>Encryption of data in transit and at rest</li><li>Firewalls and intrusion detection</li><li>Access controls and multi-factor authentication</li><li>PCI-DSS compliant card processing</li><li>Staff training on data protection and AML</li><li>Breach response procedures, notifying ICO/EU DPAs and affected customers</li></ul><h2 id=\"9-how-long-we-keep-your-data\">9. How long we keep your data</h2><ul><li>KYC/transaction data: 5 years after last transaction</li><li>Complaints: 6 years after resolution</li><li>Marketing data: until unsubscribe or 24 months of inactivity</li><li>Cookies/analytics data: according to Cookie Policy</li></ul><h2 id=\"10-your-rights\">10. Your rights</h2><p>You have rights under UK &amp; EU GDPR, including access, rectification, erasure, restriction, portability, objection, withdraw consent, and not to be subject to automated decisions.</p><h2 id=\"11-cookies-and-tracking\">11. Cookies and tracking</h2><p>We use essential, analytics, and marketing cookies. Non-essential cookies are only used with your consent. You can withdraw consent anytime via our cookie banner.</p><h2 id=\"12-changes-to-this-policy\">12. Changes to this policy</h2><p>We may update this policy. Latest version will always be on our website. Significant changes will be communicated by email.</p><h2 id=\"13-contact-us\">13. Contact us</h2><ul><li>Email: <a href=\"mailto:support@sonitransfer.com\">support@sonitransfer.com</a></li><li>Post: 9 Waterloo Road, Birmingham, B66 4JX, United Kingdom</li><li>Phone/WhatsApp: +447438473456</li><li>ICO (UK): www.ico.org.uk / 0303 123 1113</li><li>EU residents: contact local Data Protection Authority <a href=\"https://edpb.europa.eu\" target=\"_blank\" rel=\"noreferrer\">EDPB</a></li></ul>"
  },
  {
    "slug": "cookie-policy",
    "title": "Cookie Policy",
    "eyebrow": "Cookies",
    "description": "Read the Soni Transfer Cookie Policy, version 2.1, last updated 25/11/2025.",
    "lastUpdated": "25/11/2025",
    "version": "2.1",
    "legacyPath": "/cookie.html",
    "toc": [
      {
        "id": "1-what-are-cookies",
        "title": "1. What are cookies?"
      },
      {
        "id": "2-types-of-cookies-we-use",
        "title": "2. Types of cookies we use"
      },
      {
        "id": "3-how-you-can-control-cookies",
        "title": "3. How you can control cookies"
      },
      {
        "id": "4-similar-technologies",
        "title": "4. Similar technologies"
      },
      {
        "id": "5-updates-to-this-policy",
        "title": "5. Updates to this policy"
      },
      {
        "id": "6-contact-us",
        "title": "6. Contact us"
      },
      {
        "id": "cookies-and-similar-technologies-used-by-soni-transfer",
        "title": "Cookies and Similar Technologies Used by Soni Transfer"
      }
    ],
    "html": "<p>This Cookie Policy explains how Soni Transfer Ltd (“Soni”, “we”, “us”) uses cookies and similar technologies on our website.</p><h2 id=\"1-what-are-cookies\">1. What are cookies?</h2><p>Cookies are small text files stored on your device when you visit our site. They help us remember your choices, improve your experience, and keep the site secure. Some cookies are essential for the website to work, while others are optional and only used with your consent.</p><h2 id=\"2-types-of-cookies-we-use\">2. Types of cookies we use</h2><h3>a) Strictly necessary cookies (always on)</h3><p>These cookies are essential for the site and our services to work. They:</p><ul><li>Keep the site secure.</li><li>Remember your cookie preferences.</li><li>Enable payments and login sessions.</li></ul><p>You cannot switch these off.</p><h3>b) Analytics cookies (optional)</h3><p>These help us understand how visitors use our site, so we can improve it. For example:</p><ul><li>Counting visitors and tracking which pages are popular.</li><li>Seeing where users drop off during sign-up.</li></ul><p>We only use these if you give us permission.</p><h3>c) Marketing cookies (optional)</h3><p>These are used to deliver more relevant ads, and to measure the effectiveness of our marketing. For example:</p><ul><li>Showing Soni ads on other websites after you visit us.</li><li>Limiting how often you see the same advert.</li></ul><p>Again, we only use these if you give us permission.</p><h2 id=\"3-how-you-can-control-cookies\">3. How you can control cookies</h2><p>When you first visit our site, you’ll see a cookie banner. From there you can:</p><ul><li>Accept all cookies</li><li>Reject non-essential cookies</li><li>Manage settings to choose which categories you allow</li></ul><p>You can also change your choice at any time by clicking “Manage Cookies” in the footer of our site. You can also block cookies directly in your browser settings. If you block all cookies (including essential ones), some parts of the site may not work.</p><h2 id=\"4-similar-technologies\">4. Similar technologies</h2><p>We may also use similar technologies such as pixels (in marketing emails) or local storage (to save your settings). These are treated the same way as cookies under this policy.</p><h2 id=\"5-updates-to-this-policy\">5. Updates to this policy</h2><p>We may update this Cookie Policy from time to time. If changes are significant, we will let you know on our website.</p><h2 id=\"6-contact-us\">6. Contact us</h2><ul><li>Email: <a href=\"mailto:support@sonitransfer.com\">support@sonitransfer.com</a></li><li>Post: Soni Transfer Ltd, 9 Waterloo Road, Birmingham, B66 4JX, United Kingdom</li><li>Phone/WhatsApp: +44 7438 473456</li></ul><h2 id=\"cookies-and-similar-technologies-used-by-soni-transfer\">Cookies and Similar Technologies Used by Soni Transfer</h2><div class=\"legal-table\"><table><thead><tr><th>Cookie Type</th><th>Name/Example</th><th>Purpose</th><th>Session or Persistent</th><th>Lifespan</th><th>Third Party</th></tr></thead><tbody><tr><td>Strictly Necessary (Essential)</td><td>cookieConsent</td><td>Remembers your cookie preferences and ensures the site functions securely.</td><td>Persistent</td><td>6 months</td><td>No</td></tr><tr><td>Strictly Necessary (Essential)</td><td>sessionID</td><td>Maintains your login session while using the site.</td><td>Session</td><td>Until browser close</td><td>No</td></tr><tr><td>Functional</td><td>languagePref</td><td>Saves your language or region preference.</td><td>Persistent</td><td>12 months</td><td>No</td></tr><tr><td>Analytics / Performance</td><td>Google Analytics (_ga, _gid)</td><td>Helps us understand how visitors use our website so we can improve services.</td><td>Persistent</td><td>Up to 2 years</td><td>Google</td></tr><tr><td>Marketing (if enabled)</td><td>Facebook Pixel / Google Ads</td><td>Tracks visits to show relevant ads and measure ad effectiveness. Only active if consented.</td><td>Persistent</td><td>Up to 3 months</td><td>Meta / Google</td></tr></tbody></table></div>"
  },
  {
    "slug": "refunds-cancellations",
    "title": "Refunds and Cancellations Policy",
    "eyebrow": "Refunds",
    "description": "Read the Soni Transfer Refunds and Cancellations Policy, version 2.1, last updated 25/11/2025.",
    "lastUpdated": "25/11/2025",
    "version": "2.1",
    "legacyPath": "/refund.html",
    "toc": [
      {
        "id": "1-right-to-cancel",
        "title": "1. Right to Cancel"
      },
      {
        "id": "2-refund-process",
        "title": "2. Refund Process"
      },
      {
        "id": "3-transfers-already-paid-out",
        "title": "3. Transfers Already Paid Out"
      },
      {
        "id": "4-refunds-of-fees",
        "title": "4. Refunds of Fees"
      },
      {
        "id": "5-refunds-to-original-method-of-payment",
        "title": "5. Refunds to Original Method of Payment"
      },
      {
        "id": "6-consumer-rights",
        "title": "6. Consumer Rights"
      }
    ],
    "html": "<h2 id=\"1-right-to-cancel\">1. Right to Cancel</h2><ul><li>You may cancel a money transfer request at any time before the funds have been paid to the beneficiary.</li><li>Cancellation can be requested by: <ul><li>calling our customer support team;</li><li>using the cancellation function on our website or app (if available).</li></ul></li></ul><h2 id=\"2-refund-process\">2. Refund Process</h2><ul><li>If the transfer has not yet been paid to the beneficiary, we will refund the full amount back to your original payment method.</li><li>Refunds will be issued promptly. The time taken for the funds to appear may depend on your bank, card provider, or payment service.</li></ul><h2 id=\"3-transfers-already-paid-out\">3. Transfers Already Paid Out</h2><p>Once the funds have been paid to the beneficiary, the transaction is final. We will not be able to cancel or refund the transfer.</p><h2 id=\"4-refunds-of-fees\">4. Refunds of Fees</h2><ul><li>If we cancel the transaction due to our own error, we will refund both the transfer amount and any fees paid.</li><li>If you cancel a transaction for other reasons, fees may not be refundable.</li></ul><h2 id=\"5-refunds-to-original-method-of-payment\">5. Refunds to Original Method of Payment</h2><p>All refunds are made to the original payment method used for the transfer (for example, your debit card or bank account).</p><h2 id=\"6-consumer-rights\">6. Consumer Rights</h2><p>Nothing in this section affects your statutory rights under UK consumer law or the Payment Services Regulations 2017.</p>"
  },
  {
    "slug": "complaints-policy",
    "title": "Complaints Policy",
    "eyebrow": "Complaints",
    "description": "Read the Soni Transfer Complaints Policy, version 2.1, last updated 25/11/2025.",
    "lastUpdated": "25/11/2025",
    "version": "2.1",
    "legacyPath": "/complaints.html",
    "toc": [
      {
        "id": "how-to-make-a-complaint",
        "title": "How to make a complaint"
      },
      {
        "id": "what-happens-after-you-complain",
        "title": "What happens after you complain"
      },
      {
        "id": "if-you-are-not-satisfied",
        "title": "If you are not satisfied"
      }
    ],
    "html": "<p>At Soni Transfer, we aim to provide a reliable, transparent, and fair service. However, if something goes wrong, you have the right to complain, and we will do our best to resolve the issue quickly and fairly.</p><h2 id=\"how-to-make-a-complaint\">How to make a complaint</h2><p>You can make a complaint at any time, free of charge, by:</p><ul><li>Emailing us: <a href=\"mailto:support@sonitransfer.com\">support@sonitransfer.com</a></li><li>Calling us: +44 121 532 0769 or WhatsApp: +44 7438 473456</li><li>Writing to us: Soni Transfer Ltd, 9 Waterloo Road, Birmingham, B66 4JX, United Kingdom</li></ul><p>Complaints can also be made verbally or in writing to any member of staff.</p><h2 id=\"what-happens-after-you-complain\">What happens after you complain</h2><ol><li><strong>Acknowledgement:</strong> We will confirm that we have received your complaint promptly.</li><li><strong>Investigation:</strong> Our Compliance Officer will review your case fairly and thoroughly.</li><li><strong>Final Response:</strong><ul><li>We aim to resolve complaints within 15 business days.</li><li>If we need more time, we will explain why and send a final response within 35 business days at the latest (as required by the Payment Services Regulations).</li></ul></li><li><strong>Outcome:</strong> Our response will explain our findings, any remedial action we will take, and your right to escalate your complaint if you are not satisfied.</li></ol><h2 id=\"if-you-are-not-satisfied\">If you are not satisfied</h2><p>If you are unhappy with our final response, or if we do not provide a final response within the timeframes above, you have the right to refer your complaint to the Financial Ombudsman Service (FOS).</p><p>Contact details:</p><ul><li>Website: <a href=\"https://www.financial-ombudsman.org.uk\" target=\"_blank\" rel=\"noreferrer\">www.financial-ombudsman.org.uk</a></li><li>Online form: FOS Complaint Form</li><li>Phone: 0800 023 4567 or 0300 123 9123 (UK)</li><li>Post: Financial Ombudsman Service, Exchange Tower, London, E14 9SR</li></ul><p>You must refer your complaint to the FOS within 6 months of receiving our final response.</p>"
  },
  {
    "slug": "belmoney-terms",
    "title": "Belmoney Terms & Conditions",
    "eyebrow": "Partner terms",
    "description": "Read the Soni Transfer Belmoney Terms & Conditions, version 2.1, last updated 25/11/2025.",
    "lastUpdated": "25/11/2025",
    "version": "2.1",
    "legacyPath": "/tc-belmoney.html",
    "toc": [
      {
        "id": "regulatory-information",
        "title": "Regulatory Information"
      },
      {
        "id": "definitions",
        "title": "Definitions"
      },
      {
        "id": "1-our-agreement-with-you",
        "title": "1. OUR AGREEMENT WITH YOU"
      },
      {
        "id": "2-our-services",
        "title": "2. OUR SERVICES"
      },
      {
        "id": "3-getting-started-and-using-our-services",
        "title": "3. GETTING STARTED AND USING OUR SERVICES"
      },
      {
        "id": "4-sending-money",
        "title": "4. SENDING MONEY"
      },
      {
        "id": "5-paying-for-our-services-and-currency-exchange",
        "title": "5. PAYING FOR OUR SERVICES AND CURRENCY EXCHANGE"
      },
      {
        "id": "6-receiving-money",
        "title": "6. RECEIVING MONEY"
      },
      {
        "id": "7-important-service-restrictions",
        "title": "7. IMPORTANT SERVICE RESTRICTIONS"
      },
      {
        "id": "8-data-protection-and-privacy",
        "title": "8. DATA PROTECTION AND PRIVACY"
      },
      {
        "id": "9-error-cancellations-and-refunds",
        "title": "9. ERROR, CANCELLATIONS, AND REFUNDS"
      },
      {
        "id": "10-agreement-duration-and-termination",
        "title": "10. AGREEMENT DURATION AND TERMINATION"
      },
      {
        "id": "11-intellectual-property",
        "title": "11. INTELLECTUAL PROPERTY"
      },
      {
        "id": "12-disclaimers",
        "title": "12. DISCLAIMERS"
      },
      {
        "id": "13-customer-responsibility-for-losses",
        "title": "13. CUSTOMER RESPONSIBILITY FOR LOSSES"
      },
      {
        "id": "14-belmoney-s-liability",
        "title": "14. BELMONEY’S LIABILITY"
      },
      {
        "id": "15-dispute-resolution-and-governing-law",
        "title": "15. DISPUTE RESOLUTION AND GOVERNING LAW"
      },
      {
        "id": "16-customer-security-obligations",
        "title": "16. CUSTOMER SECURITY OBLIGATIONS"
      },
      {
        "id": "17-changes-to-services-and-agreement",
        "title": "17. CHANGES TO SERVICES AND AGREEMENT"
      },
      {
        "id": "18-other-terms",
        "title": "18. OTHER TERMS"
      }
    ],
    "html": "<h2 id=\"regulatory-information\">Regulatory Information</h2><p>Belmoney S.A., with registered office at Avenue Louise 54, 1050 Ixelles, Belgium, and company number 0540.745.997 RPM Brussels, is an authorised payment institution supervised by the National Bank of Belgium (NBB) under Directive (EU) 2015/2366 on payment services (PSD2). Belmoney is also subject to Belgian and EU legislation on Anti‑Money Laundering and Counter Terrorist Financing (AMLD), the General Data Protection Regulation (GDPR – Regulation (EU) 2016/679), and applicable consumer protection laws.</p><h2 id=\"definitions\">Definitions</h2><p>For the purposes of this Agreement:</p><ul><li>“Agreement” means these Terms &amp; Conditions, together with the Privacy Policy and Cookie Policy.</li><li>“Belmoney”, “we”, “us”, or “our” refers to Belmoney S.A.</li><li>“Customer”, “you”, or “your” refers to the individual using Belmoney’s Services.</li><li>“Services” means money transfer, foreign exchange, Remittance as a Service (RaaS), correspondent activities (the HUB), and online remittance via the “Happ” app.</li><li>“Transaction” means a payment order executed by Belmoney on behalf of a customer.</li><li>“Sender” means the person instructing Belmoney to send money.</li><li>“Beneficiary” means the person designated to receive the funds.</li><li>“Funding Instrument” means a debit card, credit card, or bank transfer used to pay for a Transaction.</li><li>“Business Day” means any day banks in Belgium are open for business, excluding weekends and public holidays.</li><li>“High-Risk Country” means a jurisdiction designated as high-risk by the EU, FATF, or Belgian authorities.</li><li>“Restricted Activities” means activities prohibited under Section 7.3.</li></ul><h2 id=\"1-our-agreement-with-you\">1. OUR AGREEMENT WITH YOU</h2><p>1.1 <strong>Parties Involved</strong><br>These Terms and Conditions (“Agreement”) govern your use of the online payment services provided by Belmoney SA (“Belmoney”, “we”, “us”, “our”), a payment institution authorised and supervised by the National Bank of Belgium registered at Avenue Louise 54, 1050 Ixelles, Belgium, company number 0540.745.997. By creating a Profile and/or using the Services, you agree to be bound by this Agreement.</p><p>1.2 <strong>Related Documents</strong><br>This Agreement should be read together with our Privacy Policy and Cookie Policy (together, the “Policies”). The Policies describe how we process personal data and use cookies and similar technologies.</p><p>1.3 <strong>Access to this Agreement and Policies</strong><br>The current versions of this Agreement and the Policies are available on our website/app. Please download and keep a copy. We may update them in accordance with Section 18.</p><p>1.4 <strong>Acceptance of Terms</strong><br>You accept this Agreement by ticking to accept during registration or before initiating a transaction, or by continuing to use the Services.</p><p>1.5 <strong>Key information you should review</strong><br>Please pay particular attention to: <ul><li>Section 4 (Sending Money) – how to fund and submit transfers.</li><li>Section 5 (Fees &amp; FX) – service fees, exchange rates, and third-party charges.</li><li>Section 7 (Restrictions) – prohibited/restricted activities and our rights.</li><li>Section 9 (Errors/Refunds) – how to report issues and when refunds apply.</li><li>Section 14 (Liability) – limits and exclusions.</li><li>Section 18 (Changes) – how we change Services/terms consistent with applicable law.</li></ul><strong>IMPORTANT:</strong> By continuing to use our Services, you signify your understanding and acceptance of the terms outlined in this Agreement.</p><h2 id=\"2-our-services\">2. OUR SERVICES</h2><p>2.1 <strong>Money Transfers</strong><br>The Services enable customers resident in the EEA (and other supported locations listed on our website) to send funds to a Beneficiary via supported payout methods (e.g., account deposit, wallet, cash payout) in designated corridors. A “Transaction Amount” is the amount you fund; the “Payout Amount” is what the Beneficiary receives, net of applicable fees and FX.</p><p>2.2 <strong>Intended Use</strong><br>The Services are intended for personal, consumer use (peer-to-peer and family support). Use for commercial payments or for persons you do not know, or trust is not permitted unless explicitly allowed by Belmoney.</p><p>2.3 <strong>Third-Party Agreements</strong><br>The Services may rely on third-party Service Providers (banks, processors, payout agents, telecom providers). Your use of such services may be subject to additional terms imposed by those providers.</p><h2 id=\"3-getting-started-and-using-our-services\">3. GETTING STARTED AND USING OUR SERVICES</h2><p>3.1 <strong>Profile Creation</strong><br>You must create a Profile to use the Services. A Profile is not a bank or payment account and does not hold funds.</p><p>3.2 <strong>Registration</strong><br>You must provide accurate information and complete KYC as required (see Section 8). You may need to create security credentials and install our app.</p><p>3.3 <strong>Individual Use</strong><br>You must act on your own behalf and not on behalf of others.</p><p>3.4 <strong>Keep information up to date</strong><br>You must keep your details (including residency address) accurate and up to date and promptly notify changes. Changes in residency may affect eligibility and applicable terms.</p><p>3.5 <strong>Eligibility</strong><br>To use the Services, you must: (a) accept this Agreement; (b) be 18+; (c) be resident in a supported country (as listed on our website); and (d) complete identity verification and other checks.</p><p>3.6 <strong>Restricted Persons and Territories</strong><br>You may not use the Services if you are subject to sanctions or in jurisdictions we do not support. We may apply enhanced due diligence or decline transactions involving high-risk jurisdictions consistent with AML/CFT laws (see Section 7.2).</p><p>3.7 <strong>Single Profile</strong><br>You may hold one Profile. We may limit multiple emails or instruments linked to a single individual.</p><h2 id=\"4-sending-money\">4. SENDING MONEY</h2><p>4.1 <strong>Funding instruments</strong><br>You may fund a transfer by card (credit/debit) or bank transfer (e.g., SEPA), as made available. By selecting a card, you: (a) authorize charges for the Transaction Amount and fees; (b) confirm the card is valid and lawfully yours; and (c) authorize us to verify with the issuer.</p><p>4.2 <strong>Bank funded payments</strong><br>Pay from a bank account in your own name using the reference/instructions we provide, within the specified timeframe. You are responsible for providing correct amounts and references.</p><p>4.3 <strong>If funding is incorrect</strong><br>If payment is late, from an ineligible account, for an incorrect amount, or with wrong references, we may: (a) delay or cancel the Transaction; (b) refund subject to checks; (c) suspend/terminate the Services; or (d) comply with any legal/regulatory process impacting refunds.</p><p>4.4 <strong>Processing</strong><br>Submitting a transfer is an offer to us. We may accept or decline in our discretion (consistent with law and this Agreement). The Services are for consumer use only.</p><p>4.5 <strong>Transaction execution time (indicative)</strong><br>Execution depends on corridor, payout method, bank cut-offs, controls, and time zones. Estimated times will be shown before you confirm. Times are indicative and not guaranteed. For example:</p><ul><li>Brazil Account Deposit – Immediately</li><li>Brazil PIX – Immediately</li><li>International Account Deposit – Same day if made during the day. The operations made after 16:00 PM (CET) will be paid on the following day.</li><li>e‑Wallet Deposits – 3 hours</li><li>Cash pick‑ups – Available immediately for withdrawal in the corresponding agency</li><li>Home delivery – 24h</li></ul><p>4.6 <strong>Information we need</strong><br>We require: (a) accurate Sender/Beneficiary details; (b) cleared funds; (c) your consent; and (d) completion of any identity/limit/AML checks. If checks are pending, processing may be delayed.</p><p>4.7 <strong>Card authorization</strong><br>You authorize charges to your selected card. If a payment attempt fails, we may retry using the same instrument, in accordance with network rules and your issuer agreement.</p><p>4.8 <strong>Transaction Information</strong><br>Please check all details before confirming; changes may not be possible afterwards. Refunds/cancellations are handled under Section 9.</p><p>4.9 <strong>Accuracy</strong><br>Ensure all Transaction details are accurate as changes might not be possible after submission. Refunds or cancellations may be possible under specific circumstances.</p><p>4.10 <strong>Other protections</strong><br>Your card or bank provider’s agreement may give you additional protections (e.g., chargeback rules). Refer to that agreement.</p><h2 id=\"5-paying-for-our-services-and-currency-exchange\">5. PAYING FOR OUR SERVICES AND CURRENCY EXCHANGE</h2><p>5.1 <strong>Service fee</strong><br>You agree to pay the Service Fee displayed before you confirm. Fees may be deducted from the Transaction Amount or charged separately.</p><p>5.2 <strong>Payment methods</strong><br>Pay only via the methods we disclose (e.g., supported cards or bank transfers). We are not obliged to accept other payment methods.</p><p>5.3 <strong>Additional charges</strong><br>If our costs arise due to your funding instrument (e.g., insufficient funds, chargebacks), you agree to reimburse us on demand.</p><p>5.4 <strong>Currency conversion &amp; exchange rates (IFRS 15 disclosure)</strong><br>Where currency conversion applies, we will display the exchange rate and the resulting Payout Amount before you confirm. The rate disclosed must equal the rate applied. Belmoney, acting as Merchant of Record and principal under IFRS 15, records gross revenue and may earn a spread on FX. If there is any discrepancy between the disclosed and applied rate, we will correct it and arrange reimbursement of the difference. Repeated manipulation or mis-disclosure by any partner may lead to suspension or termination under Section 7.4.</p><p>5.5 <strong>Third-party fees</strong><br>Your bank, card issuer, telecom or internet provider may charge fees (e.g., cash-advance or international fees). You are responsible for these.</p><p>5.6 <strong>Taxes</strong><br>You are responsible for any taxes arising from your use of the Services, in accordance with applicable law.</p><h2 id=\"6-receiving-money\">6. RECEIVING MONEY</h2><p>6.1 <strong>Service providers</strong><br>Funds are made available to Beneficiaries through Belmoney’s network of local banks, financial institutions, and authorised agents (“Service Providers”). Service Provider locations, hours, and availability may vary. Funds not collected within 60 calendar days are cancelled and refunded to the Sender (less applicable fees).</p><p>6.2 <strong>Verification</strong><br>Beneficiaries must present valid government identification and any reference number provided by Belmoney or its Service Providers. Service Providers may impose additional verification requirements in compliance with local regulations.</p><h2 id=\"7-important-service-restrictions\">7. IMPORTANT SERVICE RESTRICTIONS</h2><p>7.1 <strong>Right to refuse transactions</strong><br>Belmoney may refuse or suspend any Transaction to protect Customers, comply with regulatory obligations, or mitigate risk.</p><p>7.2 <strong>High-risk countries</strong><br>Transactions involving High-Risk Countries are subject to enhanced due diligence. Belmoney may suspend, delay, or refuse such Transactions at its sole discretion.</p><p>7.3 <strong>Restricted activities</strong><br>Customers may not use Belmoney Services for illegal purposes, gambling, controlled substances, adult content, or other prohibited activities.</p><p>7.4 <strong>Actions we may take</strong><br>Belmoney may:</p><ul><li>Suspend or terminate Profiles.</li><li>Delay, cancel, or reverse Transactions.</li><li>Report suspicious activity to authorities.</li></ul><p>Customers will be notified where legally possible.</p><h2 id=\"8-data-protection-and-privacy\">8. DATA PROTECTION AND PRIVACY</h2><p>8.1 <strong>Privacy and Cookie Policies</strong><br>Processing of personal data is governed by Belmoney’s Privacy and Cookie Policies, available on our website.</p><p>8.2 <strong>Cross-border transfers</strong><br>Personal data may be transferred outside the EEA. Adequate safeguards (e.g., EU Standard Contractual Clauses) will apply.</p><p>8.3 <strong>Customer identification</strong><br>In compliance with AMLD, Belmoney collects and verifies personal data, including identity documents, proof of address, and information about the source of funds.</p><p>8.4 <strong>Disclosure to authorities</strong><br>Belmoney may disclose data to regulators, law enforcement, or judicial authorities as required by law.</p><h2 id=\"9-error-cancellations-and-refunds\">9. ERROR, CANCELLATIONS, AND REFUNDS</h2><ul><li><strong>Error Resolution:</strong> Customers must notify Belmoney promptly of any unauthorised or incorrect Transaction within 13 months.</li><li><strong>Cancellation:</strong> Transactions may be cancelled before completion. Completed Transactions are non-refundable, except where required by law.</li><li><strong>Refunds:</strong> Refunds are credited to the original Funding Instrument. Exchange rate differences will not be compensated.</li><li><strong>Tracing Payments:</strong> Customers may request payment traces within the EEA.</li></ul><h2 id=\"10-agreement-duration-and-termination\">10. AGREEMENT DURATION AND TERMINATION</h2><ul><li><strong>Cooling-Off Period:</strong> Customers may cancel this Agreement within 14 days of acceptance without penalty.</li><li><strong>Termination:</strong> Either party may terminate the Agreement with one month’s written notice.</li><li><strong>Post-Termination:</strong> Belmoney may retain Customer data as required by law.</li></ul><h2 id=\"11-intellectual-property\">11. INTELLECTUAL PROPERTY</h2><p>Belmoney owns all intellectual property rights related to its Services, trademarks, and software. Customers are granted a limited, non-exclusive, revocable license to use Belmoney’s app and website for personal, non-commercial use.</p><h2 id=\"12-disclaimers\">12. DISCLAIMERS</h2><ul><li>Services may occasionally be unavailable due to maintenance or regulatory obligations.</li><li>Belmoney is not responsible for disputes between Customers and third-party merchants.</li><li>While Belmoney applies security measures, it cannot guarantee absolute protection from unauthorised access.</li></ul><h2 id=\"13-customer-responsibility-for-losses\">13. CUSTOMER RESPONSIBILITY FOR LOSSES</h2><p>Customers are responsible for losses caused by:</p><ul><li>Breach of this Agreement.</li><li>Misuse of Services.</li><li>Fraudulent or negligent activity.</li></ul><h2 id=\"14-belmoney-s-liability\">14. BELMONEY’S LIABILITY</h2><p>14.1 <strong>General Responsibility</strong><br>We are liable for foreseeable loss and damage caused by our failure to comply with this Agreement or to use reasonable care and skill. We aren't responsible for unforeseeable loss or damage, or loss caused by your breach or fraudulent actions.</p><p>14.2 <strong>Defective Digital Content</strong><br>Paid Digital Content: If supplied for a fee, we're liable for ensuring it's of satisfactory quality, fit for purpose, matches description, and without a general claim that we lack the right to supply it. Remedies may include repair, replacement, or compensation, subject to Agreement terms. Damage to Device: We will repair damage or compensate if defective digital content damages your device due to our failure to use reasonable care and skill. Exceptions exist if damage could be avoided by applying a free update, not following instructions, or not meeting system requirements.</p><p>14.3 <strong>Exceptions to Liability Limits</strong><br>Our liability is limited except in cases involving death, personal injury, fraud, or fraudulent misrepresentation. In these instances, we acknowledge our legal responsibilities as required by applicable law.</p><p>14.4 <strong>Exclusion of Certain Losses</strong><br>We aren't liable for business-related losses or losses from our disbursement partners. Our services are for domestic and private use.</p><p>14.5 <strong>Compliance, Act of God and Force Majeure</strong><br>We shall not be held liable for any losses or damages arising from our compliance with legal and regulatory obligations or due to 'Events Outside Our Control.' These events are unforeseeable and beyond our reasonable control, and may include occurrences such as strikes, natural disasters, and significant network disruptions.</p><p>14.6 <strong>Definition of Act of God and Force Majeure</strong><br>'Events Outside Our Control' are defined as extraordinary events or circumstances beyond our reasonable control. These may encompass, but are not limited to, severe weather conditions, epidemics, pandemics, unavoidable technical failures, and essential system maintenance.</p><h2 id=\"15-dispute-resolution-and-governing-law\">15. DISPUTE RESOLUTION AND GOVERNING LAW</h2><p>15.1 <strong>Dispute Resolution</strong><br>In the event of any disputes arising from or relating to the services provided by Belmoney, customers are encouraged to first report their concerns directly to the Company. We prioritise addressing and resolving issues amicably between you, the customer, and Belmoney. Detailed information on how to file a complaint, including the contact details and procedures, is available on our website.</p><p>15.2 <strong>Alternative Dispute Resolution</strong><br>Unresolved disputes may be referred to Ombudsfin (Belgium). This process involves an independent third party who will review the dispute and propose a solution.</p><p>Escalation Steps:</p><ul><li>Contact Belmoney’s customer support to attempt direct resolution (support@bel.money)</li><li>If unresolved, escalate the dispute to Belmoney’s dedicated dispute resolution team (compliance@bel.money)</li><li>If still unresolved, proceed to engage Ombudsfin.</li></ul><p><strong>Belgian Ombudsfin (Financial Services Ombudsman)</strong> Contact Details: Address: Bd Roi Albert II 8, 1000 Bruxelles, Belgium, Phone: +32 2 545 77 70, Email: ombudsman@ombudsfin.be</p><p><strong>European Online Dispute Resolution Platform:</strong> Customers also have the option to use the European Online Dispute Resolution (ODR) platform, which is designed to assist consumers and traders in resolving their online disputes. This platform can be accessed at <a href=\"https://ec.europa.eu/odr\" target=\"_blank\" rel=\"noreferrer\">ec.europa.eu/odr</a>.</p><p>15.3 <strong>Governing Law</strong><br>The terms and conditions of use for Belmoney online services shall be governed by and construed in accordance with Belgian law, without regard to its conflict of law provisions.</p><h2 id=\"16-customer-security-obligations\">16. CUSTOMER SECURITY OBLIGATIONS</h2><p>16.1 <strong>Importance of security</strong><br>Security Measures: Belmoney prioritises user security, employing various measures to ensure information safety. Caution in Transactions: Users are advised to exercise caution when sending money, especially to unfamiliar entities. Deals or offers that seem too good to be true should be approached with caution.</p><p>16.2 <strong>User obligations for safe usage</strong><br>Safekeeping Funding Instruments and Credentials: Users are responsible for safeguarding Funding Instruments and Security Credentials (e.g., password).<br>Non-Disclosure: Users must not share Funding Instruments or Security Credentials, except during the use of Belmoney's Services.<br>Secure Password Practices: Users should avoid writing passwords in easily understandable ways and choose strong, non-guessable passwords.<br>Device Security: Devices used for Belmoney's Services should have virus checks and firewall protection.<br>Prompt Notification: Users must promptly notify Belmoney of any service failures, delays, malfunctions, viruses, or errors.<br>Contingency Planning: Users should have contingency plans to address service unavailability or system failures.<br>Compliance with Instructions: Users are required to follow Belmoney's instructions for keeping Funding Instruments and Service usage secure.</p><p>16.3 <strong>Biometric access</strong><br>Fingerprint Access: Belmoney may offer the functionality to use biometric information, like fingerprint scanning, for Service access.<br>Device Requirements: Users need a compatible device with the Belmoney app and enabled applications for biometric scanning.<br>Responsibility for Security: Users are responsible for ensuring that only their biometric information is registered on the device.</p><p>16.4 <strong>Compromised service notification</strong><br>Immediate Contact: Users should contact Belmoney immediately if they suspect fraud, unauthorised use, or compromised Services usage. Reporting Inappropriate Use: Users are encouraged to report any inappropriate use of the Service by contacting compliance@bel.money. Phishing Emails: Users should forward any fake (phishing) emails purportedly from Belmoney to compliance@bel.money.</p><h2 id=\"17-changes-to-services-and-agreement\">17. CHANGES TO SERVICES AND AGREEMENT</h2><p>17.1 <strong>Changes to the services</strong><br>Service Adjustments: Belmoney may introduce additional service functionalities or adjust for reasons such as software maintenance, bug fixes, or security threats. Subject to Agreement Terms: Additional services are subject to the terms of this Agreement or other terms and conditions provided during their availability.</p><p>17.2 <strong>Changes to this agreement</strong><br>Modification Authority: Belmoney reserves the right to make changes to this Agreement. User's Termination Right: Users have the right to terminate the Agreement without charge in response to changes.</p><p>17.3 <strong>Reasons for changes</strong><br>Various Reasons: Changes may be made for reasons such as correcting errors, reflecting new products or services, responding to legal requirements, and adapting to industry standards.</p><p>17.4 <strong>Notification of changes</strong><br>Communication Method: Changes are communicated by posting the revised Agreement on Belmoney's website and/or app.</p><p>17.5 <strong>Unilateral changes by Belmoney</strong><br>Material Change Definition: Users are given at least 2 months' notice of a Material Change, and they can terminate the Agreement without charge within this notice period.</p><h2 id=\"18-other-terms\">18. OTHER TERMS</h2><p>18.1 <strong>Enforcement flexibility</strong><br>Delayed Enforcement: The fact that we may not immediately enforce certain provisions or take immediate action against a breach of this Agreement does not waive our right to enforce those provisions or act later. For instance, if we provide Services despite a delayed payment, we can still request payment later.</p><p>18.2 <strong>Severability clause</strong><br>Legal Findings: If any court or relevant authority deems any part of this Agreement unlawful, the remaining sections will remain valid and enforceable. Each section operates independently.</p><p>18.3 <strong>Transfer of agreement</strong><br>Rights and Obligations Transfer: We reserve the right to transfer our rights and obligations under this Agreement to another organisation. Users will be notified of such a transfer, and they can terminate the Agreement if dissatisfied with the transfer.</p><p>18.4 <strong>User's transfer of rights</strong><br>Consent Requirement: Users can only transfer their rights or obligations under this Agreement to another person with our express written consent. Our consent may be restricted by legal and regulatory obligations, including anti-money laundering laws.</p><p>18.5 <strong>Rights enforcement</strong><br>Third-Party Rights: This Agreement is a binding contract between the user and Belmoney. No other person, except as explained in section 13 (Compensation you may owe us), has the right to enforce its terms.</p><p>18.6 <strong>Compensation Scheme Clarification</strong><br>No Compensation under Scheme: As Belmoney is not obligated to be part of any government compensation scheme, no compensation would be available under such a scheme in the unlikely event that Belmoney cannot meet its liabilities.</p>"
  },
];

export const getLegalPage = (slug: string) => legalPages.find((page) => page.slug === slug);
