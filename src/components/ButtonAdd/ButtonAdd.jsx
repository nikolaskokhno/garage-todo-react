import React from 'react';
import { Button, Modal, Input } from 'antd';
import './ButtonAdd.scss';

class ButtonAdd extends React.Component {

    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 1000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading } = this.state;
        return (
            <div className="button-add">
                <Button 
                    type="primary" 
                    icon="plus" 
                    size="large"
                    onClick={this.showModal}
                >
                    Add TODO List
                </Button>

                <Modal
                    visible={visible}
                    title="Create new todo list"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                          Cancel
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                          Add todo
                        </Button>,
                      ]}
                    >
                    <Input placeholder="Start typing here to create a todo..." />
                </Modal>
            </div>
        );
    }
}

export default ButtonAdd;