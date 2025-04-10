tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#00C6BF',
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
