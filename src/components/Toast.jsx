import { useEffect } from "react";

function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [message]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-2 right-4 z-50 px-4 py-2 rounded-lg text-white text-xs shadow-md transition-all ${
        type === "error" ? "bg-[#C11313]" : "bg-green-600"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;
