import announcementIcon from '../images/announcement.svg'
import barCampsIcon from '../images/bar-camps.svg'
import breakfastIcon from '../images/breakfast.svg'
import chilloutIcon from '../images/chillout.svg'
import dinnerIcon from '../images/dinner.svg'
import expoIcon from '../images/expo.svg'
import halftimeIcon from '../images/halftime.svg'
import getTogetherIcon from '../images/get-together.svg'
import ideasIcon from '../images/ideas.svg'
import interestMeetIcon from '../images/interest-meet.svg'
import midnightIcon from '../images/midnight.svg'
import openingCeremonyIcon from '../images/opening-ceremony.svg'
import preparationIcon from '../images/preparation.svg'
import startIcon from '../images/start.svg'
import submitIcon from '../images/submit.svg'
import winningCeremonyIcon from '../images/winning-ceremony.svg'
import workshopIcon from '../images/workshop.svg'

export const AGENDA = {
	friday: [
		{
			time: '3:00pm - 3:45pm',
			activity: 'Opening Ceremony',
			icon: openingCeremonyIcon,
		},
		{
			time: '3:45pm - 4:30pm',
			activity: 'Ideation & Pitch Preparation',
			icon: ideasIcon,
		},
		{
			time: '4:30pm - 6:30pm',
			activity: 'Bar Camps',
			icon: barCampsIcon,
		},
		{
			time: '6:30pm - 7:30pm',
			activity: 'Dinner',
			icon: dinnerIcon,
		},
		{
			time: '7:30pm - 8:30pm',
			activity: 'Interest meetings',
			icon: interestMeetIcon,
		},
		{
			time: '8:30pm - 12:00pm',
			activity: 'Get-together &amp; activities',
			icon: getTogetherIcon,
		}
	],
	saturday: [
		{
			time: '9:00am - 10:00am',
			activity: 'Breakfast',
			icon: breakfastIcon,
		},
		{
			time: '10:00am - 12:00am',
			activity: 'Workshops',
			icon: workshopIcon,
		},
		{
			time: '12:00pm - 12:55pm',
			activity: 'Lunch',
			icon: dinnerIcon,
		},
		{
			time: '12:55pm - 1:00pm',
			activity: 'Start of Hackathon',
			icon: startIcon,
		},
		{
			time: '1:00pm',
			activity: 'Hacking begins',
			icon: barCampsIcon,
		},
		{
			time: '6:30pm - 7:30pm',
			activity: 'Dinners',
			icon: dinnerIcon,
		}
	],
	sunday: [
		{
			time: '0:00am',
			activity: 'Midnight Snack',
			icon: midnightIcon,
		},
		{
			time: '01:00am - 01:30am',
			activity: 'Halftime Challenge',
			icon: halftimeIcon,
		},
		{
			time: '9:00am - 10:00am',
			activity: 'Breakfast',
			icon: breakfastIcon,
		},
		{
			time: '10:00pm - 10:15pm',
			activity: 'Morning Announcements',
			icon: announcementIcon,
		},
		{
			time: '12:30pm - 1:00pm',
			activity: 'Submit projects',
			icon: submitIcon,
		},
		{
			time: '1:00pm',
			activity: 'Deadline',
			icon: startIcon,
		},
		{
			time: '1:00pm - 1:45pm',
			activity: 'Lunch',
			icon: dinnerIcon,
		},
		{
			time: '1:45pm - 2:15pm',
			activity: 'Preparation',
			icon: preparationIcon,
		},
		{
			time: '2:15pm - 3:00pm',
			activity: 'Expo',
			icon: expoIcon,
		},
		{
			time: '3:15pm - 3:45pm',
			activity: 'Winning Ceremony + Wrapping up',
			icon: winningCeremonyIcon,
		},
		{
			time: '3:45pm - 4:30pm',
			activity: 'Chill-Out',
			icon: chilloutIcon,
		},
	]
}
