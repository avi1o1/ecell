import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';

function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const { currentTheme, themes } = useTheme();

    useEffect(() => {
        // Fetch leaderboard data (or localStorage, API, etc.)
        setLeaderboard([
            { name: 'John Doe', score: 100, breakdown: { tasks: 50, challenges: 30, bonus: 20 } },
            { name: 'Jane Smith', score: 95, breakdown: { tasks: 40, challenges: 35, bonus: 20 } },
        ]);
    }, []);

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

    const handleCardClick = (player) => {
        setSelectedPlayer(player);
    };

    const handleCloseModal = () => {
        setSelectedPlayer(null);
    };

    return (
        <div className="leaderboard-page" style={{ color: textColor }}>
            <div className="page-header" style={{ borderBottom: `3px solid ${themes[currentTheme].primary}`, paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 className="text-3xl font-display mb-2" style={{ color: themes[currentTheme].primary }}>
                            Leaderboard
                        </h1>
                        <p style={{ color: textColorLight }}>
                            See who is leading the game
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-8">
                {leaderboard.map((player, index) => (
                    <Card
                        key={index}
                        className="p-6 cursor-pointer"
                        style={{ backgroundColor: cardBgColor }}
                        onClick={() => handleCardClick(player)}
                    >
                        <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>{player.name}</h2>
                        <p className="mb-6" style={{ color: textColor }}>
                            Score: {player.score}
                        </p>
                    </Card>
                ))}
            </div>

            {selectedPlayer && (
                <Modal
                    show={!!selectedPlayer}
                    onClose={handleCloseModal}
                    title={`${selectedPlayer.name}'s Score Breakdown`}
                >
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Tasks: {selectedPlayer.breakdown.tasks}</li>
                        <li>Challenges: {selectedPlayer.breakdown.challenges}</li>
                        <li>Bonus: {selectedPlayer.breakdown.bonus}</li>
                    </ul>
                </Modal>
            )}
        </div>
    );
}

export default LeaderboardPage;
