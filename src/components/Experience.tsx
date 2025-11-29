"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    period: "05/2025 - 08/2025",
    title: "Stage Ingénieur IA & DevOps",
    company: "Altametris",
    location: "Paris, France",
    country: "FR",
    description:
      "Conception et déploiement d'un LLM nommé DevStral-24B pour automatiser la génération de documentation technique à partir du code source. Développement d'une API Flask connectée à un LLM exécuté localement sous Ollama, garantissant la confidentialité du code et l'absence de coûts cloud.",
    achievements: [
      "Comparaison et tests de plusieurs modèles LLM sur Azure AI Foundry pour évaluer performances, coûts et adéquation",
      "Automatisation complète du processus dans Azure DevOps avec pipelines CI/CD et Power Automate",
      "Résultats : réduction de 95% du temps de rédaction documentaire, zéro coût cloud",
    ],
    technologies: [
      "Python",
      "Flask",
      "Ollama",
      "Azure DevOps",
      "Azure ML",
      "Azure AI Foundry",
      "Power Automate",
    ],
    gradient: "from-primary/10 to-cyan-500/10",
    borderColor: "border-primary/30",
    countryColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    period: "06/2024 - 08/2024",
    title: "Stage Technologique - Analyste de Données",
    company: "Topnet",
    location: "Monastir, Tunisie",
    country: "TN",
    description:
      "Renforcement des compétences en analyse de données en collaborant avec une équipe de data science pour explorer, traiter et modéliser des données.",
    achievements: [],
    technologies: [
      "Python",
      "Tableau",
      "Google Colab",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
    gradient: "from-secondary/30",
    borderColor: "border-primary/20",
    countryColor: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30",
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      subtitle="Expérience"
      title="Parcours Professionnel"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 bg-gradient-to-br ${exp.gradient} ${exp.borderColor} hover:border-primary/50 transition-all hover:scale-[1.01]`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>{exp.period}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-primary mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <Badge className={`${exp.countryColor} w-fit mt-4 md:mt-0`}>
                  {exp.country}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

              {exp.achievements.length > 0 && (
                <div className="mb-6">
                  <h5 className="flex items-center gap-2 font-semibold mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Réalisations Clés
                  </h5>
                  <ul className="space-y-3 ml-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h5 className="text-sm font-semibold mb-3">Technologies & Outils</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

