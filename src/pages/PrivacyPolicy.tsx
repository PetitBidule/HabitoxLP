
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen bg-gradient-subtle text-foreground overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-success opacity-20 blur-3xl" />

      {/* Header */}
      <header className="w-full border-b border-border bg-background/60 backdrop-blur z-20">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo_launcher_habitox_android.png" alt="HabitoX logo" className="w-8 h-8 rounded-md object-contain" />
              <span className="text-xl font-bold">HabitoX</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You respond to our advertisements and tells You about Your privacy rights and how the law protects You. We use Your Personal Data to contact and support you, as well as to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Information Collection and Use</h2>
            <p className="text-muted-foreground">
            When contacting us (e.g. via contact form or e-mail), personal data is collected. Which data is collected when using a contact form can be seen from the respective contact form in the app. This data is stored and used exclusively for the purpose of answering your request or for contacting you and the associated technical administration. The legal basis for the processing of this data is our legitimate interest in answering your request in accordance with Article 6 (1) (f) GDPR. If your contact is aimed at concluding a contract, the additional legal basis for processing is Art. 6 (1) (b) GDPR. Your data will be deleted once your request has been processed. This is the case if it can be inferred from the circumstances that the facts in question have been finally clarified and provided that there are no legal storage obligations to the contrary.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Stripe</h2>
            <p className="text-muted-foreground">
            In the case of in-app payments, payment is made via Stripe. to whom we pass on the information you provided during the ordering process together with the information about your order. Your data will be passed on in accordance with Article 6 Paragraph 1 Letter b GDPR exclusively for the purpose of payment processing and only to the extent that it is necessary for this. We have concluded an order processing contract with Stripe, with which we oblige the provider to protect the data of the app users and not to pass it on to third parties.
            <br /> <br />
            Further information on data protection by Stripe can be found here: <a href="https://stripe.com/fr/privacy" className="underline">https://stripe.com/fr/privacy</a>
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
            <p className="text-muted-foreground">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. <a href="mailto:habitoxts@gmail.com" className="underline">habitoxts@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">HabitoX</h3>
                <p className="text-background/80 text-sm leading-relaxed">
                  The revolutionary habit system that guarantees success by focusing on ONE habit at a time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="mailto:habitoxts@gmail.com" className="text-background/80 hover:text-background transition-colors">
                      habitoxts@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8">
              <p className="text-background/60 text-sm">
                © 2025 HabitoX. All rights reserved. | 
                <Link to="/privacy" className="hover:text-background ml-1">Privacy Policy</Link> | 
                <Link to="/terms" className="hover:text-background ml-1">Terms of Service</Link> |
                <Link to="/help" className="hover:text-background ml-1">Help</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;


