import React from 'react';
import { Table } from 'antd';
import { salaryData } from './data';

interface DetailTableProps {
  year: number;
}

const DetailTable: React.FC<DetailTableProps> = ({ year }) => {
  const yearData = salaryData.find((data) => data.year === year);

  if (!yearData) return null;

  const jobDetails = Object.entries(yearData.jobDetails).map(([title, count]) => ({
    title,
    count,
  }));

  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'count',
      key: 'count',
    },
  ];

  return <Table columns={columns} dataSource={jobDetails} rowKey="title" />;
};

export default DetailTable;
