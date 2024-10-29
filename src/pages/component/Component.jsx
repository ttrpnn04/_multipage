import Add from '../../components/Add/Add';
import Counter from '../../components/Counter/Counter';
import Timer from '../../components/Timer/Timer';
import Tempertures from '../../components/Tempertures/Tempertures';

import './Component.css';


function Component() {

  return (
    
        <div className='componentcontainer'>
          <h1 className='heading'>React Component</h1>
    
          <div className='container container1 '>
            <div className='container2'>
              <Counter name={'Counter'} value={0}/>
              <Timer />
            </div>
            <div className='container3 '>
              <Add aValue={0} bValue={0}/>
            </div>
          </div>
          
          <div className='container text-center container4'>
            <Tempertures initCelsius={30} name={'Tempertures'}/>
          </div>
    
          <div className='footer-name'>
            <h2>นาย ธีรพันธ์ เทียนพรหมทอง 66075063</h2>
          </div>
    
          
        </div>
      )
    }

export default Component
