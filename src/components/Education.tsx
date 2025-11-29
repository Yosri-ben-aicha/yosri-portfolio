"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "ESIEA (École Supérieure Ingénieur Électronique Automatique)",
    degree: "3ème année du cycle ingénieur",
    period: "2024 - aujourd'hui",
    location: "Ivry-sur-Seine, France",
    status: "En cours",
    iconColor: "bg-primary/20 text-primary",
    degreeColor: "text-primary",
  },
  {
    school: "EPI Digital School",
    degree: "1ère année du cycle ingénieur",
    period: "2023 - 2024",
    location: "Sousse, Tunisie",
    status: null,
    iconColor: "bg-cyan-500/20 text-cyan-500",
    degreeColor: "text-cyan-500",
  },
  {
    school: "IPEIN - Institut Préparatoire aux Études d'Ingénieur de Nabeul",
    degree: "Classes préparatoires",
    period: "2021 - 2023",
    location: "Nabeul, Tunisie",
    status: null,
    iconColor: "bg-green-500/20 text-green-500",
    degreeColor: "text-green-500",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      subtitle="Formation"
      title="Formation Académique"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground mb-12 text-lg text-center">
          Excellence académique internationale en IA et ingénierie
        </p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.01]"
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-lg ${edu.iconColor} flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold">{edu.school}</h4>
                    {edu.status && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                  <p className={`${edu.degreeColor} font-semibold mb-2`}>{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

