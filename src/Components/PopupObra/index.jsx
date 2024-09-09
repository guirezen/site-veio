import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useObrasContext } from '../../Common/Context/Obras';
import { ConteinerCaracteristicasObra, ConteinerDetalhesObra, ConteinerImage, ConteinerPopupObra } from './styles';
import CarouselObras from '../CarouselObras';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '.MuiDialog-container': {
        '@media(min-width: 1125px) and (max-width: 1360px)': {
            justifyContent: 'end',
        }
    },
    '.MuiPaper-root': {
        overflow: 'visible',
        width: '804px',

        '@media(max-width: 900px)': {
            width: '600px',
            margin: '0',
        },
        '@media(min-width: 900px)': {
            width: '70%',
            minWidth: '663px',
        },
        '@media(min-width: 1125px) and (max-width: 1360px)': {
            right: '35px',
        },
    },
}));

const StyledCloseIcon = styled(IconButton)(() => ({
    right: '37px!important',
    top: '34px!important',
    zIndex: 3,

    'svg': {
        fontSize: '30px'
    },
    '@media (max-width: 600px)' : {
        right: '6px!important',
        top: '7px!important',
    }

}))

export default function PopupObra() {
    const {
        openPopUp,
        handleClosePopUp,
        obraSelected
    } = useObrasContext();

    return (
        <BootstrapDialog
            onClose={handleClosePopUp}
            aria-labelledby="customized-dialog-title"
            maxWidth={'md'}
            open={openPopUp}
            id='div-mais-externa'
        >
            <StyledCloseIcon
                aria-label="close"
                onClick={() => handleClosePopUp()}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </StyledCloseIcon>
            <ConteinerPopupObra>
                <ConteinerImage>
                    <img src={obraSelected.url} />
                </ConteinerImage>
                <ConteinerDetalhesObra>
                    <section>
                        <h6 className='background-red'>OBRA</h6>
                        <h1>{obraSelected.nome}</h1>
                        <section>
                            <h5>DETALHES DA OBRA</h5>
                            <ConteinerCaracteristicasObra>
                                <div>
                                    <dt>Material</dt>
                                    <dd>{obraSelected.material}</dd>
                                </div>

                                <div>
                                    <dt>Medidas</dt>
                                    <dd>{obraSelected.medidas}</dd>
                                </div>

                                <div>
                                    <dt>Ano</dt>
                                    <dd>{obraSelected.ano}</dd>
                                </div>

                                <div>
                                    <dt>Disponibilidade</dt>
                                    <dd>{obraSelected.disponibilidade}</dd>
                                </div>
                            </ConteinerCaracteristicasObra>
                        </section>
                    </section>
                    <CarouselObras />
                </ConteinerDetalhesObra>
            </ConteinerPopupObra>
        </BootstrapDialog>
    )
}