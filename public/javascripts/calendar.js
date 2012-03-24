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
	
	$('#upstairs_whiteboard_1').fullCalendar({
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
            url: '/events/upstairs_whiteboard_1',
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
	
	$('#upstairs_whiteboard_2').fullCalendar({
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
            url: '/events/upstairs_whiteboard_2',
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
	
	$('#upstairs_whiteboard_3').fullCalendar({
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
            url: '/events/upstairs_whiteboard_3',
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
	
	$('#upstairs_whiteboard_4').fullCalendar({
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
            url: '/events/upstairs_whiteboard_4',
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
	
	$('#upstairs_whiteboard_5').fullCalendar({
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
            url: '/events/upstairs_whiteboard_5',
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
	
	$('#visitor_parking_space_3').fullCalendar({
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
            url: '/events/visitor_parking_space_3',
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
		            left: '',
		            center: 'title',
		            right: 'prev,next today'
            // left: '',
            // center: 'title',
            // right: ''
        },

		defaultView: 'resourceDay',
		firstDay: 1,
		minTime: 7,
		maxTime:19,
		selectHelper: true,
		slotMinutes: 15,
		resources: [
			{
				name: 'Fishbowl',
				id:	'fishbowl'
			},
			{
				name: 'Bricks',
				id:	'bricks'
			},
			{
				name: 'Pod Bay',
				id:	'pod_bay'
			},
			{
				name: 'Holodeck',
				id:	'holodeck'
			},
			{
				name: '2nd Floor 2150',
				id:	'twenty_one_fifty'
			},
			{
				name: 'The Loft',
				id:	'loft'
			},
			{
				name: 'Upstairs Whiteboard 1',
				id: 'upstairs_whiteboard_1'
			},
			{
				name: 'Upstairs Whiteboard 2',
				id: 'upstairs_whiteboard_2'
			},
			{
				name: 'Upstairs Whiteboard 3',
				id: 'upstairs_whiteboard_3'
			},
			{
				name: 'Upstairs Whiteboard 4',
				id: 'upstairs_whiteboard_4'
			},
			{
				name: 'Upstairs Whiteboard 5',
				id: 'upstairs_whiteboard_5'
			},	
			{
				name: 'Visitor Parking Space 3',
				id: 'visitor_parking_space_3'
			},
		],
		
        loading: function(bool){
            if (bool) 
                $('#loading').show();
            else 
                $('#loading').hide();
        },
        
        // a future calendar might have many sources.        
        eventSources: [{
            url: '/events/fishbowl',
            color: '#5F2100',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/bricks',
            color: '#F4795A',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/pod_bay',
            color: '#5F2100',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/holodeck',
            color: '#F4795A',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/twenty_one_fifty',
            color: '#5F2100',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/loft',
            color: '#F4795A',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/upstairs_whiteboard_1',
            color: '#5F2100',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/upstairs_whiteboard_2',
            color: '#F4795A',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/upstairs_whiteboard_3',
            color: '#5F2100',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/upstairs_whiteboard_4',
            color: '#F4795A',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/upstairs_whiteboard_5',
            color: '#5F2100',
            textColor: 'white',
            ignoreTimezone: false
        },
		{
            url: '/events/visitor_parking_space_3',
            color: '#F4795A',
            textColor: 'white',
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
        // eventClick: function(event, jsEvent, view){
        //   // would like a lightbox here.
        // },
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