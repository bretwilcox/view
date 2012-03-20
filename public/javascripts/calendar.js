$(document).ready(function() {

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('#fishbowl').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/fishbowl',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        }],
        
        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
	
	$('#bricks').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/bricks',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        }],
        
        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
	
	$('#holodeck').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/holodeck',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        }],
        
        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
	$('#pod_bay').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/pod_bay',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        }],
        
        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
	$('#twenty_one_fifty').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/twenty_one_fifty',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        }],
        
        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
	
	$('#loft').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/loft',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        }],
        
        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
	
	$('#allrooms').fullCalendar({
		editable: false,        
		header: {
		            // left: 'prev,next today',
		            // center: 'title',
		            // right: 'month,agendaWeek,agendaDay'
            left: '',
            center: 'title',
            right: ''
        },
        defaultView: 'agendaDay',
        height: 606,
        slotMinutes: 30,
        
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/fishbowl',
            color: 'blue',
            textColor: 'light grey',
            ignoreTimezone: false
        },
		{
            url: '/events/bricks',
            color: 'light blue',
            textColor: 'light grey',
            ignoreTimezone: false
        },
		{
            url: '/events/pod_bay',
            color: 'red',
            textColor: 'light grey',
            ignoreTimezone: false
        },
		{
            url: '/events/holodeck',
            color: 'pink',
            textColor: 'grey',
            ignoreTimezone: false
        },
		{
            url: '/events/twenty_one_fifty',
            color: 'green',
            textColor: 'light grey',
            ignoreTimezone: false
        },
		{
            url: '/events/theloft',
            color: 'light green',
            textColor: 'light grey',
            ignoreTimezone: false
        }],

        timeFormat: 'h:mm t{ - h:mm t} ',
        dragOpacity: "0.5",
        
        //http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/event_ui/eventResize/
        eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },

        // http://arshaw.com/fullcalendar/docs/mouse/eventClick/
        eventClick: function(event, jsEvent, view){
          // would like a lightbox here.
        },
	});
});

function updateEvent(the_event) {
    // $.update(
    //   "/events/" + the_event.id,
    //   { event: { title: the_event.title,
    //              starts_at: "" + the_event.start,
    //              ends_at: "" + the_event.end,
    //              description: the_event.description
    //            }
    //   },
    //   function (reponse) { alert('successfully updated task.'); }
    // );
};