import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    body: {
        fontFamily: '&ff-secondary',
        background: '&clr-white',
        color: '&clr-grey-1',
        lineHeight: '1.5',
        fontSize: '0.875rem',
        marginTop: '5rem'
    },
    hero: {
        marginTop: '-5rem',
        paddingTop: '5rem',
        height: '100vh',
        background: 'clr-primary-10',
        position: 'relative',
    },

    heroCenter: {
        height: '100%',
        display: 'grid',
        alignItems: 'center'
    },

    heroUnderline: {
        marginBottom: '0.5rem',
        marginLeft: '0',
    },
    heroInfo: {
        background: '&clr-primary-10',
    },
    heroImg: {
        display: 'none',
        width: '40rem',
    },
    heroInfoH4: {
        color: '&clr-grey-5',
    },
    heroBtn: {
        marginTop: '1.25rem',
    },
    '@media screen and(min - width: 992px)': {
        heroBefore: {
            content: '',
            position: 'absolute',
            top: '0',
            left: '65%',
            right: '0',
            bottom: '0',
            background: '&clr-white',
        },
        heroCenter: {
            gridTemplateColumns: 'repeat(12, 1fr)',
        },

        heroH4: {
            fontSize: '0.85rem',
        },
        heroInfo: {
            gridRow: '1/1',
            gridColumn: '1/span 8'
        },
        heroImg: {
            display: 'block',
            gridRow: '1/1',
            gridColumn: '6/-1',
        },
    },
    '@media screen and(min-width:1170px)': {
        heroH4: {
            fontSize: '1rem',
        },

        heroInfo: {
            gridColumn: '1/span 8',
        },
    }
});

export default styles;