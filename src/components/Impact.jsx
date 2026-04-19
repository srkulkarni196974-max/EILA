import React from 'react'

const Impact = () => {
    return (
        <section id="impact" style={{ background: 'var(--earth-green)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>Small intentional steps.</h2>
                        <p style={{ opacity: 0.9, fontSize: '1.1rem', marginBottom: '2rem' }}>
                            We don't claim to save the world, but we believe in the power of conscious choices. Every Eila pencil is a commitment to a circular way of living.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {[
                                { label: 'Waitlist', value: '450+' },
                                { label: 'Trees Planted', value: '1,200+' },
                                { label: 'Seeds Bloom', value: '8,000+' },
                                { label: 'Plastic Saved', value: '50kg' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-headline)', fontWeight: 600 }}>{stat.value}</div>
                                    <div style={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '3rem',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Our Ethics</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                'Fair wages for our local artisans.',
                                '100% plastic-free logistics.',
                                'Carbon-neutral shipping options.',
                                'Transparent seed sourcing (non-GMO).'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', background: 'var(--leaf-green)', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '1rem', opacity: 0.9 }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
