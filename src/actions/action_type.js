export default function selectType(type) {
    console.log(type + ' selected');

    return  {
        type:       `WATCH_TYPE`,
        payload:    type
    };
}
