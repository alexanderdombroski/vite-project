const capitalize = str => str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';

export function eventFormTemplate(data = {type: "event"}) {
	const { type, title, desc, startDateTime, endDateTime, completed, recurring, subevents } = data;
	
	return `
		<h2>New ${capitalize(type)}</h2>
		<fieldset>
			<legend>${type} Information</legend>
			
			<label for="type">Event Type:</label>
			<select name="type" id="type">
				<option value="event">event</option>
				<option value="goal">goal</option>
			</select>

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
				<label for="date">Date:</label>
				<input name="date" type="date">
				<label for="time">Time:</label>
				<input name="time" type="time">

				<label for="completed">Completed:</label>
				<input type="checkbox" name="completed">
			</div>


		</fieldset>

		<button type="submit">Add ${type}</button>
	`;
}


