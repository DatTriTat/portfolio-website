import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, scrolled, styles, deviceType }) => {
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];
  
  const navStyle = {
    ...styles.nav,
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.08)' : 'none'
  };
  
  return (
    <nav style={navStyle}>
      <div style={styles.container}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Dat Tri Tat</div>
          
          {/* Desktop Navigation */}
          <div style={{ 
            ...styles.navLinks, 
            display: deviceType.isMobile ? 'none' : 'flex' 
          }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.colors.accent}
                onMouseLeave={(e) => e.target.style.color = '#4B5563'}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            style={{ 
              ...styles.mobileMenuButton, 
              display: deviceType.isMobile ? 'block' : 'none' 
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && deviceType.isMobile && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ ...styles.navLink, fontSize: '18px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
