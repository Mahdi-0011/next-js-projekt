// components/DetailModal.tsx
interface DetailModalProps {
  item: { [key: string]: string | number };
  onClose: () => void;
}

export default function DetailModal({ item, onClose }: DetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/5 relative max-h-[80vh] overflow-y-auto">
        {/* Stäng-knapp */}
        <button
          className="absolute top-2 right-2 text-black font-bold"
          onClick={onClose}
        >
          X
        </button>

        <h3 className="font-semibold text-lg mb-4 text-black">Detaljer:</h3>

        {/* Visar JSON som strukturerad lista */}
        <div className="space-y-2">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-1">
              <span className="font-medium text-gray-700">{key}:</span>
              <span className="text-black">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
