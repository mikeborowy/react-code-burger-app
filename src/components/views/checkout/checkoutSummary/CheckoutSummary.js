import React from 'react';
import Burger from '../../../common/burger/Burger';
import Button from '../../../common/button/Button';
import { BUTTONS } from '../../../../constants/buttons';
import styles from './checkoutSummary.scss';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.checkoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                type={BUTTONS.DANGER}
                onClick={props.onClick}
            >
                Cancel</Button>
            <Button
                type={BUTTONS.SUCCESS}
                onClick={props.onClick}
            >
                Continue
            </Button>
        </div>
    );
};

export default CheckoutSummary;