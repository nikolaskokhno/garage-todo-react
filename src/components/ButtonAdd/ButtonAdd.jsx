import React from 'react';
import { Button } from 'antd';
import './ButtonAdd.scss';

const ButtonAdd = () => {

    return (
        <div className="button-add">
            <Button type="primary" icon="plus" size="large">
                Add TODO List
            </Button>
        </div>
    );
}

export default ButtonAdd;