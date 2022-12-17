<script lang="ts">
	import { Calendar } from '$lib/classes/Calender';

	const today = new Date();
	const calendar = new Calendar(today.getMonth());

	console.log(calendar.toArray());
</script>

{today.getDate()}
