import type { DayType } from '$lib/types/calendar';

export class Day {
	private date: number;
	private day: DayType;

	constructor(date: Date) {
		this.date = date.getDate();
		this.day = this.getDayString(date.getDay());
	}

	getDayString(dayNumber: number): DayType {
		switch (dayNumber) {
			case 1:
				return '월';
			case 2:
				return '화';
			case 3:
				return '수';
			case 4:
				return '목';
			case 5:
				return '금';
			case 6:
				return '토';
			default:
				return '일';
		}
	}

	getInfo() {
		return {
			date: this.date,
			day: this.day
		};
	}
}
