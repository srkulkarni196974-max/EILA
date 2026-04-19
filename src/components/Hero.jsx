import React from 'react'
import LifecycleAnimation from './LifecycleAnimation'

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                        A pencil that doesn’t end in a dustbin.
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        fontFamily: 'var(--font-body)'
                    }}>
                        Eila Eco Pencils are crafted with intention. Once your pencil becomes too short to write, plant it and watch it bloom into a new life.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn">Get Your Pencil</button>
                        <button className="btn btn-outline">Our Story</button>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <LifecycleAnimation />
                    <p style={{
                        textAlign: 'center',
                        marginTop: '1.5rem',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                        fontSize: '0.9rem'
                    }}>
                        Hover to see the journey
                    </p>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                bottom: '-5%',
                right: '-5%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(143, 169, 120, 0.1) 0%, transparent 70%)',
                zIndex: -1
            }} />
        </section>
    )
}

export default Hero
