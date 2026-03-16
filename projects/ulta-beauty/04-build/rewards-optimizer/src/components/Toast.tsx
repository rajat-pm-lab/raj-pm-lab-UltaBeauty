import { useStore } from '../store/useStore';

export function Toast() {
  const { toast } = useStore();

  if (!toast) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-gray-900 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-lg">
        ✓ {toast}
      </div>
    </div>
  );
}
