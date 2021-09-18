const defaultTasks = () => {
  return {
		JncEkcxfLgyihDrtblrKM: {
			id: "JncEkcxfLgyihDrtblrKM",
			title: "Eat a Healthy Meal",
			icon: "fas fa-carrot",
			color: {
				type: "custom",
				color: "#1caeb0",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#1caeb0" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 3,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {
				"2021-09-15":
					"Wed Sep 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-16":
					"Thu Sep 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-07":
					"Tue Sep 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-08":
					"Wed Sep 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-09":
					"Thu Sep 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-02":
					"Thu Sep 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-01":
					"Wed Sep 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-03":
					"Fri Sep 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-04":
					"Sat Sep 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-05":
					"Sun Sep 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-06":
					"Mon Sep 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-11":
					"Sat Sep 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-31":
					"Tue Aug 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-30":
					"Mon Aug 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-29":
					"Sun Aug 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-28":
					"Sat Aug 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-27":
					"Fri Aug 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-26":
					"Thu Aug 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-23":
					"Mon Aug 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-24":
					"Tue Aug 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-25":
					"Wed Aug 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-22":
					"Sun Aug 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-21":
					"Sat Aug 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-20":
					"Fri Aug 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-19":
					"Thu Aug 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-18":
					"Wed Aug 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-17":
					"Tue Aug 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-16":
					"Mon Aug 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-11":
					"Wed Aug 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-12":
					"Thu Aug 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-14":
					"Sat Aug 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-15":
					"Sun Aug 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-13":
					"Fri Aug 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-17":
					"Fri Sep 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-12":
					"Sun Sep 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-10":
					"Tue Aug 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-09":
					"Mon Aug 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-08":
					"Sun Aug 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-07":
					"Sat Aug 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-06":
					"Fri Aug 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-01":
					"Sun Aug 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-02":
					"Mon Aug 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-03":
					"Tue Aug 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-04":
					"Wed Aug 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-05":
					"Thu Aug 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-31":
					"Sat Jul 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-26":
					"Mon Jul 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-27":
					"Tue Jul 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-28":
					"Wed Jul 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-29":
					"Thu Jul 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-30":
					"Fri Jul 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-25":
					"Sun Jul 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-24":
					"Sat Jul 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-23":
					"Fri Jul 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-22":
					"Thu Jul 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-21":
					"Wed Jul 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-20":
					"Tue Jul 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-19":
					"Mon Jul 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-18":
					"Sun Jul 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-17":
					"Sat Jul 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-16":
					"Fri Jul 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-15":
					"Thu Jul 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-14":
					"Wed Jul 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-13":
					"Tue Jul 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-15":
					"Tue Jun 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-21":
					"Mon Jun 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-24":
					"Thu Jun 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-25":
					"Fri Jun 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-27":
					"Sun Jun 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-28":
					"Mon Jun 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-29":
					"Tue Jun 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-22":
					"Tue Jun 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			missedDays: {
				"2021-09-13":
					"Mon Sep 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-02":
					"Fri Jul 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-03":
					"Sat Jul 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-10":
					"Sat Jul 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-12":
					"Sat Jun 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-14":
					"Mon Jun 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-23":
					"Wed Jun 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-11":
					"Fri Jun 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			currentStreak: { num: 3, from: "2021-09-15", to: "2021-09-17" },
			longestStreak: { num: 61, from: "2021-07-13", to: "2021-09-12" },
			streaks: [
				{ num: 3, from: "2021-06-15", to: "2021-06-22" },
				{ num: 3, from: "2021-09-15", to: "2021-09-17" },
				{ num: 5, from: "2021-06-24", to: "2021-06-29" },
				{ num: 61, from: "2021-07-13", to: "2021-09-12" },
			],
			completed: false,
		},
		RAlxPGAdo5AS09JbUN0b2: {
			id: "RAlxPGAdo5AS09JbUN0b2",
			title: "Do Your Homework",
			icon: "fas fa-highlighter",
			color: {
				type: "automatic",
				color: "#F58220",
				taskColorTypes: {
					automatic: { checked: true, color: "#F58220" },
					customColor: { checked: false, color: "#F58220" },
				},
			},
			measurementDuration: { type: "weekly", iconName: "calendar-week" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 1,
			},
			weekly: {
				startWeekOn: {
					sunday: false,
					monday: true,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 2,
			},
			monthly: { frequency: 1 },
			completedDays: {
				"2021-09-15":
					"Wed Sep 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-16":
					"Thu Sep 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-17":
					"Fri Sep 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			missedDays: {
				"2021-09-04":
					"Sat Sep 4 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			longestStreak: {
				num: 3,
				from: "2021-09-16",
				to: "2021-09-18",
			},
			currentStreak: {
				num: 3,
				from: "2021-09-16",
				to: "2021-09-18",
			},
			completed: false,
		},
		Pj_eRQsl1EkNDqMFrBI1R: {
			id: "Pj_eRQsl1EkNDqMFrBI1R",
			title: "Pray to god",
			icon: "fas fa-star-and-crescent",
			color: {
				type: "custom",
				color: "#344fb2",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#344fb2" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 1,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 61,
			currentStreak: 57,
			completed: false,
		},
		"5bDfPLMOj0dSYX9ILVJx_": {
			id: "5bDfPLMOj0dSYX9ILVJx_",
			title: "Go to church",
			icon: "fas fa-bible",
			color: {
				type: "custom",
				color: "#344fb2",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#344fb2" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 1,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 72,
			currentStreak: 72,
			completed: false,
		},
		SSthDhIVQmnR_ZoQPw2rM: {
			id: "SSthDhIVQmnR_ZoQPw2rM",
			title: "Walk the Dog",
			icon: "fas fa-carrot",
			color: {
				type: "custom",
				color: "#e12323",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#e12323" },
				},
			},
			measurementDuration: { type: "monthly", iconName: "calendar" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 2,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 4,
			},
			monthly: { frequency: 19 },
			completedDays: {},
			missedDays: {},
			longestStreak: 129,
			currentStreak: 69,
			completed: false,
		},
		"hg-k_erON5nDnf4-ixXoa": {
			id: "hg-k_erON5nDnf4-ixXoa",
			title: "Take Vitamins",
			icon: "fas fa-capsules",
			color: {
				type: "custom",
				color: "#6cc94a",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#6cc94a" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 2,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 79,
			currentStreak: 62,
			completed: false,
		},
	};
}


export default defaultTasks