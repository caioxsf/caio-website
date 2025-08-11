import Link from 'next/link';
import { Github, Linkedin, Mail, FileUser } from 'lucide-react';

const links = [
  {
    href: 'https://github.com/caioxsf',
    label: 'GitHub',
    icon: <Github size={20} className="text-teal-400" />,
    external: true,
  },
  {
    href: 'https://linkedin.com/in/nobilecaio',
    label: 'LinkedIn',
    icon: <Linkedin size={20} className="text-teal-400" />,
    external: true,
  },
  {
    href: 'mailto:caio.nobile@hotmail.com',
    label: 'Email',
    icon: <Mail size={20} className="text-teal-400" />,
    external: true,
  },
];

export default function Social() {
  return (
    <div className="flex gap-4 mt-5 flex-wrap max-sm:gap-2">
      {links.map(({ href, label, icon, external }) =>
        external ? (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-800 transition
                       focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2 focus:ring-offset-black
                       max-sm:px-3 max-sm:py-1.5 max-sm:gap-1.5"
          >
            {icon}
            <span className="font-medium whitespace-nowrap max-sm:text-sm">{label}</span>
          </Link>
        ) : null
      )}
      <a
        href="/pdf/curriculo.pdf"
        download="curriculo.pdf"
        aria-label="Currículo"
        className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-800 transition
                   focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2 focus:ring-offset-black
                   max-sm:px-3 max-sm:py-1.5 max-sm:gap-1.5"
      >
        <FileUser size={20} className="text-teal-400" />
        <span className="font-medium whitespace-nowrap max-sm:text-sm">Currículo</span>
      </a>
    </div>
  );
}