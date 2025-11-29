"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BarChart, Brain } from "lucide-react";

const projects = [
  {
    title: "Prédiction des Récidives du Cancer du Sein",
    date: "févr. 2025",
    description:
      "Développement et optimisation de modèles de Machine Learning avec une Random Forest atteignant 82% de précision. Analyse exploratoire et traitement avancé des données.",
    technologies: ["R", "RStudio", "ggplot2", "XGBoost", "Random Forest", "MICE"],
    icon: FileText,
    gradient: "from-orange-500/10 to-yellow-500/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    iconBg: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Visualiseur de Données Médicales",
    date: "janv. 2025",
    description:
      "Extraction, transformation et analyse des données pour garantir leur qualité. Création de visualisations avancées illustrant les relations entre variables médicales.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab", "Power BI"],
    icon: BarChart,
    gradient: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
    iconBg: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Visualisation de données sur l'autisme",
    date: "déc. 2024",
    description:
      "Création de tableaux de bord interactifs et visuellement attrayants pour analyser des données sur l'autisme.",
    technologies: ["Tableau", "SQL", "Power BI"],
    icon: Brain,
    gradient: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    iconBg: "from-purple-500/20 to-violet-500/20",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      subtitle="Projets"
      title="Projets Techniques"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className={`overflow-hidden bg-gradient-to-br ${project.gradient} ${project.borderColor} hover:border-primary/50 transition-all group hover:scale-[1.02]`}
              >
                <div className={`h-32 bg-gradient-to-br ${project.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-16 h-16 ${project.iconColor}`} />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

