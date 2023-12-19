//import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  const market_data = [{
    name: "POLS", link: "https://www.polsmarket.wtf/",
  },
  { name: "NEXTINSC", link: "https://www.nextinscription.xyz/", },
  { name: "UNISAT", link: "https://hk.unisat.io/", },
  { name: "FIRESAT", link: "https://firesat.io/", },
  { name: "SOLS", link: "https://www.okx.com/cn/web3/marketplace/nft/collection/sol/sols-spl20", },
  { name: "Sols", link: "https://www.polsmarket.wtf/", },
  ];
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

                <div> <span>$Pols</span> <span className='holders'>地址数:76903</span> <span className='price'>当前价格: 2Matic</span> </div>
                <div> <span>$Pols</span> <span className='holders'>地址数:76903</span> <span className='price'>当前价格: 2Matic</span> </div>
                <div> <span>$Pols</span> <span className='holders'>地址数:76903</span> <span className='price'>当前价格: 2Matic</span> </div>


              </div>

            </div>
          </div>

        </div>

        <div className='market_list_box'>

          <div className='market_list_tname'  >
            市场直达:
          </div>
          <div className='market_list'  >

            {market_data.map((item, index) => (
              <div key={index} className="list-item">
                <div className="list-item-box">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}

                  </a>
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
