import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Buttons, ButtonsConteiner, ContactConteiner, ConteinerSection, TitleConteiner } from "./styles";
import WhatsappLink from '../WhatsappLink';

export default function ContactsSection() {

    return (
        <ConteinerSection id="ancoraContatos">
            <div>
                <TitleConteiner>
                    <h1>CONTATO</h1>
                </TitleConteiner>
                <ButtonsConteiner>
                    <Buttons>
                        <div>
                            <EmailIcon className='icon-button' fontSize='large' />
                        </div>
                        <ContactConteiner>
                            <span className='label-contact'>Nos envie um email</span>
                            <span className='information-contacts'>veio@hotmail.com</span>
                        </ContactConteiner>
                    </Buttons>
                    <Buttons>
                        <div>
                            <WhatsAppIcon className='icon-button' fontSize='large' />
                        </div>
                        <WhatsappLink>
                            <ContactConteiner>
                                <span className='label-contact'>Fale pelo whatsapp</span>
                                <span className='information-contacts'>+55 79 999447319</span>
                            </ContactConteiner>
                        </WhatsappLink>
                    </Buttons>
                </ButtonsConteiner>
            </div>
        </ConteinerSection>
    )
}