import '../app/globals.css';

export default function EventRulesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {children}
    </div>
  );
}
