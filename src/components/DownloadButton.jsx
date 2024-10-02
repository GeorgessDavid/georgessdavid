import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/CV_Georges_Ammiel_David.pdf';
        link.download = 'CV_Georges_Ammiel_David.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div onClick={handleDownload} className="download-button" title='Descargar CV'>
            <FontAwesomeIcon icon={faDownload} size='xl'/>
        </div>
    );
};