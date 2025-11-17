import { Link } from "react-router-dom";

const Help = () => {
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Comment ajouter un widget HabitoX sur iPhone</h1>
            <p className="text-muted-foreground mb-8">
              Les widgets HabitoX vous permettent de suivre vos habitudes directement depuis votre écran d'accueil, 
              sans avoir à ouvrir l'application. Voici comment les configurer sur votre iPhone.
            </p>

            {/* Widget Types Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Types de widgets disponibles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-3">Widget Habit du jour</h3>
                  <p className="text-muted-foreground text-sm">
                    Affiche votre habitude actuelle avec le temps restant et permet de cocher directement depuis le widget.
                  </p>
                </div>
                <div className="bg-background/50 p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-3">Widget Statistiques</h3>
                  <p className="text-muted-foreground text-sm">
                    Montre vos progrès quotidiens et votre streak actuel pour rester motivé.
                  </p>
                </div>
              </div>
            </section>

            {/* Instructions Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Instructions étape par étape</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Accédez au mode édition</h3>
                    <p className="text-muted-foreground">
                      Sur votre écran d'accueil, appuyez longuement sur un widget ou une zone vide jusqu'à ce que les applications se mettent à trembler.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Ouvrez le menu des widgets</h3>
                    <p className="text-muted-foreground">
                      Appuyez sur le bouton <span className="bg-background/50 px-2 py-1 rounded text-sm font-mono">+</span> dans le coin supérieur gauche de l'écran.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Sélectionnez HabitoX</h3>
                    <p className="text-muted-foreground">
                      Recherchez "HabitoX" dans la liste des applications ou faites défiler jusqu'à le trouver.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Choisissez votre widget</h3>
                    <p className="text-muted-foreground">
                      Sélectionnez la taille et le type de widget qui vous convient le mieux, puis appuyez sur "Ajouter un widget".
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Positionnez le widget</h3>
                    <p className="text-muted-foreground">
                      Faites glisser le widget à l'endroit souhaité sur votre écran d'accueil et appuyez sur "Terminé".
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Fonctionnalités des widgets</h2>
              <div className="bg-background/50 p-6 rounded-xl border border-border">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Interaction directe :</strong> Cochez vos habitudes directement depuis le widget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Mise à jour en temps réel :</strong> Les données se synchronisent automatiquement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Différentes tailles :</strong> Choisissez la taille qui s'intègre le mieux à votre écran</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Accès rapide :</strong> Appuyez sur le widget pour ouvrir l'application</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Dépannage</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Widget ne s'affiche pas ?</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    Assurez-vous que l'application HabitoX est installée et que vous êtes connecté à votre compte.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Widget ne se met pas à jour ?</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Redémarrez votre iPhone ou supprimez et réajoutez le widget pour résoudre les problèmes de synchronisation.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-primary/10 to-success/10 p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">Besoin d'aide supplémentaire ?</h3>
              <p className="text-muted-foreground mb-4">
                Si vous rencontrez des difficultés ou avez des questions, n'hésitez pas à nous contacter.
              </p>
              <a 
                href="mailto:habitoxts@gmail.com" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                📧 Contacter le support
              </a>
            </div>
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

export default Help;
