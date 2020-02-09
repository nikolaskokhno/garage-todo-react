import React from 'react';
import './Project.scss';
import { Empty } from 'antd';
import Project from './Project';

const ProjectList = () => {

    return (
        <div className="project-list">
            <div className="project-empty">
                <Empty
                    description={
                        <span>
                            There are no new <strong>todo list</strong>.<br />
                            You can add using the button below.
                        </span>
                    }
                />
            </div>
        </div>
    );
}

export default ProjectList;