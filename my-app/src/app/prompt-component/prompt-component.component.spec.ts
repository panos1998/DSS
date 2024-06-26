import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptComponentComponent } from './prompt-component.component';

describe('PromptComponentComponent', () => {
  let component: PromptComponentComponent;
  let fixture: ComponentFixture<PromptComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
