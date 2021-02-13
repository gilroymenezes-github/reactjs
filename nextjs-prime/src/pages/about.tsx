
import React, {useRef} from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import PrimeReact from 'primereact/api';
import Image from 'next/image';

import styles from './about.module.css';


function about() {

    const toastRef = useRef(null);

    PrimeReact.ripple = true;

    const showToast = (severityValue, summaryValue, detailValue) => {
        toastRef.current.show({severity:severityValue, summary: summaryValue, detail: detailValue});
    }

    return (
        <div>
            <span>
                About
            </span>
            <Image src="/vercel.svg" alt="vercel" width="128" height="64" />  
            <span className={styles.body}>
                What about?
            </span>
            <Button label="OK" icon="pi pi-check" onClick={() => showToast('success', 'Success Message', 'The task was successful!')} />   
            <Toast ref={toastRef} />
        </div>
    )
}

export default about