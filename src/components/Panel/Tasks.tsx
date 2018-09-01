import * as React from 'react';

interface Props {
    currentTask: string;
    tasks: Array<ITask>;
}

interface ITask {
    author: string;
    code: string;
    calification: string;
    area: string;
    id: number;
    value: string;
    completed: boolean;
}

const Tasks = (props: Props) => {
}

export default Tasks;

