
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="section-padding">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Privacy <span className="gradient-text">Policy</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Last updated: December 15, 2024
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Briefly, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email digest service. Please read this privacy policy carefully.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                        <li>Email addresses and account credentials</li>
                        <li>Name and contact information</li>
                        <li>Payment and billing information</li>
                        <li>Usage data and preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email Content</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We process your email content solely to provide our digest service. We use advanced encryption and security measures to protect this sensitive information.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>To provide and maintain our email digest service</li>
                    <li>To improve our AI algorithms and service quality</li>
                    <li>To communicate with you about your account and updates</li>
                    <li>To process payments and manage billing</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>End-to-end encryption for all email content</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Limited access controls and employee training</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only as long as necessary to provide our services or as required by law. Email content is processed in real-time and temporarily stored only as needed for digest generation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and associated data</li>
                    <li>Export your data</li>
                    <li>Opt out of certain data processing activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium">Briefly Privacy Team</p>
                    <p className="text-muted-foreground">Email: privacy@briefly.com</p>
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

export default Privacy;
