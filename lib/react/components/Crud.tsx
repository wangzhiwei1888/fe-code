import React from 'react';
import Table from './Table';
import ToolBar from './ToolBar';
import Form from './Form';
import { ICrud } from '.';

const FCrud = <T extends Record<string, unknown>>(
  props: ICrud<T>,
): React.ReactElement => {
  const { columns, tableProps, batchToolbar, request } = props;

  return (
    <div className="f-crud">
      <div className="crud-toolbar">
        <ToolBar batchOptions={batchToolbar} />
      </div>
      <div className="crud-body">
        <Table {...tableProps} request={request} columns={columns} />
      </div>
    </div>
  );
};

FCrud.Table = Table;
FCrud.ToolBar = ToolBar;
FCrud.Form = Form;

export default FCrud;
