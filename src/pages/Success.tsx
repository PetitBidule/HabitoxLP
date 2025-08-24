import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, BookOpen, MessageCircle } from "lucide-react";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Track successful purchase
    if (sessionId) {
      // You can add analytics tracking here
      console.log('Purchase completed:', sessionId);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-card/80 backdrop-blur-sm border-success/20 shadow-2xl">
          <CardContent className="p-12">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-success-foreground" />
            </div>

            {/* Success Message */}
            <h1 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Welcome to Your{" "}
              <span className="bg-gradient-success bg-clip-text text-transparent">
                HabitoX!
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your purchase was successful! You now have access to the HabitoX. 
              Get ready to build habits that actually stick.
            </p>

            {/* Next Steps */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-success-light rounded-lg">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-success-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Download Your Materials</h3>
                  <p className="text-muted-foreground">Access your habit selection guide and system overview</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Choose Your First Habit</h3>
                  <p className="text-muted-foreground">Follow the system to select and lock in your ONE habit</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent rounded-lg">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Start Your Coaching</h3>
                  <p className="text-muted-foreground">Begin receiving daily micro-coaching for your habit</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full text-lg py-4 h-auto"
                onClick={() => {
                  // This would redirect to the member portal or app
                  window.open('https://app.microhabitmastery.com', '_blank');
                }}
              >
                Access Your Micro-Habit System
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => window.location.href = '/'}
              >
                Return to Homepage
              </Button>
            </div>

            {/* Support Info */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Need help getting started? Email us at{" "}
                <a href="mailto:hello@microhabitmastery.com" className="text-primary hover:underline">
                  hello@microhabitmastery.com
                </a>{" "}
                or check your email for detailed setup instructions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;