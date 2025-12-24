import React, { useState, useEffect } from 'react';

interface Command {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: () => void;
  category: string;
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Return to homepage',
      icon: '🏠',
      action: () => (window.location.href = '/'),
      category: 'Navigation'
    },
    {
      id: 'about',
      title: 'Go to About',
      description: 'View about page',
      icon: '👤',
      action: () => (window.location.href = '/about/'),
      category: 'Navigation'
    },
    {
      id: 'projects',
      title: 'Go to Projects',
      description: 'View my projects',
      icon: '📦',
      action: () => (window.location.href = '/projects/'),
      category: 'Navigation'
    },
    {
      id: 'blog',
      title: 'Go to Blog',
      description: 'Read my blog posts',
      icon: '📝',
      action: () => (window.location.href = '/blog/'),
      category: 'Navigation'
    },
    {
      id: 'resume',
      title: 'Download Resume',
      description: 'Download my resume PDF',
      icon: '📄',
      action: () => window.open('/resume.pdf', '_blank'),
      category: 'Actions'
    },
    {
      id: 'github',
      title: 'Open GitHub',
      description: 'Visit my GitHub profile',
      icon: '🐙',
      action: () => window.open('https://github.com/maheshreddy32825', '_blank'),
      category: 'Social'
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn',
      description: 'Visit my LinkedIn profile',
      icon: '💼',
      action: () => window.open('https://linkedin.com/in/amireddym', '_blank'),
      category: 'Social'
    },
    {
      id: 'medium',
      title: 'Open Medium',
      description: 'Read my Medium blog',
      icon: '✍️',
      action: () => window.open('https://medium.com/@mahesh.r0608', '_blank'),
      category: 'Social'
    },
    {
      id: 'email',
      title: 'Send Email',
      description: 'Email me at amireddym0144@gmail.com',
      icon: '📧',
      action: () => (window.location.href = 'mailto:amireddym0144@gmail.com'),
      category: 'Social'
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearch('');
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          setIsOpen(false);
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  return (
    <>
      {/* Command Palette Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center gap-2 shadow-lg border border-slate-700 transition-all"
          title="Press Cmd+K"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm">Cmd+K</span>
        </button>
      )}

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={() => setIsOpen(false)}
        >
          {/* Command Palette */}
          <div
            className="w-full max-w-2xl bg-slate-900 rounded-lg shadow-2xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="border-b border-slate-700 p-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search commands..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                autoFocus
                className="flex-1 bg-transparent outline-none text-slate-100 placeholder-slate-500"
              />
              <kbd className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-xs">ESC</kbd>
            </div>

            {/* Commands List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredCommands.length > 0 ? (
                <div className="p-2">
                  {filteredCommands.map((cmd, index) => (
                    <div key={cmd.id}>
                      {index > 0 && filteredCommands[index - 1].category !== cmd.category && (
                        <div className="border-t border-slate-700 my-2 pt-2">
                          <p className="text-xs font-semibold text-slate-500 px-3 mb-2">{cmd.category}</p>
                        </div>
                      )}
                      {index === 0 && (
                        <p className="text-xs font-semibold text-slate-500 px-3 mb-2">{cmd.category}</p>
                      )}
                      <button
                        onClick={() => {
                          cmd.action();
                          setIsOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded text-left flex items-center gap-3 transition-colors ${
                          index === selectedIndex
                            ? 'bg-teal-600 text-white'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-lg">{cmd.icon}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{cmd.title}</p>
                          <p className="text-xs opacity-70">{cmd.description}</p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-slate-500">
                  <p>No commands found for "{search}"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-700 bg-slate-950 px-4 py-2 text-xs text-slate-500 flex items-center justify-between">
              <div className="flex gap-2">
                <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-400">↑↓</kbd>
                <span>to navigate</span>
              </div>
              <div className="flex gap-2">
                <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-400">⏎</kbd>
                <span>to select</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
