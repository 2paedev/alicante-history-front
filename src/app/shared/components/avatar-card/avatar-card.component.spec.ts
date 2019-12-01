import { Router } from '@angular/router';
import { HelpersService } from '@services/index';
import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { AvatarCardComponent } from './avatar-card.component';

const HELPERS_SERVICE_MOCK = {
  getImageUrl(): string {
    return 'aFakeUrl';
  },
};

const ROUTER_MOCK = {
  navigate: jasmine.createSpy('navigate'),
  events: of({}),
};

function buildBind(): any {
  return {
    data: {
      images: [{ url: 'aFakeUrl' }],
    },
  };
}

describe('AvatarCardComponent', () => {
  let shallow: Shallow<AvatarCardComponent>;

  beforeEach((): void => {
    shallow = new Shallow(AvatarCardComponent, SharedModule)
      .provide(HelpersService, Router)
      .mock(HelpersService, HELPERS_SERVICE_MOCK)
      .mock(Router, ROUTER_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render({ bind: buildBind() });
    expect(element).toBeTruthy();
  });
});
