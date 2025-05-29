import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  const pdfUrl = process.env.PUBLIC_URL + "/resume/Rajitha_Final1.pdf";
  const [isMobile, setIsMobile] = useState(false);
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen px-6 sm:px-10 py-12 bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Resume
        </h1>
        
        {/* Download Button */}
        <div className="flex justify-end mb-6">
          <motion.button
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Download size={20} />
            Download PDF
          </motion.button>
        </div>

        {/* PDF Viewer with Mobile Alternative */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          {isMobile ? (
            // Mobile view
            <div className="p-6 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For the best viewing experience on mobile, please download the PDF or view in browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Download size={20} />
                  Download PDF
                </button>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  View in Browser
                </a>
              </div>
            </div>
          ) : (
            // Desktop view
            <embed 
            src={pdfUrl}
            type="application/pdf"
            className="w-full h-screen"
          />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;