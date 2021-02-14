
import React, {useRef} from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import PrimeReact from 'primereact/api';
import Image from 'next/image';

import styles from '../styles/about.module.css';


function about() {

    const toastRef = useRef(null);

    PrimeReact.ripple = true;

    const showToast = (severityValue, summaryValue, detailValue) => {
        toastRef.current.show({severity:severityValue, summary: summaryValue, detail: detailValue});
    }

    const header = <Image className="p-p-2" src="/vercel.svg" alt="vercel" width="128" height="64" /> 
    const footer = 
    <span>
        <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} onClick={() => showToast('success', 'Success Message', 'The task was successful!')} />
        <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
    </span>;

    return (
       
            <Card className="p-m-4" footer={footer} header={header}>
                <span className={styles.body}>
                    What about?
            </span>
                <Toast ref={toastRef} />
            </Card>
        
    )
}

export default about