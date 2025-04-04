// src/components/ContactLocation.jsx
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactLocation = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'hello@coffeehaven.com',
      link: 'mailto:hello@coffeehaven.com'
    },
    {
      icon: '🕒',
      title: 'Hours',
      value: 'Mon-Fri: 7am-7pm\nSat-Sun: 8am-6pm'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Brew Street, Coffeeville, CV 12345',
      link: 'https://www.google.com/maps/place/123+Brew+Street,+Coffeeville,+CV+12345'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const mapVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section ref={ref} className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        
      <h2 className="text-4xl font-bold text-center mb-8">Contact & Location</h2>

        
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="lg:w-1/2 space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-300 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-amber-400 transition-colors whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={mapVariants}
            className="lg:w-1/2 h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132713!2d-73.9878449245373!3d40.74844097138989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
              title="Coffee Shop Location"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-amber-300">Have Questions?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactLocation