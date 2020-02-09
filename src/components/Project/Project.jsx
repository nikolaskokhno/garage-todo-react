import React from 'react';
import './Project.scss';
import { Row, Col, Icon, Input, Empty } from 'antd'; 

const { Search } = Input;

const Project = () => {

    return (
        <div className="project">

            <div className="header-project">
                <Row type="flex" justify="center">
                    <Col span={1}>
                        <Icon className="project-icon calendar-icon" type="calendar" />
                    </Col>
                    <Col span={21}>
                        <h5 className="title-project">Name project</h5>
                    </Col>
                    <Col span={1}>
                        <Icon className="project-icon edit-icon" type="edit" />
                    </Col>
                    <Col span={1}>
                        <Icon className="project-icon delete-icon" type="delete" />
                    </Col>
                </Row>
            </div>

            <div className="subheader-project">
                <Row>
                    <Col span={1}>
                        <Icon className="project-icon icon-plus" type="plus" />
                    </Col>
                    <Col span={23}>
                        <Search
                            className="add-task"
                            placeholder="Start typing here to create a task..."
                            enterButton="Add Task"
                            onSearch={value => console.log(value)}
                        />
                    </Col>
                </Row>
            </div>

            <div className="body-project">
                <Row>
                    <div className="empty-task">
                        <Empty
                            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                            imageStyle={{
                                height: 60,
                            }}
                            description={
                                <span>
                                    There are no tasks. You can add them in the form above.
                                </span>
                            }
                        />
                    </div>
                </Row>
            </div>

        </div>
    );
}

export default Project;