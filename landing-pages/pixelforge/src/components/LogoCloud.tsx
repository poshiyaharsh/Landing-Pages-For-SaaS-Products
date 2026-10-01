import React from 'react';
import { CLIENT_LOGOS } from '../data/pixelforgeData';

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 border-y border-studio-border/60 bg-studio-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest uppercase text-studio-subtle mb-8">
          POWERING THE NEXT GENERATION OF CREATIVE TEAMS
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center text-center group cursor-default"
            >
              <span className="font-display text-lg sm:text-xl font-black tracking-widest text-studio-muted group-hover:text-white transition-colors duration-200">
                {client.name}
              </span>
              <span className="text-[10px] font-mono uppercase text-studio-subtle tracking-wider mt-0.5 group-hover:text-neon-cyan transition-colors">
                {client.descriptor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
