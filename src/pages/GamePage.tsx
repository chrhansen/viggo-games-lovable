import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import chickenHopImg from "@/assets/chicken-hop.png";
import hunterGuyImg from "@/assets/hunter-guy.png";

const games: Record<string, { title: string; image: string; color: string; url: string }> = {
  "chicken-hop": {
    title: "Chicken Hop",
    image: chickenHopImg,
    color: "#FF4B4B",
    url: "",
  },
  "hunter-guy": {
    title: "Hunter Guy",
    image: hunterGuyImg,
    color: "#22C55E",
    url: "",
  },
};

const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const game = gameId ? games[gameId] : null;

  if (!game) {
    navigate("/");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 z-10 h-10 w-10 rounded-full bg-card/80 backdrop-blur border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>
      <iframe
        src={game.url}
        title={game.title}
        className="w-full h-full border-0"
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default GamePage;
