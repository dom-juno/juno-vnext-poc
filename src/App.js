import { Component } from 'react';
import './App.css';
import JunoApp from './base/JunoApp.tsx';
class App extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.showDeviceInfo = this.showDeviceInfo.bind(this);
    // }
    // async showDeviceInfo() {
    //     let info = await Device.getInfo();
    //     await Modals.alert({
    //         title: 'Info',
    //         message: `UUID: ${info.uuid};
    //         Model: ${info.model}`
    //     });
    // }
    
    render() {
        return (
            <JunoApp />
        );
    }

}

export default App;