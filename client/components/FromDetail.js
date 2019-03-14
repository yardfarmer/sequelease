import React, { Component } from 'react';
import TableSearchBar from './TableSearchBar';
import JoinSearchBarSource from './JoinSearchBarSource';
import JoinSearchBar from './JoinSearchBar';
import { join } from 'path';

const hrDb = {
  tables: [
    {
      name: 'employees',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'employee_id_seq'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'firstName',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'lastName',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'gender',
          type: "ENUM['M','F','O']",
          default: null,
          constraint: null,
          nullable: false,
        },

        {
          name: 'birthDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'startDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'endDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: true,
        },
        {
          name: 'roleId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'departmentId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'managerId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
        },
      ],
      foreignKeys: [
        { columnName: 'roleId', targetTable: 'roles' },
        { columnName: 'departmentId', targetTable: 'departments' },
        { columnName: 'managerId', targetTable: 'employees' },
      ],
    },
    {
      name: 'address',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'address_id_seq'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'employeeId',
          type: 'INTEGER',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'sequence',
          type: 'INTEGER',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'streetAddress1',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'streetAddress2',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: true,
        },
        {
          name: 'apartmentNo',
          type: 'VARCHAR(10)',
          default: null,
          constraint: null,
          nullable: true,
        },
        {
          name: 'city',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'state',
          type: 'CHAR(2)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'postalCode',
          type: 'CHAR(5)',
          default: null,
          constraint: null,
          nullable: true,
        },
        {
          name: 'isoCountryCode',
          type: 'CHAR(2)',
          default: 'US',
          constraint: null,
          nullable: false,
        },
      ],
      foreignKeys: [{ columnName: 'employeeId', targetTable: 'employees' }],
    },
    {
      name: 'departments',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'department_id_seq'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'name',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'description',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: true,
        },
      ],
      foreignKeys: [],
    },
    {
      name: 'timeOff',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'timeOff_id_seq'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'employeeId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'startDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'endDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: false,
        },
      ],
      foreignKeys: [{ columnName: 'employeeId', targetTable: 'employees' }],
    },
    {
      name: 'roles',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'role_id_seq'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'title',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'description',
          type: 'VARCHAR(100)',
          default: null,
          constraint: null,
          nullable: true,
        },
        {
          name: 'departmentId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
      ],
      foreignKeys: [{ columnName: 'departmentId', targetTable: 'departments' }],
    },
    {
      name: 'rolesHistory',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'history_seq_id'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'employeeId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'roleId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'departmentId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'startDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'endDate',
          type: 'DATETIME',
          default: null,
          constraint: null,
          nullable: true,
        },
      ],
      foreignKeys: [
        { columnName: 'roleId', targetTable: 'roles' },
        { columnName: 'departmentId', targetTable: 'departments' },
        { columnName: 'employeeId', targetTable: 'employees' },
      ],
    },
    {
      name: 'ratings',
      fields: [
        {
          name: 'id',
          type: 'INTEGER',
          default: "'history_seq_id'",
          constraint: 'PRIMARY KEY',
          nullable: false,
        },
        {
          name: 'employeeId',
          type: 'INTEGER',
          default: null,
          constraint: 'FOREIGN KEY',
          nullable: false,
        },
        {
          name: 'year',
          type: 'INTEGER',
          default: null,
          constraint: null,
          nullable: false,
        },
        {
          name: 'rating',
          type: 'DECIMAL(18,1)',
          default: null,
          constraint: null,
          nullable: false,
        },
      ],
      foreignKeys: [{ columnName: 'employeeId', targetTable: 'employees' }],
    },
  ],
};

const fromJoinDefault = {
  joinCondition: 'INNER JOIN',
  table: {},
  tableText: '',
  sourceJoinColumn: '',
  targetJoinColumns: [],
  targetJoinColumn: '',
};

const from = {
  tablesToSelect: ['employees', 'departments', 'roles', 'ratings'],
  selectedTables: [
    {
      joinCondition: null,
      table: {},
      tableText: '',
      sourceJoinColumn: '',
      targetJoinColumns: [],
      targetJoinColumn: '',
    },
    {
      joinCondition: 'INNER JOIN',
      table: {},
      tableText: '',
      sourceJoinColumn: '',
      targetJoinColumns: [],
      targetJoinColumn: '',
    },
  ],
};

class FromDetail extends Component {
  // eslint-disable-next-line complexity

  constructor(props) {
    super(props);
    this.state = { from };
  }

