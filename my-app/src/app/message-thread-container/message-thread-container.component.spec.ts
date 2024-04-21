import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageThreadContainerComponent } from './message-thread-container.component';

describe('MessageThreadContainerComponent', () => {
  let component: MessageThreadContainerComponent;
  let fixture: ComponentFixture<MessageThreadContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageThreadContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageThreadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
