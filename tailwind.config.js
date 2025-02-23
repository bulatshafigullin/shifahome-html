import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
    content: [
        './src/**/*.{js,html,njk}'
    ],
    theme: {
        screens: {
            m320: '320px',
            m375: '375px',
            m475: '475px',
            m576: '576px',
            m768: '768px',
            m992: '992px',
            m1024: '1024px',
            m1280: '1280px',
        },
        fontFamily: {
            sans: ['LVC Sans', ...fontFamily.sans],
        },
        extend: {
            colors: {
                sale: '#DD4242',
                main: '#6B6862',
                bg: '#F6F6F6',
                accent: '#5AB77F',
                secondary: '#A7A7A7',
                border: '#E7E1E1'
            }
        }
    },
    corePlugins: {
        container: false,
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [
        ({ addUtilities, theme, addVariant }) => {
            const spacing = theme('width');

            const sizeUtility = Object.entries(spacing).reduce(
                (acc, [key, value]) => {
                    acc[`.min-size-${key.replace(/[./]/g, '\\$&')}`] = {
                        'min-width': value,
                        'min-height': value,
                    };
                    acc[`.max-size-${key.replace(/[./]/g, '\\$&')}`] = {
                        'max-width': value,
                        'max-height': value,
                    };
                    return acc;
                },
                {},
            );

            addUtilities({
                ...sizeUtility,
                '.flex-center': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                '.pos-abs': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                '.pos-abs-x': {
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                },
                '.pos-abs-y': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
            });
        },
    ],
}
