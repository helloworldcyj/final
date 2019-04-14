import React,{ PureComponent } from 'react';
import NotFoundImg from '../../assets/404.png';
import './index.scss';

class NotFound extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            animationType:'swing'
        };
       
    }

    enter = () => {
        this.setState({
            animationType:'hinge'
        });

        setTimeout( ()=> {
            this.setState({
                animationType:'lightSpeedIn'
            })
        }, 1500)
    }

    render(){
        return(
            <div className='not-found-container'>
                <img 
                    alt="not found"
                    src={ NotFoundImg } 
                    className={`animated ${this.state.animationType}`} 
                    onMouseEnter={this.enter}
                />
            </div>
        )
    }
}

export default NotFound;
