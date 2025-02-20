import { expect, Page } from '@playwright/test';
import { PageObject } from '../lib/Page';
import logger from '../lib/logger';
import { exec } from 'child_process';
import { time } from 'console';
import exp from 'constants';

// Страница:  Скомплектованные наборы
export class CreateCompleteSetsPage extends PageObject {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
}
