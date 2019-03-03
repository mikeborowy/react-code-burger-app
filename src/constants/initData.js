export const INGREDIENTS_INIT_DATA = {
    meat: 2,
    salad: 1,
    cheese: 1,
    bacon: 1
}

export const ORDER_FORM = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Street'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
            required: true,
            minLength: 5,
            maxLength: 5,
            isNumeric: true
        },
        valid: false,
        touched: false
    },
    country: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Country'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: '',
        validation: {},
        valid: true
    }
}