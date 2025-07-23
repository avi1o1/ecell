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
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>JEOPARDY</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Team Setup</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Players are divided into equal-sized teams.</li>
                        <li>Each round includes 3-4 teams.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Game Board Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>5 categories with 4 questions each.</li>
                        <li>Total of 20 questions; game runs for 6 rounds.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Gameplay Mechanics</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Teams choose a category and point value.</li>
                        <li>Host reads the question. Team has 45 seconds to answer.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Answer Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Answer in the form of a question.</li>
                        <li>E.g., Q: This man's death caused a stock crash. A: Who is Steve Jobs?</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Correct: Team gets points.</li>
                        <li>Incorrect: Next team may steal.</li>
                        <li>One question is a Daily Double. The team must wager some or all of their points before seeing the question.</li>
                        <li>If correct, they gain the wagered amount; if wrong, they lose it.</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>PITCH PLUNGE</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>5-member teams.</li>
                        <li>Products are staggered to ensure equal prep time (10-12 mins).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Advertisement Guidelines</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>2-3 min ad + 1-2 min Q&A.</li>
                        <li>Use any creative mode (skit, song, ad etc.).</li>
                        <li>Must explain product, highlight features, target audience.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Question Round</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Judges/audience may ask 1-2 questions.</li>
                        <li>Teams judged on wit, clarity, coherence.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Conduct & Disqualification</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Offensive or disrespectful behavior = instant disqualification.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring Rubric (Out of 30)</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Creativity: 10</li>
                        <li>Clarity: 5</li>
                        <li>Appeal: 5</li>
                        <li>Presentation: 5</li>
                        <li>Q&A Handling: 5</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Time</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Each round lasts ~1 hour.</li>
                        <li>10 mins prep + 5 mins presentation/Q&A per team.</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>WHAT THE FUND</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Team Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>3 Players: Co-founder A, Co-founder B, and the Visionary.</li>
                        <li>A & B get blind industries on forehead. Visionary sees both.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>30 sec strategy time.</li>
                        <li>2 min pitch after host announces: "You just raised ₹1Cr!"</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Game Rules</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Co-founders must act aligned.</li>
                        <li>Visionary may interject to realign.</li>
                        <li>No naming the unseen industry.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring (Out of 100)</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Humor: 20</li>
                        <li>Chemistry: 20</li>
                        <li>Creativity: 20</li>
                        <li>Chaos/Contradictions: 20</li>
                        <li>Viability: 20</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Bonus</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Judges may add twists mid-pitch (e.g., "Now reduce climate change!").</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>MARKETING MANIA</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Objective</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Teams get a company name and description.</li>
                        <li>Create a logo, tagline, and color palette in 15 minutes.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Rules</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>No pre-made templates or AI use.</li>
                        <li>Tools allowed: Canva, Photoshop, Figma etc.</li>
                        <li>Submit designs on WhatsApp before timer ends.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Votes via ❤ reactions. Each ❤ = 10 points.</li>
                        <li>Ties broken by judges (based on creativity + brand fit).</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>2 CAPITALISTS, 1 CAPPER</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>3 Players per round.</li>
                        <li>Each picks a company from a chosen industry.</li>
                        <li>1 company is fake — Capper must avoid detection.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Gameplay</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Each player pitches their company (no naming real firms).</li>
                        <li>Each answers 2 questions.</li>
                        <li>Everyone votes who they think is the Capper.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Capper fooled both? +500 points.</li>
                        <li>Capper caught? +350 to each Capitalist.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Tie Breaker</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>If no majority, second Q&A round.</li>
                        <li>Still no majority = Capper wins.</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>CAREER LADDER</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Format</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>1 E-Cell member acts as a career.</li>
                        <li>Other team members ask yes/no or 1-2 word questions for 2 minutes.</li>
                        <li>15 seconds bonus only for guessing.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Rules</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Unlimited guesses within time.</li>
                        <li>No leading/open-ended questions.</li>
                        <li>Game ends on right guess or timeout.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Correct guess: +20 points</li>
                        <li>Wrong guess: 0 points</li>
                    </ul>
                </Card>

                <Card className="p-6" style={{ backgroundColor: cardBgColor }}>
                    <h2 className="text-xl font-display mb-4 pb-2 border-b-2 border-dark" style={{ color: headingColor, borderColor: isDarkTheme ? 'var(--color-light)' : 'var(--color-dark)' }}>CHEAP VS EXPENSIVE</h2>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Goal</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>Identify which of two products is the expensive one.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Time</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>45 seconds to guess as many as possible.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Gameplay</h3>
                    <ul className="list-disc pl-6 mb-4" style={{ color: textColor }}>
                        <li>View two items (A & B).</li>
                        <li>Team picks one as expensive.</li>
                        <li>Immediate feedback. Next pair shown.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: headingColor }}>Scoring</h3>
                    <ul className="list-disc pl-6" style={{ color: textColor }}>
                        <li>Right: +50 points</li>
                        <li>Wrong: -25 points</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}

export default GameRules;