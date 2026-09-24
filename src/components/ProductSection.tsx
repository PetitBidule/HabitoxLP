import { Card, CardContent } from "@/components/ui/card";
import { Lock, MessageCircle, Layers } from "lucide-react";

const mockupImages = [
  "/Apple iPhone 16 Pro Max Screenshot 1.png",
  "/Apple iPhone 16 Pro Max Screenshot 2.png",
  "/Apple iPhone 16 Pro Max Screenshot 3.png",
  "/Apple iPhone 16 Pro Max Screenshot 4.png",  
  "/Apple iPhone 16 Pro Max Screenshot 5.png",
];

// Screenshots ship with a white background around the device frame: clip to the phone outline
const phoneClip = (top: string) => ({ clipPath: `inset(${top} 5.8% 0 5.8% round 13% / 6%)` });

export const ProductSection = () => {
  const features = [
    {
      title: "Track",
      description: "Mark your session in one tap and watch your calendar fill up day after day.",
      image: mockupImages[0],
      clipTop: "11.9%",
      gradient: "from-emerald-50 to-emerald-100",
    },
    {
      title: "Customize",
      description: "Pick an icon, a color and a schedule that fit your habit and your life.",
      image: mockupImages[3],
      clipTop: "12.8%",
      gradient: "from-orange-50 to-rose-100",
    },
    {
      title: "Achievements",
      description: "Unlock badges as your routine grows, from your first seed to a full forest.",
      image: mockupImages[2],
      clipTop: "11.9%",
      gradient: "from-violet-50 to-violet-200",
    },
  ];

  const steps = [
    {
      icon: Lock,
      title: "Choose Your ONE Habit",
      description: "Select your single most important habit. Our system literally locks you into this choice—no adding more until you've succeeded."
    },
    {
      icon: MessageCircle,
      title: "Receive Intensive Micro-Coaching",
      description: "Get daily, personalized guidance specifically for your one habit. No generic advice—tailored support for your exact situation and obstacles."
    },
    {
      icon: Layers,
      title: "Master & Stack",
      description: "Once your habit becomes automatic (typically 30-90 days), unlock the ability to scientifically stack your next habit on top of your established routine."
    }
  ];

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Product Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              HabitoX
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-4">
              The Only Habit Platform That Guarantees Success by Doing Less
            </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The revolutionary approach that forces you to master ONE habit completely before allowing you to add another. 
            No complex features. No overwhelming dashboards. Just laser focus on what actually works.
          </p>
        </div>

          {/* Features Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12 leading-relaxed">
              Big on Features.
              <br />
              Deceptively Simple.
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={`relative flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b ${feature.gradient}`}
                >
                  <div className="px-7 pt-8">
                    <h4 className="text-2xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative h-[340px] mt-6 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={`HabitoX - ${feature.title}`}
                      style={phoneClip(feature.clipTop)}
                      className="absolute left-1/2 -translate-x-1/2 -top-12 w-[250px] max-w-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}

              {/* Wide card */}
              <div className="md:col-span-3 grid md:grid-cols-2 items-center rounded-3xl overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-100">
                <div className="px-7 pt-10 md:py-16 md:pl-14">
                  <h4 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
                    See your progress
                    <br />
                    at a glance
                  </h4>
                  <p className="text-base font-medium text-muted-foreground leading-relaxed max-w-sm">
                    Every habit gets its own history, so your streaks speak for themselves. And when you reach your goal, we celebrate it with you.
                  </p>
                </div>
                <div className="relative h-[380px] md:h-[440px] overflow-hidden">
                  <img
                    src="/Apple iPhone 16 Pro Max Screenshot 2.png"
                    alt="HabitoX - Habits overview"
                    style={phoneClip("11.9%")}
                    className="absolute left-[8%] md:left-[6%] -top-10 md:top-6 w-[220px] md:w-[250px] max-w-none"
                    loading="lazy"
                  />
                  <img
                    src="/Apple iPhone 16 Pro Max Screenshot 5.png"
                    alt="HabitoX - Objective completed"
                    style={phoneClip("12.8%")}
                    className="absolute left-[48%] md:left-[50%] top-8 md:top-20 w-[220px] md:w-[250px] max-w-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              How It Works - 3 Simple Steps
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-cta rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-cta-foreground">{index + 1}</span>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};