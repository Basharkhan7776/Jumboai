import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: November 14, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  At Jumbo AI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our services. Please read this privacy
                  policy carefully.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>We may collect information about you in a variety of ways, including:</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personal Data</h4>
                    <p>
                      Personally identifiable information such as your name, email address, phone number, and
                      company information that you voluntarily give to us when you register or when you choose
                      to participate in various activities related to our services.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                    <p>
                      Information our servers automatically collect when you access our services, such as your
                      IP address, browser type, operating system, access times, and the pages you have viewed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Data</h4>
                    <p>
                      Information related to your business needs, project requirements, and technical specifications
                      that you provide during consultations and project implementations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Understand and analyze how you use our services</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you for customer service, updates, and marketing purposes</li>
                  <li>Process your transactions and manage your orders</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Prevent fraudulent transactions and protect against criminal activity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We use administrative, technical, and physical security measures to protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide
                  to us, please be aware that no security measures are perfect or impenetrable.
                </p>
                <p>Our security measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Compliance with industry standards and regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set
                  out in this Privacy Policy. We will retain and use your information to the extent necessary to
                  comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Sharing Your Information</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share
                  information we have collected about you in certain situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our business</li>
                  <li>For business transfers in connection with mergers or acquisitions</li>
                  <li>With your consent or at your direction</li>
                  <li>To comply with legal obligations or protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>Depending on your location, you may have certain rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to correct inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict or object to data processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We may use cookies and similar tracking technologies to track activity on our services and hold
                  certain information. You can instruct your browser to refuse all cookies or to indicate when a
                  cookie is being sent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Our services may contain links to third-party websites or services. We are not responsible for
                  the privacy practices of these third parties. We encourage you to read the privacy policies of
                  any third-party sites you visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-medium text-foreground">Jumbo AI</p>
                  <p>Email: privacy@jumboai.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 AI Street, Tech City, TC 12345</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
