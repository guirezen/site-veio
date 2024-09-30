import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Buttons, ButtonsConteiner, ContactConteiner, ConteinerSection, TitleConteiner } from "./styles";
import WhatsappLink from '../WhatsappLink';
import { useTranslation } from 'react-i18next';

export default function ContactsSection() {
    const { t } = useTranslation();

    return (
        <ConteinerSection id="ancoraContatos">
            <div>
                <TitleConteiner>
                    <h1>{t('titleContacts')}</h1>
                </TitleConteiner>
                <ButtonsConteiner>
                    <Buttons>
                        <div>
                            <EmailIcon className='icon-button' fontSize='large' />
                        </div>
                        <ContactConteiner id='contact-email'>
                            <span className='label-contact'>{t('titleEmail')}</span>
                            <span className='information-contacts'>contatoartistaveio@gmail.com</span>
                        </ContactConteiner>
                    </Buttons>
                    <Buttons>
                        <div>
                            <WhatsAppIcon className='icon-button' fontSize='large' />
                        </div>
                        <WhatsappLink>
                            <ContactConteiner>
                                <span className='label-contact'>{t('titleWhatsapp')}</span>
                                <span className='information-contacts'>+55 79 999447319</span>
                            </ContactConteiner>
                        </WhatsappLink>
                    </Buttons>
                </ButtonsConteiner>
            </div>
        </ConteinerSection>
    )
}