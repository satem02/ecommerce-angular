import { TestBed } from '@angular/core/testing';

import { ProductCommentService } from './product-comment.service';

describe('ProductCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCommentService = TestBed.get(ProductCommentService);
    expect(service).toBeTruthy();
  });
});
