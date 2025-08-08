// Helper function để check kích thước màn hình
export const getDeviceType = (width) => ({
  isMobile: width <= 768,
  isTablet: width > 768 && width <= 1024,
  isDesktop: width > 1024
});

// Function tạo responsive styles dựa trên window width
export const getResponsiveStyles = (windowWidth) => {
  const { isMobile, isTablet } = getDeviceType(windowWidth);
  
  return {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "0 16px" : "0 24px",
    },

    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: "all 0.3s ease",
      padding: "16px 0",
    },

    navContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logo: {
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: "bold",
      color: "#111827",
    },

    navLinks: {
      display: "flex",
      gap: "32px",
    },

    navLink: {
      color: "#4B5563",
      textDecoration: "none",
      fontWeight: "500",
      transition: "color 0.3s ease",
    },

    heroSection: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #F9FAFB 0%, #DBEAFE 100%)",
      padding: isMobile ? "80px 16px 24px" : "80px 24px 24px",
    },

    heroGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
      gap: isMobile ? "24px" : "48px",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },

    heroTitle: {
      fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
      fontWeight: "bold",
      marginBottom: "16px",
      color: "#111827",
    },

    heroSubtitle: {
      fontSize: isMobile ? "18px" : "24px",
      color: "#2563EB",
      fontWeight: "600",
      marginBottom: "16px",
    },

    heroDescription: {
      fontSize: isMobile ? "16px" : "18px",
      color: "#6B7280",
      lineHeight: "1.8",
      marginBottom: "24px",
    },

    buttonGroup: {
      display: "flex",
      gap: "16px",
      marginBottom: "32px",
      flexWrap: "wrap",
      flexDirection: isMobile ? "column" : "row",
    },

    primaryButton: {
      padding: "12px 24px",
      backgroundColor: "#2563EB",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
      transition: "background-color 0.3s ease",
      textAlign: "center",
      width: isMobile ? "100%" : "auto",
    },

    secondaryButton: {
      padding: "12px 24px",
      backgroundColor: "transparent",
      color: "#111827",
      border: "2px solid #D1D5DB",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
      transition: "all 0.3s ease",
      textAlign: "center",
      width: isMobile ? "100%" : "auto",
    },

    socialLinks: {
      display: "flex",
      gap: "24px",
    },

    socialLink: {
      color: "#6B7280",
      transition: "color 0.3s ease",
    },

    profileImageContainer: {
      position: "relative",
      width: isMobile ? "250px" : "350px",
      height: isMobile ? "250px" : "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },

    profileImageBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      zIndex: 1,
      background: "radial-gradient(circle at 60% 30%, #2563EB 50%, transparent 70%)",
      animation: "blob-spin 4s cubic-bezier(.4,0,.2,1) infinite",
      boxShadow: "0 0 50px 15px #2563eb55",
    },

    profileImage: {
      position: "relative",
      width: isMobile ? "200px" : "300px",
      height: isMobile ? "200px" : "300px",
      borderRadius: "50%",
      objectFit: "cover",
      zIndex: 2,
      boxShadow: "0 8px 24px rgba(37,99,235,0.15)",
    },

    section: {
      padding: isMobile ? "40px 16px" : "80px 24px",
      backgroundColor: "white",
    },

    sectionAlt: {
      padding: isMobile ? "40px 16px" : "80px 24px",
      backgroundColor: "#F9FAFB",
    },

    sectionTitle: {
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: "bold",
      marginBottom: isMobile ? "32px" : "48px",
      textAlign: "center",
      color: "#111827",
    },

    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: isMobile ? "20px" : "32px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: "1px solid #E5E7EB",
    },

    cardGradient: {
      background: "linear-gradient(135deg, #F9FAFB 0%, #DBEAFE 100%)",
      borderRadius: "12px",
      padding: isMobile ? "20px" : "32px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: "1px solid #E5E7EB",
    },

    skillsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
      gap: isMobile ? "16px" : "32px",
    },

    skillCategory: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: isMobile ? "16px" : "24px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: "1px solid #E5E7EB",
    },

    skillCategoryTitle: {
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    skillTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },

    skillTag: {
      padding: "4px 12px",
      backgroundColor: "#F3F4F6",
      color: "#4B5563",
      borderRadius: "6px",
      fontSize: isMobile ? "12px" : "14px",
      fontWeight: "500",
      transition: "all 0.3s ease",
      cursor: "default",
    },

    techTag: {
      padding: "4px 12px",
      backgroundColor: "#DBEAFE",
      color: "#1E40AF",
      borderRadius: "20px",
      fontSize: isMobile ? "12px" : "14px",
      fontWeight: "500",
    },

    projectCarousel: {
      position: "relative",
      overflow: "hidden",
    },

    projectSlider: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
    },

    projectSlide: {
      width: "100%",
      flexShrink: 0,
      padding: isMobile ? "0" : "0 10px",
    },

    carouselButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      padding: isMobile ? "8px" : "12px",
      backgroundColor: "white",
      borderRadius: "50%",
      border: "none",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    },

    carouselDots: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      marginTop: "24px",
    },

    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#D1D5DB",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },

    dotActive: {
      width: "32px",
      backgroundColor: "#2563EB",
      borderRadius: "4px",
    },

    bulletList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    bulletItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      marginBottom: "12px",
      fontSize: isMobile ? "14px" : "16px",
    },

    bullet: {
      width: "8px",
      height: "8px",
      backgroundColor: "#2563EB",
      borderRadius: "50%",
      marginTop: "8px",
      flexShrink: 0,
    },

    footer: {
      padding: isMobile ? "24px 16px" : "32px 24px",
      backgroundColor: "#111827",
      color: "white",
      textAlign: "center",
      fontSize: isMobile ? "14px" : "16px",
    },

    mobileMenuButton: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#4B5563",
    },

    mobileMenu: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: "white",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },

    // Responsive specific styles for forms
    formContainer: {
      maxWidth: isMobile ? "100%" : "520px",
      margin: "0 auto 40px auto",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },

    formInput: {
      padding: isMobile ? "12px" : "14px",
      borderRadius: "8px",
      border: "1px solid #D1D5DB",
      fontSize: isMobile ? "14px" : "16px",
      width: "100%",
    },

    formTextarea: {
      padding: isMobile ? "12px" : "14px",
      borderRadius: "8px",
      border: "1px solid #D1D5DB",
      fontSize: isMobile ? "14px" : "16px",
      resize: "vertical",
      width: "100%",
      fontFamily: "inherit",
    },
  };
};
