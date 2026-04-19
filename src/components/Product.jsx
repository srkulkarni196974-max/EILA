import React from 'react'

const Product = () => {
    return (
        <section id="the-pencil" style={{ background: '#FFF' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '6rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Only Pencil You'll Ever Need</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Standard HB graphite encased in premium cedar. Available in selected seed varieties.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { title: 'Wildflower Mix', desc: 'A burst of color for your garden.' },
                                { title: 'Fresh Basil', desc: 'Perfect for your kitchen window.' },
                                { title: 'Cherry Tomato', desc: 'Tiny treats from your creative tools.' }
                            ].map((seed, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: 'var(--leaf-green)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: 'var(--earth-green)' }}>{seed.title}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{seed.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="btn" style={{ marginTop: '3rem' }}>Shop the Collection</button>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <img
                            src="https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=1974&auto=format&fit=crop"
                            alt="Eila Pencil close up"
                            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
