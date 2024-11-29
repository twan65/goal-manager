// src/components/Footer.tsx
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-center items-center gap-2">
          <a
            href="https://github.com/your-username/goal-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
