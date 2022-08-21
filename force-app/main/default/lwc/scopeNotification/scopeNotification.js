import { LightningElement, api } from 'lwc';

export default class Scope_notification extends LightningElement {
    @api scopeMessage = "It looks as if duplicates exist ...";
    @api theme = '';

    get scopedNotificationClass() {
        let className = 'slds-scoped-notification slds-media slds-media_center'; 
        if (this.theme ==='light') {
            className += ' slds-scoped-notification_light';
        }
        
        if (this.theme === 'dark') {
            className += ' slds-scoped-notification_dark';
        }

        if (this.theme === 'success') {
            className += ' slds-theme_success';
        }
    
        return className; 
    }

    get iconVariant() {
        let iconVariant = null;
        
        if (this.theme == 'dark' || this.theme == 'success') {
            iconVariant = 'inverse';
        }
        
        return iconVariant;
    }
}