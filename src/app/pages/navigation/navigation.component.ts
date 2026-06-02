import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	protected readonly navItems = [
		{ label: 'About us', icon: 'info', route: '/about' },
		{ label: 'Gallery', icon: 'photo_library', route: '/gallery' },

		{ label: 'Discounts', icon: 'local_offer', route: '/discounts' },

		{ label: "Today's menu", icon: 'today', route: '/daily' },
		{ label: 'Seasonal specials', icon: 'local_florist', route: '/seasonal' },

		{ label: 'FAQ', icon: 'help', route: '/questions' },
		{ label: 'Rules', icon: 'gavel', route: '/rules' },

		{ label: 'Products', icon: 'shopping_bag', route: '/products' },
		{ label: 'Takeaway', icon: 'takeout_dining', route: '/takeaway' },

		{ label: 'Articles', icon: 'article', route: '/articles' },
		{ label: 'Reviews', icon: 'rate_review', route: '/reviews' },

		{ label: 'Experiences', icon: 'explore', route: '/quests' },
		{ label: 'Loyalty', icon: 'workspace_premium', route: '/loyalty' },
		{ label: 'Catering', icon: 'room_service', route: '/catering' },

		{ label: 'Team', icon: 'group', route: '/team' },
		{ label: 'Jobs', icon: 'work', route: '/jobs' },
	];
}
