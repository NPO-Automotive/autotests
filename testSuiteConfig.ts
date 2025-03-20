
import { runAPI001 } from './testcases/API001.spec';
import { runP001 } from './testcases/P001.spec';
import { runP002 } from './testcases/P002.spec';
import { runP003 } from './testcases/P003.spec';
import { runP004 } from './testcases/P004.spec';
import { runP005 } from './testcases/P005.spec';
import { runP006 } from './testcases/P006.spec';
import { runP007 } from './testcases/P007.spec';
import { runP008 } from './testcases/P008.spec';
import { runP009 } from './testcases/P009.spec';
import { runP010 } from './testcases/P010.spec';
import { runTC000 } from './testcases/TC000.spec';
import { runTC001 } from './testcases/TC001.spec';
import { runTC002 } from './testcases/TC002.spec';
import { runTC100 } from './testcases/TC100.spec';
import { runU001 } from "./testcases/U001.spec";
import { runU002 } from "./testcases/U002.spec";
import { runU003 } from "./testcases/U003.spec";
import { runU004 } from "./testcases/U004.spec";
import { runU005 } from "./testcases/U005.spec";
import { runU006 } from "./testcases/U006.spec";
import { runU007 } from "./testcases/U007.spec";


// Create a mapping of test suites to their corresponding test functions with descriptions
export const testSuites = {
    api001: {
        description:
            "API 001 test suite to verify functionalities specific to API 001.",
        tests: [
            {
                test: runAPI001,
                description: "This test checks the responsiveness of API 001.",
            },
            // Add more test cases as needed
        ],
    },
    page001: {
        description:
            "Page 001 test suite to verify functionalities specific to Page 001.",
        tests: [
            {
                test: runP001,
                description: "This test checks the responsiveness of Page 001.",
            },
            // Add more test cases as needed
        ],
    },
    page002: {
        description:
            "Page 002 test suite to verify functionalities specific to Page 002.",
        tests: [
            {
                test: runP002,
                description: "This test checks the responsiveness of Page 002.",
            },
            // Add more test cases as needed
        ],
    },
    page003: {
        description:
            "Page 003 test suite to verify functionalities specific to Page 003.",
        tests: [
            {
                test: runP003,
                description: "This test checks the responsiveness of Page 003.",
            },
            // Add more test cases as needed
        ],
    },
    page004: {
        description:
            "Page 004 test suite to verify functionalities specific to Page 004.",
        tests: [
            {
                test: runP004,
                description: "This test checks the responsiveness of Page 004.",
            },
            // Add more test cases as needed
        ],
    },
    page005: {

        description:
            'Page 005 test suite to verify functionalities specific to Page 005.',
        tests: [
            {
                test: runP005,
                description: 'This test checks the responsiveness of Page 005.'
            }
            // Add more test cases as needed
        ]
    },
    page006: {

        description:
            'Page 006 test suite to verify functionalities specific to Page 006.',
        tests: [
            {
                test: runP006,
                description: 'This test checks the responsiveness of Page 005.'
            }
            // Add more test cases as needed
        ]
    },
    page007: {

        description:
            'Page 007 test suite to verify functionalities specific to Page 007.',
        tests: [
            {
                test: runP007,
                description: 'This test checks the responsiveness of Page 007.'
            }
            // Add more test cases as needed
        ]
    },
    page008: {

        description:
            'Page 008 test suite to verify functionalities specific to Page 008.',
        tests: [
            {
                test: runP008,
                description: 'This test checks the responsiveness of Page 008.'
            }
            // Add more test cases as needed
        ]
    },
    page009: {

        description:
            'Page 009 test suite to verify functionalities specific to Page 009.',
        tests: [
            {
                test: runP009,
                description: 'This test checks the responsiveness of Page 009.'
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
    suite01: {
        description: 'This is a group of full page tests p02 - P04',
        tests: [
            {
                test: runP002,
                description: 'This test checks the responsiveness of Page 002.',
            },
            {
                test: runP003,
                description: 'This test checks the responsiveness of Page 003.',
            },
            {
                test: runP004,
                description: 'This test checks the responsiveness of Page 004.',
            },
            // Add more test cases as needed
        ],
    },
    TC100: {
        description: 'Complete specifications verification.',
        tests: [
            {
                test: runTC100,
                description: 'verifies the complete specifications matches the scanned product.'
            }
            // Add more test cases as needed
        ]
    },
    U001: {
        description: "Uploading a task.",
        tests: [
            {
                test: runU001,
                description: "Creating a shipment task.",
            },
            // Add more test cases as needed
        ],
    },
    U004: {
        description: "verify changes to full specifications after adding items to the product",
        tests: [
            {
                test: runU004,
                description: "verify changes to full specifications after adding items to the product",
            },
            // Add more test cases as needed
        ],
    },


};
