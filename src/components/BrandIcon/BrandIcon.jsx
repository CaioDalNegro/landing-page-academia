// Desenha um logo do simple-icons; decorativo, pois o link que o envolve já tem um nome acessível
function BrandIcon({ icon, size = 20, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default BrandIcon;
