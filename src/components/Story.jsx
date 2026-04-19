import React from 'react'

const Story = () => {
    return (
        <section id="our-story" style={{ background: '#FFF' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '6rem',
                alignItems: 'center'
            }}>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '0.8',
                        background: 'var(--kraft-brown)',
                        borderRadius: '24px',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
                            alt="Founder working"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-2rem',
                        right: '-2rem',
                        background: 'var(--leaf-green)',
                        padding: '2rem',
                        borderRadius: '16px',
                        color: 'white',
                        maxWidth: '250px'
                    }}>
                        <p style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', fontWeight: 600 }}>
                            "We don't inherit the earth, we borrow it from our children."
                        </p>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'var(--leaf-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        Our Roots
                    </h4>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                        Born from a simple question: What if waste could grow?
                    </h2>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', gap: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <p>
                            Eila started in a small workshop with a single goal: to rethink the objects we use every day. Pencils are tools of creation, yet millions of them end up as waste every year.
                        </p>
                        <p>
                            I wanted to create something that didn't just disappear, but gave back. After months of searching for the right wood, the right seeds, and the right artisans, Eila was born.
                        </p>
                        <p>
                            Today, we are a small team of three, working from our garden studio to bring a little bit of nature back into your workspace.
                        </p>
                    </div>
                    <button className="btn btn-outline" style={{ marginTop: '2rem' }}>Meet the Team</button>
                </div>
            </div>
        </section>
    )
}

export default Story
