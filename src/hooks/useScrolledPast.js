import { useEffect, useState } from 'react';

// Informa se a página já rolou além de um limite em px; usado pelo Header e pelo botão flutuante
export function useScrolledPast(threshold) {
  // Lê a posição inicial para o caso de a página recarregar já rolada
  const [isPast, setIsPast] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    const handleScroll = () => setIsPast(window.scrollY > threshold);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
}
