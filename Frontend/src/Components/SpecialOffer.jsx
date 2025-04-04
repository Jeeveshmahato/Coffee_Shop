// src/components/SpecialOffers.jsx
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SpecialOffers = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const offers = [
    {
      title: 'Happy Hour',
      description: '50% off all drinks from 2pm to 4pm weekdays',
      icon: '⏳',
      color: 'bg-purple-600'
    },
    {
      title: 'Loyalty Card',
      description: 'Get every 6th coffee free with our loyalty program',
      icon: '💳',
      color: 'bg-blue-600'
    },
    {
      title: 'Student Discount',
      description: '15% off for students with valid ID',
      icon: '🎓',
      color: 'bg-green-600'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section ref={ref} className="py-16 bg-gray-800 text-gray-100">
      
      <h2 className="text-4xl font-bold text-center mb-8">Special Offers</h2>

      <div className="container mx-auto px-4">
        {/* <motion.h2 
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-amber-400"
        >
          Special Offers
        </motion.h2> */}
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`${offer.color} p-6 rounded-xl shadow-lg overflow-hidden relative`}
            >
              <div className="absolute -top-4 -right-4 text-8xl opacity-20">
                {offer.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">{offer.title}</h3>
              <p className="text-gray-100 relative z-10">{offer.description}</p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors relative z-10"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOffers