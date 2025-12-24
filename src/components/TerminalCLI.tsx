import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'help';
  content: string;
}

const TerminalCLI = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: '╔═══════════════════════════════════════════════════════════╗'
    },
    {
      type: 'output',
      content: '║  Welcome to Mahesh Reddy\'s Terminal Portfolio  v1.0       ║'
    },
    {
      type: 'output',
      content: '║  DevOps | Cloud | SRE Engineer                            ║'
    },
    {
      type: 'output',
      content: '╚═══════════════════════════════════════════════════════════╝'
    },
    {
      type: 'output',
      content: 'Type "help" to see available commands'
    }
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: { [key: string]: () => TerminalLine[] } = {
    help: () => [
      { type: 'output', content: 'Available commands:' },
      { type: 'output', content: '  help              - Show this help message' },
      { type: 'output', content: '  about             - About me' },
      { type: 'output', content: '  skills            - View technical skills' },
      { type: 'output', content: '  experience        - View experience summary' },
      { type: 'output', content: '  projects          - View featured projects' },
      { type: 'output', content: '  certifications    - View certifications' },
      { type: 'output', content: '  contact           - Contact information' },
      { type: 'output', content: '  clear             - Clear terminal' },
      { type: 'output', content: '  social            - Social media links' }
    ],
    about: () => [
      { type: 'output', content: 'About Mahesh Reddy:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: 'Full-Stack DevOps, Cloud & SRE Engineer with 8+ years' },
      { type: 'output', content: 'of experience building scalable multi-cloud platforms.' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Expertise: AWS | Azure | Kubernetes | Terraform' },
      { type: 'output', content: 'Philosophy: Automation, Reliability, and DevOps Excellence' }
    ],
    skills: () => [
      { type: 'output', content: 'Technical Skills:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '☁️  Cloud: AWS, Azure' },
      { type: 'output', content: '☸️  Orchestration: Kubernetes, Docker, Helm' },
      { type: 'output', content: '🔧 IaC: Terraform, CloudFormation, Ansible' },
      { type: 'output', content: '📊 Observability: Prometheus, Grafana, Datadog, ELK' },
      { type: 'output', content: '🔒 Security: Veracode, Container Scanning, SIEM' },
      { type: 'output', content: '🚀 CI/CD: Jenkins, GitLab CI, GitHub Actions' }
    ],
    experience: () => [
      { type: 'output', content: 'Experience:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '2024-Present: DevOps Engineer @ USAA (AWS EKS)' },
      { type: 'output', content: '2019-2024:   DevOps Engineer @ AT&T (Multi-cloud)' },
      { type: 'output', content: '             • 25% cost reduction • 99.95% uptime' },
      { type: 'output', content: '2017-2019:   Cloud Infrastructure Engineer' },
      { type: 'output', content: '' },
      { type: 'output', content: '→ View full timeline: /about' }
    ],
    projects: () => [
      { type: 'output', content: 'Featured Projects:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '📦 Kubernetes Learning Guide' },
      { type: 'output', content: '   Comprehensive K8s deployment patterns' },
      { type: 'output', content: '📦 AWS Infrastructure Automation' },
      { type: 'output', content: '   Terraform modules & CloudFormation templates' },
      { type: 'output', content: '📦 Getting Started App' },
      { type: 'output', content: '   Full CI/CD pipeline with Docker & Jenkins' }
    ],
    certifications: () => [
      { type: 'output', content: 'Certifications:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '✓ AWS Certified Solutions Architect - Associate (2022)' },
      { type: 'output', content: '✓ Azure Administrator Associate (2023)' },
      { type: 'output', content: '⟳ Certified Kubernetes Administrator (CKA) - In Progress' }
    ],
    contact: () => [
      { type: 'output', content: 'Get in Touch:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '📧 Email: amireddym0144@gmail.com' },
      { type: 'output', content: '🔗 LinkedIn: linkedin.com/in/amireddym' },
      { type: 'output', content: '💻 GitHub: github.com/maheshreddy32825' },
      { type: 'output', content: '✍️  Medium: medium.com/@mahesh.r0608' }
    ],
    social: () => [
      { type: 'output', content: 'Social Media & Links:' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '🐙 GitHub: github.com/maheshreddy32825' },
      { type: 'output', content: '💼 LinkedIn: linkedin.com/in/amireddym' },
      { type: 'output', content: '📝 Medium: medium.com/@mahesh.r0608' },
      { type: 'output', content: '📧 Email: amireddym0144@gmail.com' }
    ],
    clear: () => {
      setLines([]);
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output: TerminalLine[] = [];

    if (trimmedCmd) {
      output.push({ type: 'input', content: `$ ${cmd}` });

      if (commands[trimmedCmd]) {
        output.push(...commands[trimmedCmd]());
      } else if (trimmedCmd) {
        output.push({ type: 'output', content: `bash: ${cmd}: command not found` });
        output.push({ type: 'output', content: 'Type "help" for available commands' });
      }
    }

    setLines((prev) => [...prev, ...output]);
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(null);
    setInput('');

    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== null) {
        if (historyIndex === history.length - 1) {
          setHistoryIndex(null);
          setInput('');
        } else {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-slate-500 ml-4">portfolio-terminal — bash — 80x24</span>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="p-4 font-mono text-sm text-slate-200 h-96 overflow-y-auto bg-slate-950 space-y-1"
        style={{ fontFamily: 'Courier New, monospace' }}
      >
        {lines.map((line, index) => (
          <div key={index} className={`${
            line.type === 'input' ? 'text-cyan-400' : 'text-slate-300'
          }`}>
            {line.content}
          </div>
        ))}
        <div className="flex items-center gap-2 text-cyan-400">
          <span>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent outline-none"
            spellCheck="false"
          />
        </div>
      </div>

      {/* Terminal Footer - Help Text */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 text-xs text-slate-500">
        Type "help" for commands • Use ↑↓ to navigate history
      </div>
    </div>
  );
};

export default TerminalCLI;
