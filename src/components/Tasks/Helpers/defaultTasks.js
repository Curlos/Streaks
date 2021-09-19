const defaultTasks = () => {
  return {
		"JncEkcxfLgyihDrtblrKM": {
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
		"RAlxPGAdo5AS09JbUN0b2": {
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
		"Pj_eRQsl1EkNDqMFrBI1R": {
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
			completedDays: {
				"2021-09-01":
					"Wed Sep 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-02":
					"Thu Sep 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-03":
					"Fri Sep 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-04":
					"Sat Sep 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-12":
					"Sun Sep 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-11":
					"Sat Sep 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-10":
					"Fri Sep 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-09":
					"Thu Sep 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-05":
					"Sun Sep 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-06":
					"Mon Sep 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-14":
					"Tue Sep 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-07":
					"Tue Sep 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-19":
					"Thu Aug 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-29":
					"Sun Aug 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-31":
					"Tue Aug 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-11":
					"Sun Jul 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-12":
					"Mon Jul 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-23":
					"Fri Jul 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-31":
					"Sat Jul 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-24":
					"Sat Jul 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-29":
					"Thu Jul 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			missedDays: {
				"2021-09-13":
					"Mon Sep 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-17":
					"Fri Sep 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-18":
					"Sat Sep 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-08":
					"Wed Sep 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-13":
					"Fri Aug 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-14":
					"Sat Aug 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-12":
					"Thu Aug 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-15":
					"Sun Aug 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-16":
					"Mon Aug 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-20":
					"Fri Aug 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-21":
					"Sat Aug 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-22":
					"Sun Aug 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-23":
					"Mon Aug 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-24":
					"Tue Aug 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-25":
					"Wed Aug 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-26":
					"Thu Aug 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-27":
					"Fri Aug 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-18":
					"Wed Aug 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-28":
					"Sat Aug 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-02":
					"Mon Aug 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-06":
					"Fri Aug 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-21":
					"Wed Jul 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-22":
					"Thu Jul 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-30":
					"Fri Jul 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			longestStreak: { num: 9, from: "2021-08-29", to: "2021-09-07" },
			currentStreak: { num: 0, from: "", to: "" },
			completed: false,
			streaks: [
				{ num: 1, from: "2021-07-31", to: "2021-07-31" },
				{ num: 1, from: "2021-08-19", to: "2021-08-19" },
				{ num: 1, from: "2021-09-14", to: "2021-09-14" },
				{ num: 2, from: "2021-07-11", to: "2021-07-12" },
				{ num: 3, from: "2021-07-23", to: "2021-07-29" },
				{ num: 4, from: "2021-09-09", to: "2021-09-12" },
				{ num: 9, from: "2021-08-29", to: "2021-09-07" },
			],
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
			completedDays: {
				"2021-09-02":
					"Thu Sep 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-03":
					"Fri Sep 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-04":
					"Sat Sep 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-05":
					"Sun Sep 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-12":
					"Sun Sep 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-09":
					"Mon Aug 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-10":
					"Tue Aug 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-11":
					"Wed Aug 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-12":
					"Thu Aug 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-13":
					"Fri Aug 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-14":
					"Sat Aug 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-15":
					"Sun Aug 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-16":
					"Mon Aug 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-17":
					"Tue Aug 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-18":
					"Wed Aug 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-19":
					"Thu Aug 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-20":
					"Fri Aug 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-21":
					"Sat Aug 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-23":
					"Mon Aug 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-22":
					"Sun Aug 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-24":
					"Tue Aug 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-25":
					"Wed Aug 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-26":
					"Thu Aug 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-27":
					"Fri Aug 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-28":
					"Sat Aug 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-08":
					"Sun Aug 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-06":
					"Fri Aug 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-05":
					"Thu Aug 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-04":
					"Wed Aug 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-03":
					"Tue Aug 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-02":
					"Mon Aug 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-07":
					"Sat Aug 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-01":
					"Sun Aug 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-29":
					"Sun Aug 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-30":
					"Mon Aug 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-31":
					"Tue Aug 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-06":
					"Tue Jul 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-07":
					"Wed Jul 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-08":
					"Thu Jul 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-09":
					"Fri Jul 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-10":
					"Sat Jul 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-11":
					"Sun Jul 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-12":
					"Mon Jul 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-13":
					"Tue Jul 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-14":
					"Wed Jul 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-15":
					"Thu Jul 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-16":
					"Fri Jul 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-17":
					"Sat Jul 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-18":
					"Sun Jul 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-19":
					"Mon Jul 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-21":
					"Wed Jul 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-20":
					"Tue Jul 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-22":
					"Thu Jul 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-23":
					"Fri Jul 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-24":
					"Sat Jul 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-25":
					"Sun Jul 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-26":
					"Mon Jul 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-27":
					"Tue Jul 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-29":
					"Thu Jul 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-28":
					"Wed Jul 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-30":
					"Fri Jul 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-31":
					"Sat Jul 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-01":
					"Thu Jul 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-02":
					"Fri Jul 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-03":
					"Sat Jul 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-04":
					"Sun Jul 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-07-05":
					"Mon Jul 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-01":
					"Tue Jun 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-02":
					"Wed Jun 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-03":
					"Thu Jun 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-04":
					"Fri Jun 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-05":
					"Sat Jun 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-06":
					"Sun Jun 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-07":
					"Mon Jun 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-08":
					"Tue Jun 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-30":
					"Wed Jun 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-29":
					"Tue Jun 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-28":
					"Mon Jun 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-27":
					"Sun Jun 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-26":
					"Sat Jun 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-25":
					"Fri Jun 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-17":
					"Thu Jun 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-18":
					"Fri Jun 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-09":
					"Wed Jun 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-10":
					"Thu Jun 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-11":
					"Fri Jun 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-19":
					"Sat Jun 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-12":
					"Sat Jun 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-20":
					"Sun Jun 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-13":
					"Sun Jun 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-21":
					"Mon Jun 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-14":
					"Mon Jun 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-22":
					"Tue Jun 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-15":
					"Tue Jun 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-23":
					"Wed Jun 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-16":
					"Wed Jun 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-06-24":
					"Thu Jun 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-30":
					"Sun May 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-31":
					"Mon May 31 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-28":
					"Fri May 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-29":
					"Sat May 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-27":
					"Thu May 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-26":
					"Wed May 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-25":
					"Tue May 25 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-17":
					"Mon May 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-18":
					"Tue May 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-19":
					"Wed May 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-20":
					"Thu May 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-21":
					"Fri May 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-22":
					"Sat May 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-23":
					"Sun May 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-24":
					"Mon May 24 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-16":
					"Sun May 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-15":
					"Sat May 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-14":
					"Fri May 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-13":
					"Thu May 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-12":
					"Wed May 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-11":
					"Tue May 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-10":
					"Mon May 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-26":
					"Mon Apr 26 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-18":
					"Sat Sep 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			missedDays: {
				"2021-05-02":
					"Sun May 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-03":
					"Mon May 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-04":
					"Tue May 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-05":
					"Wed May 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-05-06":
					"Thu May 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-10":
					"Sat Apr 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-01":
					"Thu Apr 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-02":
					"Fri Apr 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-13":
					"Tue Apr 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-15":
					"Thu Apr 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-16":
					"Fri Apr 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-23":
					"Fri Apr 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-22":
					"Thu Apr 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-21":
					"Wed Apr 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-20":
					"Tue Apr 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-19":
					"Mon Apr 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-18":
					"Sun Apr 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-11":
					"Sun Apr 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-08":
					"Thu Apr 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-07":
					"Wed Apr 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-06":
					"Tue Apr 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-29":
					"Thu Apr 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-28":
					"Wed Apr 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-04-30":
					"Fri Apr 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			longestStreak: { num: 120, from: "2021-05-10", to: "2021-09-18" },
			currentStreak: { num: 120, from: "2021-05-10", to: "2021-09-18" },
			completed: false,
			streaks: [
				{ num: 1, from: "2021-04-26", to: "2021-04-26" },
				{ num: 120, from: "2021-05-10", to: "2021-09-18" },
			],
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
			completedDays: {
				"2021-09-04":
					"Sat Sep 04 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-05":
					"Sun Sep 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-12":
					"Sun Sep 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-11":
					"Sat Sep 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-10":
					"Fri Sep 10 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-13":
					"Mon Sep 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-06":
					"Mon Sep 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-07":
					"Tue Sep 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-01":
					"Wed Sep 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-09":
					"Thu Sep 09 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-17":
					"Fri Sep 17 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-14":
					"Tue Sep 14 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-12":
					"Thu Aug 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-13":
					"Fri Aug 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-27":
					"Fri Aug 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-28":
					"Sat Aug 28 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-29":
					"Sun Aug 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-30":
					"Mon Aug 30 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-09-18":
					"Sat Sep 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			missedDays: {
				"2021-08-21":
					"Sat Aug 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-22":
					"Sun Aug 22 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-23":
					"Mon Aug 23 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-15":
					"Sun Aug 15 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-16":
					"Mon Aug 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-20":
					"Fri Aug 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-19":
					"Thu Aug 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
				"2021-08-18":
					"Wed Aug 18 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
			},
			longestStreak: { num: 17, from: "2021-08-27", to: "2021-09-18" },
			currentStreak: { num: 17, from: "2021-08-27", to: "2021-09-18" },
			completed: false,
			streaks: [
				{ num: 2, from: "2021-08-12", to: "2021-08-13" },
				{ num: 17, from: "2021-08-27", to: "2021-09-18" },
			],
		},
	};
}


export default defaultTasks