// components/Footer.jsx
const Footer = ({ styles, deviceType }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={{
          fontSize: deviceType.isMobile ? '14px' : '16px'
        }}>
          © 2025 Dat Tri Tat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
