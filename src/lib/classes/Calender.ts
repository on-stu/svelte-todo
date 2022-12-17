import { Day } from './Day';

export class Calendar {
	private month: number;
	private days: Day[];
	private currentDate = new Date();

	constructor(month: number) {
		this.month = month;
		this.days = [];
		this.initMonth(this.currentDate.getMonth());
	}

	initMonth(month: number) {
		this.currentDate.setMonth(month);
		this.currentDate = this.getFirstDate();
		this.days.push(new Day(this.currentDate));
		while (true) {
			const date = this.getNextDate();
			if (date === undefined) {
				break;
			}
			this.currentDate = date;
			this.days.push(new Day(this.currentDate));
		}
	}

	getFirstDate() {
		const date = new Date(this.currentDate.getFullYear(), this.month, 1);
		return date;
	}

	getNextDate() {
		const date = new Date(
			this.currentDate.getFullYear(),
			this.currentDate.getMonth(),
			this.currentDate.getDate() + 1
		);
		if (date.getMonth() !== this.month) {
			return undefined;
		}
		return date;
	}

	getMonthString(month: number) {
		return `${month + 1}월`;
	}

	toArray() {
		return this.days;
	}
}
