tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#b46b3a',
                primaryBlack: '#000000',
            }
        },
        screens: {
            md: { max: '1024px' },
            sm: { max: '768px' },
            xs: { max: '568px' },
        },
    }
}
