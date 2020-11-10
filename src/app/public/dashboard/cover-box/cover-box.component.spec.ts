import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverBoxComponent } from './cover-box.component';

describe('CoverBoxComponent', () => {
  let component: CoverBoxComponent;
  let fixture: ComponentFixture<CoverBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
