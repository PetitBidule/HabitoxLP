import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-4">
              These terms govern your use of HabitoX and related services.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Use of Service</h2>
            <p className="text-muted-foreground">
              Use the application responsibly and comply with applicable laws.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Liability</h2>
            <p className="text-muted-foreground">
              We provide the service "as is" without warranties. We are not liable for indirect damages.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
            <p className="text-muted-foreground">
              For questions, contact <a href="mailto:habitoxts@gmail.com" className="underline">habitoxts@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;