  // eslint-disable-next-line complexity
  modifyTable = (joinSequence, tableName) => {
    // Change table text in search bar
    from.selectedTables[joinSequence].tableText = tableName;

    const table = hrDb.tables.find(newTable => newTable.name === tableName);

    if (table) {
      from.selectedTables[joinSequence].table = table;

      // eslint-disable-next-line guard-for-in
      for (let otherTable of from.selectedTables.slice(joinSequence + 1)) {
        let newJoinTable = otherTable.targetJoinColumns.find(
          joinTable => joinTable.name === tableName
        );

        if (!newJoinTable) {
          otherTable.targetJoinColumns.push(table);
        }
      }
    } else {
      from.selectedTables[joinSequence].table = {};

      from.selectedTables[joinSequence].sourceJoinColumn = '';

      for (let otherTable of from.selectedTables.slice(joinSequence + 1)) {
        otherTable.targetJoinColumns = [];
        for (let prevTable of from.selectedTables.slice(0, joinSequence)) {
          otherTable.targetJoinColumns.push(prevTable.table);
        }

        let targetColumnName = otherTable.targetJoinColumn.split('.');
        if (targetColumnName.length === 2) {
          if (
            !otherTable.targetJoinColumns
              .map(targetJoinColumnsTable => targetJoinColumnsTable.name)
              .includes(targetColumnName[0])
          ) {
            otherTable.targetJoinColumn = '';
          }
        }
      }
    }
    this.setState({ from: { ...from } });
  };

  modifySourceColumn = (joinSequence, column) => {
    from.selectedTables[joinSequence].sourceJoinColumn = column;
    this.setState({ from: { ...from } });
  };

  modifyTargetColumn = (joinSequence, column) => {
    from.selectedTables[joinSequence].targetJoinColumn = column;
    this.setState({ from: { ...from } });
  };

  handleAddClick = joinSequence => {
    from.selectedTables.splice(joinSequence + 1, 0, { ...fromJoinDefault });

    from.selectedTables[joinSequence + 1].targetJoinColumns = [];
    for (let prevTable of from.selectedTables.slice(0, joinSequence + 1)) {
      from.selectedTables[joinSequence + 1].targetJoinColumns.push(
        prevTable.table
      );
    }

    this.setState({ from: { ...from } });
  };

  handleRemoveClick = joinSequence => {
    from.selectedTables.splice(joinSequence, 1);

    for (let otherTable of from.selectedTables.slice(joinSequence)) {
      otherTable.targetJoinColumns = [];
      for (let prevTable of from.selectedTables.slice(0, joinSequence)) {
        otherTable.targetJoinColumns.push(prevTable.table);
      }

      let targetColumnName = otherTable.targetJoinColumn.split('.');
      if (targetColumnName.length === 2) {
        if (
          !otherTable.targetJoinColumns
            .map(targetJoinColumnsTable => targetJoinColumnsTable.name)
            .includes(targetColumnName[0])
        ) {
          otherTable.targetJoinColumn = '';
        }
      }
    }

    this.setState({ from: { ...from } });
    console.log(from);
  };

  render() {
    return (
      <div>
        {this.state.from.selectedTables.map((row, i) => {
          if (i === 0) {
            return (
              <div>
                <button
                  onClick={this.handleAddClick.bind(this, i)}
                  type="button"
                  style={{ marginRight: '10px' }}
                >
                  +
                </button>
                <button
                  onClick={this.handleRemoveClick.bind(this, i)}
                  type="button"
                  style={{ marginRight: '10px' }}
                >
                  -
                </button>
                <div style={{ display: 'inline-block' }}>
                  <TableSearchBar
                    key={`tsb-${i}`}
                    modifyTable={this.modifyTable}
                    joinSequence={i}
                    tablesToSelect={this.state.from.tablesToSelect}
                    selectedTable={row.table.name}
                    selectedTableText={row.tableText}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div key={`tsbd-${i}`}>
                <button
                  onClick={this.handleAddClick.bind(this, i)}
                  type="button"
                  style={{ marginRight: '10px' }}
                >
                  +
                </button>
                <button
                  onClick={this.handleRemoveClick.bind(this, i)}
                  type="button"
                  style={{ marginRight: '10px' }}
                >
                  -
                </button>
                <select name="join">
                  <option value="INNER JOIN">INNER JOIN</option>
                  <option value="LEFT OUTER JOIN">LEFT OUTER JOIN</option>
                </select>{' '}
                <div style={{ display: 'inline-block' }}>
                  <TableSearchBar
                    key={`tsb-${i}`}
                    modifyTable={this.modifyTable}
                    joinSequence={i}
                    tablesToSelect={this.state.from.tablesToSelect}
                    selectedTable={row.table.name}
                    selectedTableText={row.tableText}
                  />
                </div>{' '}
                <span>ON</span>{' '}
                <div style={{ display: 'inline-block' }}>
                  <JoinSearchBarSource
                    key={`jsbs-${i}`}
                    joinSequence={i}
                    modifySourceColumn={this.modifySourceColumn}
                    selectedTable={row.table}
                    selectedColumn={row.sourceJoinColumn}
                  />
                </div>{' '}
                <span>=</span>{' '}
                <div style={{ display: 'inline-block' }}>
                  {
                    <JoinSearchBar
                      key={`jsbt-${i}`}
                      joinSequence={i}
                      modifyTargetColumn={this.modifyTargetColumn}
                      columnsToSelect={row.targetJoinColumns}
                      selectedColumn={row.targetJoinColumn}
                    />
                  }
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default FromDetail;
