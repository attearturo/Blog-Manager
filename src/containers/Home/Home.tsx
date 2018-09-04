import * as React from 'react';
import Panel from '../../components/Panel/Panel';


interface Props {
    writer: string;
    code: string;
    departament: string;
    title: string;
    text: string;
    register: any;
    handleChangeEmail: any;
    handleChangePassword: any;
    goToLoggin: any
}

export const Home = (props: Props) => {

    return <div className='container'>
             <div className="row">


            <div className="wrap col-12">
                <h3 className='subHeader logo'>The Publisher</h3>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="¿Looking for an article?" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <div className="content col-4">
                <div id="writer" className='panel'>
                    <form onSubmit={props.register}>

                        <input id='writer' className='formulario' type="text" placeholder="Writer" value={props.writer} onChange={props.handleChangeEmail} required />
                        <input id='code' className='formulario' type="text" placeholder="Code Writer" value={props.code} onChange={props.handleChangeEmail} required />
                        <input id='departament' className='formulario' type="text" placeholder="Area" value={props.departament} onChange={props.handleChangePassword} required />
                        <button id='entrada' type="submit" className="btnLogin  btnLogin-block btnLogin-large">Add Autor</button>
                    </form>
                </div>

                <div id="recommendation" className='panel'>
                    <form onSubmit={props.register}>

                        <input id='title' className='formulario' type="text" placeholder="Title" value={props.title} onChange={props.handleChangeEmail} required />
                        <input id='content' className='formulario' type="text" placeholder="Recommendation" value={props.text} onChange={props.handleChangePassword} required />
                        <button id='entrada' type="submit" className="btnLogin  btnLogin-block btnLogin-large">Add commentary</button>
                    </form>
                </div>



                <section className="task-list current">
                    <ul>
                        <li>
	                        <div className="checkbox">
                                <div className="check">
                                    <input type="checkbox" name="task_00"></input>
                                        <div className="check-container">
                                            <div className="check-off"></div>
                                            <div className="check-on"><i></i></div>
                                        </div>
	                            </div>
                                <div className="label">
                                        <mark>Isabel Marzola</mark>
                                    <br></br><time>12 March 2016 - h 9:30 am</time>
	                            </div>
                            </div>
	                    </li>
                    <li>
                        <div className="checkbox">
                            <div className="check">
                                <input type="checkbox" name="task_00"></input>
                                <div className="check-container">
                                    <div className="check-off"></div>
                                    <div className="check-on"><i></i></div>
                                </div>
                            </div>
                            <div className="label">
                                <mark>José Moncada</mark>
                                <br></br><time>12 March 2016 - h 9:30 am</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <div className="check">
                                <input type="checkbox" name="task_00"></input>
                                <div className="check-container">
                                    <div className="check-off"></div>
                                    <div className="check-on"><i></i></div>
                                </div>
                            </div>
                            <div className="label">
                                <mark>Carlos Castillo</mark>
                                <br></br><time>12 March 2016 - h 9:30 am</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <div className="check">
                                <input type="checkbox" name="task_00"></input>
                                <div className="check-container">
                                    <div className="check-off"></div>
                                    <div className="check-on"><i></i></div>
                                </div>
                            </div>
                            <div className="label">
                                <mark>Martha Emmanuela Gomez</mark>
                                <br></br><time>12 March 2016 - h 9:30 am</time>
                            </div>
                        </div>
                    </li>
	    </ul>
	  </section>

            <div className="container">
                <input type="radio" className="radio" name="progress" value="five" id="five"/>
                <label htmlFor="five" className="label">5%</label>

                    <input type="radio" className="radio" name="progress" value="twentyfive" id="twentyfive" checked/>
                        <label htmlFor="twentyfive" className="label">25%</label>

                        <input type="radio" className="radio" name="progress" value="fifty" id="fifty"/>
                <label htmlFor="fifty" className="label">50%</label>

                            <input type="radio" className="radio" name="progress" value="seventyfive" id="seventyfive"/>
                <label htmlFor="seventyfive" className="label">75%</label>

                                <input type="radio" className="radio" name="progress" value="onehundred" id="onehundred"/>
                <label htmlFor="onehundred" className="label">100%</label>

                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
            </div>
            </div>

            <div className="col-8 articulos">
                {<Panel />}
            </div>

            </div>
            </div>

};