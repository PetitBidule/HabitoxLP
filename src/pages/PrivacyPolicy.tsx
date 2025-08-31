
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
            <a href="/" className="flex items-center gap-3">
              <img src="/logo_habitox_hero_section.png" alt="HabitoX logo" className="w-8 h-8 rounded-md object-contain" />
              <span className="text-xl font-bold">HabitoX</span>
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">
              We value your privacy. This policy explains what data we collect, how we use it,
              and your rights.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Data We Collect</h2>
            <p className="text-muted-foreground">
              Email addresses provided for updates on HabitoX development.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Data</h2>
            <p className="text-muted-foreground">
              We use your email solely to send updates, news, and early access information.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
            <p className="text-muted-foreground">
              For any questions, contact us at <a href="mailto:habitoxts@gmail.com" className="underline">habitoxts@gmail.com</a>.
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
                <Link to="/terms" className="hover:text-background ml-1">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;


