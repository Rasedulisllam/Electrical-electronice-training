import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Chart = () => {

    const data = [
        {
          name: 'PLC & HMI',
          uv: 600,
          Students: 580,
          amt: 2400,
        },
        {
          name: 'VFD & Softstater',
          uv: 455,
          Students: 455,
          amt: 2210,
        },
        {
          name: 'Elec & Electorics',
          uv: 2000,
          Students: 510,
          amt: 2290,
        },
        {
          name: 'Star-delta',
          uv: 2780,
          Students: 470,
          amt: 2000,
        },
        {
          name: 'DC equipment',
          uv: 1890,
          Students: 420,
          amt: 2181,
        },
        {
          name: 'Batteries & DC cart',
          uv: 2390,
          Students: 250,
          amt: 2500,
        },
        {
          name: 'Motors',
          uv: 3490,
          Students: 380,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h1 className='fw-bold mt-5 text-uppercase'>Our students</h1>
               <div style={{width:'100%',height:'500px',margin:'2rem auto'}}>
                  <ResponsiveContainer width="70%" height="100%" className='mx-auto' >
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                        >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Students" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
        </div>
    );
};

export default Chart;