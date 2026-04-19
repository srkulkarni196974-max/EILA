import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LifecycleAnimation = () => {
    const [isHovered, setIsHovered] = useState(false)

    // Animation states based on story flow
    const stages = [
        { id: 'tree', label: 'Mature Tree', icon: '🌳', color: '#4A5D4E' },
        { id: 'wood', label: 'Sustainably Sourced', icon: '🪵', color: '#B89C7E' },
        { id: 'pencil', label: 'Eila Eco Pencil', icon: '✏️', color: '#8FA978' },
        { id: 'using', label: 'Creative Journey', icon: '✍️', color: '#4A5D4E' },
        { id: 'short', label: 'Ready to Bloom', icon: '📏', color: '#B89C7E' },
        { id: 'planting', label: 'Giving Back', icon: '🪴', color: '#8FA978' },
        { id: 'growing', label: 'New Life', icon: '🌿', color: '#4A5D4E' }
    ]

    // We'll simulate the "Lottie-style" progress through these stages on hover
    // For a real production app, we would use a Lottie JSON. 
    // Here we use Framer Motion to create a highly polished interactive sequence.

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: '100%',
                aspectRatio: '1',
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(74, 93, 78, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                cursor: 'pointer',
                border: '1px solid rgba(184, 156, 126, 0.1)'
            }}
        >
            <div style={{ position: 'relative', height: '200px', width: '200px' }}>
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.div
                            key="static"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            style={{
                                fontSize: '100px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%'
                            }}
                        >
                            🌳
                        </motion.div>
                    ) : (
                        <motion.div
                            key="active-sequence"
                            style={{ height: '100%', width: '100%' }}
                        >
                            {/* This inner component would cycle through stages */}
                            <ActiveSequence stages={stages} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        bottom: '2rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                    }}
                >
                    Discover the circle of life
                </motion.div>
            )}
        </div>
    )
}

const ActiveSequence = ({ stages }) => {
    const [index, setIndex] = useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === stages.length - 1) {
                    clearInterval(interval)
                    return prev
                }
                return prev + 1
            })
        }, 1500) // 1.5s per stage for "calm, slow, organic motion"
        return () => clearInterval(interval)
    }, [stages.length])

    const current = stages[index]

    return (
        <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '1rem'
            }}
        >
            <span style={{ fontSize: '100px' }}>{current.icon}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    fontFamily: 'var(--font-headline)',
                    color: current.color,
                    fontWeight: 600
                }}
            >
                {current.label}
            </motion.span>
        </motion.div>
    )
}

export default LifecycleAnimation
