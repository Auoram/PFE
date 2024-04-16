import React from 'react';
import { INFO } from '../../../constants';
import Image from 'next/image';

type MoreInfoProps = {
  name: string;
};

function MoreInfo({ name }: MoreInfoProps) {
  const infoItem = INFO.find(info => info.title === name);

  if (infoItem) {
    return (
      <div className="relative flex flex-1 gap-2 ml-2 mb-5 mt-2 border border-gray-40 shadow-lg rounded-[8px] p-4 flex-col">
        <h1 className="text-blue-40 regular-32">Important Medical Information</h1>
        <h2 className="text-gray-400 regular-30">{infoItem.title}</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 text-center mb-3 gap-x-20 lg:px-32">
          <div className='grid gap-y-4 justify-items-center'>
           <Image src="/checking.jpg" alt='S-effect' height={200} width={200}/>
           <h3 className="text-green-30 regular-24">Side effects</h3>
           <p className="text-gray-600">{infoItem.label1}</p>
          </div>
          <div className='grid gap-y-4 justify-items-center'>
          <Image src="/checking.jpg" alt='Recc' height={200} width={200}/>
           <h3 className="text-green-30 regular-24">Recommendations</h3>
           <p className="text-gray-600">{infoItem.label2}</p>
          </div>
          <div className='grid gap-y-4 justify-items-center'>
           <Image src="/checking.jpg" alt='Pre' height={200} width={200}/>
           <h3 className="text-green-30 regular-24">Preventable diseases</h3>
           <p className="text-gray-600">{infoItem.label3}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flexCenter gap-2 ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px] p-4 flex-col">
        <h1 className="text-blue-40 regular-24">Information Not Found</h1>
        <p>No information available for {name}</p>
      </div>
    );
  }
}

export default MoreInfo;
