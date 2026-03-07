/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Github, Youtube, Gamepad2, Table, ExternalLink, MoreVertical } from "lucide-react";

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
  image?: string;
}

const links: LinkItem[] = [
  {
    title: "Canal Principal",
    url: "#", // Placeholder as I don't have the real URL
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Canal de Games",
    url: "#",
    icon: <Gamepad2 className="w-5 h-5" />,
  },
  {
    title: "Meu Github",
    url: "https://github.com/GustavoHRX",
    icon: <Github className="w-5 h-5" />,
    image: "https://avatars.githubusercontent.com/u/104161453?v=4", // GustavoHRX's github avatar if available, or generic
  },
  {
    title: "Planilha de Jogos",
    url: "#",
    icon: <Table className="w-5 h-5" />,
    image: "https://picsum.photos/seed/sheet/100/100",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
          
          {/* Profile Card - Full Width Top (Cascade Effect) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-4 md:row-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <MoreVertical className="w-6 h-6" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border border-white/20 shadow-2xl">
                <img 
                  src="https://github.com/GustavoHRX.png" 
                  alt="GustavoHRX" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/gustavo/200/200";
                  }}
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">GustavoHRX</h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Links de Redes, barcos, varas.... Só pescar!
              </p>
            </div>
          </motion.div>

          {/* Featured: Canal Principal */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-red-600/10 border border-red-500/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-red-600/20 transition-all"
          >
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 mb-3">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Canal Principal</h3>
              <p className="text-xs text-red-500/80 font-medium uppercase tracking-wider">YouTube</p>
            </div>
          </motion.a>

          {/* Canal de Games (YouTube) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-red-600/10 border border-red-500/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-red-600/20 transition-all"
          >
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 mb-3">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Games</h3>
              <p className="text-xs text-red-500/80 font-medium uppercase tracking-wider">YouTube</p>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/GustavoHRX"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-white/10 mb-3">
              <Github className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Meu Github</h3>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Projetos & Código</p>
            </div>
          </motion.a>

          {/* Planilha de Jogos */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-emerald-600/10 border border-emerald-500/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-emerald-600/20 transition-all"
          >
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-3">
              <Table className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Planilha</h3>
              <p className="text-xs text-emerald-500/80 font-medium uppercase tracking-wider">Planilha de Jogos</p>
            </div>
          </motion.a>

        </div>

        {/* Footer */}
        <footer className="mt-12 text-center pb-12 flex flex-col items-center space-y-2">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-[0.2em]">
            Crafted for GustavoHRX &copy; 2024
          </p>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest opacity-50">
            Made in Google API Studio
          </p>
        </footer>

      </div>
    </div>
  );
}
