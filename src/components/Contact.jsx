// components/Contact.jsx
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = ({ styles, deviceType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create mailto link
    const mailto = `mailto:tatdattri0306@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={{ ...styles.container, maxWidth: '800px' }}>
        <h2 style={styles.sectionTitle}>Let's Connect</h2>
        <p style={{ 
          fontSize: deviceType.isMobile ? '16px' : '20px', 
          color: '#6B7280', 
          marginBottom: deviceType.isMobile ? '32px' : '48px', 
          textAlign: 'center' 
        }}>
          I'm always interested in discussing new opportunities and challenging projects. 
          Feel free to reach out!
        </p>

        {/* Form Container */}
        <div style={styles.formContainer}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            style={styles.formInput}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            style={styles.formInput}
          />
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            style={styles.formInput}
          />
          <textarea
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            style={styles.formTextarea}
          />
          <button
            onClick={handleSubmit}
            style={{ 
              ...styles.primaryButton, 
              width: '150px', 
              alignSelf: 'center', 
              fontSize: deviceType.isMobile ? '16px' : '18px' 
            }}
          >
            Send
          </button>
        </div>

        {/* Phone Button */}
        <div style={{ 
          ...styles.buttonGroup, 
          justifyContent: 'center', 
          marginBottom: '32px', 
          flexDirection: deviceType.isMobile ? 'column' : 'row' 
        }}>
          <a 
            href="tel:408-805-1757" 
            style={{ 
              ...styles.secondaryButton, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              justifyContent: 'center' 
            }}
          >
            <Phone size={20} />
            408-805-1757
          </a>
        </div>
        
        {/* Social Links */}
        <div style={{ ...styles.socialLinks, justifyContent: 'center' }}>
          <a 
            href="https://github.com/dattritat" 
            style={{
              padding: '12px',
              backgroundColor: '#F3F4F6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
          >
            <Github size={24} color="#4B5563" />
          </a>
          <a 
            href="https://linkedin.com/in/dattritat/" 
            style={{
              padding: '12px',
              backgroundColor: '#F3F4F6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
          >
            <Linkedin size={24} color="#4B5563" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;