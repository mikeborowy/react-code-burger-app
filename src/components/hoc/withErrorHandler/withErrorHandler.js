import React, { Component } from 'react';
import Modal from '../../sharedLayout/modal/Modal';
import Aux from '../aux/Aux';
import { getDisplayName } from '../../helpers';

const withErrorHandler = (WrappedComponent, axios) => {
    class WithErrorHandler extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error });
            });
        }

        errorConfirmedHandler = () => {
            this.state({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        isOpen={this.state.error}
                        modalCloseHandler={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        };
    }

    withErrorHandler.displayName = `withErrorHandler(${getDisplayName(WrappedComponent)})`;
    
    return WithErrorHandler;
};

export default withErrorHandler;