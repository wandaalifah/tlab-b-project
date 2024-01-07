export function notPhone(value = "") {
    let regex = new RegExp(/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/);
    return regex.test(value)
}
export function notPassword(value = "") {
    let regex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g);
    return regex.test(value)
}