import { capitalize } from "../../utils/str.mjs";

export function eventFormTemplate(data = {type: "event"}) {
	const { type, title, desc, startDateTime, endDateTime, completed, recurring, subevents } = data;
	
	return `
		<h2>New ${capitalize(type)}</h2>
		<fieldset>
			<legend>${capitalize(type)} Information</legend>

			<label for="title">Title:</label>
			<input name="title" id="title" type="text" placeholder="work">

			<label for="desc">Description:</label>
			<textarea name="desc" id="desc" type="text"></textarea>           

		</fieldset>

		<fieldset>
			<legend>Date & Time</legend>
			<label for="date">Date:</label>
			<input name="date" id="date" type="date">
			<label for="startTime">Time:</label>
			<input name="startTime" id="startTime" type="time">
			<label for="endTime"> - to - </label>
			<input name="endTime" id="endTime" type="time">
			
			<label for="completed">Completed:</label>
			<input type="checkbox" name="completed">

		</fieldset>

		<fieldset>
			<legend>Advanced</legend>

			<label for="recurring">Recurring: </label>
			<input type="date">
			
			
			<label for="recurring"> - until - </label>
			<input type="date">

		</fieldset>

		<fieldset>
			<legend>Sub${type}s</legend>

			<div id="subevents">
				
			</div>
			<button type="button" id="add-sub">Add Sub${type}</button>
			<button type="button" id="remove-sub">Remove Sub${type}</button>

		</fieldset>

		<button type="submit">Add ${type}</button>
	`;
}

export function subeventTemplate(i) {
	return `
		<div>
			<label for="date${i}">Date:</label>
			<input name="date" type="date" id="date${i}">
			<label for="time${i}">Time:</label>
			<input name="time" type="time" id="time${i}">

			<label for="completed${i}">Completed:</label>
			<input type="checkbox" name="completed" id="completed${i}">
		</div>
	`;
}
