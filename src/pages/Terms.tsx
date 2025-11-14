import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
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
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: November 14, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  By accessing and using Jumbo AI's services, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to these Terms and Conditions, please
                  do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use of Services</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Jumbo AI provides artificial intelligence consulting and technology services. You agree to use
                  our services only for lawful purposes and in accordance with these Terms.
                </p>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services in any way that violates applicable laws or regulations</li>
                  <li>Attempt to interfere with or disrupt our services or servers</li>
                  <li>Use our services to transmit harmful or malicious code</li>
                  <li>Reverse engineer or attempt to extract source code from our proprietary systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  All content, features, and functionality of Jumbo AI services, including but not limited to
                  text, graphics, logos, software, and data, are the exclusive property of Jumbo AI and are
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Custom solutions developed for clients will be governed by separate agreements specifying
                  ownership and licensing terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  While we strive to provide uninterrupted service, we do not guarantee that our services will
                  be available at all times. We may experience hardware, software, or other problems requiring
                  maintenance or producing interruptions and delays.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  To the maximum extent permitted by law, Jumbo AI shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages resulting from your use of or
                  inability to use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  You agree to indemnify and hold harmless Jumbo AI and its affiliates, officers, agents, and
                  employees from any claim or demand, including reasonable attorneys' fees, made by any third
                  party due to or arising out of your breach of these Terms or your violation of any law or the
                  rights of a third party.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the jurisdiction
                  in which Jumbo AI operates, without regard to its conflict of law provisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of
                  any significant changes by posting the new Terms on this page and updating the "Last updated"
                  date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-medium text-foreground">Jumbo AI</p>
                  <p>Email: legal@jumboai.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
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

export default Terms;
