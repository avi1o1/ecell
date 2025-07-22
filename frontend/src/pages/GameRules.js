import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';

function GameRules() {
    const { currentTheme, themes } = useTheme();

    // Access the current theme object from the themes collection
    const theme = themes[currentTheme];

    // Determine if the current theme is a dark theme by checking its text color
    const isDarkTheme = theme.text.startsWith('#F') || theme.text.startsWith('#f') ||
        theme.text.startsWith('#E') || theme.text.startsWith('#e') ||
        theme.text === '#FAFAFA' || theme.text === '#F5F5F4' || theme.text === '#F9FAFB' ||
        theme.text === '#F8FAFC';

    // Set contrasting colors based on theme
    const textColor = isDarkTheme ? 'var(--color-text)' : 'var(--color-text)';
    const headingColor = isDarkTheme ? 'var(--color-text)' : 'var(--color-dark)';
    const textColorLight = isDarkTheme ? 'var(--color-textLight)' : 'var(--color-textLight)';
    const cardBgColor = isDarkTheme ? 'var(--color-light)' : 'white';

    return (
        <div className="rules-page" style={{ color: textColor }}>
            <div className="page-header" style={{ borderBottom: `3px solid ${themes[currentTheme].primary}`, paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 className="text-3xl font-display mb-2" style={{ color: themes[currentTheme].primary }}>
                            Game Rules
                        </h1>
                        <p style={{ color: textColorLight }}>
                            Understand the rules before you play
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-8">
                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>General Rules</h2>
                    <p className="mb-6" style={{ color: textColor }}>
                        Follow these rules to ensure fair play and an enjoyable experience for everyone.
                    </p>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Respect other players and their strategies.</li>
                        <li>Do not cheat or exploit game mechanics.</li>
                        <li>Follow the instructions provided by the game moderators.</li>
                        <li>Report any issues or bugs to the support team.</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>Scoring System</h2>
                    <p className="mb-6" style={{ color: textColor }}>
                        Learn how points are calculated and what actions contribute to your score.
                    </p>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Points are awarded for completing tasks and challenges.</li>
                        <li>Bonus points are given for exceptional performance.</li>
                        <li>Negative points may be assigned for rule violations.</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>Winning Criteria</h2>
                    <p className="mb-6" style={{ color: textColor }}>
                        Understand what it takes to win and how winners are determined.
                    </p>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>The player with the highest score at the end of the game wins.</li>
                        <li>Tiebreakers are resolved based on specific game metrics.</li>
                        <li>Special awards may be given for unique achievements.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}

export default GameRules;
