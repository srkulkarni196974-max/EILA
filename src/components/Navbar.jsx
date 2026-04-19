import React from 'react'
import { Leaf } from 'lucide-react'

const Navbar = () => {
    return (
        <nav style={{
            padding: '1.5rem 2rem',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: 'rgba(249, 247, 242, 0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(74, 93, 78, 0.1)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Leaf color="#4A5D4E" size={28} />
                <span style={{
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    color: 'var(--earth-green)'
                }}>
                    Eila
                </span>
            </div>

            <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {['Our Story', 'Process', 'The Pencil', 'Impact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)'
                        }}>
                            {item}
                        </a>
                    </li>
                ))}
                <li>
                    <button className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                        Get Eila
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
