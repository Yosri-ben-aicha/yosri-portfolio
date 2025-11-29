"use client";

import { Button } from "@/components/ui/button";
import { Mail, FileText, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 p-1 mx-auto animate-float">
              <Image
                src="/profile.jpg"
                alt="Yosri Ben Aicha"
                width={224}
                height={224}
                className="w-full h-full rounded-full object-cover border-4 border-primary/30"
                priority
                quality={95}
              />
            </div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
          </div>

          {/* Greeting */}
          <p className="text-lg sm:text-xl text-muted-foreground animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            Bonjour, je suis
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Yosri Ben Aicha
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-muted-foreground animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            Ingénieur IA & Data Scientist
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            Spécialiste Machine Learning | Data Scientist | Architecte de Solutions IA
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
            Étudiant en troisième année d'ingénierie à l'ESIEA Paris, spécialisé en intelligence artificielle,
            avec une expertise en MLOps, architectures RAG et systèmes d'IA agentique. Expérience avérée dans
            le déploiement de solutions de machine learning en production.
          </p>

          {/* Location & Availability */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Paris, Le Kremlin Bicêtre</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span>Disponible pour stage - Février 2026</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: "0.7s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              onClick={onContactClick}
            >
              <Mail className="w-4 h-4 mr-2" />
              Me Contacter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="mailto:benaicha@et.esiea.fr">
                <FileText className="w-4 h-4 mr-2" />
                Télécharger CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

