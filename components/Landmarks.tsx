
import React, { useState } from 'react';
import { Maximize2, Terminal, Code2, Globe } from 'lucide-react';

const ProjectDossier: React.FC<{
    id: string;
    title: string;
    description: string;
    image: string;
    stack: string[];
    role: string;
}> = ({ id, title, description, image, stack, role }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`relative border-b-2 border-bauhaus-black transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isExpanded ? 'bg-white' : 'hover:bg-bauhaus-concrete/10'}`}>
            <div 
                className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 cursor-pointer group"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-baseline gap-8">
                    <span className="font-display font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">/{id}</span>
                    <h3 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter group-hover:text-bauhaus-red transition-colors">{title}</h3>
                </div>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <div className="hidden md:flex gap-2">
                        {stack.slice(0, 2).map(s => (
                            <span key={s} className="font-mono text-[10px] border border-bauhaus-black px-2 py-1 uppercase">{s}</span>
                        ))}
                    </div>
                    <div className={`transition-transform duration-500 ${isExpanded ? 'rotate-45 text-bauhaus-red' : ''}`}>
                        <Maximize2 size={32} />
                    </div>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isExpanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-12 pt-0 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="aspect-video bg-bauhaus-black relative overflow-hidden group/img shadow-mega">
                            <img src={image} className="w-full h-full object-cover opacity-80 group-hover/img:scale-110 group-hover/img:opacity-100 transition-all duration-700" alt={title} />
                            <div className="absolute inset-0 bg-bauhaus-blue mix-blend-multiply opacity-40"></div>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 bg-bauhaus-black text-white py-4 font-display font-bold uppercase text-sm flex items-center justify-center gap-2 hover:bg-bauhaus-red transition-colors">
                                <Globe size={18} /> Visit Project
                            </button>
                            <button className="flex-1 border-4 border-bauhaus-black py-4 font-display font-bold uppercase text-sm flex items-center justify-center gap-2 hover:bg-bauhaus-black hover:text-white transition-all">
                                <Terminal size={18} /> View Source
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-xs font-bold text-bauhaus-red uppercase">// SCOPE_OF_WORK</span>
                                <p className="font-sans text-xl leading-relaxed font-bold">{description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 py-8 border-y-2 border-bauhaus-black/10">
                                <div>
                                    <span className="font-mono text-xs opacity-50 block mb-2 uppercase">Role_Manifest</span>
                                    <span className="font-display font-black text-lg uppercase">{role}</span>
                                </div>
                                <div>
                                    <span className="font-mono text-xs opacity-50 block mb-2 uppercase">System_Build</span>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.map(s => <span key={s} className="font-mono text-[10px] bg-bauhaus-black text-white px-2 py-1">{s}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-bauhaus-yellow flex items-center gap-6">
                            <Code2 size={48} />
                            <p className="font-mono text-[11px] leading-tight uppercase font-bold">
                                Logic Audit Result: Optimal. <br/>
                                Component structure follows geometric strictness <br/>
                                and zero-latency transition patterns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Landmarks: React.FC = () => {
  return (
    <section id="landmarks" className="bg-bauhaus-bg border-t-4 border-bauhaus-black">
        <div className="p-12 md:p-24 border-b-2 border-bauhaus-black">
            <h2 className="font-display font-black text-7xl md:text-[10rem] uppercase leading-[0.8] tracking-tighter">
                The<br/>
                <span className="text-transparent stroke-text">Project</span><br/>
                Archive
            </h2>
        </div>
        
        <div className="flex flex-col">
            <ProjectDossier 
                id="01"
                title="Axiom Network"
                description="A decentralized asset ledger with a focus on high-fidelity data visualization and real-time mesh networking."
                image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200"
                stack={['React', 'WebGL', 'Rust', 'WASM']}
                role="Lead Architect"
            />
            <ProjectDossier 
                id="02"
                title="Neural Stream"
                description="AI-driven content pipeline optimizing large-scale media distribution across variable bandwidth environments."
                image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200"
                stack={['Next.js', 'PyTorch', 'Tailwind', 'Node']}
                role="Full Stack Dev"
            />
            <ProjectDossier 
                id="03"
                title="Voxel OS"
                description="Conceptual operating system UI exploring spatial computing and 3D hierarchical information structures."
                image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200"
                stack={['Three.js', 'Typescript', 'Framer Motion']}
                role="Interaction Design"
            />
        </div>
    </section>
  );
};
