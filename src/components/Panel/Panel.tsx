import * as React from 'react';
import Tasks from '../Panel/Tasks';


interface Props { }

interface State {
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
export class Panel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentTask: "",
            tasks: []
        }

    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        this.setState({
            currentTask: "",
            tasks: [
                ...this.state.tasks,
                {
                    id: this._timeInMilliseconds(),
                    value: this.state.currentTask,
                    completed: false,
                    author: '',
                    code: '',
                    calification: '',
                    area: '',
                    
                    
                }
            ]
        })
    };

    deleteTask = (id: number) => {
        const tasks: Array<ITask> = this.state.tasks.filter(
            (task: ITask) => task.id !== id
        );
        this.setState({ tasks });
    }

    toggleDone = (index: number) => {
        let task: ITask[] = this.state.tasks.splice(index, 1);
        task[0].completed = !task[0].completed;
        const tasks: ITask[] = [...this.state.tasks, ...task];
        this.setState({ tasks });
    }

    renderTasks() {
        return this.state.tasks.map((task: ITask, index: number) => {
            return (
                <div key={task.id} className="tdl-task">
                    <span className={task.completed ? "is-completed" : ""}>{task.value}</span>
                    <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                    <button onClick={() => this.toggleDone(index)}>{task.completed ? "Undo" : "Done"}</button>
                </div>
            );
        });
    }

    render() {
        console.log(this.state);
        return (
            <section>

                <div>
                    <h4>Articles List</h4>
                    <form className='publicar' onSubmit={e => this.handleSubmit(e)}>
                        <input
                            type="text"
                            className="tdl-input"
                            placeholder="Add a Task"
                            value={this.state.currentTask}
                            onChange={e => this.setState({ currentTask: e.target.value })}
                        />
                        <button type="submit btnLogin btnLogin-block btnLogin-large">Add Review</button>
                    </form>

                    {this.renderTasks()}
                </div>
            </section>
        )
    }

    _timeInMilliseconds(): number {
        const date: Date = new Date();
        return date.getTime();
    }
}

export default Panel;























