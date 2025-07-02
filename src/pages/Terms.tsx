
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="section-padding">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Terms of <span className="gradient-text">Service</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Last updated: December 15, 2024
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Briefly's email digest service, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Briefly provides an AI-powered email digest service that analyzes and summarizes your email communications. Our service helps you manage email overload by providing intelligent insights and prioritization.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      To use our service, you must create an account and provide accurate information. You are responsible for:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Maintaining the security of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Providing accurate and up-to-date information</li>
                      <li>Complying with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to use our service to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the rights of others</li>
                    <li>Transmit harmful, offensive, or illegal content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of our service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      For paid services, you agree to pay all fees as described in our pricing page. Payment terms include:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Fees are billed in advance on a monthly or annual basis</li>
                      <li>All fees are non-refundable except as required by law</li>
                      <li>We may change our fees with 30 days' notice</li>
                      <li>Failure to pay may result in service suspension</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The service and its original content, features, and functionality are and will remain the exclusive property of Briefly and its licensors. The service is protected by copyright, trademark, and other laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Briefly be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium">Briefly Legal Team</p>
                    <p className="text-muted-foreground">Email: legal@briefly.com</p>
                    <p className="text-muted-foreground">Phone: 1-800-BRIEFLY</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
