import React from 'react'
import { Instagram, Twitter, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    borderBottom: '1px solid rgba(74,93,78,0.1)',
                    paddingBottom: '4rem'
                }}>
                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Eila</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            A small studio dedicated to nature-driven stationery and the circular economy.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Sitemap</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#our-story">Our Story</a></li>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#the-pencil">Product</a></li>
                            <li><a href="#impact">Impact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <li>hello@eila-eco.com</li>
                            <li>Garden Studio, Bristol, UK</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Follow the Journey</h4>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Instagram size={20} color="var(--earth-green)" style={{ cursor: 'pointer' }} />
                            <Twitter size={20} color="var(--earth-green)" style={{ cursor: 'pointer' }} />
                            <Mail size={20} color="var(--earth-green)" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem'
                }}>
                    <span>© 2026 Eila Eco Pencils. All rights reserved.</span>
                    <span>Sustainably Handcrafted.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
