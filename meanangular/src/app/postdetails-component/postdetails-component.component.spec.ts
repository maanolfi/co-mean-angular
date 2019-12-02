import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetailsComponentComponent } from './postdetails-component.component';

describe('PostdetailsComponentComponent', () => {
  let component: PostdetailsComponentComponent;
  let fixture: ComponentFixture<PostdetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
