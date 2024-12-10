import { capitalize } from "../../utils/str.mjs";

export function eventFormTemplate(data = {type: "event"}) {
	const { type, title, desc, startDateTime, endDateTime, completed, recurring, subevents } = data;
	
	return `
		<h2>New ${capitalize(type)}</h2>
		<fieldset>
			<legend>${capitalize(type)} Information</legend>

			<label for="title">Title:</label>
			<input name="title" id="title" type="text">

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
			
			${
			type === "goal" ? `
			<label for="completed">Completed:</label>
			<input type="checkbox" name="completed" id="completed">
			` : ""
			}

		</fieldset>

		<fieldset>
			<legend>Advanced</legend>

			<label for="recur">Recurring: </label>
			<input type="text" name="recur" id="recur">
			
			<label for="recur-until"> - until - </label>
			<input type="date" name="recur-until" id="recur-until">

		</fieldset>

		<fieldset>
			<legend>Sub${type}s</legend>

			<div id="subevents">
				
			</div>
			<button type="button" id="add-sub">Add Sub${type}</button>
			<button type="button" id="remove-sub">Remove Sub${type}</button>

		</fieldset>

		<button type="submit" id="form-submit-btn">Add ${type}</button>
	`;
}

export function subeventTemplate(i, includeCompleted) {
	return `
		<div>
			<label for="sub-title-${i}">Title:</label>
			<input name="sub-title" type="text" id="sub-title-${i}">
			<label for="sub-date-${i}">Date:</label>
			<input name="sub-date" type="date" id="sub-date-${i}">
			<label for="sub-time-${i}">Time:</label>
			<input name="sub-time" type="time" id="sub-time-${i}">

			${
			includeCompleted ? `
			<label for="sub-completed-${i}">Completed:</label>
			<input type="checkbox" name="sub-completed" id="sub-completed-${i}">
			` : ""
			}
		</div>
	`;
}
