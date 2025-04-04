import { test, expect, ElementHandle } from '@playwright/test';
import { runTC000, performLogin } from './TC000.spec'; // Adjust the import path as necessary
import { CreatePartsDatabasePage } from '../pages/PartsDatabasePage';
import { ENV, SELECTORS } from '../config'; // Import the configuration
import logger from '../lib/logger';
import { allure } from 'allure-playwright';

import testData1 from '../testdata/PD18-T1.json'; // Import your test data
import testData2 from '../testdata/PD18-T2.json'; // Import your test data
import testData3 from '../testdata/PD18-T3.json'; // Import your test data


const LEFT_DATA_TABLE = "BasePaginationTable-Table-Component-product";
const LEFT_DATA_TABLE_URGENCY_DATA_COL = "ShipmentsListTable-TableRow-HeaderDateByUrgency";
const LEFT_DATA_TABLE_PLANNED_DATA_COL = "ShipmentsListTable-TableRow-HeaderDateShipmentPlan";
const LEFT_DATA_TABLE_SEARCHABLE_FIELD = "ShipmentsListTable-TableRow-HeaderOrder";

const CENTER_DATA_TABLE = "BasePaginationTable-Table-Component-cbed";

const RIGHT_DATA_TABLE = "BasePaginationTable-Table-Component-detal";
const RIGHT_DATA_TABLE_URGENCY_DATA_COL = "AssemblySclad-PrintTableHeader-UrgencyDateColumn";
const RIGHT_DATA_TABLE_PLANNED_DATA_COL = "AssemblySclad-PrintTableHeader-PlannedShipmentDateColumn";
const RIGHT_DATA_TABLE_SUBPLANNED_DATA_COL = "AssemblySclad-PrintTableHeader-ShipmentsColumn";
const RIGHT_DATA_TABLE_SEARCHABLE_COLS1 = "AssemblySclad-PrintTableHeader-TypeColumn";
const RIGHT_DATA_TABLE_SEARCHABLE_COLS2 = "AssemblySclad-PrintTableHeader-DesignationColumn";
const RIGHT_DATA_TABLE_SEARCHABLE_COLS3 = "AssemblySclad-PrintTableHeader-NameColumn";
const RIGHT_DATA_TABLE_ORDERS_ICON_COL = "AssemblySclad-PrintTableHeader-ShipmentsColumn";

