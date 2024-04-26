import React from 'react';
import { ANALITYCS_REPORTS } from '../../../constants';
import Image from 'next/image';

type ReportProps = {
  name: string;
};

function Analytics({ name }: ReportProps) {
  const infoItem = ANALITYCS_REPORTS.find(info => info.title === name);

  if (infoItem) {
    return (
      <div>
          <div className='grid gap-y-6 justify-items-center mt-4'>
           <Image src="/baby_2.jpg" alt='report' height={200} width={200}/>
           <h3 className="text-blue-40 regular-26">{infoItem.title}</h3>
           <p className="text-gray-600 regular-18 px-20">{infoItem.label}</p>
          </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-blue-40 regular-24">Information Not Found</h1>
        <p>No information available for {name}</p>
      </div>
    );
  }
}

export default Analytics;