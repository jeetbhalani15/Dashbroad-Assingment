import { Card } from '@tremor/react';
import { IoPieChartSharp } from "react-icons/io5";
import './overView.css';
import { TbShoppingBag, TbUsers } from 'react-icons/tb';
import { RiArrowDropDownLine } from '@remixicon/react';

const usage = [
  {
    id: 1,
    resource: 'Sales',
    usage: '145',
    maximum: '1,000',
    href: '#',
  },
  {
    id: 2,
    resource: 'Volume',
    usage: '1.1',
    maximum: '10 GB',
    href: '#',
  },
  {
    id: 3,
    resource: 'Customer',
    usage: '10',
    maximum: '25',
    href: '#',
  },
  {
    id: 3,
    resource: 'Orders',
    usage: '10',
    maximum: '25',
    href: '#',
  },

];

export default function Overview() {
  return (
    <>
    <div className='overview-box'>
        <div style={{border:'1px solid #c7c4c4',padding:'6px',borderRadius:'6px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between', marginTop:'8px'}}>
      <h3>
        <IoPieChartSharp color='#5570F1' size={26}/>
      </h3>
      <div>This Week</div><RiArrowDropDownLine size={24}/>
      </div>  
        <div className="mt-4 grid grid-cols-1 gap-2 sm:max-w-4xl sm:grid-cols-4">
          {usage.map((item) => (
            <Card style={{background:'white'}}
              key={item.id}
              className="p-2 hover:dark:bg-dark-tremor-background-muted"
            >
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                <a href={item.href} className="focus:outline-none">
                  {/* extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  {item.resource}
                </a>
              </p>
              <p className="mt-3 flex items-end">
                <span className=" font-light text-tremor-metric text-dark-tremor-content-subtle">
                  {item.usage}
                </span>
                <span className="font-light text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
                  /{item.maximum}
                </span>
              </p>
            </Card>
          ))}
        </div>
        </div>
        <div style={{border:'1px solid #c7c4c4',padding:'6px',borderRadius:'6px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'8px'}}>
      <h3>
      <TbUsers size={26} color='#5570F1'/>
      </h3>
      <div>This Week</div><RiArrowDropDownLine size={24}/>
      </div>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:max-w-3xl sm:grid-cols-4">
          {usage.map((item) => (
            <Card style={{background:'white'}}
              key={item.id}
              className="p-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
            >
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                <a href={item.href} className="focus:outline-none">
                  {/* extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  {item.resource}
                </a>
              </p>
              <p className="mt-3 flex items-end">
                <span className="text-tremor-metric font-light text-dark-tremor-content-subtle">
                  {item.usage}
                </span>
                <span className="font-light text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
                  /{item.maximum}
                </span>
              </p>
            </Card>
          ))}
        </div>
        </div>
        <div style={{border:'1px solid #c7c4c4',padding:'6px', borderRadius:'6px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'8px'}}>
      <h3>
        <TbShoppingBag  color='#5570F1' size={26}/>
      </h3>
      <div>This Week</div><RiArrowDropDownLine size={24}/>
      </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:max-w-4xl sm:grid-cols-4">
          {usage.map((item) => (
            <Card style={{background:'white', borderColor:'rgb(211 213 216)'}}
              key={item.id}
              className="p-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
            >
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                <a href={item.href} className="focus:outline-none">
                  {/* extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  {item.resource}
                </a>
              </p>
              <p className="mt-3 flex items-end">
                <span className="text-tremor-metric font-light text-dark-tremor-content-subtle">
                  {item.usage}
                </span>
                <span className="font-light text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
                  /{item.maximum}
                </span>
              </p>
            </Card>
          ))}
        </div>
        </div>
        </div>
    </>
  );
}