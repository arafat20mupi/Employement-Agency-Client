import { FaWhatsapp} from 'react-icons/fa';

const Social = () => {
  return (
    <div className="fixed bottom-5 z-50 right-5 flex space-x-4">
      <button
        onClick={() => window.open('https://wa.me/+971522002611', '_blank')}
        className="bg-green-500 text-white rounded-full p-4 hover:bg-green-600 transition duration-300 animate-bounce shadow-lg shadow-green-500/50 hover:shadow-[0_0_15px_5px_rgba(72,187,120,0.8)]"
      >
        <FaWhatsapp size={20} />
      </button>
    </div>
  );
};

  export default Social