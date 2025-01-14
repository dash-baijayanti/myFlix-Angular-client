/**
 * @file fetch-api-data.service.spec.ts
 * @description Unit tests for the FetchApiDataService. This service handles API interactions for the application.
 * @module FetchApiDataServiceTests
 */

import { TestBed } from '@angular/core/testing';
import { FetchApiDataService } from './fetch-api-data.service';

describe('FetchApiDataService', () => {
  let service: FetchApiDataService;

  /**
   * Sets up the testing module and injects the FetchApiDataService instance before each test.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDataService);
  });

  /**
   * Test case: Verifies that the FetchApiDataService is successfully created.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});