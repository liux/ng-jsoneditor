import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJsoneditorComponent } from './ng-jsoneditor.component';

describe('NgJsoneditorComponent', () => {
  let component: NgJsoneditorComponent;
  let fixture: ComponentFixture<NgJsoneditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgJsoneditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgJsoneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
