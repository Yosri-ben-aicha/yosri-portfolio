"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, BarChart } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    color: "primary",
    skills: [
      "Déploiement LLM",
      "Ingénierie de prompts",
      "Deep Learning",
      "CNN",
      "Azure AI Foundry",
      "Ollama",
    ],
  },
  {
    icon: Code,
    title: "Machine Learning",
    color: "cyan",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "XGBoost",
      "Random Forest",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    color: "green",
    skills: [
      "Python",
      "R",
      "SQL",
      "MySQL",
      "Pandas",
      "Web Scraping",
    ],
  },
  {
    icon: BarChart,
    title: "Visualisation de Données",
    color: "yellow",
    skills: [
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "ggplot2",
    ],
  },
];

const tools = [
  "Visual Studio Code",
  "Google Colab",
  "Jupyter Notebook",
  "PyCharm",
  "Git",
  "GitHub",
  "Azure DevOps",
  "Azure ML",
  "Flask",
  "Power Automate",
];

const colorClasses = {
  primary: "bg-primary/20 text-primary",
  cyan: "bg-cyan-500/20 text-cyan-500",
  green: "bg-green-500/20 text-green-500",
  yellow: "bg-yellow-500/20 text-yellow-500",
};

export default function Skills() {
  return (
    <Section
      id="skills"
      subtitle="Compétences"
      title="Expertise Technique"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="tech-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-secondary/30 border-primary/20">
          <h4 className="text-xl font-semibold mb-4">Outils & Environnements</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge key={index} className="tech-badge">
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

