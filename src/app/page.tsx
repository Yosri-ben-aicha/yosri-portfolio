"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Linkedin, Github, FileText, Briefcase, GraduationCap, Award, Code, Database, Brain, BarChart, Send } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">Yosri Ben Aicha</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Accueil</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">À propos</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Compétences</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Expérience</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projets</a>
              <a href="#education" className="text-sm hover:text-primary transition-colors">Formation</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/90">Me Contacter</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fadeInUp">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 p-1 mx-auto animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Yosri Ben Aicha"
                  width={192}
                  height={192}
                  className="w-full h-full rounded-full object-cover border-4 border-primary/30"
                  priority
                />
              </div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
            </div>

            <p className="text-lg text-muted-foreground mb-4">Bonjour, je suis Yosri Ben Aicha</p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Ingénieur IA & Data Scientist
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Spécialiste Machine Learning | Data Scientist | Architecte de Solutions IA
            </p>

            <p className="text-base text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Étudiant en troisième année d'ingénierie à l'ESIEA Paris, spécialisé en intelligence artificielle,
              avec une expertise en MLOps, architectures RAG et systèmes d'IA agentique. Expérience avérée dans
              le déploiement de solutions de machine learning en production, le développement de systèmes
              d'automatisation intelligents et l'architecture de pipelines de données évolutifs.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Paris, Le Kremlin Bicêtre</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                <span>Disponible pour stage - Février 2026</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                Me Contacter
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Télécharger CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">À Propos</h2>
            </div>

            <h3 className="text-4xl font-bold mb-8">Diplômé d'un Double Diplôme</h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Excellence académique internationale en IA et ingénierie
            </p>

            <Card className="p-8 bg-secondary/30 border-primary/20">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Étudiant en troisième année d'ingénierie à l'ESIEA Paris, spécialisé en intelligence artificielle,
                je possède de solides compétences en data science, analyse, nettoyage et visualisation de données,
                ainsi qu'en déploiement et automatisation de processus à travers des modèles d'intelligence artificielle générative.
              </p>
              <Separator className="my-6" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Fort d'une expérience en développement web, je souhaite approfondir mes connaissances en IA et data science,
                et participer à des projets innovants mêlant exploitation des données et modèles intelligents.
                Autonome, rigoureux et doté d'un fort esprit d'équipe, je fais preuve de sérieux et de détermination dans
                toutes mes missions. Déterminé, je vise à devenir un expert dans le domaine de la data science et de
                l'intelligence artificielle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">Compétences</h2>
            </div>

            <h3 className="text-4xl font-bold mb-12">Expertise Technique</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Intelligence Artificielle</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="tech-badge">Déploiement LLM</Badge>
                  <Badge className="tech-badge">Ingénierie de prompts</Badge>
                  <Badge className="tech-badge">Deep Learning</Badge>
                  <Badge className="tech-badge">CNN</Badge>
                  <Badge className="tech-badge">Azure AI Foundry</Badge>
                  <Badge className="tech-badge">Ollama</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h4 className="text-xl font-semibold">Machine Learning</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="tech-badge">TensorFlow</Badge>
                  <Badge className="tech-badge">Keras</Badge>
                  <Badge className="tech-badge">Scikit-learn</Badge>
                  <Badge className="tech-badge">OpenCV</Badge>
                  <Badge className="tech-badge">XGBoost</Badge>
                  <Badge className="tech-badge">Random Forest</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold">Data Engineering</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="tech-badge">Python</Badge>
                  <Badge className="tech-badge">R</Badge>
                  <Badge className="tech-badge">SQL</Badge>
                  <Badge className="tech-badge">MySQL</Badge>
                  <Badge className="tech-badge">Pandas</Badge>
                  <Badge className="tech-badge">Web Scraping</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h4 className="text-xl font-semibold">Visualisation de Données</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="tech-badge">Tableau</Badge>
                  <Badge className="tech-badge">Power BI</Badge>
                  <Badge className="tech-badge">Matplotlib</Badge>
                  <Badge className="tech-badge">Seaborn</Badge>
                  <Badge className="tech-badge">Plotly</Badge>
                  <Badge className="tech-badge">ggplot2</Badge>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-secondary/30 border-primary/20">
              <h4 className="text-xl font-semibold mb-4">Outils & Environnements</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="tech-badge">Visual Studio Code</Badge>
                <Badge className="tech-badge">Google Colab</Badge>
                <Badge className="tech-badge">Jupyter Notebook</Badge>
                <Badge className="tech-badge">PyCharm</Badge>
                <Badge className="tech-badge">Git</Badge>
                <Badge className="tech-badge">GitHub</Badge>
                <Badge className="tech-badge">Azure DevOps</Badge>
                <Badge className="tech-badge">Azure ML</Badge>
                <Badge className="tech-badge">Flask</Badge>
                <Badge className="tech-badge">Power Automate</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">Expérience</h2>
            </div>

            <h3 className="text-4xl font-bold mb-12">Parcours Professionnel</h3>

            <div className="space-y-6">
              {/* Altametris */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/30 hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>05/2025 - 08/2025</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Stage Ingénieur IA & DevOps</h4>
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">Altametris</span>
                      <Separator orientation="vertical" className="h-4" />
                      <MapPin className="w-4 h-4" />
                      <span>Paris, France</span>
                    </div>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">FR</Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Conception et déploiement d'un LLM nommé DevStral-24B pour automatiser la génération de documentation
                  technique à partir du code source. Développement d'une API Flask connectée à un LLM exécuté localement
                  sous Ollama, garantissant la confidentialité du code et l'absence de coûts cloud.
                </p>

                <div className="mb-6">
                  <h5 className="flex items-center gap-2 font-semibold mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Réalisations Clés
                  </h5>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Comparaison et tests de plusieurs modèles LLM sur Azure AI Foundry pour évaluer performances, coûts et adéquation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Automatisation complète du processus dans Azure DevOps avec pipelines CI/CD et Power Automate
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Résultats : réduction de 95% du temps de rédaction documentaire, zéro coût cloud
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold mb-3">Technologies & Outils</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="tech-badge">Python</Badge>
                    <Badge className="tech-badge">Flask</Badge>
                    <Badge className="tech-badge">Ollama</Badge>
                    <Badge className="tech-badge">Azure DevOps</Badge>
                    <Badge className="tech-badge">Azure ML</Badge>
                    <Badge className="tech-badge">Azure AI Foundry</Badge>
                    <Badge className="tech-badge">Power Automate</Badge>
                  </div>
                </div>
              </Card>

              {/* Topnet */}
              <Card className="p-8 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      <span>06/2024 - 08/2024</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Stage Technologique - Analyste de Données</h4>
                    <div className="flex items-center gap-2 text-cyan-500 mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">Topnet</span>
                      <Separator orientation="vertical" className="h-4" />
                      <MapPin className="w-4 h-4" />
                      <span>Monastir, Tunisie</span>
                    </div>
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-500 border-cyan-500/30">TN</Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Renforcement des compétences en analyse de données en collaborant avec une équipe de data science
                  pour explorer, traiter et modéliser des données.
                </p>

                <div>
                  <h5 className="text-sm font-semibold mb-3">Technologies & Outils</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="tech-badge">Python</Badge>
                    <Badge className="tech-badge">Tableau</Badge>
                    <Badge className="tech-badge">Google Colab</Badge>
                    <Badge className="tech-badge">Matplotlib</Badge>
                    <Badge className="tech-badge">Seaborn</Badge>
                    <Badge className="tech-badge">Plotly</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">Projets</h2>
            </div>

            <h3 className="text-4xl font-bold mb-12">Projets Techniques</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <Card className="overflow-hidden bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/30 hover:border-orange-500/50 transition-all group">
                <div className="h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-orange-400" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Prédiction des Récidives du Cancer du Sein</h4>
                  <p className="text-sm text-muted-foreground mb-4">févr. 2025</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Développement et optimisation de modèles de Machine Learning avec une Random Forest atteignant 82% de précision.
                    Analyse exploratoire et traitement avancé des données.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="tech-badge">R</Badge>
                    <Badge className="tech-badge">RStudio</Badge>
                    <Badge className="tech-badge">ggplot2</Badge>
                    <Badge className="tech-badge">XGBoost</Badge>
                    <Badge className="tech-badge">Random Forest</Badge>
                    <Badge className="tech-badge">MICE</Badge>
                  </div>
                </div>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/30 hover:border-pink-500/50 transition-all group">
                <div className="h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center">
                  <BarChart className="w-16 h-16 text-pink-400" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Visualiseur de Données Médicales</h4>
                  <p className="text-sm text-muted-foreground mb-4">janv. 2025</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Extraction, transformation et analyse des données pour garantir leur qualité.
                    Création de visualisations avancées illustrant les relations entre variables médicales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="tech-badge">Python</Badge>
                    <Badge className="tech-badge">Pandas</Badge>
                    <Badge className="tech-badge">Matplotlib</Badge>
                    <Badge className="tech-badge">Seaborn</Badge>
                    <Badge className="tech-badge">Google Colab</Badge>
                    <Badge className="tech-badge">Power BI</Badge>
                  </div>
                </div>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/30 hover:border-purple-500/50 transition-all group">
                <div className="h-32 bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-purple-400" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Visualisation de données sur l'autisme</h4>
                  <p className="text-sm text-muted-foreground mb-4">déc. 2024</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Création de tableaux de bord interactifs et visuellement attrayants pour analyser
                    des données sur l'autisme.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="tech-badge">Tableau</Badge>
                    <Badge className="tech-badge">SQL</Badge>
                    <Badge className="tech-badge">Power BI</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">Formation</h2>
            </div>

            <h3 className="text-4xl font-bold mb-8">Formation Académique</h3>

            <p className="text-muted-foreground mb-12 text-lg">
              Excellence académique internationale en IA et ingénierie
            </p>

            <div className="space-y-6">
              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold">ESIEA (École Supérieure Ingénieur Électronique Automatique)</h4>
                      <Badge className="bg-primary/20 text-primary border-primary/30">En cours</Badge>
                    </div>
                    <p className="text-primary font-semibold mb-2">3ème année du cycle ingénieur</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>2024 - aujourd'hui</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Ivry-sur-Seine, France</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">EPI Digital School</h4>
                    <p className="text-cyan-500 font-semibold mb-2">1ère année du cycle ingénieur</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>2023 - 2024</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Sousse, Tunisie</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">IPEIN - Institut Préparatoire aux Études d'Ingénieur de Nabeul</h4>
                    <p className="text-green-500 font-semibold mb-2">Classes préparatoires</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>2021 - 2023</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Nabeul, Tunisie</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">Certifications</h2>
            </div>

            <h3 className="text-4xl font-bold mb-12">Certifications Professionnelles</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Machine Learning with Python", org: "FreeCodeCamp" },
                { title: "Data Analysis with Python", org: "FreeCodeCamp" },
                { title: "Data Cleaning with pandas", org: "365 Data Science" },
                { title: "Mathematics for Machine Learning", org: "Coursera" },
                { title: "Power Query & Data Modeling", org: "365 Data Science" },
                { title: "Convolutional Neural Network", org: "Coursera" },
                { title: "Git and GitHub", org: "365 Data Science" },
              ].map((cert, index) => (
                <Card key={index} className="p-4 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h2 className="text-sm text-primary font-semibold uppercase tracking-wider">Contact</h2>
            </div>

            <h3 className="text-4xl font-bold mb-8">Entrons en Contact</h3>

            <p className="text-muted-foreground mb-12 text-lg">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:benaicha@et.esiea.fr" className="text-primary hover:underline">
                      benaicha@et.esiea.fr
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
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

              <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all">
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

            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/Yosri-ben-aicha" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Yosri Ben Aicha. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Retour en haut
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
