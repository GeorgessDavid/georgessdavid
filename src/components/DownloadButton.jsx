import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const DownloadButton = () => {
    
    return (
        <div className="download-button" title='Descargar CV'>
            <FontAwesomeIcon icon={faDownload} size='xl'/>
        </div>
    );
};