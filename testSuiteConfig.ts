import { runAPI001 } from './testcases/API001.spec';
import { runTC000 } from './testcases/TC000.spec';
import { runTC001 } from './testcases/TC001.spec';
import { runTC002 } from './testcases/TC002.spec';
import { runP001 } from './testcases/P001.spec';
import { runP002 } from './testcases/P002.spec';
import { runP003 } from './testcases/P003.spec';
import { runP004 } from './testcases/P004.spec';
import { runP010 } from './testcases/P010.spec';
import { runP011 } from './testcases/P011.spec';
// import { runP010 } from './testcases/P010.spec';

// Create a mapping of test suites to their corresponding test functions with descriptions
export const testSuites = {
  regression: {
    description: 'Regression test suite to verify core functionalities.',
    tests: [
      {
        test: runTC001,
        description: 'This test verifies the functionality of feature X.'
      },
      {
        test: runTC002,
        description: 'This test checks the performance of feature Y.'
      }
      // Add more test cases as needed
    ]
  },
  api001: {
    description:
      'API 001 test suite to verify functionalities specific to API 001.',
    tests: [
      {
        test: runAPI001,
        description: 'This test checks the responsiveness of API 001.'
      }
      // Add more test cases as needed
    ]
  },
  page001: {
    description:
      'Page 001 test suite to verify functionalities specific to Page 001.',
    tests: [
      {
        test: runP001,
        description: 'This test checks the responsiveness of Page 001.'
      }
      // Add more test cases as needed
    ]
  },
  page002: {
    description:
      'Page 002 test suite to verify functionalities specific to Page 002.',
    tests: [
      {
        test: runP002,
        description: 'This test checks the responsiveness of Page 002.'
      }
      // Add more test cases as needed
    ]
  },
  page003: {
    description:
      'Page 003 test suite to verify functionalities specific to Page 003.',
    tests: [
      {
        test: runP003,
        description: 'This test checks the responsiveness of Page 003.'
      }
      // Add more test cases as needed
    ]
  },

  page004: {

    description:
      'Page 004 test suite to verify functionalities specific to Page 004.',
    tests: [
      {
        test: runP004,
        description: 'This test checks the responsiveness of Page 003.'
      }
      // Add more test cases as needed
    ]
  },  

  page010: {
    description: 'Ordered from suppliers.',
    tests: [
      {
        test: runP010,
        description: 'Order a part.'
      }
      // Add more test cases as needed
    ]
  },
  page011: {
    description: 'Uploading a task.',
    tests: [
      {
        test: runP011,
        description: 'Creating a shipment task.'
      }
      // Add more test cases as needed
    ]
  }
  // page010: {
  //     description: 'Page 010 test suite to verify functionalities specific to Page 010.',
  //     tests: [
  //         {
  //             test: runP010,
  //             description: 'This test checks the responsiveness of Page 010.',
  //         },
  //         // Add more test cases as needed
  //     ],
  // },
  // Add more suites as needed...
};
