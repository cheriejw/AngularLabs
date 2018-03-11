import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JokeDetailComponent } from './joke-detail.component';
import { JokeService } from '../joke.service';

describe('JokeDetailComponent', () => {
  let component: JokeDetailComponent;
  let fixture: ComponentFixture<JokeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{path: '',component: JokeDetailComponent}])],
      declarations: [ JokeDetailComponent ],
      providers: [ JokeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
