"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, BarChart, Cloud, Settings } from "lucide-react";
import Image from "next/image";

const skillCategories = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    color: "primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    skills: [
      { name: "Déploiement LLM", logo: "🤖", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Ingénierie de prompts", logo: "✍️", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Deep Learning", logo: "🧠", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "CNN", logo: "🔍", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
      { name: "Azure AI Foundry", logo: "☁️", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
      { name: "Ollama", logo: "🦙", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    ],
  },
  {
    icon: Code,
    title: "Machine Learning",
    color: "cyan",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-500",
    skills: [
      { name: "TensorFlow", logo: "🔷", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "Keras", logo: "⚡", color: "bg-red-500/20 text-red-400 border-red-500/30" },
      { name: "Scikit-learn", logo: "🔬", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "OpenCV", logo: "👁️", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "XGBoost", logo: "📈", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Random Forest", logo: "🌲", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    color: "green",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500",
    skills: [
      { name: "Python", logo: "🐍", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "R", logo: "📊", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "SQL", logo: "🗄️", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "MySQL", logo: "🐬", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "Pandas", logo: "🐼", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Web Scraping", logo: "🕷️", color: "bg-red-500/20 text-red-400 border-red-500/30" },
    ],
  },
  {
    icon: BarChart,
    title: "Visualisation de Données",
    color: "yellow",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-500",
    skills: [
      { name: "Tableau", logo: "📊", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "Power BI", logo: "📈", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "Matplotlib", logo: "📉", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Seaborn", logo: "🌊", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "Plotly", logo: "📊", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "ggplot2", logo: "📐", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    ],
  },
];

const tools = [
  { name: "Visual Studio Code", logo: "💻", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Google Colab", logo: "🔬", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { name: "Jupyter Notebook", logo: "📓", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "PyCharm", logo: "🐍", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "Git", logo: "🔀", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { name: "GitHub", logo: "🐙", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  { name: "Azure DevOps", logo: "☁️", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
  { name: "Azure ML", logo: "🤖", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { name: "Flask", logo: "🌶️", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { name: "Power Automate", logo: "⚡", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      subtitle="Compétences"
      title="Expertise Technique"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground mb-12 text-lg text-center">
          Un ensemble complet d'outils qui me permet de développer des systèmes d'IA scalables et des applications robustes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`p-6 ${category.bgColor} ${category.borderColor} hover:border-primary/50 transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${category.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${skill.color} px-4 py-2 text-sm font-medium border hover:scale-110 transition-transform cursor-default flex items-center gap-2`}
                    >
                      <span className="text-lg">{skill.logo}</span>
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-secondary/30 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold">Outils & Environnements</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                className={`${tool.color} px-4 py-2 text-sm font-medium border hover:scale-110 transition-transform cursor-default flex items-center gap-2`}
              >
                <span className="text-lg">{tool.logo}</span>
                <span>{tool.name}</span>
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
