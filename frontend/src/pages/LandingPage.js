import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

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
            <div className="grid grid-cols-2 gap-6 my-8 items-stretch">
                <Link to="/leaderboard" className="cursor-pointer h-full">
                    <Card className="p-6 transition hover:shadow-lg text-center cursor-pointer h-full min-h-[180px] flex flex-col justify-center" style={{ backgroundColor: cardBgColor }}>
                        <h2 className="text-lg font-display mb-2" style={{ color: headingColor }}>Leaderboard</h2>
                        <p style={{ color: textColorLight }}>See the top performers and track your progress.</p>
                    </Card>
                </Link>
                <Link to="/game" className="cursor-pointer h-full">
                    <Card className="p-6 transition hover:shadow-lg text-center cursor-pointer h-full min-h-[180px] flex flex-col justify-center" style={{ backgroundColor: cardBgColor }}>
                        <h2 className="text-lg font-display mb-2" style={{ color: headingColor }}>Game Rules</h2>
                        <p style={{ color: textColorLight }}>Read the rules and instructions for the event.</p>
                    </Card>
                </Link>
            </div>
                <div className="col-span-full">
                    <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                        <h2 className="text-xl font-display mb-4 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>About E-Cell</h2>
                        <p className="mb-6" style={{ color: textColor }}>
                            ECell is dedicated to fostering entrepreneurship and innovation among students. We organize workshops, events, and competitions to inspire and empower the next generation of leaders and innovators.
                        </p>
                    </Card>
                </div>
        </div>
    );
}

export default LandingPage;
