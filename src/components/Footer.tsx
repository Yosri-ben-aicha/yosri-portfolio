"use client";

import { Linkedin, Github } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="relative py-8 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Yosri Ben Aicha. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Yosri-ben-aicha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={onScrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

