import styles from './Button.module.css';

// Botão reutilizável: vira <a> quando recebe href (navegação) ou <button> (ação na página)
function Button({ href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  // Junta as classes de base, variante e tamanho; filter remove valores vazios
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  // type="button" evita envio acidental de formulários; pode ser sobrescrito via props
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
