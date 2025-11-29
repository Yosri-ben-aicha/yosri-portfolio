"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      subtitle="Contact"
      title="Entrons en Contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground mb-12 text-lg">
          Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.05]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:benaicha@et.esiea.fr"
                  className="text-primary hover:underline break-all"
                >
                  benaicha@et.esiea.fr
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.05]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                <a href="tel:+33626488593" className="text-primary hover:underline">
                  +33 6 26 48 85 93
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.05]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Localisation</p>
                <p className="text-primary">Paris, Le Kremlin Bicêtre</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
            <a
              href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <a
              href="https://github.com/Yosri-ben-aicha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

