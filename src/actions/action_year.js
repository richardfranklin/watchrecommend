export function actionYearFrom(year) {
    console.log('From ' + year);

    return  {
        type:       `WATCH_YEAR_FROM`,
        payload:    year
    };
}

export function actionYearTo(year) {
    console.log('To ' + year);

    return  {
        type:       `WATCH_YEAR_TO`,
        payload:    year
    };
}
