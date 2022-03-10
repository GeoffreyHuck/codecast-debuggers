/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { callScript } from '../call-script';
import { Result } from '../run-steps/runner';
import { reconstructSnapshotsFromSteps } from '../reconstruct-snapshots';

describe('samples hello_world.cpp', () => {
  let result!: Result;
  beforeAll(async () => {
    const stringified = await callScript('./samples/cpp/hello_world.cpp', '', 'off');
    result = JSON.parse(stringified) as Result;
  });

  it('should have valid outputs', () => {
    expect(result.outputs).toHaveLength(4);
    expect(result.outputs[0]).toEqual({
      category: 'stdout',
      column: 17,
      line: 3,
      output: 'Hello World\r',
      source: {
        name: 'hello_world.cpp',
        path: '/usr/project/samples/cpp/hello_world.cpp'
      },
    });
    expect(result.outputs[1]).toEqual({
      category: 'stdout',
      column: 25,
      line: 6,
      output: '0\r',
      source: {
        name: 'hello_world.cpp',
        path: '/usr/project/samples/cpp/hello_world.cpp'
      },
    });
    expect(result.outputs[2]).toEqual({
      category: 'stdout',
      column: 25,
      line: 6,
      output: '2\r',
      source: {
        name: 'hello_world.cpp',
        path: '/usr/project/samples/cpp/hello_world.cpp'
      },
    });
    expect(result.outputs[3]).toEqual({
      category: 'stdout',
      column: 25,
      line: 6,
      output: '4\r',
      source: {
        name: 'hello_world.cpp',
        path: '/usr/project/samples/cpp/hello_world.cpp'
      },
    });
  });

  it('should have valid steps', () => {
    const steps = reconstructSnapshotsFromSteps(result.steps);
    expect(steps[0]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 1,
        id: expect.any(Number),
        line: 8,
        name: expect.any(String),
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: []
          },
        ]),
      }
    ]));
    expect(steps[1]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 1,
        id: expect.any(Number),
        line: 8,
        name: expect.any(String),
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: []
          },
        ]),
      }
    ]));
    expect(steps[2]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 1,
        id: expect.any(Number),
        line: 8,
        name: expect.any(String),
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: expect.arrayContaining([]),
          },
        ]),
      },
      {
        column: 1,
        id: expect.any(Number),
        line: 8,
        name: expect.any(String),
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: []
          },
        ]),
      }
    ]));
    expect(steps[3]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 1,
        id: expect.any(Number),
        line: 8,
        name: expect.any(String),
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: []
          },
        ]),
      }
    ]));
    expect(steps[4]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 17,
        id: expect.any(Number),
        line: 3,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: []
          },
        ]),
      }
    ]));
    expect(steps[5]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 13,
        id: expect.any(Number),
        line: 4,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[6]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 11,
        id: expect.any(Number),
        line: 5,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              },
              {
                evaluateName: 'j',
                name: 'j',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[7]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 25,
        id: expect.any(Number),
        line: 6,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              },
              {
                evaluateName: 'j',
                name: 'j',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[8]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 4,
        id: expect.any(Number),
        line: 4,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[9]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 11,
        id: expect.any(Number),
        line: 5,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '1',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              },
              {
                evaluateName: 'j',
                name: 'j',
                type: 'int',
                value: '0',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[10]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 25,
        id: expect.any(Number),
        line: 6,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '1',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              },
              {
                evaluateName: 'j',
                name: 'j',
                type: 'int',
                value: '2',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[11]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 4,
        id: expect.any(Number),
        line: 4,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '1',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[12]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 11,
        id: expect.any(Number),
        line: 5,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '2',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              },
              {
                evaluateName: 'j',
                name: 'j',
                type: 'int',
                value: '2',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[13]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 25,
        id: expect.any(Number),
        line: 6,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '2',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              },
              {
                evaluateName: 'j',
                name: 'j',
                type: 'int',
                value: '4',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[14]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 4,
        id: expect.any(Number),
        line: 4,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: [
              {
                evaluateName: 'i',
                name: 'i',
                type: 'int',
                value: '2',
                memoryReference: expect.any(String),
                variablesReference: expect.any(Number),
                variables: []
              }
            ]
          },
        ]),
      }
    ]));
    expect(steps[15]?.stackFrames).toEqual(expect.arrayContaining([
      {
        column: 1,
        id: expect.any(Number),
        line: 8,
        name: 'main',
        source: {
          name: 'hello_world.cpp',
          path: '/usr/project/samples/cpp/hello_world.cpp'
        },
        scopes: expect.arrayContaining([
          {
            expensive: expect.any(Boolean),
            name: 'Local',
            variablesReference: expect.any(Number),
            variables: []
          },
        ]),
      }
    ]));
  });
});
