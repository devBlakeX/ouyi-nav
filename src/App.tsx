import { useState,useEffect } from 'react'
import './App.css'
import { btc_list, evm_eth_list } from './listdata';
import axios from 'axios';

 


function App() {
 
  const [owners, setOwners] = useState(null)
  const [floorPrice, setFloorPrice] = useState(null)
 
  useEffect(() => {
    axios.get('https://www.polsmarket.wtf/api-pols/markets/collections/details?category=token&collectionName=prc-20%20pols')
      .then(response => {
        try {
          console.log(response.data);
          if(response.data.code == 200 ){
            setOwners(response.data.data.collections.owners);
            setFloorPrice(response.data.data.collections.floorPrice);            
          }
        
        } catch (error) {
        }
      }).catch(error => {
       
        console.error('There was an error!', error);
      });
  }, []);  

  return (

    <div>
      <div className='_topbar'>

      </div>
      <div className='content'>
        <div className='top_box' >
          <div className='left_logo_box'  >
            欧亿铭文导航
          </div>
          <div className='center_box'>
            <div className='slogan1'>
              选铭文，上欧亿，掌握信息，欧一亿
            </div>

            <div className='slogan2'>
              欧亿铭文导航，让你的信息更具效率
            </div>

            <div className='hot_insc_box'>
              <div className='hot_insc_box_left'>铭文热点</div>

              <div className='hot_insc_box_center'>

                <div> <span>$Pols</span> <span className='holders'>地址数:{owners?owners:"--"}</span> <span className='price'>当前价格: {floorPrice?floorPrice:"--"} Matic</span> </div>
                <div> <span>$Pols</span> <span className='holders'>地址数:{owners?owners:"--"}</span> <span className='price'>当前价格: {floorPrice?floorPrice:"--"} Matic</span> </div>
                <div> <span>$Pols</span> <span className='holders'>地址数:{owners?owners:"--"}</span> <span className='price'>当前价格: {floorPrice?floorPrice:"--"} Matic</span> </div>


              </div>

            </div>
          </div>

        </div>

        <div className='market_list_box'>

          <div className='market_list_tname'  >
            BTC市场直达:
          </div>
          <div className='market_list'  >

            {btc_list.map((item, index) => (
              <div key={index} className="list-item">
                <div className="list-item-box"
                 onClick={() => window.open(item.link, "_blank")}
                >

                  <div className="list-item-box-line1">
                    <img src={item.icon}></img>

                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </div>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

        <div className='market_list_box'>

<div className='market_list_tname'  >
  EVM市场直达:
</div>
<div className='market_list'  >

  {evm_eth_list.map((item, index) => (
    <div key={index} className="list-item">
      <div className="list-item-box"
       onClick={() => window.open(item.link, "_blank")}
      >

        <div className="list-item-box-line1">
          <img src={item.icon}></img>

          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </div>
        <p>{item.desc}</p>
      </div>

    </div>
  ))}

</div>
</div>


      </div>


      <div className='footer'>
        ouyi.net
      </div>

    </div>
  )
}

export default App
