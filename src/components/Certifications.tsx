"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  { title: "Machine Learning with Python", org: "FreeCodeCamp" },
  { title: "Data Analysis with Python", org: "FreeCodeCamp" },
  { title: "Data Cleaning with pandas", org: "365 Data Science" },
  { title: "Mathematics for Machine Learning", org: "Coursera" },
  { title: "Power Query & Data Modeling", org: "365 Data Science" },
  { title: "Convolutional Neural Network", org: "Coursera" },
  { title: "Git and GitHub", org: "365 Data Science" },
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      subtitle="Certifications"
      title="Certifications Professionnelles"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-4 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 leading-tight">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

