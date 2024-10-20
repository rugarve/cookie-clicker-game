import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowComponent } from './row.component';
import { By } from '@angular/platform-browser';

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct rank, username and score', () => {
    component.rank = 1;
    component.username = 'Player1';
    component.score = 200;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cells = compiled.querySelectorAll('td');

    expect(cells[0].textContent).toContain('1');
    expect(cells[1].textContent).toContain('Player1');
    expect(cells[2].textContent).toContain('200');
  });
});
