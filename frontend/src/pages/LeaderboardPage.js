import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';

function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { currentTheme, themes } = useTheme();

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            console.log(process.env);
            const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
            const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID;
            const range = process.env.REACT_APP_SHEET_RANGE;

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error.message || 'Failed to fetch data from Google Sheets');
                }
                const data = await response.json();
                const values = data.values;

                if (values && values.length > 1) {
                    const headers = values[0];
                    const dataRows = values.slice(1);

                    const formattedLeaderboard = dataRows
                        .filter(row => row[0])
                        .map(row => {
                            const teamData = {
                                id: row[0],
                                name: row[1] || 'Unnamed Team',
                                members: row[2] || 'N/A',
                                score: parseInt(row[headers.indexOf('Total Points')], 10) || 0,
                                breakdown: {}
                            };

                            headers.forEach((header, index) => {
                                if (header === 'Total Points' || header === 'Team Name' || header === 'Members') return;
                                teamData.breakdown[header] = parseInt(row[index], 10) || 0;
                            });
                            
                            return teamData;
                        });

                    setLeaderboard(formattedLeaderboard);
                }
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
                setError(`Failed to load leaderboard: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboardData();
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
        setSelectedTeam(player);
    };

    const handleCloseModal = () => {
        setSelectedTeam(null);
    };
    
    if (loading) {
        return <div style={{ color: textColor, textAlign: 'center', padding: '2rem' }}>Loading Leaderboard...</div>;
    }

    if (error) {
        return <div style={{ color: 'var(--color-error)', textAlign: 'center', padding: '2rem' }}>{error}</div>;
    }

    return (
        <div className="leaderboard-page" style={{ color: textColor }}>
            <div className="page-header" style={{ borderBottom: `3px solid ${themes[currentTheme].primary}`, paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 className="text-3xl font-display mb-2" style={{ color: themes[currentTheme].primary }}>
                            Leaderboard
                        </h1>
                        <p style={{ color: textColorLight }}>
                            See who is leading the game and how they scored
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-8">
                {leaderboard.map((team) => (
                    <Card
                        key={team.id}
                        className="p-6 cursor-pointer"
                        style={{ backgroundColor: cardBgColor, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', lineHeight: '1' }}
                        onClick={() => handleCardClick(team)}
                    >
                        <h2 className="text-xl font-display m-0 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>{team.name}</h2>
                        <p style={{ color: textColor }}>
                            Score: {team.score}
                        </p>
                    </Card>
                ))}
            </div>

            {selectedTeam && (
                <Modal
                    show={!!selectedTeam}
                    onClose={handleCloseModal}
                    title={`${selectedTeam.name}'s Score Breakdown`}
                >
                    <div style={{ color: textColor }}>
                      <p className="mb-2"><strong>Members:</strong> {selectedTeam.members}</p>
                      <ul className="list-disc pl-6">
                          {Object.entries(selectedTeam.breakdown).map(([game, score]) => (
                              <li key={game}><strong>{game}:</strong> {score}</li>
                          ))}
                      </ul>
                      <p className="mt-4 text-lg font-bold">Total Score: {selectedTeam.score}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default LeaderboardPage;