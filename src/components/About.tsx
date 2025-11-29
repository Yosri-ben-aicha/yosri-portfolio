"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <Section
      id="about"
      subtitle="À Propos"
      title="Diplômé d'un Double Diplôme"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground mb-8 text-lg text-center">
          Excellence académique internationale en IA et ingénierie
        </p>

        <Card className="p-8 md:p-10 bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Étudiant en troisième année d'ingénierie à l'ESIEA Paris, spécialisé en intelligence artificielle,
            je possède de solides compétences en data science, analyse, nettoyage et visualisation de données,
            ainsi qu'en déploiement et automatisation de processus à travers des modèles d'intelligence artificielle générative.
          </p>
          <Separator className="my-6" />
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Fort d'une expérience en développement web, je souhaite approfondir mes connaissances en IA et data science,
            et participer à des projets innovants mêlant exploitation des données et modèles intelligents.
            Autonome, rigoureux et doté d'un fort esprit d'équipe, je fais preuve de sérieux et de détermination dans
            toutes mes missions. Déterminé, je vise à devenir un expert dans le domaine de la data science et de
            l'intelligence artificielle.
          </p>
        </Card>
      </div>
    </Section>
  );
}

