import Typography from 'typography';

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    googleFonts: [{
            name: 'Amatic SC'
        },
        {
            name: 'Open Sans Condensed'
        }
    ],
    headerFontFamily: ['Amatic SC', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Open Sans Condensed', 'Georgia', 'serif']
});
export default typography;