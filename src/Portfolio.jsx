import React, { useState, useEffect, useRef, useMemo } from 'react';
import proimg from './assets/z.jpeg';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Globe,
  Radio, 
  Rocket, 
  Zap,
  ChevronDown,
  Target,
  Crosshair,
  ShieldCheck,
  Power,
  Award,
  Database,
  Layout,
  Layers,
  Server,
  Box,
  GitBranch,
  Activity,
  PenTool,
  Code2,
  Compass,
  Send,
  Loader2,
  Twitter,
  Scan,
  Coffee,
  Hash,
  Braces,
  Wind,
  Atom,
  PanelsTopLeft,
  FileJson,
  Monitor,
  Wifi,
  Signal,
  Command,
  ArrowUp,
  Quote,
  MessageSquare
} from 'lucide-react';

const apiKey = ""; 

const DATA = {
  name: "Aravind Bollapragada",
  firstName: "ARAVIND",
  lastName: "BOLLAPRAGADA",
  handle: "danixDe",
  profileImage: proimg, 
  tagline: "Whatever happens, happens.",
  about: "I'm a passionate full stack developer and open source enthusiast. I love building impactful products, exploring new technologies, and collaborating with creative minds. My journey spans web, mobile, and blockchain projects, always with a focus on clean code and great user experience.",
  socials: {
    github: "https://github.com/danixDe",
    linkedin: "https://www.linkedin.com/in/arvix17/",
    twitter: "https://x.com/Aravind0x",
    email: "arvix71@gmail.com"
  },
  skills: [
    { 
      cat: "Combat Languages", 
      icon: <Terminal size={16} />,
      items: [
        { name: "Java", level: 92 },
        { name: "C", level: 85 },
        { name: "C++", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 91 },
        { name: "Python", level: 84 }
      ] 
    },
    { 
      cat: "Interface Systems", 
      icon: <Layout size={16} />,
      items: [
        { name: "React.js", level: 94 },
        { name: "Next.js", level: 90 },
        { name: "TailwindCSS", level: 96 },
        { name: "HTML5/CSS3", level: 98 },
        { name: "Redux", level: 86 },
        { name: "Vite", level: 89 }
      ] 
    },
    { 
      cat: "Infrastructure", 
      icon: <Server size={16} />,
      items: [
        { name: "Node.js", level: 91 },
        { name: "Express.js", level: 89 },
        { name: "MongoDB", level: 87 },
        { name: "PostgreSQL", level: 84 },
        { name: "Docker", level: 81 }
      ] 
    },
    { 
      cat: "Auxiliary Gear", 
      icon: <Box size={16} />,
      items: [
        { name: "Git", level: 93 },
        { name: "Linux", level: 88 },
        { name: "Postman", level: 90 },
        { name: "Figma", level: 85 }
      ] 
    }
  ],
  experience: [
    {
      company: "Flip Computing Ltd. (Flock XR)",
      role: "Open Source Contributor",
      period: "JUN 2025 - JUL 2025",
      tasks: [
        "Implemented responsive and accessible web design across multiple devices, improving user engagement metrics.",
        "Resolved over 5 critical issues reported on GitHub, increasing project stability and overall usability.",
        "Collaborated with UK-based global team members to prioritize tasks and deliver solutions on tight timelines."
      ]
    },
    {
      company: "Various Open Source",
      role: "Open Source Developer",
      period: "2025 - PRESENT",
      tasks: ["Global Architecture", "System Optimization", "Team Coordination"]
    }
  ],
  projects: [
    { id: "S-01", title: "MintBridge", desc: "A dApp for Solana Devnet featuring Phantom/Solflare wallet integration, token generation, and minting.", tags: ["Web3.js", "Solana", "TypeScript"], link: "https://token-mint-alpha.vercel.app/" },
    { id: "S-02", title: "Blinder", desc: "Exclusive student community platform with domain verification and real-time feed filtering.", tags: ["MongoDB", "Express", "React"], link: "https://gvpblind-pi69.onrender.com/" },
    { id: "S-03", title: "Note.io", desc: "AI-driven YouTube video summarizer using dynamic transcript extraction. [Under Work]", tags: ["Next.js", "Node", "AI"], link: "https://yt-notes-gamma.vercel.app/" },
    { id: "S-04", title: "AuraHP", desc: "Blood donation platform connecting medical facilities with donors via real-time notifications.", tags: ["React", "Java Script", "SQL"], link: "https://github.com/danixDe/Aura-web" },
    { id: "S-05", title: "AlumNet", desc: "Connecting students with alumni through an AI-powered directory and interactive chatbot.", tags: ["React", "Node", "AI"], link: "https://github.com/danixDe/sih" },
    { id: "S-06", title: "Finance Tracker", desc: "Expense tracking application with visualization charts and budget comparisons.", tags: ["React", "Tailwind", "Charts"], link: "https://finance-tracker-bg4y.vercel.app/" },
    { id: "S-07", title: "Fake Store", desc: "Responsive e-commerce storefront with JWT login and product management.", tags: ["React", "API", "JWT"], link: "https://fake-stor.netlify.app/" }
  ],
  cert: "Meta Front-End Developer // Coursera 2025"
};

