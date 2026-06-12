
import { Button } from './Button';

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up" style={{ animationDelay: '1s' }}>
      <div className="bg-white rounded-full px-4 py-2 flex items-center gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.05)] border border-[#051A24]/5">
        <div className="font-serif text-2xl font-semibold text-[#051A24] pl-4">
          V
        </div>
        <Button variant="primary" href="https://halaskastudio.com/book" className="px-6 py-2.5 text-sm">
          Start a chat
        </Button>
      </div>
    </div>
  );
}
