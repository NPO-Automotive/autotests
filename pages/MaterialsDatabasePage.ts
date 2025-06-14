import { Page, Locator, expect } from "@playwright/test";
import { PageObject } from "../lib/Page";
import logger from "../lib/logger";
import { title } from "process";
import { toNamespacedPath } from "path";
//import testData from '../testdata/PU18-Names.json'; // Import your test data
import { allure } from 'allure-playwright';
// Страница: Сборка склад

export class CreateMaterialsDatabasePage extends PageObject {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }