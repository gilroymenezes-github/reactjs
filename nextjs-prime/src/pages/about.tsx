
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { Slider } from 'primereact/slider';
import { Fieldset } from 'primereact/fieldset';
import { Panel } from 'primereact/panel';
import { Menubar, MenubarProps } from 'primereact/menubar';
import { InputText} from 'primereact/inputtext';
import PrimeReact from 'primereact/api';
import Image from 'next/image';

import { menuItems } from '../api/menuitems';

import styles from '../styles/about.module.css';


function about() {

    PrimeReact.ripple = true;

    const rangeValues: [number, number] = [1, 20];

    const toastRef = useRef(null);

    const showToast = (severityValue, summaryValue, detailValue) => {
        toastRef.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
    }

    const legend = <div className={styles.legend}>What About?</div>
    const header = <Image className="p-p-2" src="/vercel.svg" alt="vercel" width="128" height="64" />
    const footer =
        <span>
            <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} onClick={() => showToast('success', 'Success Message', 'The task was successful!')} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>;
    
    const end = 
    <div>
        <InputText className="p-mr-2" placeholder="Search" type="text"/>
        <Button label="Logout" icon="pi pi-power-off"/> 
    </div>;

    return (
        <div>

            <Menubar model={menuItems} end={end} />

            <Fieldset className="p-mt-4" legend={legend}>
                <Card footer={footer} header={header}>
                    <Slider value={rangeValues} range />
                    <Toast ref={toastRef} />
                </Card>
            </Fieldset>

        </div>
    )
}

export default about