import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from '@emotion/styled';

const EmojisContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
`;

interface EmojiProps {
  x: number;
  y: number;
  size: number;
  emoji: string;
}

const Emoji = ({ x, y, size, emoji }: EmojiProps) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.7, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {emoji}
    </motion.div>
  );
};

const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState<Array<{ id: number; x: number; y: number; size: number; emoji: string }>>([]);
  
  const candyEmojis = ['🍬', '🍭', '🍪', '🧁', '🍫', '🍯'];

  useEffect(() => {
    const newEmojis = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 15,
      emoji: candyEmojis[Math.floor(Math.random() * candyEmojis.length)],
    }));
    setEmojis(newEmojis);
  }, []);

  return (
    <EmojisContainer>
      {emojis.map((emoji) => (
        <Emoji key={emoji.id} {...emoji} />
      ))}
    </EmojisContainer>
  );
};

export default FloatingEmojis; 