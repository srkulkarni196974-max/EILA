import React from 'react'

const HowItIsMade = () => {
    const steps = [
        {
            title: "Sustainable Wood",
            desc: "We use only FSC-certified cedar wood, ensuring our forests stay healthy.",
            icon: "🌲"
        },
        {
            title: "Natural Graphite",
            desc: "High-quality, smooth graphite for a premium writing experience.",
            icon: "✏️"
        },
        {
            title: "Seed Capsule",
            desc: "Non-toxic, cellulose capsules containing organic seeds.",
            icon: "💊"
        },
        {
            title: "Eco Packaging",
            desc: "Recycled paper and soy-based inks. Zero plastic, always.",
            icon: "📦"
        }
    ]

    return (
        <section id="process" style={{ background: 'var(--off-white)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Crafted with Transparency</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto' }}>
                        Honesty is at the core of everything we do. Here is exactly how your Eila pencil comes to life.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {steps.map((step, i) => (
                        <div key={i} style={{
                            padding: '2.5rem',
                            background: 'white',
                            borderRadius: '24px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{step.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItIsMade
