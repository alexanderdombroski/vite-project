import { capitalize } from "../../utils/str.mjs";

export function eventFormTemplate(data = {type: "event", date: ""}) {
	const { type, date, title, desc, startTime, endTime, completed, recurring, subevents } = data;
	
	return `
		<h2>New ${capitalize(type)}</h2>
		<fieldset>
			<legend>${capitalize(type)} Information</legend>

			<label for="title">Title:</label>
			<input name="title" id="title" type="text" maxlength="20" required>

			<label for="desc">Description:</label>
			<input name="desc" id="desc" type="text" maxlength="100" required></input>           

		</fieldset>

		<fieldset>
			<legend>Date & Time</legend>
			<label for="date">Date:</label>
			<input name="date" id="date" type="date" required>
			<label for="startTime">Time:</label>
			<input name="startTime" id="startTime" type="time" required>
			<label for="endTime"> - to - </label>
			<input name="endTime" id="endTime" type="time" required>
			<span id="time-error"></span>
			
			${
			type === "goal" ? `
			<label for="completed">Completed:</label>
			<input type="checkbox" name="completed" id="completed">
			` : ""
			}

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
			<input name="sub-title" type="text" id="sub-title-${i}" maxlength="20" required>
			<label for="sub-date-${i}">Date:</label>
			<input name="sub-date" type="date" id="sub-date-${i}" required>
			<label for="sub-time-${i}">Time:</label>
			<input name="sub-time" type="time" id="sub-time-${i}" required>

			${
			includeCompleted ? `
			<label for="sub-completed-${i}">Completed:</label>
			<input type="checkbox" name="sub-completed" id="sub-completed-${i}">
			` : ""
			}
		</div>
	`;
}