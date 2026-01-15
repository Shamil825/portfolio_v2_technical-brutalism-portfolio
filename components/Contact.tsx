
import React from 'react';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-bauhaus-bg border-b-4 border-bauhaus-black relative">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-24 border-b-4 lg:border-b-0 lg:border-r-4 border-bauhaus-black bg-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-bauhaus-yellow rounded-bl-full opacity-20"></div>
                <div>
                    <div className="inline-block bg-bauhaus-black text-white px-4 py-2 font-mono text-sm font-bold mb-8">
                        // CHANNEL_OPEN
                    </div>
                    <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
                        Let's<br/>
                        <span className="text-bauhaus-red">Build</span>
                    </h2>
                    <p className="font-sans text-lg font-bold max-w-md border-l-4 border-bauhaus-blue pl-6 py-2">
                        Seeking a designer who writes code? Or a developer who understands craft? Transmit your project parameters.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="flex gap-4 items-center font-mono text-sm opacity-60">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        AARON IS CURRENTLY: ONLINE
                    </div>
                </div>
            </div>

            <div className="p-12 md:p-24 bg-bauhaus-bg">
                <form className="space-y-12">
                    <div className="relative group">
                        <label className="block font-mono text-xs font-bold uppercase mb-2 tracking-widest text-bauhaus-concrete group-focus-within:text-bauhaus-black transition-colors">
                            01. Identity
                        </label>
                        <input type="text" className="w-full bg-transparent border-b-4 border-bauhaus-black/20 py-4 font-display font-bold text-2xl text-bauhaus-black focus:outline-none focus:border-bauhaus-blue transition-colors rounded-none placeholder-transparent" placeholder="NAME" />
                    </div>
                    <div className="relative group">
                        <label className="block font-mono text-xs font-bold uppercase mb-2 tracking-widest text-bauhaus-concrete group-focus-within:text-bauhaus-black transition-colors">
                            02. Digital Coordinates
                        </label>
                        <input type="email" className="w-full bg-transparent border-b-4 border-bauhaus-black/20 py-4 font-display font-bold text-2xl text-bauhaus-black focus:outline-none focus:border-bauhaus-red transition-colors rounded-none placeholder-transparent" placeholder="EMAIL" />
                    </div>
                    <div className="relative group">
                        <label className="block font-mono text-xs font-bold uppercase mb-2 tracking-widest text-bauhaus-concrete group-focus-within:text-bauhaus-black transition-colors">
                            03. Project Vector
                        </label>
                        <textarea rows={3} className="w-full bg-transparent border-b-4 border-bauhaus-black/20 py-4 font-display font-bold text-2xl text-bauhaus-black focus:outline-none focus:border-bauhaus-yellow transition-colors rounded-none placeholder-transparent resize-none" placeholder="MESSAGE"></textarea>
                    </div>
                    <button className="w-full bg-bauhaus-black text-white py-8 font-display font-black text-2xl uppercase hover:bg-bauhaus-blue transition-colors shadow-hard hover:shadow-hard-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-4 group">
                        <span>Transmit Signal</span>
                        <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};