const getSkillIcon = (name) => {
  const iconSize = 14;
  switch (name.toLowerCase()) {
    case 'java': return <Coffee size={iconSize} />;
    case 'c': 
    case 'c++': return <Code2 size={iconSize} />;
    case 'javascript':
    case 'typescript': return <Braces size={iconSize} />;
    case 'html5':
    case 'css3': return <PanelsTopLeft size={iconSize} />;
    case 'react.js': return <Atom size={iconSize} />;
    case 'next.js': return <Rocket size={iconSize} />;
    case 'tailwindcss': return <Wind size={iconSize} />;
    case 'redux': return <Layers size={iconSize} />;
    case 'node.js':
    case 'express.js': return <Server size={iconSize} />;
    case 'mongodb':
    case 'postgresql': return <Database size={iconSize} />;
    case 'git': return <GitBranch size={iconSize} />;
    case 'python': return <Hash size={iconSize} />;
    case 'docker': return <Box size={iconSize} />;
    case 'vite': return <Zap size={iconSize} />;
    case 'linux': return <Terminal size={iconSize} />;
    case 'postman': return <Activity size={iconSize} />;
    case 'figma': return <PenTool size={iconSize} />;
    default: return <Cpu size={iconSize} />;
  }
};

const SpaceEngine = () => {
  const containerRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, starField, torus, grid;
    const comets = [];
    
    const init = () => {
      const THREE = window.THREE;
      if (!THREE) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      const particlesCount = 6000;
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 60;
      }
      const particlesGeom = new THREE.BufferGeometry();
      particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      starField = new THREE.Points(
        particlesGeom,
        new THREE.PointsMaterial({ size: 0.012, color: 0xffffff, transparent: true, opacity: 0.8, sizeAttenuation: true })
      );
      scene.add(starField);

      torus = new THREE.Mesh(
        new THREE.TorusGeometry(12, 3, 12, 100),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.04 })
      );
      scene.add(torus);

      grid = new THREE.GridHelper(150, 100, 0xf59e0b, 0x010410);
      grid.position.y = -15;
      grid.material.opacity = 0.05;
      grid.material.transparent = true;
      scene.add(grid);

      camera.position.z = 18;
      animate();
    };

    const createComet = (originX, originY) => {
      const THREE = window.THREE;
      const geom = new THREE.BufferGeometry();
      const length = 8 + Math.random() * 12; 
      const startZ = -100; 
      
      geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
        originX, originY, startZ, 
        originX, originY, startZ + length
      ]), 3));
      
      const line = new THREE.Line(geom, new THREE.LineBasicMaterial({ 
        color: 0xf59e0b, 
        transparent: true, 
        opacity: 0.0 
      }));
      
      return { 
        mesh: line, 
        originZ: startZ,
        accel: 1.05 + Math.random() * 0.05, 
        velZ: 0.5 + Math.random() * 1.5,
        velX: (Math.random() - 0.5) * 0.1,
        velY: (Math.random() - 0.5) * 0.1,
        life: 0.0 
      };
    };

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      if (!renderer) return;
      requestAnimationFrame(animate);
      
      starField.rotation.y += 0.0003;
      torus.rotation.x += 0.0005;
      torus.rotation.y += 0.0002;
      
      camera.position.x += (mouseX * 6 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 6 - camera.position.y) * 0.02;
      renderer.render(scene, camera);

      if (Math.random() < 0.035) {
        const pivotX = (Math.random() - 0.5) * 140;
        const pivotY = (Math.random() - 0.5) * 140;
        const c = createComet(pivotX, pivotY);
        comets.push(c);
        scene.add(c.mesh);
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.velZ *= c.accel; 
        c.mesh.position.z += c.velZ;
        c.mesh.position.x += c.velX;
        c.mesh.position.y += c.velY;
        
        if (c.life < 1.0) c.life += 0.05;
        const distFromCam = Math.abs(c.mesh.position.z + 18);
        const opacity = Math.min(c.life, distFromCam / 80); 
        
        c.mesh.material.opacity = opacity * 0.8;
        
        if (c.mesh.position.z > camera.position.z + 20) { 
          scene.remove(c.mesh); 
          comets.splice(i, 1); 
        }
      }
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = init;
      document.head.appendChild(script);
    } else {
      init();
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none bg-[#010410]" />;
};

const TacticalCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      idCounter.current += 1;
      const uid = `${Date.now()}-${idCounter.current}`;
      setTrail(prev => [{ x: e.clientX, y: e.clientY, id: uid }, ...prev.slice(0, 10)]);
    };
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);
    
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed z-[9999] pointer-events-none hidden lg:block"
        style={{ 
          left: pos.x, 
          top: pos.y, 
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_8px_#f59e0b]"></div>
        <div className={`absolute inset-0 w-12 h-12 -ml-6 -mt-6 border border-amber-500/20 rounded-full transition-all duration-300 ${isClicking ? 'scale-75 rotate-45 border-amber-500' : 'scale-100 rotate-0'}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-amber-500"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-amber-500"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-amber-500"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-amber-500"></div>
        </div>
        <div className={`absolute inset-0 w-16 h-16 -ml-8 -mt-8 transition-all duration-500 ${isClicking ? 'scale-90 rotate-[-45deg]' : 'scale-100 rotate-0'}`}>
           <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500"></div>
           <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500"></div>
           <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500"></div>
           <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500"></div>
        </div>
        <div className="absolute top-6 left-6 font-mono text-[7px] text-amber-500/60 whitespace-nowrap tracking-widest">
           <div>V_X: {pos.x}</div>
           <div>V_Y: {pos.y}</div>
           <div className={isClicking ? 'text-red-500 font-bold' : ''}>{isClicking ? 'LOCK' : 'SCAN'}</div>
        </div>
      </div>
      {trail.map((p, i) => (
        <div 
          key={p.id} 
          className="fixed w-1 h-1 bg-amber-500 rounded-full z-[9998] pointer-events-none hidden lg:block" 
          style={{ left: p.x, top: p.y, opacity: (10 - i) / 50, transform: `scale(${(10 - i) / 10})` }} 
        />
      ))}
    </>
  );
};

const HUD = () => (
  <div className="fixed inset-0 z-[100] pointer-events-none p-4 md:p-8 flex flex-col justify-between font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-white/20 uppercase">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 animate-pulse"></div> SHIP_MAIN_CPU</div>
        <div className="hidden sm:block">STATION_ID // ARAVIND_BOLLAPRAGADA</div>
      </div>
      <div className="text-right"><div>BATT: 100%</div><div>OXYGEN: 94%</div></div>
    </div>
    <div className="flex justify-between items-end">
      <div className="flex gap-4 md:gap-12 text-amber-500/40 font-black"><div>AUTO_PILOT_ON</div><div className="hidden sm:block">COMMS: CLEAR</div></div>
      <div className="flex gap-1 h-1 md:h-1.5">
        {[...Array(12)].map((_, i) => <div key={i} className="w-2 md:w-3 h-full bg-amber-500/10"></div>)}
      </div>
    </div>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([{ role: 'assistant', text: "Handshake verified. Aravind, weapon systems online. Visualizing sector." }]);
  const [isChatting, setIsChatting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const callAI = async (e) => {
    e.preventDefault();
    if (!chatInput || isChatting) return;
    
    const userMsg = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput("");
    setIsChatting(true);

    const systemPrompt = `You are the onboard AI for Spike Spiegel's Swordfish II. Your tone is technical noir, slightly cynical but efficient. You speak to the user, Aravind, as the lead engineer/bounty hunter. Keep responses concise and stay in character. Reference Bebop culture when appropriate. If Aravind asks about his projects, mention his technical prowess in systems like ${DATA.projects.map(p => p.title).join(", ")}.`;

    const makeRequest = async (retryCount = 0) => {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMsg }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });

        if (!response.ok) {
          if (retryCount < 5) {
            const delay = Math.pow(2, retryCount) * 1000;
            await new Promise(res => setTimeout(res, delay));
            return makeRequest(retryCount + 1);
          }
          throw new Error('Terminal offline.');
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Signal interrupted.";
        setChatHistory(prev => [...prev, { role: 'assistant', text: reply }]);
      } catch (error) {
        setChatHistory(prev => [...prev, { role: 'assistant', text: "Signal lost... Frequency jamming detected. Uplink failed." }]);
      } finally {
        setIsChatting(false);
      }
    };

    makeRequest();
  };

  const displayedProjects = showAll ? DATA.projects : DATA.projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#010410] text-slate-300 font-sans selection:bg-amber-500 selection:text-black lg:cursor-none overflow-x-hidden">
      <SpaceEngine />
      <TacticalCursor />
      <HUD />

      <nav className={`fixed top-0 w-full z-[150] transition-all duration-700 ${scrolled ? 'bg-black/95 border-b border-amber-500/20 py-2 md:py-3 backdrop-blur-md' : 'py-6 md:py-10 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          <div className="flex items-center gap-6 group pointer-events-auto" onClick={() => scrollTo('home')}>
              <div className="flex flex-col relative">
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b]"></div>
                   <span className="text-[6px] md:text-[7px] font-black text-white/30 tracking-[0.3em] uppercase">LINK_ESTABLISHED // SYS.V7</span>
                </div>
                <div className="relative">
                   <span className="text-xl md:text-3xl font-black tracking-tighter uppercase italic text-white group-hover:text-amber-500 transition-all duration-500 block leading-none select-none">
                      danix<span className="text-amber-500 group-hover:text-white">De</span>
                   </span>
                   <div className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-white/5 overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-amber-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                   </div>
                </div>
              </div>
          </div>
          <div className="hidden md:flex gap-10 text-[9px] font-bold tracking-[0.4em] uppercase pointer-events-auto items-center">
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-amber-500 cursor-none transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 z-10 text-center">
        <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] text-white flex flex-col">
            <span>{DATA.firstName}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/40">{DATA.lastName}</span>
          </h1>
          <div className="h-px w-32 md:w-48 bg-amber-500 mx-auto mt-6 md:mt-10 shadow-[0_0_20px_rgba(245,158,11,0.2)]"></div>

          <div className="mt-8 md:mt-14 flex flex-wrap gap-4 md:gap-6 justify-center pointer-events-auto">
            <button onClick={() => scrollTo('projects')} className="px-6 md:px-10 py-4 md:py-5 bg-amber-500 text-black font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] hover:bg-white transition-all active:scale-95">Archive</button>
            <button onClick={() => scrollTo('contact')} className="px-6 md:px-10 py-4 md:py-5 border border-white/20 text-white font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] hover:border-amber-500 hover:text-amber-500 transition-all active:scale-95">Link</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-40 bg-black relative z-10 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative hidden lg:block">
            <div className="aspect-square border border-white/5 flex items-center justify-center relative backdrop-blur-sm overflow-hidden bg-[#010410] pointer-events-auto">
                <img 
                  src={DATA.profileImage} 
                  alt={DATA.name} 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => { e.target.src = ""; }} 
                />
                <div className="absolute inset-0 border-[20px] border-[#010410] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#010410] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="text-center absolute bottom-10 left-0 right-0 z-10 pointer-events-none">
                   <p className="text-8xl font-black text-white/[0.03] tracking-tighter leading-none uppercase">Profile</p>
                   <p className="text-6xl font-black text-amber-500 mt-[-40px] uppercase italic">WANTED</p>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/50 m-6"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/50 m-6"></div>
            </div>
          </div>
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">The_Profile</h2>
            <div className="bg-white/[0.01] p-8 md:p-12 rounded-sm border-l-4 border-amber-500 backdrop-blur-md italic font-medium tracking-tight text-xl md:text-2xl leading-relaxed text-slate-300">
              "{DATA.about}"
            </div>
            <div className="p-6 md:p-8 bg-amber-500/5 border border-amber-500/20 flex items-center gap-6 md:gap-8 group hover:bg-amber-500/10 transition-all pointer-events-auto">
              <Award size={40} className="text-amber-500 shrink-0" />
              <div>
                <p className="font-bold text-amber-500 uppercase text-[9px] tracking-[0.4em]">Verified Certification</p>
                <p className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter mt-1">{DATA.cert.split(' // ')[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 md:py-40 px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none mb-16 md:mb-24">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 pointer-events-auto">
          {displayedProjects.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative bg-white/[0.01] border cursor-none border-white/5 p-8 md:p-10 hover:border-amber-500/40 transition-all duration-500 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-8 md:mb-12 relative z-10">
                <div className="space-y-2">
                  <div className="text-[9px] font-black text-amber-500 tracking-[0.4em]">{p.id}</div>
                  <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white group-hover:text-amber-500 transition-colors">{p.title}</h3>
                </div>
                <ExternalLink className="text-white/10 group-hover:text-white transition-all" size={20} />
              </div>
              <p className="text-slate-400 text-sm md:text-base mb-8 md:mb-10 max-w-sm leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                {p.tags.map(tag => <span key={tag} className="text-[8px] font-bold border border-white/10 px-3 py-1.5 uppercase tracking-widest bg-white/[0.01]">{tag}</span>)}
              </div>
            </a>
          ))}
        </div>
        {!showAll && (
          <div className="mt-16 md:mt-24 text-center pointer-events-auto">
            <button onClick={() => setShowAll(true)} className="flex flex-col items-center gap-3 mx-auto group">
              <span className="text-[10px] font-bold tracking-[0.8em] text-white/30 cursor-none group-hover:text-amber-500 uppercase">Load_Logs</span>
              <ChevronDown className="text-white/10 group-hover:text-amber-500 group-hover:translate-y-1 transition-all" size={24} />
            </button>
          </div>
        )}
      </section>

      <section id="experience" className="py-24 md:py-40 bg-black relative z-10 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none mb-16 md:mb-24">Experience</h2>
          <div className="grid gap-8 md:gap-12 pointer-events-auto">
            {DATA.experience.map((exp, i) => (
              <div key={i} className="p-8 md:p-10 border border-white/5 bg-[#010410]/40 group hover:border-amber-500/40 transition-all duration-500 relative">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 md:mb-10 relative z-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-white italic tracking-tighter group-hover:text-amber-500 transition-colors">{exp.role}</h3>
                    <p className="text-amber-500/60 font-bold uppercase tracking-[0.4em] text-[10px] mt-2">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 border border-white/10 text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">{exp.period}</span>
                </div>
                <div className="space-y-4 relative z-10">
                  {exp.tasks.map((task, j) => (
                    <div key={j} className="flex gap-4 items-start text-slate-400 text-sm md:text-base group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 bg-amber-500 mt-2 shrink-0"></div>
                      <p>{task}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 p-4 text-[8px] font-mono text-white/5 uppercase tracking-widest group-hover:text-white/10">EXP_ENTRY_0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 md:py-40 px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">Hardware</h2>
            <p className="text-amber-500 mt-4 font-bold tracking-[0.6em] md:tracking-[1em] text-[9px] uppercase pl-1">Neural Capacity Diagnostics</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pointer-events-auto">
          {DATA.skills.map((cat, i) => (
            <div key={i} className="border border-white/10 bg-black/40 p-8 md:p-10 group hover:border-amber-500/50 transition-all duration-700 relative overflow-hidden backdrop-blur-md">
               <div className="flex items-center gap-4 mb-10 md:mb-14 border-b border-white/5 pb-4">
                 <div className="p-2 bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]">{cat.icon}</div>
                 <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white">{cat.cat}</h3>
               </div>
               <div className="space-y-8 md:space-y-10">
                 {cat.items.map(skill => (
                   <div key={skill.name} className="space-y-3">
                     <div className="flex justify-between items-center text-[10px] md:text-[11px] font-bold tracking-widest text-slate-500 uppercase group-hover:text-white transition-colors">
                       <div className="flex items-center gap-3">
                         <span className="text-amber-500/60 group-hover:text-amber-500">{getSkillIcon(skill.name)}</span>
                         <span>{skill.name}</span>
                       </div>
                       <span className="text-amber-500 font-mono">{skill.level}%</span>
                     </div>
                     <div className="h-[2px] w-full bg-white/5 relative rounded-full overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-amber-500 transition-transform duration-[1.5s] origin-left shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                          style={{ transform: scrolled ? `scaleX(${skill.level/100})` : 'scaleX(0)' }}
                        ></div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 md:py-40 px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
          <div className="space-y-8 md:space-y-12 pointer-events-auto">
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <Wifi size={14} className="text-amber-500 animate-pulse" />
                   <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] md:tracking-[0.6em] uppercase">Comms // System_Online</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">Signal_Comms</h2>
             </div>
             <div className="grid grid-cols-1 gap-6">
                <a href={`mailto:${DATA.socials.email}`} className="p-6 md:p-8 border border-white/5 bg-[#010410]/60 backdrop-blur-xl group cursor-none hover:border-amber-500 transition-all duration-500 relative overflow-hidden block">
                   <div className="flex justify-between items-start relative z-10">
                      <div className="space-y-4">
                         <div className="text-[9px] font-black text-white/30 tracking-widest uppercase">Metadata: DIRECT_FREQUENCY</div>
                         <div className="text-2xl md:text-3xl font-black italic text-white tracking-tighter group-hover:text-amber-500 transition-colors">{DATA.socials.email}</div>
                      </div>
                      <Mail size={24} className="text-white/10 group-hover:text-amber-500 transition-colors" />
                   </div>
                   <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 group-hover:bg-amber-500 transition-colors"></div>
                </a>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                   {[
                      { name: 'Github', icon: <Github size={24} />, href: DATA.socials.github },
                      { name: 'Linkedin', icon: <Linkedin size={24} />, href: DATA.socials.linkedin },
                      { name: 'Twitter', icon: <Twitter size={24} />, href: DATA.socials.twitter }
                   ].map(item => (
                      <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="p-6 md:p-10 border cursor-none border-white/5 bg-[#010410]/40 backdrop-blur-sm flex items-center justify-center hover:border-amber-500 hover:bg-amber-500/5 transition-all group">
                         <div className="text-white/20 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">
                            {item.icon}
                         </div>
                      </a>
                   ))}
                </div>
             </div>
             <div className="p-6 border border-white/5 bg-white/[0.01] flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                   <Signal size={16} className="text-amber-500" />
                   <div className="space-y-1">
                      <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Signal Integrity</div>
                      <div className="flex gap-1">
                         {[...Array(8)].map((_, i) => (
                            <div key={i} className={`w-2 md:w-3 h-1 ${i < 6 ? 'bg-amber-500' : 'bg-white/10'}`}></div>
                         ))}
                      </div>
                   </div>
                </div>
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Secure_Layer: V.9</span>
             </div>
          </div>

          <div className="bg-[#010410] border border-white/10 overflow-hidden flex flex-col h-[600px] md:h-[700px] shadow-2xl relative pointer-events-auto rounded-sm group">
            <div className="bg-[#0f172a] border-b border-white/10 p-6 md:p-10 flex justify-between items-center relative z-10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 animate-pulse rounded-full shadow-[0_0_15px_#f59e0b]"></div>
                <div className="flex flex-col">
                   <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.5em] text-white uppercase">NEURAL_TERM_v5.0</span>
                   <span className="text-[7px] text-white/30 uppercase">Local_Network: VISAKHA_HUB</span>
                </div>
              </div>
              <Radio size={20} className="text-amber-500 animate-pulse" />
            </div>
            <div className="flex-grow overflow-y-auto p-6 md:p-12 space-y-8 md:space-y-10 custom-scrollbar bg-[#010410]/80 backdrop-blur-md relative">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-6`}>
                  <div className={`max-w-[90%] md:max-w-[85%] p-6 md:p-10 text-sm md:text-[14px] leading-relaxed relative ${msg.role === 'user' ? 'bg-amber-500 text-black font-black italic border-r-4 border-black' : 'bg-white/[0.02] text-white border-l-4 border-amber-500'}`}>
                    <div className="text-[8px] opacity-30 mb-2 uppercase tracking-widest">{msg.role === 'user' ? 'Local_Signal' : 'System_Response'}</div>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isChatting && <div className="text-[10px] text-amber-500 animate-pulse font-black uppercase tracking-[0.5em] flex items-center gap-4 italic pl-2">
                 <Command size={14} className="animate-spin" /> SIGNAL_DECRYPTING...
              </div>}
            </div>
            <form onSubmit={callAI} className="p-6 md:p-10 bg-[#080c18] border-t border-white/5 flex gap-4 md:gap-8 relative z-10">
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type UPLINK command..." className="flex-grow bg-black/40 border border-white/10 px-4 md:px-8 py-3 md:py-5 text-sm md:text-base outline-none focus:border-amber-500 transition-all text-white font-bold uppercase tracking-widest placeholder-slate-800" />
              <button type="submit" disabled={isChatting} className="bg-amber-500 text-black px-6 md:px-12 rounded-none font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all active:scale-95 disabled:opacity-50"><Send size={24} /></button>
            </form>
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
          </div>
        </div>
      </section>

      <footer className="relative bg-black border-t border-white/10 pt-24 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 w-full mb-24 md:mb-40">
             <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4">
                   <Monitor size={18} className="text-amber-500" />
                   <h3 className="text-sm font-black uppercase tracking-[0.6em] text-white">The_Philosophy</h3>
                </div>
                <div className="text-slate-400 text-base md:text-lg leading-relaxed italic border-l-2 border-amber-500/20 pl-6 md:pl-8 space-y-6">
                   <p>
                      I’ve always felt that software development is less like engineering and more like Jazz. You start with a basic structure, a goal, but the real magic happens in the improvisation the way you handle a breaking API at 3 AM or how you pivot a design when the rhythm doesn't feel right.
                   </p>
                   <p>
                      The Bebop aesthetic isn't just nostalgia for me. It’s a reminder that we’re all drifting through this digital void, trying to build something that matters before the fuel runs out. 
                   </p>
                </div>
                <div className="space-y-4 pt-4">
                   <div className="flex items-center gap-4 text-white/40">
                      <MessageSquare size={14} />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em]">Personal_Log: ARAVIND_B</span>
                   </div>
                   <p className="text-slate-500 text-sm italic">
                      "Thanks for drifting through my corner of the sector. Whether you're here for a session or just passing by the station, I appreciate your arrival. 'Whatever happens, happens'—so let's make it happen. See you in the next orbit."
                   </p>
                </div>
             </div>
             <div className="space-y-8 md:space-y-12">
                <div className="flex items-center gap-4">
                   <Quote size={18} className="text-amber-500" />
                   <h3 className="text-sm font-black uppercase tracking-[0.6em] text-white">Archives</h3>
                </div>
                <div className="space-y-8 md:space-y-10">
                   {[
                      { q: "Whatever happens, happens.", a: "Spike Spiegel" },
                      { q: "You're gonna carry that weight.", a: "System Terminus" },
                      { q: "Men only think about the past right before their death, searching for proof they were alive.", a: "Jet Black" }
                   ].map((quote, i) => (
                      <div key={i} className="group cursor-default">
                         <p className="text-slate-300 text-lg md:text-xl font-black italic tracking-tighter leading-tight group-hover:text-amber-500 transition-colors">"{quote.q}"</p>
                         <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mt-2">— {quote.a}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="w-full flex flex-col items-center pt-20 border-t border-white/5 space-y-16 md:space-y-24">
             <div className="w-full max-w-4xl relative group">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/40"></div>
                <div className="py-16 md:py-20 px-6 md:px-10 flex flex-col items-center gap-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-amber-500/[0.02] animate-pulse"></div>
                   <div className="flex justify-between w-full max-w-2xl text-[7px] font-mono text-amber-500/40 uppercase tracking-[0.6em] md:tracking-[0.8em] mb-4">
                      <span>Signal_Termination_Protocol</span>
                      <span>[Sector_End]</span>
                   </div>
                   <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] md:tracking-[0.25em] text-amber-500 text-center leading-none select-none drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-in fade-in zoom-in duration-1000 uppercase italic">
                      SEE YOU SPACE COWBOY...
                   </h2>
                   <div className="absolute top-0 left-0 w-full h-px bg-amber-500/20 shadow-[0_0_10px_#f59e0b] animate-scanline"></div>
                </div>
             </div>

             <button onClick={() => scrollTo('home')} className="group flex flex-col items-center gap-4 pointer-events-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-amber-500/40 rounded-full flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-700">
                   <ArrowUp size={24} className="text-amber-500 group-hover:-translate-y-1 transition-transform" />
                </div>
                <span className="text-[8px] font-black tracking-[0.6em] md:tracking-[0.8em] text-white/30 uppercase group-hover:text-amber-500">Return_To_Home</span>
             </button>

             <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all pb-10">
                <div className="text-[9px] font-black text-amber-500 tracking-widest uppercase font-mono">COORD: 17.6868° N, 83.2185° E</div>
                <div className="text-center md:text-right text-[9px] font-black text-white uppercase tracking-widest leading-relaxed">
                   © {new Date().getFullYear()} ARAVIND BOLLAPRAGADA // BEBOP_OS_STATION
                </div>
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        .outline-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.15); color: transparent; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #f59e0b; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        @keyframes scanline { 
          0% { transform: translateY(0); opacity: 0; } 
          50% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; } 
        }
        .animate-scanline { animation: scanline 3s linear infinite; }
      `}</style>
    </div>
  );
};

export default App;