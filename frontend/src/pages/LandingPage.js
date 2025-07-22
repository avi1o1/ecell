import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';

function LandingPage() {
    const { themes, currentTheme } = useTheme();
    const theme = themes[currentTheme];

    const isDarkTheme = theme.text.startsWith('#F') || theme.text.startsWith('#f') ||
        theme.text.startsWith('#E') || theme.text.startsWith('#e') ||
        theme.text === '#FAFAFA' || theme.text === '#F5F5F4' || theme.text === '#F9FAFB' ||
        theme.text === '#F8FAFC';

    const textColor = isDarkTheme ? 'var(--color-text)' : 'var(--color-text)';
    const headingColor = isDarkTheme ? 'var(--color-text)' : 'var(--color-dark)';
    const textColorLight = isDarkTheme ? 'var(--color-textLight)' : 'var(--color-textLight)';
    const cardBgColor = isDarkTheme ? 'var(--color-light)' : 'white';

    return (
        <div className="landing-page" style={{ color: textColor }}>
            <div className="page-header" style={{ borderBottom: `3px solid ${theme.primary}`, paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 className="text-3xl font-display mb-2" style={{ color: theme.primary }}>
                            Welcome to ECell's Induction Event
                        </h1>
                        <p style={{ color: textColorLight }}>
                            Join us for an exciting journey into the world of entrepreneurship and innovation. Participate in engaging activities, meet inspiring mentors, and discover your potential.
                        </p>
                    </div>
                </div>
            </div>

            <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                <h2 className="text-xl font-display mb-4 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>About ECell</h2>
                <p className="mb-6" style={{ color: textColor }}>
                    ECell is dedicated to fostering entrepreneurship and innovation among students. We organize workshops, events, and competitions to inspire and empower the next generation of leaders and innovators.
                </p>
            </Card>

            <Card className="p-6 my-6" style={{ backgroundColor: cardBgColor }}>
                <h2 className="text-xl font-display mb-4 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>Our Events</h2>
                <p className="mb-6" style={{ color: textColor }}>
                    From hackathons to startup pitch competitions, ECell hosts a variety of events that challenge and inspire participants to think creatively and work collaboratively. Join us to explore your potential and make a difference.
                </p>
            </Card>

            <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                <h2 className="text-xl font-display mb-4 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>Get Involved</h2>
                <p className="mb-6" style={{ color: textColor }}>
                    Whether you're a budding entrepreneur or simply curious about innovation, ECell offers opportunities to learn, grow, and connect with like-minded individuals. Be part of our community and start your journey today.
                </p>
            </Card>
        </div>
    );
}

export default LandingPage;
