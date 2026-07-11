// @ts-nocheck
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Legal() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "privacy" || hash === "terms") {
      setActiveTab(hash);
    }
  }, [location]);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] dark:from-white dark:to-teal-300"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Legal
            </h1>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="privacy" className="text-base">
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger value="terms" className="text-base">
                Terms of Use
              </TabsTrigger>
            </TabsList>

            <TabsContent value="privacy">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl space-y-6"
              >
                <p className="text-sm text-muted-foreground italic mb-6">
                  This is a template requiring final legal review.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Alyvn ("we," "us," or "our") is committed to protecting your privacy.
                      This Privacy Policy explains how we collect, use, and protect
                      information when you visit our website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      When you use our website, we may collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Contact form data (name, email, organization, message)</li>
                      <li>Analytics cookies to understand website usage</li>
                      <li>Technical information (browser type, IP address, device information)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use collected information solely for the purposes of responding to
                      your inquiries, improving our website, and understanding user needs.
                      We do not sell, rent, or share your personal information with third
                      parties except as required by law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Handling Principles</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      In alignment with India's Digital Personal Data Protection Act 2023:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Purpose limitation: Data used only for stated purposes</li>
                      <li>Consent: We collect data with your explicit consent</li>
                      <li>Data localization: Intent to store data within India</li>
                      <li>Security: Implementation of appropriate safeguards</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cookies and Analytics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use cookies and analytics tools to understand how visitors use our
                      website. You can control cookie preferences through your browser
                      settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to access, correct, or delete your personal data.
                      For privacy-related requests, please contact us through the contact form.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="terms">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl space-y-6"
              >
                <p className="text-sm text-muted-foreground italic mb-6">
                  This is a template requiring final legal review.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Terms of Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using this website, you agree to be bound by these
                      Terms of Use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">About This Website</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This website provides information about Alyvn and its products,
                      including ClinoveAI. The content is for informational purposes only.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Clinical Decision Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      ClinoveAI is a clinical decision-support tool intended for use under
                      direct physician supervision. It is not a substitute for professional
                      medical judgment. All recommendations must be reviewed, edited, or
                      approved by a qualified physician before reaching a patient.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">No Direct Patient Claims</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This website makes no diagnostic or treatment claims to end patients.
                      If you are a patient seeking medical advice, please consult with a
                      qualified healthcare provider.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All content on this website, including text, graphics, logos, and
                      software, is the property of Alyvn and protected by applicable
                      intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To the fullest extent permitted by law, Alyvn shall not be liable for
                      any indirect, incidental, special, or consequential damages arising
                      from the use of this website or reliance on its content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Changes to Terms</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these Terms of Use at any time. Changes
                      will be posted on this page with an updated effective date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms of Use, please contact us through our
                      contact form.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
