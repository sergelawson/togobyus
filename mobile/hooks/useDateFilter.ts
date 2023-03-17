import { useState, useEffect } from "react";

type DateItemType = {
  date: Date;
  day: string;
  weekday: string;
};

const normalizeDate = (dateInMiliseconde: number) => {
  const day = new Date(dateInMiliseconde).getDate();
  const month = new Date(dateInMiliseconde).getMonth();
  const year = new Date(dateInMiliseconde).getFullYear();

  const normalizeDate: Date = new Date(year, month, day);

  return normalizeDate;
};

const makeDate = (dateValue: number) => {
  const dataFormated: DateItemType = {
    date: normalizeDate(dateValue),
    day: normalizeDate(dateValue).toLocaleDateString("fr-FR", {
      day: "numeric",
    }),
    weekday: normalizeDate(dateValue)
      .toLocaleDateString("fr-FR", {
        weekday: "short",
      })
      .replace(".", "")
      .toUpperCase(),
  };

  return dataFormated;
};

const useDateFilter = () => {
  const [dateMode, setDateMode] = useState<"month" | "day">("month");
  const [selectedDate, setSelectedDate] = useState<DateItemType>(
    makeDate(new Date().getTime())
  );
  const [dateList, setDateList] = useState<DateItemType[]>([]);

  const dayInMiliseconde = 1000 * 3600 * 24;

  useEffect(() => {
    getDateList(selectedDate);
  }, []);

  const dateFormatMonth = {
    year: "numeric",
    month: "long",
  };

  const nextDate = () => {
    const lastDayInMiliSec =
      dateList[dateList.length - 1].date.getTime() + dayInMiliseconde;
    const lastDate = makeDate(lastDayInMiliSec);
    setSelectedDate(lastDate);
    getDateList(lastDate);
  };

  const previousDate = () => {
    const firstDateInMiliSec = dateList[0].date.getTime() - dayInMiliseconde;
    const firstDate = makeDate(firstDateInMiliSec);
    setSelectedDate(firstDate);
    getPrevDateList(firstDate);
  };

  const getDateList = (inputDate: DateItemType) => {
    const today = inputDate.date.getTime();

    const daysList: DateItemType[] = [];
    let tempDate = today;
    for (let day = 1; day <= 7; day++) {
      const dataObject: DateItemType = makeDate(tempDate);

      daysList.push(dataObject);
      tempDate += dayInMiliseconde;
    }
    setDateList(daysList);
  };

  const getPrevDateList = (inputDate: DateItemType) => {
    const today = inputDate.date.getTime();

    const daysList: DateItemType[] = [];
    let tempDate = today;
    for (let day = 1; day <= 7; day++) {
      const dataObject: DateItemType = makeDate(tempDate);

      daysList.push(dataObject);
      tempDate -= dayInMiliseconde;
    }
    setDateList(daysList.reverse());
  };

  const getSelectedMonth = () => {
    let formatedMonth = new Date(selectedDate.date)
      .toLocaleDateString("fr-Fr", dateFormatMonth as any)
      .toLocaleUpperCase();

    const firstDateMonth = dateList[0]?.date.getMonth();
    const lastDateMonth = dateList[dateList.length - 1]?.date.getMonth();

    if (dateList.length > 0 && firstDateMonth !== lastDateMonth) {
      const formatedFirstMonth = dateList[0]?.date
        .toLocaleDateString("fr-Fr", { month: "long" })
        .toLocaleUpperCase();

      const formatedLastMonth = dateList[dateList.length - 1]?.date
        .toLocaleDateString("fr-Fr", { month: "long" })
        .toLocaleUpperCase();

      const year = dateList[0].date.getFullYear();

      return `${formatedFirstMonth} - ${formatedLastMonth} ${year}`;
    }

    return formatedMonth;
  };

  return {
    getSelectedMonth,
    setSelectedDate,
    selectedDate,
    dateList,
    nextDate,
    previousDate,
  };
};

export default useDateFilter;