const RIGHT_MODAL_WINDOW_ID = "ModalShipmentsToIzed-destroyModalRight";
const RIGHT_MODAL_TABLE_ID = "ModalShipmentsToIzed-table-buyers";
const RIGHT_MODAL_TABLE_COL3 = "ModalShipmentsToIzed-thead-th3-buyers";
const RIGHT_MODAL_TABLE_COL4 = "ModalShipmentsToIzed-thead-th4-buyers";
const RIGHT_DATA_TABLE_CELL_X = "AssemblySclad-PrintTableBody-";
const LEFT_DATA_TABLE_CELL_X = "ShipmentsListTable-orderRow";
// Страница: База деталей
export const runP010 = () => {
    logger.info(`Starting test: Verify База деталей (Parts Database) Page Functionality`);
    ;

    // Use a separate step to initialize the База деталей
    test.beforeEach(async ({ page }) => {
        const shortagePage = new CreatePartsDatabasePage(page);

        await allure.step('Step 1: Open the login page and login', async () => {
            await performLogin(page, '001', 'Перов Д.А.', '54321');
        });

        await allure.step('Step 2: Navigate to Склад', async () => {
            await page.waitForTimeout(5000);
            await shortagePage.goto(SELECTORS.MAINMENU.PARTS_DATABASE.URL);
        });

    });
    test('Test Case 0: База деталей Page - Scan tables within a specific element', async ({ page }) => {
        test.setTimeout(600000);
        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'База деталей');
        allure.label('story', 'Verify table structures');
        allure.description('Verify  База деталей Page - Scan tables within a specific element.');

        await allure.step('Step 1: Validate the structure of the tables on the page', async () => {
            const shortagePage = new CreatePartsDatabasePage(page);
            await page.waitForLoadState('networkidle');
            const result = await shortagePage.scanTablesWithinElement(page, 'App-RouterView'); // Replace with your data-testid
            expect(result.success, 'Validation failed with the following errors:\n' + result.errors.join('\n')).toBeTruthy();
        });
    });
    test('Test Case 1 - Verify База деталей (Parts Database) Page Column Count and Order Check for LEFT table', async ({ page }) => {


        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'База деталей');
        allure.label('story', 'Verify Column count and order');
        allure.description('Verify База деталей (Parts Database) Page Column Count and Order Check for LEFT table.');

        const shortagePage = new CreatePartsDatabasePage(page);
        let columnCount = 0;
        await allure.step('Step 4: Count the number of columns in the table and their order', async () => {
            // Capture the number of columns from the checkTableColumns method
            columnCount = await shortagePage.checkTableColumns(page, LEFT_DATA_TABLE, true);
            logger.info(`Column count: ${columnCount}`);
        });

        await allure.step('Step 5: Check table column count from the test data and compare to the page', async () => {
            logger.info('STEP 5: Check table column count from the test data and compare to the page');
            const expectedColumnCount = await shortagePage.countColumns(testData1.headers);
            logger.info(`Expected column count: ${expectedColumnCount}`);
            expect(columnCount).toBe(expectedColumnCount);
        });
    });
    test('Test Case 2 - Verify База деталей (Parts Database) Page Column Count and Order Check for CENTER table', async ({ page }) => {


        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'База деталей');
        allure.label('story', 'Verify Column count and order');
        allure.description('Verify База деталей (Parts Database) Page Column Count and Order Check for CENTER table.');

        const shortagePage = new CreatePartsDatabasePage(page);
        let columnCount = 0;
        await allure.step('Step 4: Count the number of columns in the table and their order', async () => {
            // Capture the number of columns from the checkTableColumns method
            columnCount = await shortagePage.checkTableColumns(page, RIGHT_DATA_TABLE, true);
            logger.info(`Column count: ${columnCount}`);
        });

        await allure.step('Step 5: Check table column count from the test data and compare to the page', async () => {
            logger.info('STEP 5: Check table column count from the test data and compare to the page');
            const expectedColumnCount = await shortagePage.countColumns(testData2.headers);
            logger.info(`Expected column count: ${expectedColumnCount}`);
            expect(columnCount).toBe(expectedColumnCount);
        });
    });
    test('Test Case 3 - Verify База деталей (Parts Database) Page Column Count and Order Check for RIGHT table', async ({ page }) => {
        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'Заказ склада на Сборку');
        allure.label('story', 'Verify Column count and order');
        allure.description('Verify База деталей (Parts Database) Page Column Count and Order Check for RIGHT table.');
        const shortagePage = new CreatePartsDatabasePage(page);

        let columnCount = 0;
        await allure.step('Step 4: Count the number of columns in the table and their order', async () => {
            //await shortagePage.showLeftTable(LEFT_DATA_TABLE, SHOW_LEFT_TABLE_BUTTON)
            logger.info('STEP 4: Count the number of columns in the table and their order');
            columnCount = await shortagePage.checkTableColumns(page, LEFT_DATA_TABLE, true);
            logger.info(`Column count: ${columnCount}`);
        });

        await allure.step('Step 5: Check table column count from the test data and compare to the page', async () => {
            logger.info('STEP 5: Check table column count from the test data and compare to the page');
            const expectedColumnCount = await shortagePage.countColumns(testData3.headers);
            logger.info(`Expected column count: ${expectedColumnCount}`);
            expect(columnCount).toBe(expectedColumnCount);
        });
        logger.info('Navigation to materials page completed');
    });
    test('Test Case 4 - Verify База деталей (Parts Database) Page Column header values Check for LEFT table', async ({ page }) => {
        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'База деталей');
        allure.label('story', 'Verify Column header values check');
        allure.description('Verify База деталей (Parts Database) Page Column header values Check for LEFT table.');

        const shortagePage = new CreatePartsDatabasePage(page);

        await allure.step('Step 4: Check table column Header values', async () => {
            logger.info('STEP 4: Check table column Header values');
            // Capture the number of columns from the checkTableColumns method
            const columnsVerified = await shortagePage.checkTableColumnHeaders(page, LEFT_DATA_TABLE, testData1, true);
            expect(columnsVerified).toBe(true);
        });

    });
    test('Test Case 5 - Verify База деталей (Parts Database) Page Column header values Check for CENTER table', async ({ page }) => {
        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'База деталей');
        allure.label('story', 'Verify Column header values check');
        allure.description('Verify База деталей (Parts Database) Page Column header values Check for CENTER table.');

        const shortagePage = new CreatePartsDatabasePage(page);

        await allure.step('Step 4: Check table column Header values', async () => {
            logger.info('STEP 4: Check table column Header values');
            // Capture the number of columns from the checkTableColumns method
            const columnsVerified = await shortagePage.checkTableColumnHeaders(page, CENTER_DATA_TABLE, testData2, true);
            expect(columnsVerified).toBe(true);
        });

    });
    test('Test Case 6 - Verify База деталей (Parts Database) Page Column header values Check for RIGHT table', async ({ page }) => {
        allure.label('severity', 'normal');
        allure.label('epic', 'База деталей');
        allure.label('feature', 'База деталей');
        allure.label('story', 'Verify Column header values check');
        allure.description('Verify База деталей (Parts Database) Page Column header values Check for RIGHT table.');
        const shortagePage = new CreatePartsDatabasePage(page);

        await allure.step('Step 4: Check table column Header values', async () => {
            // Capture the number of columns from the checkTableColumns method
            //await shortagePage.showLeftTable(LEFT_DATA_TABLE, SHOW_LEFT_TABLE_BUTTON)
            logger.info('STEP 4: Check table column Header values');
            const columnsVerified = await shortagePage.checkTableColumnHeaders(page, RIGHT_DATA_TABLE, testData3, true);
            expect(columnsVerified).toBe(true);
        });

    });


    test.skip('Test Case 9 - Verify Сборка Склад (Assembly Warehouse) Page search functionality LEFT table', async ({ page }) => {
        allure.label('severity', 'normal');
        allure.label('epic', 'Склад');
        allure.label('feature', 'Заказ склада на Сборку');
        allure.label('story', 'Verify row sort ordering');
        allure.description('Verify Сборка Склад (Assembly Warehouse) Page search functionality for LEFT table.');
        const shortagePage = new CreatePartsDatabasePage(page);
        let searchQuery = 'Обозначение';
        test.setTimeout(600000);
        await allure.step('Step 4: Find if show left table button is visible and click it', async () => {
            logger.info('STEP 4: Find if show left table button is visible and click it');
            await page.waitForLoadState('networkidle');
            //await shortagePage.showLeftTable(LEFT_DATA_TABLE, SHOW_LEFT_TABLE_BUTTON);
        });

        await allure.step('Step 5: Check Search Functionality', async () => {

            const tableId = LEFT_DATA_TABLE;
            const searchFieldId = 'Search-Cover-Input'; // Adjust as needed
            const searchFields = [LEFT_DATA_TABLE_SEARCHABLE_FIELD]; // Adjust as needed

            // await allure.step('5.1: Reset Filters', async () => {
            // Reset filters on the page
            //     await shortagePage.clickButton(' Сбросить все фильтры ', `[data-testid="${RESET_FILTERS}"]`);
            //});
            // Find column IDs for specified search fields
            let columnIds: number[] = [];
            await allure.step('5.2: Determine searchable columns', async () => {
                columnIds = await shortagePage.getSearchableColumnIds(page, tableId, searchFields);
            });
            let firstRowData: string[] = [];
            await allure.step('5.3: Extract text from searchable columns of the first valid row for testing data', async () => {
                let rowIndex = 1;
                let found = false;

                while (!found) {
                    const row = await page.locator(`[data-testid="${tableId}"] tbody tr:nth-child(${rowIndex})`);
                    const cells = await row.locator('td');
                    const cellCount = await cells.count();

                    if (cellCount > 0) {
                        found = true;
                        for (const columnId of columnIds) {
                            if (columnId < cellCount) {
                                const cellValue = await cells.nth(columnId).innerText();

                                firstRowData.push(cellValue);
                            } else {
                                console.warn(`Column index ${columnId} is out of bounds for row ${rowIndex}`);
                            }
                        }
                    } else {
                        rowIndex++;
                    }

                    if (rowIndex > await page.locator(`[data-testid="${tableId}"] tbody tr`).count()) {
                        console.error('No valid rows found');
                        break;
                    }
                }
            });

            searchQuery = firstRowData[0];

            for (let i = 0; i < firstRowData.length; i++) {
                await allure.step(`5.4: Testing search results for text ${firstRowData[i]}`, async () => {
                    const searchValue = firstRowData[i];
                    await allure.step(`5.4.1: Reset the page before checking results`, async () => {
                        await page.waitForLoadState('networkidle');
                        //await shortagePage.showLeftTable(LEFT_DATA_TABLE, SHOW_LEFT_TABLE_BUTTON)
                    });

                    await allure.step(`5.4.2: Performing search with ${searchValue}`, async () => {
                        // Perform search using the first cell's value
                        await shortagePage.searchTableByIcon(searchValue, `[data-testid="${tableId}"]`);
                        await page.waitForLoadState('networkidle');
                    });

                    let validRows: ElementHandle<Element>[] = [];
                    let rowCount = 0;

                    await allure.step(`5.4.3: Retrieve results`, async () => {
                        const allRows = await page.locator(`[data-testid="${tableId}"] tbody tr`).elementHandles() as ElementHandle<Element>[];
                        const headerRows: ElementHandle<Element>[] = [];

                        for (const row of allRows) {
                            const thCount = await row.$$('th');
                            if (thCount.length > 0) {
                                headerRows.push(row);
                            }
                        }

                        validRows = allRows.filter(row => !headerRows.includes(row));
                        rowCount = validRows.length;
                        logger.info(`Total header rows found: ${headerRows.length}`);
                        logger.info(`Total valid rows found: ${rowCount}`);
                    });

                    await allure.step(`5.4.4: Confirm results are valid`, async () => {
                        // Log the HTML content of each valid row
                        for (let j = 0; j < rowCount; j++) {
                            const rowHtml = await validRows[j].evaluate(node => (node as HTMLElement).outerHTML);
                            logger.info(`Row ${j + 1} HTML:`, rowHtml);

                            // Uncomment the following line to make the test fail for testing purposes
                            // await validRows[j].$eval(`td:nth-child(${columnIds[0] + 1})`, node => (node as HTMLElement).innerText = 'Invalid Value');

                            // Verify that all results contain the search value in the respective column
                            const cellValue = await validRows[j].$eval(`td:nth-child(${columnIds[0] + 1})`, node => (node as HTMLElement).innerText);
                            expect(cellValue).toContain(searchValue);
                        }
                    });

                    await allure.step(`5.4.5: Confirm search input contains search text`, async () => {
                        logger.info(`5.4.5: Confirm search input contains search text`);
                        const searchInputSelector = '[data-testid="Search-Cover-Input"]'; // Update this selector to match your search input element
                        const inputValue = await page.$eval(searchInputSelector, input => (input as HTMLInputElement).value);
                        //expect(inputValue).toBe(searchValue);
                        //https://app.weeek.net/ws/426401/task/2839
                    });
                });
            }

            logger.info("finished result checking");

            // 5.5 Search History Dropdown
            await allure.step('5.5: Check search history functionality', async () => {
                await shortagePage.checkSearchHistory(page, tableId, searchFieldId, firstRowData);
            });


            // 5.6 Boundary and Edge Cases
            await allure.step('5.6: Perform boundary and edge case tests', async () => {
                await shortagePage.performNegativeSearchTests(page, tableId, searchFieldId);
            });

            // 5.7 Performance Testing
            await allure.step('5.7: Measure the performance of the search functionality', async () => {

                const start = Date.now();

                await shortagePage.searchTable(searchQuery, `[data-testid="${tableId}"]`);

                const results = await page.locator(`[data-testid="${LEFT_DATA_TABLE_CELL_X}"]`);
                //await results.waitFor();
                const end = Date.now();
                const timeTaken = end - start;
                logger.info(`Time taken for search results: ${timeTaken}ms`);
            });

            // 5.8 // Verify accessibility
            await allure.step('5.8: Verify Accessibility', async () => {
                const table = page.locator(`[data-testid="${tableId}"]`);
                const searchInput = page.locator(`[data-testid="${searchFieldId}"]`);
                const ariaLabel = await searchInput.getAttribute('aria-label');
                //expect(ariaLabel).toBeTruthy();
                //https://app.weeek.net/ws/426401/task/2845
            });

            // 5.9 Security Considerations
            await allure.step('5.9: Test for security vulnerabilities', async () => {
                const table = page.locator(`[data-testid="${tableId}"]`);
                const searchTable = table.locator(`[data-testid="${searchFieldId}"]`);

                // Function to filter out rows with `th` elements
                async function getValidRows(): Promise<ElementHandle<Element>[]> {
                    const allRows = await table.locator('tbody tr').elementHandles() as ElementHandle<Element>[];
                    const validRows: ElementHandle<Element>[] = [];

                    for (const row of allRows) {
                        const thCount = await row.$$('th');
                        if (thCount.length === 0) {
                            validRows.push(row);
                        }
                    }
                    return validRows;
                }

                // SQL Injection Test
                const sqlInjectionQuery = "' OR '1'='1";
                await shortagePage.searchTable(sqlInjectionQuery, `[data-testid="${tableId}"]`);

                await page.waitForLoadState('networkidle');
                const validRowsAfterSqlInjection = await getValidRows();
                await page.waitForLoadState('networkidle');
                expect(validRowsAfterSqlInjection.length).toBe(0); // Expect no valid rows or appropriate handling

                // XSS Test
                const xssQuery = "<script>alert('XSS')</script>";
                await shortagePage.searchTableByIcon(xssQuery, `[data-testid="${tableId}"]`);
                await page.waitForLoadState('networkidle');
                const validRowsAfterXss = await getValidRows();

                expect(validRowsAfterXss.length).toBe(0); // Expect no valid rows or appropriate handling
            });


            await allure.step('5.10: Verify search can be executed using the search icon', async () => {

                await shortagePage.searchTableByIcon(searchQuery, `[data-testid="${tableId}"]`);
                await page.waitForLoadState('networkidle');

                await page.waitForTimeout(3000);
                // Get all rows as element handles
                const allRows = await page.locator(`[data-testid="${tableId}"] tbody tr`).elementHandles() as ElementHandle<Element>[];

                // Check if any rows are found and log the number of rows found
                console.log(`Number of rows found: ${allRows.length}`);

                const headerRows: ElementHandle<Element>[] = [];

                // Identify header rows
                for (const row of allRows) {
                    const thCount = await row.$$('th');
                    if (thCount.length > 0) {
                        headerRows.push(row);
                    }
                }

                // Filter out header rows to get valid data rows
                const validRows = await allRows.filter(row => !headerRows.includes(row));
                console.log(`Rows found: ${validRows.length}`);

                // Log the number of valid rows found
                logger.info(`Rows found: ${validRows.length}`);

                // Expect at least one valid row
                expect(validRows.length).toBeGreaterThan(0);
            });


        });

    });
    test.skip('Test Case 10 - Verify Сборка Склад (Assembly Warehouse) Page search functionality RIGHT table', async ({ page }) => {
        allure.label('severity', 'normal');
        allure.label('epic', 'Склад');
        allure.label('feature', 'Заказ склада на Сборку');
        allure.label('story', 'Verify row sort ordering');
        allure.description('Verify Сборка Склад (Assembly Warehouse) Page search functionality for LEFT table.');
        test.setTimeout(600000);
        const shortagePage = new CreatePartsDatabasePage(page);
        let searchQuery = 'Обозначение';

        await allure.step('Step 4: Check Search Functionality', async () => {
            logger.info('Step 4: Check Search Functionality');

            const tableId = RIGHT_DATA_TABLE;
            const searchFieldId = 'Search-Cover-Input'; // Adjust as needed
            const searchFields = [RIGHT_DATA_TABLE_SEARCHABLE_COLS1, RIGHT_DATA_TABLE_SEARCHABLE_COLS2, RIGHT_DATA_TABLE_SEARCHABLE_COLS3]; // Adjust as needed

            //await allure.step('5.1: Reset Filters', async () => {
            //    logger.info('5.1: Reset Filters');
            // Reset filters on the page
            //    await shortagePage.clickButton(' Сбросить все фильтры ', `[data-testid="${RESET_FILTERS}"]`);
            //});

            // Find column IDs for specified search fields
            let columnIds: number[] = [];
            await allure.step('5.2: Determine searchable columns', async () => {
                logger.info('5.2: Determine searchable columns');
                columnIds = await shortagePage.getSearchableColumnIds(page, tableId, searchFields);
            });
            let firstRowData: string[] = [];
            await allure.step('5.3: Extract text from searchable columns of the first valid row for testing data', async () => {
                logger.info('5.3: Extract text from searchable columns of the first valid row for testing data');
                let rowIndex = 1;
                let found = false;

                // Log initial information
                logger.info(`Starting to search for valid rows in table with ID: ${tableId}`);
                logger.info(`Initial column IDs: ${JSON.stringify(columnIds)}`);

                // Ensure the table is visible
                //const tableSelector = `[data-testid="${tableId}"] tbody tr`;
                const tableSelector = `#${tableId} tbody tr`;//replace with data-testid

                await page.waitForLoadState('networkidle');
                //await page.waitForSelector(tableSelector, { state: 'visible' });////////////
                await page.waitForTimeout(5000);
                // Get the total number of rows in the table
                const allRows = await page.locator(tableSelector).elementHandles() as ElementHandle<Element>[];
                logger.info(`Number of rows found: ${allRows.length}`);

                const totalRowCount = await page.locator(tableSelector).count();
                logger.info(`Total rows in table: ${totalRowCount}`);

                while (!found && rowIndex <= totalRowCount) {
                    const row = await page.locator(`${tableSelector}:nth-child(${rowIndex})`);
                    const cells = await row.locator('td');
                    const cellCount = await cells.count();

                    logger.info(`Checking row ${rowIndex} with ${cellCount} cells`);

                    if (cellCount > 0) {
                        let rowHasAllContent = true;
                        const rowData: string[] = [];

                        for (const columnId of columnIds) {
                            if (columnId < cellCount) {
                                const cellValue = await cells.nth(columnId).innerText();
                                logger.info(`Cell value from column ${columnId}: ${cellValue}`);

                                if (cellValue.trim() === '') {
                                    rowHasAllContent = false;
                                    break;
                                } else {
                                    rowData.push(cellValue);
                                }
                            } else {
                                console.warn(`Column index ${columnId} is out of bounds for row ${rowIndex}`);
                                rowHasAllContent = false;
                                break;
                            }
                        }

                        if (rowHasAllContent) {
                            found = true;
                            firstRowData.push(...rowData);
                        }
                    }

                    rowIndex++;
                }

                if (!found) {
                    console.error('No valid rows found');
                } else {
                    logger.info('First valid row data for search: ', firstRowData);
                }
            });


            //searchQuery = firstRowData[0];
            for (let i = 0; i < firstRowData.length; i++) {
                await allure.step(`5.4: Testing search results for text ${firstRowData[i]}`, async () => {
                    logger.info(`5.4: Testing search results for text ${firstRowData[i]}`);
                    const searchValue = firstRowData[i];

                    await allure.step(`5.4.1: Reset the page before checking results`, async () => {
                        logger.info(`5.4.1: Reset the page before checking results`);
                        await page.reload({ waitUntil: 'networkidle' });
                    });

                    await allure.step(`5.4.2: Performing search with ${searchValue}`, async () => {
                        logger.info(`5.4.2: Performing search with ${searchValue}`);
                        await shortagePage.searchTableByIcon(searchValue, `[id="${tableId}"]`); //replace with data-testid
                        await page.waitForSelector(`[id="${tableId}"] tbody tr`, { state: 'visible' });//replace with data-testid
                    });

                    let validRows: ElementHandle<Element>[] = [];
                    let rowCount = 0;

                    await allure.step(`5.4.3: Retrieve results`, async () => {
                        logger.info(`5.4.3: Retrieve results`);
                        //const allRows = await page.locator(`[data-testid="${tableId}"] tbody tr`).elementHandles() as ElementHandle<Element>[];
                        const allRows = await page.locator(`[id="${tableId}"] tbody tr`).elementHandles() as ElementHandle<Element>[];
                        const headerRows: ElementHandle<Element>[] = [];

                        for (const row of allRows) {
                            const thCount = await row.$$('th');
                            if (thCount.length > 0) {
                                headerRows.push(row);
                            }
                        }

                        validRows = allRows.filter(row => !headerRows.includes(row));
                        rowCount = validRows.length;
                        logger.info(`Total header rows found: ${headerRows.length}`);
                        logger.info(`Total valid rows found: ${rowCount}`);
                    });

                    await allure.step('5.4.4: Confirm results are valid', async () => {
                        logger.info('5.4.4: Confirm results are valid');

                        for (let j = 0; j < rowCount; j++) {
                            const rowHtml = await validRows[j].evaluate(node => (node as HTMLElement).outerHTML);

                            if (rowHtml) {
                                logger.info(`Row ${j + 1} HTML: ${rowHtml}`);
                            } else {
                                logger.warn(`Row ${j + 1} HTML is empty or null`);
                            }

                            let found = false;

                            // Iterate over each column in the row
                            for (let i = 0; i < columnIds.length; i++) {
                                await validRows[j].waitForSelector(`td:nth-child(${columnIds[i] + 1})`, { state: 'visible', timeout: 5000 });

                                const cellContent = await validRows[j].$eval(`td:nth-child(${columnIds[i] + 1})`, node => (node as HTMLElement).innerText);
                                logger.info(`Row ${j + 1}, Column ${columnIds[i] + 1} content: ${cellContent}`);

                                if (cellContent.trim() !== '') {
                                    logger.info(`Cell content is not empty: ${cellContent}`);
                                    if (cellContent.includes(searchValue)) {
                                        found = true;
                                        break; // Exit loop if searchValue is found
                                    }
                                } else {
                                    logger.warn(`Cell content is empty or null for row ${j + 1}, column ${columnIds[i] + 1}`);
                                }
                            }

                            // Assert that the searchValue was found in at least one column
                            expect(found).toBe(true);
                        }
                    });


                    await allure.step(`5.4.5: Confirm search input contains search text`, async () => {
                        logger.info(`5.4.5: Confirm search input contains search text`);
                        const searchInputSelector = '[data-testid="Search-Cover-Input"]';
                        const inputValue = await page.$eval(searchInputSelector, input => (input as HTMLInputElement).value);
                        logger.info(`Search input value: ${inputValue}`);
                        expect(inputValue).toBe(searchValue);
                    });
                });
            }



            logger.info("finished result checking");

            // 5.5 Search History Dropdown
            await allure.step('5.5: Check search history functionality', async () => {
                logger.info('5.5: Check search history functionality');
                await shortagePage.checkSearchHistory(page, tableId, searchFieldId, firstRowData);
            });

            // 5.6 Boundary and Edge Cases
            await allure.step('5.6: Perform boundary and edge case tests', async () => {
                logger.info('5.6: Perform boundary and edge case tests');
                await shortagePage.performNegativeSearchTests(page, tableId, searchFieldId);
            });

            // 5.7 Performance Testing
            await allure.step('5.7: Measure the performance of the search functionality', async () => {
                logger.info('5.7: Measure the performance of the search functionality');
                const start = Date.now();
                searchQuery = firstRowData[0];
                //await shortagePage.searchTable(searchQuery,`[data-testid="${tableId}"]`);
                await shortagePage.searchTable(searchQuery, `[id="${tableId}"]`);//replace with data-testid
                const results = await page.locator(`[data-testid="${RIGHT_DATA_TABLE_CELL_X}"]`);

                //await results.waitFor();
                const end = Date.now();
                const timeTaken = end - start;
                logger.info(`Time taken for search results: ${timeTaken}ms`);
            });

            // 5.8 // Verify accessibility
            await allure.step('5.8: Verify Accessibility', async () => {
                logger.info('5.8: Verify Accessibility');
                //const table = page.locator(`[data-testid="${tableId}"]`);
                const table = page.locator(`[id="${tableId}"]`);//replace witj data-testid
                const searchInput = page.locator(`[data-testid="${searchFieldId}"]`);

                const ariaLabel = await searchInput.getAttribute('aria-label');
                //expect(ariaLabel).toBeTruthy();
                //https://app.weeek.net/ws/426401/task/2845

            });

            // 5.9 Security Considerations
            await allure.step('5.9: Test for security vulnerabilities', async () => {
                logger.info('5.9: Test for security vulnerabilities');
                //const table = page.locator(`[data-testid="${tableId}"]`);
                const table = page.locator(`[id="${tableId}"]`);//replace with data-testid
                const searchTable = table.locator(`[data-testid="${searchFieldId}"]`);

                // Function to filter out rows with `th` elements
                async function getValidRows(): Promise<ElementHandle<Element>[]> {
                    const allRows = await table.locator('tbody tr').elementHandles() as ElementHandle<Element>[];

                    const validRows: ElementHandle<Element>[] = [];

                    for (const row of allRows) {
                        const thCount = await row.$$('th');
                        if (thCount.length === 0) {
                            validRows.push(row);
                        }
                    }
                    return validRows;
                }
                let sqlInjectionQuery = "";

                sqlInjectionQuery = "' OR '1'='1";
                //await shortagePage.searchTable(sqlInjectionQuery,`[data-testid="${tableId}"]`);
                await shortagePage.searchTable(sqlInjectionQuery, `[id="${tableId}"]`);//replace with data-testid
                let validRowsAfterSqlInjection = await getValidRows();

                validRowsAfterSqlInjection = await getValidRows();

                expect(validRowsAfterSqlInjection.length).toBe(0); // Expect no valid rows or appropriate handling
                await shortagePage.searchTable('', `[id="${tableId}"]`);
                // XSS Test
                await shortagePage.waitingTableBody(`[id="${tableId}"]`);
                const xssQuery = "<script>alert('XSS')</script>";
                //await shortagePage.searchTable(xssQuery,`[data-testid="${tableId}"]`);
                await shortagePage.searchTable(xssQuery, `[id="${tableId}"]`);//replace with data-testid
                //await page.waitForTimeout(10000); // Wait for results to update
                await page.waitForLoadState('networkidle');

                const validRowsAfterXss = await getValidRows();

                expect(validRowsAfterXss.length).toBe(0); // Expect no valid rows or appropriate handling
            });

            // Additional: Execute search using the icon
            await allure.step('5.10: Verify search can be executed using the search icon', async () => {
                logger.info('5.10: Verify search can be executed using the search icon');
                searchQuery = firstRowData[0];
                //await shortagePage.searchTableByIcon(searchQuery, `[data-testid="${tableId}"]`);
                await shortagePage.searchTableByIcon(searchQuery, `[id="${tableId}"]`);//replace with data-testid
                // Wait for the table body to be fully loaded by checking for the presence of at least one row
                //await page.waitForSelector(`[data-testid="${tableId}"] tbody tr`, { state: 'visible'  });
                await page.waitForSelector(`[id="${tableId}"] tbody tr`, { state: 'visible' });//replace with data-testid
                //await page.waitForTimeout(5000);
                //const allRows = await page.locator(`[data-testid="${tableId}"] tbody tr`).elementHandles() as ElementHandle<Element>[];
                const allRows = await page.locator(`[id="${tableId}"] tbody tr`).elementHandles() as ElementHandle<Element>[];//replace with data-testid
                const headerRows: ElementHandle<Element>[] = [];

                for (const row of allRows) {
                    const thCount = await row.$$('th');
                    if (thCount.length > 0) {
                        headerRows.push(row);
                    }
                }

                const validRows = await allRows.filter(row => !headerRows.includes(row));
                logger.info(`"Rows found: ${validRows.length}"`);

                expect(await validRows.length).toBeGreaterThan(0);
            });

            // Additional: Validate search functionality with multiple filters
            // Works for right table only
            /*  await allure.step('5.11: Verify search works with multiple filters', async () => {
                  logger.info('5.11: Verify search works with multiple filters');
                  const table = page.locator(`[data-testid="${tableId}"]`);
                  const searchTable = table.locator(`[data-testid="${searchFieldId}"]`);
  
                  await searchTable.fill(searchQuery);
                  await searchTable.press('Enter');
                  const results = page.locator('[data-testid="Search-Results"]');
                  expect(await results.count()).toBeGreaterThan(0);
  
                  const additionalFilter = page.locator('[data-testid="Additional-Filter"]');
                  await additionalFilter.click();
                  const filteredResults = page.locator('[data-testid="Filtered-Results"]');
                  expect(await filteredResults.count()).toBeGreaterThan(0);
              });*/
        });
    });
    test.skip('Test Case 11 - Verify Сборка Склад (Assembly Warehouse) Page - Compare dates with Order List for RIGHT table', async ({ page }) => {
        test.setTimeout(600000);
        allure.label('severity', 'normal');
        allure.label('epic', 'Склад');
        allure.label('feature', 'Заказ склада на Сборку');
        allure.label('story', 'Verify row sort ordering');
        allure.description('Verify Сборка Склад (Assembly Warehouse) Page Dates in main table match dates in the Orders List for RIGHT table.');
        const shortagePage = new CreatePartsDatabasePage(page);

        await allure.step('Step 4: compare the dates in each Row, with thier Orders list', async () => {
            logger.info('STEP 4: Find Columns to check ordering in main table.');

            // Call the method for the 'Name' header
            logger.info('Finding column for Name');
            const nameColId = await shortagePage.findColumn(page, RIGHT_DATA_TABLE, RIGHT_DATA_TABLE_SEARCHABLE_COLS3);
            logger.info(`Name Column Index: ${nameColId}`);

            // Call the method for the 'DateByUrgency' header
            logger.info('Finding column for Date By Urgency');
            const urgencyColId = await shortagePage.findColumn(page, RIGHT_DATA_TABLE, RIGHT_DATA_TABLE_URGENCY_DATA_COL);
            logger.info(`Urgency Column Index: ${urgencyColId}`);

            // Call the method for the 'Orders Icon' header
            logger.info('Finding column for Orders Icon');
            const ordersColId = await shortagePage.findColumn(page, RIGHT_DATA_TABLE, RIGHT_DATA_TABLE_ORDERS_ICON_COL);
            logger.info(`Planned Shipment Column Index: ${ordersColId}`);

            // Call the method for the 'DateShipmentsPlan' header
            logger.info('Finding column for Date Shipments Planned');
            const plannedShipmentColId = await shortagePage.findColumn(page, RIGHT_DATA_TABLE, RIGHT_DATA_TABLE_PLANNED_DATA_COL);
            logger.info(`Planned Shipment Column Index: ${plannedShipmentColId}`);

            // Check if all columns are found
            if (nameColId !== -1 && urgencyColId !== -1 && plannedShipmentColId !== -1 && ordersColId !== -1) {
                logger.info('All columns found. Checking table row ordering.');
                const correctDatesFound = await shortagePage.checkDatesWithOrderList(page,
                    RIGHT_DATA_TABLE,
                    nameColId,
                    urgencyColId,
                    plannedShipmentColId,
                    ordersColId,
                    RIGHT_MODAL_WINDOW_ID, //modal id
                    RIGHT_MODAL_TABLE_ID, //table id
                    RIGHT_MODAL_TABLE_COL3,
                    RIGHT_MODAL_TABLE_COL4
                );
                expect(correctDatesFound.success).toBe(true);
            } else {
                const missingCol = nameColId === -1 ? 'Name' :
                    urgencyColId === -1 ? 'Дата по срочности' :
                        plannedShipmentColId === -1 ? 'Дата план. отгрузки' : 'Orders';
                throw new Error(`Column "${missingCol}" not found`);
            }

        });
    });
};